import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Pause, SkipForward, SkipBack,
  Volume2, VolumeX, Music, ChevronDown, ListMusic,
} from 'lucide-react';
import { musicData } from '../data';

const fmt = (t) => {
  if (isNaN(t)) return '0:00';
  return `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
};

const MusicPlayer = () => {
  const [playing, setPlaying]   = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [volume, setVolume]     = useState(0.7);
  const [muted, setMuted]       = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [current, setCurrent]   = useState(0);
  const [duration, setDuration] = useState(0);
  const [playlist, setPlaylist] = useState(false);
  const audioRef = useRef(null);
  const track = musicData[trackIdx];

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  useEffect(() => {
    if (!audioRef.current) return;
    playing
      ? audioRef.current.play().catch(() => {})
      : audioRef.current.pause();
  }, [playing, trackIdx]);

  const next = () => setTrackIdx((p) => (p + 1) % musicData.length);
  const prev = () => setTrackIdx((p) => (p - 1 + musicData.length) % musicData.length);

  return (
    <div style={{
      position: 'fixed', bottom: '1.5rem', right: '1.5rem',
      zIndex: 200, display: 'flex', flexDirection: 'column',
      alignItems: 'flex-end', gap: '0.75rem',
    }}>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              width: 300,
              background: 'rgba(10,10,10,0.92)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '1.5rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              overflow: 'hidden',
            }}
          >
            {/* Cover */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.25rem', textAlign: 'center' }}>
              <motion.div
                key={track.cover}
                initial={{ rotate: -8, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                style={{ width: 120, height: 120, borderRadius: 16, overflow: 'hidden', marginBottom: '0.75rem', border: '2px solid rgba(0,242,255,0.2)' }}
              >
                <img src={track.cover} alt={track.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{track.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: 2 }}>{track.artist}</p>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="range" min="0" max={duration || 0} value={current}
                onChange={(e) => { audioRef.current.currentTime = +e.target.value; setCurrent(+e.target.value); }}
                style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
                <span>{fmt(current)}</span><span>{fmt(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
              <button onClick={prev} style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>
                <SkipBack size={22} />
              </button>
              <button
                onClick={() => setPlaying((p) => !p)}
                style={{ width: 52, height: 52, borderRadius: '50%', background: '#fff', color: '#050505', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
              >
                {playing ? <Pause size={24} fill="#050505" /> : <Play size={24} fill="#050505" style={{ marginLeft: 2 }} />}
              </button>
              <button onClick={next} style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>
                <SkipForward size={22} />
              </button>
            </div>

            {/* Volume + Playlist */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={() => setMuted((m) => !m)} style={{ color: 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <input
                  type="range" min="0" max="1" step="0.01" value={volume}
                  onChange={(e) => setVolume(+e.target.value)}
                  style={{ width: 60, accentColor: 'var(--accent)', cursor: 'pointer' }}
                />
              </div>
              <button
                onClick={() => setPlaylist((p) => !p)}
                style={{ color: playlist ? 'var(--accent)' : 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <ListMusic size={16} />
              </button>
            </div>

            {/* Playlist */}
            <AnimatePresence>
              {playlist && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden', marginTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}
                >
                  <div style={{ maxHeight: 140, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {musicData.map((t, i) => (
                      <button
                        key={t.id}
                        onClick={() => setTrackIdx(i)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.6rem',
                          padding: '0.4rem 0.5rem', borderRadius: 10, border: 'none', cursor: 'pointer',
                          background: i === trackIdx ? 'rgba(255,255,255,0.12)' : 'transparent',
                          transition: 'background 0.2s',
                        }}
                      >
                        <img src={t.cover} alt="" style={{ width: 30, height: 30, borderRadius: 6, objectFit: 'cover' }} />
                        <div style={{ textAlign: 'left', overflow: 'hidden' }}>
                          <p style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.title}</p>
                          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem' }}>{t.artist}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setExpanded((e) => !e)}
        style={{
          width: 52, height: 52, borderRadius: '50%',
          background: 'linear-gradient(135deg, #00f2ff, #0066ff)',
          border: 'none', cursor: 'pointer', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 24px rgba(0,242,255,0.35)',
          position: 'relative',
        }}
      >
        {expanded ? <ChevronDown size={24} /> : <Music size={24} />}
        {playing && (
          <span style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            border: '2px solid rgba(0,242,255,0.4)',
            animation: 'ping 1.2s ease-out infinite',
            pointerEvents: 'none',
          }} />
        )}
      </motion.button>

      <audio
        ref={audioRef}
        src={track.url}
        onTimeUpdate={() => { setCurrent(audioRef.current.currentTime); setDuration(audioRef.current.duration); }}
        onEnded={next}
      />
    </div>
  );
};

export default MusicPlayer;
