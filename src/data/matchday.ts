export type ActivityTag = "С детьми" | "Фото" | "Музыка" | "Призы";
export type ActivityBadge = "До матча" | "Перед стартом" | "В перерывах" | "Весь вечер";

export type Activity = {
  id: string;
  title: string;
  description: string;
  location: string;
  badges: ActivityBadge[];
  tags: ActivityTag[];
  image: string; // path from /public or external url
  startAt?: string; // optional, not displayed
  endAt?: string;   // optional, not displayed
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  badge?: string;
  link?: { label: string; href: string };
};

export const matchday = {
  club: {
    name: "ХК Шанхай Дрэгонс",
    brandUrl: "https://hc-dragons.com/",
  },
  partner: {
    name: "BetBoom",
    url: "https://betboom.ru",
    logoText: "BetBoom", // placeholder
  },
  match: {
    title: "ХК Шанхай Дрэгонс - ХК ЦСКА (Москва)",
    leftMetaLines: ["5 фев. (чт), 19:30", "Континентальная хоккейная лига", "СКА Арена"],
    matchDateIso: "2026-02-05T19:30:00+03:00",
    teams: {
      home: { name: "ХК Шанхай Дрэгонс", logoText: "DRAGONS" },
      away: { name: "ХК ЦСКА (Москва)", logoText: "CSKA (Moskva)" },
    },
    ctaBuy: { label: "Купить билеты", href: "#tickets" },
    ctaHome: { label: "На главную", href: "/" },
  },
  odds: {
    title: "Кэфы на матч",
    p1: 1.4,
    x: 4.43,
    p2: 8.86,
    disclaimer: "Информация носит справочный характер",
    cta: { label: "Перейти на сайт BetBoom", href: "https://betboom.ru" },
  },
  highlight: {
    title: "Imperial Orchestra в чаше",
    badge: "Перед стартом",
    description:
      "Музыкальное вступление, которое задает настроение всей арене. Приходите заранее, чтобы услышать живое исполнение до стартового вбрасывания.",
    image: "/next.svg",
  },
  filters: {
    tags: ["С детьми", "Фото", "Музыка", "Призы"] as ActivityTag[],
    badges: ["До матча", "Перед стартом", "В перерывах", "Весь вечер"] as ActivityBadge[],
  },
  activities: [
    {
      id: "aqua",
      title: "Аквагрим для болельщиков",
      description: "Командные цвета, символы и детали, которые делают образ на матч. Подходит и детям, и взрослым.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["С детьми", "Фото"],
      image: "/window.svg",
    },
    {
      id: "posters",
      title: "Плакаты болельщика",
      description: "Соберите плакат прямо на арене: слоганы, наклейки и яркие маркеры. Лучшие попадут в кадры и на экраны.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["Фото"],
      image: "/file.svg",
    },
    {
      id: "air",
      title: "Аэрогрим",
      description: "Быстро и эффектно. Для тех, кто хочет выделиться на трибуне и поддержать команду ярко.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["Фото"],
      image: "/globe.svg",
    },
    {
      id: "hair",
      title: "Болельщицкие прически",
      description: "Легкий матчевый апгрейд в клубных цветах. Идеально перед фотозоной и выходом на трибуну.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["Фото"],
      image: "/vercel.svg",
    },
    {
      id: "stickers",
      title: "Наклейки для настроения",
      description: "Небольшие, но очень в тему: для одежды, телефона или плаката. Забирайте, пока есть.",
      location: "Фойе стадиона",
      badges: ["Весь вечер"],
      tags: ["Фото"],
      image: "/file.svg",
    },
    {
      id: "gaming",
      title: "Игровая зона",
      description: "Пауза перед матчем, которую приятно провести за игрой. Можно зайти на пару минут или задержаться подольше.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["С детьми"],
      image: "/window.svg",
    },
    {
      id: "wishes",
      title: "Стена пожеланий команде",
      description: "Оставьте сообщение команде: поддержка, пожелания и мотивация. Самые яркие фразы заберем в контент матча.",
      location: "Фойе стадиона",
      badges: ["Весь вечер"],
      tags: ["Фото"],
      image: "/globe.svg",
    },
    {
      id: "photozone",
      title: "Фотозона 5 стихий",
      description: "Место для главных кадров дня. Сделайте фото заранее, чтобы не спешить в перерывах.",
      location: "Фойе стадиона",
      badges: ["Весь вечер"],
      tags: ["Фото"],
      image: "/next.svg",
    },
    {
      id: "kidsroom",
      title: "Детская комната",
      description: "Уютное пространство для маленьких болельщиков, где можно переключиться и отдохнуть от шума трибун.",
      location: "Детская зона",
      badges: ["Весь вечер"],
      tags: ["С детьми"],
      image: "/vercel.svg",
    },
    {
      id: "bookhouse1",
      title: "Дом Книги: мастер-класс Драконы Shanghai Dragons",
      description: "Рисуем, создаем и фантазируем. Отличный план до матча для семей и друзей.",
      location: "Творческая зона",
      badges: ["До матча"],
      tags: ["С детьми"],
      image: "/file.svg",
    },
    {
      id: "bookhouse2",
      title: "Дом Книги: литературные послания болельщикам",
      description: "Короткие послания и пожелания команде и болельщикам. Теплая активность, которая добавляет атмосферы.",
      location: "Творческая зона",
      badges: ["До матча"],
      tags: ["С детьми"],
      image: "/globe.svg",
    },
    {
      id: "quiz",
      title: "Викторины с призами от Дома Книги",
      description: "Вопросы, эмоции и подарки победителям. Участвовать просто: слушайте ведущего и включайтесь вместе с сектором.",
      location: "Фойе стадиона и чаша стадиона",
      badges: ["До матча", "В перерывах"],
      tags: ["Призы"],
      image: "/window.svg",
    },
    {
      id: "dj",
      title: "DJ-сеты",
      description: "Саундтрек матча: разогрев перед игрой и музыкальные включения в ключевые моменты вечера.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["Музыка"],
      image: "/next.svg",
    },
    {
      id: "host",
      title: "Ведущий и интерактивы",
      description: "Короткие включения, чтобы не терять темп: анонсы, конкурсы и матчевое настроение.",
      location: "Фойе стадиона",
      badges: ["До матча"],
      tags: ["Призы"],
      image: "/vercel.svg",
    },
    {
      id: "drummer",
      title: "Выступление барабанщика",
      description: "Мощный перкуссионный заряд, который собирает внимание и поднимает шум на трибунах.",
      location: "Чаша стадиона",
      badges: ["В перерывах"],
      tags: ["Музыка"],
      image: "/globe.svg",
    },
  ] as Activity[],
  offers: [
    {
      id: "family",
      title: "Семейное предложение",
      badge: "Для похода с детьми",
      description:
        "Детям до 6 лет включительно вход бесплатный (без отдельного места). С 7 до 13 лет включительно действует скидка 50% на билет (при покупке со взрослым).",
      link: { label: "Купить билеты", href: "#tickets" },
    },
    {
      id: "freebet",
      title: "Фрибет 10 000",
      badge: "От BetBoom",
      description:
        "Фрибет 10 000 при первой регистрации в клубе BetBoom, а также на сайте betboom.ru и в приложении по промокоду DRAGONS.",
      link: { label: "Перейти на BetBoom", href: "https://betboom.ru" },
    },
  ] as Offer[],
} as const;
