import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        resume: 'Resume',
        blog: 'Blog',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Hello, I’m',
        role: 'Frontend Developer',
        description: 'Building premium digital experiences with precision and creativity. Specializing in high-end React applications.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me',
      },
      about: {
        title: 'About Me',
        subtitle: 'A brief introduction',
        content: 'I am a passionate Senior Frontend Developer with over 5 years of experience in crafting beautiful, functional, and user-centered digital products. I believe that design and code should work in harmony to create memorable experiences.',
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Completed',
          clients: 'Happy Clients',
        }
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'My stack and tools',
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'A selection of my best work',
        viewLive: 'Live Demo',
        viewCode: 'Source Code',
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let’s talk about your project',
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
      },
      footer: {
        rights: 'All rights reserved.',
        built: 'Built with React + Vite + Tailwind',
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        about: 'Обо мне',
        projects: 'Проекты',
        resume: 'Резюме',
        blog: 'Блог',
        contact: 'Контакты',
      },
      hero: {
        greeting: 'Привет, я',
        role: 'Frontend Разработчик',
        description: 'Создаю премиальные цифровые интерфейсы с точностью и креативностью. Специализируюсь на высококлассных React приложениях.',
        downloadCV: 'Скачать CV',
        contactMe: 'Связаться со мной',
      },
      about: {
        title: 'Обо мне',
        subtitle: 'Краткое введение',
        content: 'Я увлеченный старший фронтенд-разработчик с более чем 5-летним опытом создания красивых, функциональных и ориентированных на пользователя цифровых продуктов. Я верю, что дизайн и код должны работать в гармонии.',
        stats: {
          experience: 'Лет опыта',
          projects: 'Завершенных проектов',
          clients: 'Счастливых клиентов',
        }
      },
      skills: {
        title: 'Технические навыки',
        subtitle: 'Мой стек и инструменты',
      },
      projects: {
        title: 'Избранные проекты',
        subtitle: 'Подборка моих лучших работ',
        viewLive: 'Демо',
        viewCode: 'Исходный код',
      },
      contact: {
        title: 'Связаться',
        subtitle: 'Давайте обсудим ваш проект',
        name: 'Полное имя',
        email: 'Email адрес',
        message: 'Ваше сообщение',
        send: 'Отправить',
        success: 'Сообщение успешно отправлено!',
      },
      footer: {
        rights: 'Все права защищены.',
        built: 'Создано на React + Vite + Tailwind',
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: 'Bosh sahifa',
        about: 'Men haqimda',
        projects: 'Loyihalar',
        resume: 'Rezyume',
        blog: 'Blog',
        contact: 'Aloqa',
      },
      hero: {
        greeting: 'Salom, men',
        role: 'Frontend Dasturchi',
        description: 'Aniq va kreativ yondashuv bilan premium raqamli tajribalarni yarataman. Yuqori darajadagi React ilovalariga ixtisoslashganman.',
        downloadCV: 'CV yuklab olish',
        contactMe: 'Men bilan bog‘lanish',
      },
      about: {
        title: 'Men haqimda',
        subtitle: 'Qisqacha tanishtiruv',
        content: 'Men go‘zal, funksional va foydalanuvchiga yo‘naltirilgan raqamli mahsulotlarni yaratish bo‘yicha 5 yildan ortiq tajribaga ega bo‘lgan Senior Frontend dasturchiman. Dizayn va kod uyg‘unlikda ishlashi kerak deb hisoblayman.',
        stats: {
          experience: 'Yillik tajriba',
          projects: 'Bajarilgan loyihalar',
          clients: 'Mamnun mijozlar',
        }
      },
      skills: {
        title: 'Texnik ko‘nikmalar',
        subtitle: 'Mening stekim va asboblarim',
      },
      projects: {
        title: 'Tanlangan loyihalar',
        subtitle: 'Mening eng yaxshi ishlarim to‘plami',
        viewLive: 'Jonli demo',
        viewCode: 'Manba kodi',
      },
      contact: {
        title: 'Bog‘lanish',
        subtitle: 'Loyihangiz haqida gaplashamiz',
        name: 'To‘liq ism',
        email: 'Email manzili',
        message: 'Xabaringiz',
        send: 'Xabar yuborish',
        success: 'Xabar muvaffaqiyatli yuborildi!',
      },
      footer: {
        rights: 'Barcha huquqlar himoyalangan.',
        built: 'React + Vite + Tailwind yordamida qurilgan',
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
