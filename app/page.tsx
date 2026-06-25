"use client";

import { useEffect, useState, type ReactNode } from "react";

const DISCORD_URL = "https://discord.gg/MndwAACJQx";
const ADMIN_URL = "https://admin.day-grid.app";

type Language = "ru" | "en";

const languageLabels: Record<Language, string> = {
  ru: "RU",
  en: "EN",
};

const content = {
  ru: {
    nav: [
      { href: "#why", label: "Зачем это" },
      { href: "#how", label: "Как работает" },
      { href: "#easy", label: "Просто" },
      { href: "#benefits", label: "Что получишь" },
      { href: "#audience", label: "Для кого" },
    ],
    buttons: {
      connect: "Подключить",
      connectDayGrid: "Подключить DayGrid",
      learnMore: "Узнать больше",
      adminPanel: "Админ-панель",
      discord: "Discord",
    },
    hero: {
      badge: "Музыка прямо в твоём DayZ-сервере",
      titlePrefix: "Музыка в твоём",
      titleAccent: "DayZ-сервере",
      text: "DayGrid превращает обычный DayZ-сервер в место с живой атмосферой: игроки слушают музыку прямо в игре, садясь в машины. Это не просто фоновый звук — это эмоция, которая выделяет твой сервер среди сотен одинаковых.",
      tagline: "Музыка, атмосфера и индивидуальность твоего сервера",
    },
    why: {
      eyebrow: "Зачем это",
      title: "Зачем это твоему серверу",
      cards: [
        {
          icon: "🎯",
          title: "Больше атмосферы",
          text: "Поездка по карте под собственный саундтрек запоминается надолго.",
        },
        {
          icon: "🔥",
          title: "Уникальность",
          text: "Свой набор музыки, которого нет у других серверов.",
        },
        {
          icon: "🕹️",
          title: "Вовлечённость",
          text: "Игроки задерживаются дольше и возвращаются чаще.",
        },
        {
          icon: "🎁",
          title: "Монетизация и награды",
          text: "Особые предметы в игре разблокируют плейлисты — выдавай доступ как приятный бонус.",
        },
      ],
    },
    how: {
      eyebrow: "Как работает",
      title: "3 простых части",
      subtitle:
        "DayGrid состоит из трёх частей, которые работают вместе. Тебе не нужно ничего программировать.",
      steps: [
        {
          icon: "🎛️",
          title: "Личный кабинет",
          subtitle: "онлайн-панель",
          text: "Удобная веб-панель, где ты управляешь всем в одном месте: добавляешь музыку, собираешь плейлисты и решаешь, кому из игроков что доступно. Всё через браузер, без сложных настроек.",
        },
        {
          icon: "🎼",
          title: "Программа для музыки",
          subtitle: "подготовка треков",
          text: "Простое приложение, куда ты просто перетаскиваешь свои MP3-файлы. Программа сама готовит музыку в нужном виде — тебе остаётся только выбрать треки.",
        },
        {
          icon: "🚗",
          title: "Плеер в игре",
          subtitle: "дополнение для сервера",
          text: "Готовое дополнение для сервера: игроки садятся в машину и слушают музыку прямо в DayZ, переключая треки парой клавиш.",
        },
      ],
    },
    easy: {
      eyebrow: "Проще не бывает",
      title: "Пользоваться — легко",
      subtitle:
        "Тебе не нужно ничего программировать. Три шага — и музыка уже в игре.",
      steps: [
        {
          number: "1",
          icon: "🎵",
          title: "Перетащи свои MP3",
          text: "Просто бросаешь треки в программу — она сама подготовит музыку в нужном формате.",
        },
        {
          number: "2",
          icon: "🧩",
          title: "Собери плейлист",
          text: "В пару кликов в онлайн-панели составляешь плейлисты под настроение и события сервера.",
        },
        {
          number: "3",
          icon: "✨",
          title: "Раздай игрокам",
          text: "Выбираешь, кому и что доступно — и музыка уже звучит в игре. Никакого кода.",
        },
      ],
      panelEyebrow: "Без головной боли",
      panelTitle: "Очень просто",
      points: [
        "Без навыков программирования",
        "Всё через браузер",
        "Изменения без перезагрузки сервера",
        "Установка за несколько минут",
      ],
      note: "Загрузил треки, собрал плейлист, выдал игрокам — готово. Всё остальное DayGrid берёт на себя.",
    },
    benefits: {
      eyebrow: "Что получишь",
      title: "Что получаешь в итоге",
      items: [
        "Своя музыка в игре — столько треков, сколько захочешь",
        "Гибкие плейлисты под настроение и события сервера",
        "Возможность выдавать музыку отдельным игрокам как награду",
        "Особые предметы в игре, которые разблокируют плейлисты",
        "Создание плейлистов и настройка треков — без перезагрузки сервера",
        "Полный контроль из одной онлайн-панели",
        "Простая установка — без навыков программирования",
      ],
    },
    audience: {
      eyebrow: "Для кого",
      title: "Владельцам и администраторам DayZ-серверов",
      text: "Тем, кто хочет выделиться, удержать игроков и добавить серверу характер.",
    },
    finalCta: {
      quote:
        "DayGrid — это музыка, атмосфера и индивидуальность твоего DayZ-сервера. Загрузи свои треки, собери плейлисты и подари игрокам впечатления, ради которых они будут возвращаться. 🎶",
      hint: "Присоединяйся к нам в Discord",
    },
    footer: {
      text: "Музыка для твоего DayZ-сервера.",
    },
  },
  en: {
    nav: [
      { href: "#why", label: "Why" },
      { href: "#how", label: "How it works" },
      { href: "#easy", label: "Easy" },
      { href: "#benefits", label: "Benefits" },
      { href: "#audience", label: "For whom" },
    ],
    buttons: {
      connect: "Connect",
      connectDayGrid: "Connect DayGrid",
      learnMore: "Learn more",
      adminPanel: "Admin panel",
      discord: "Discord",
    },
    hero: {
      badge: "Music directly inside your DayZ server",
      titlePrefix: "Music for your",
      titleAccent: "DayZ server",
      text: "DayGrid turns an ordinary DayZ server into a place with a living atmosphere: players listen to music right in-game when they get into vehicles. It is not just background sound — it is an emotion that makes your server stand out from hundreds of similar ones.",
      tagline: "Music, atmosphere, and identity for your server",
    },
    why: {
      eyebrow: "Why it matters",
      title: "Why your server needs it",
      cards: [
        {
          icon: "🎯",
          title: "More atmosphere",
          text: "Driving across the map with a custom soundtrack becomes something players remember.",
        },
        {
          icon: "🔥",
          title: "Uniqueness",
          text: "Use your own music collection that no other server has.",
        },
        {
          icon: "🕹️",
          title: "Engagement",
          text: "Players stay longer, interact more, and have a stronger reason to come back.",
        },
        {
          icon: "🎁",
          title: "Rewards and monetization",
          text: "Special in-game items can unlock playlists, letting you give music access as a bonus.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "3 simple parts",
      subtitle:
        "DayGrid is made of three parts that work together. You do not need to write code.",
      steps: [
        {
          icon: "🎛️",
          title: "Dashboard",
          subtitle: "online panel",
          text: "A convenient web panel where you manage everything in one place: add music, build playlists, and decide which players get access. All in the browser, without complex setup.",
        },
        {
          icon: "🎼",
          title: "Music preparation app",
          subtitle: "track processing",
          text: "A simple app where you drag and drop your MP3 files. It prepares the music in the required format automatically, so you only need to choose the tracks.",
        },
        {
          icon: "🚗",
          title: "In-game player",
          subtitle: "server add-on",
          text: "A ready-to-use server add-on: players get into a vehicle and listen to music directly in DayZ, switching tracks with a few keys.",
        },
      ],
    },
    easy: {
      eyebrow: "As simple as it gets",
      title: "Easy to use",
      subtitle:
        "No programming required. Three steps — and the music is already in-game.",
      steps: [
        {
          number: "1",
          icon: "🎵",
          title: "Drop in your MP3s",
          text: "Just add tracks to the app — it prepares the music in the right format automatically.",
        },
        {
          number: "2",
          icon: "🧩",
          title: "Build a playlist",
          text: "Create playlists for moods, events, and server roles in just a few clicks.",
        },
        {
          number: "3",
          icon: "✨",
          title: "Give access to players",
          text: "Choose who gets what, and the music is live in-game. No coding needed.",
        },
      ],
      panelEyebrow: "No headache",
      panelTitle: "Very simple",
      points: [
        "No programming skills required",
        "Everything works through the browser",
        "Changes without server restart",
        "Setup takes just a few minutes",
      ],
      note: "Upload tracks, build a playlist, give it to players — done. DayGrid handles the rest.",
    },
    benefits: {
      eyebrow: "What you get",
      title: "What you get in the end",
      items: [
        "Your own music in-game — as many tracks as you want",
        "Flexible playlists for moods and server events",
        "Music access for individual players as a reward",
        "Special in-game items that unlock playlists",
        "Create playlists and configure tracks without restarting the server",
        "Full control from one online dashboard",
        "Simple installation — no programming skills required",
      ],
    },
    audience: {
      eyebrow: "For whom",
      title: "DayZ server owners and administrators",
      text: "For those who want to stand out, retain players, and give their server a stronger identity.",
    },
    finalCta: {
      quote:
        "DayGrid is music, atmosphere, and identity for your DayZ server. Upload your tracks, build playlists, and give players experiences that make them come back. 🎶",
      hint: "Join us on Discord",
    },
    footer: {
      text: "Music for your DayZ server.",
    },
  },
} satisfies Record<Language, {
  nav: { href: string; label: string }[];
  buttons: {
    connect: string;
    connectDayGrid: string;
    learnMore: string;
    adminPanel: string;
    discord: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    text: string;
    tagline: string;
  };
  why: {
    eyebrow: string;
    title: string;
    cards: { icon: string; title: string; text: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { icon: string; title: string; subtitle: string; text: string }[];
  };
  easy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { number: string; icon: string; title: string; text: string }[];
    panelEyebrow: string;
    panelTitle: string;
    points: string[];
    note: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  audience: {
    eyebrow: string;
    title: string;
    text: string;
  };
  finalCta: {
    quote: string;
    hint: string;
  };
  footer: {
    text: string;
  };
}>;

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.2.36-.43.844-.59 1.23a18.27 18.27 0 0 0-5.937 0A12.6 12.6 0 0 0 9.44 3a19.74 19.74 0 0 0-3.76 1.37C2.26 9.46 1.33 14.43 1.8 19.33a19.93 19.93 0 0 0 6.06 3.07c.49-.67.93-1.38 1.3-2.13a13 13 0 0 1-2.05-.99c.17-.13.34-.26.5-.4a14.25 14.25 0 0 0 12.18 0c.17.14.34.27.5.4-.65.39-1.34.72-2.05.99.37.75.81 1.46 1.3 2.13a19.9 19.9 0 0 0 6.06-3.07c.55-5.66-.94-10.59-3.5-14.96ZM8.52 16.33c-1.18 0-2.15-1.09-2.15-2.42 0-1.34.95-2.42 2.15-2.42 1.21 0 2.18 1.09 2.16 2.42 0 1.33-.95 2.42-2.16 2.42Zm6.96 0c-1.18 0-2.15-1.09-2.15-2.42 0-1.34.95-2.42 2.15-2.42 1.21 0 2.18 1.09 2.16 2.42 0 1.33-.95 2.42-2.16 2.42Z" />
    </svg>
  );
}

function DiscordButton({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-7 text-base font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-accent text-black shadow-[0_0_0_0_rgba(240,180,41,0.5)] hover:bg-accent-strong hover:shadow-[0_8px_30px_-6px_rgba(240,180,41,0.6)] hover:-translate-y-0.5"
      : "border border-border-subtle bg-surface/60 text-foreground hover:border-accent/60 hover:bg-surface-2";
  return (
    <a
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      <DiscordIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      className="flex rounded-full border border-border-subtle bg-surface/60 p-1"
      aria-label={language === "ru" ? "Переключение языка" : "Language switcher"}
    >
      {(["ru", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          className={`h-8 rounded-full px-3 text-xs font-bold transition-colors ${
            language === lang
              ? "bg-accent text-black"
              : "text-muted hover:text-foreground"
          }`}
          aria-pressed={language === lang}
        >
          {languageLabels[lang]}
        </button>
      ))}
    </div>
  );
}

function Header({
  t,
  language,
  onLanguageChange,
}: {
  t: (typeof content)[Language];
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-strong text-black shadow-[0_4px_14px_-2px_rgba(240,180,41,0.5)]">
            🎶
          </span>
          DayGrid
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher language={language} onChange={onLanguageChange} />
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-black transition-all hover:bg-accent-strong hover:shadow-[0_6px_20px_-6px_rgba(240,180,41,0.7)] sm:inline-flex"
          >
            <DiscordIcon className="h-4 w-4" />
            {t.buttons.connect}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }: { t: (typeof content)[Language] }) {
  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden px-5 pt-20 pb-24 text-center md:pt-28 md:pb-32"
    >
      <div className="glow-blob pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="glow-blob pointer-events-none absolute top-10 right-0 -z-10 h-64 w-64 rounded-full bg-glow/20 blur-3xl [animation-delay:2s]" />

      <span className="fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {t.hero.badge}
      </span>

      <h1 className="fade-up max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:0.05s] sm:text-5xl md:text-7xl">
        {t.hero.titlePrefix}{" "}
        <span className="text-shimmer bg-gradient-to-r from-accent-strong via-accent to-glow bg-clip-text text-transparent">
          {t.hero.titleAccent}
        </span>{" "}
        🎶
      </h1>

      <p className="fade-up mt-6 max-w-2xl text-lg leading-8 text-muted [animation-delay:0.1s]">
        {t.hero.text}
      </p>

      <div className="fade-up mt-9 flex flex-col gap-3 [animation-delay:0.15s] sm:flex-row">
        <DiscordButton>{t.buttons.connectDayGrid}</DiscordButton>
        <a
          href="#how"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-7 text-base font-semibold text-foreground transition-colors hover:border-accent/60 hover:bg-surface-2"
        >
          {t.buttons.learnMore}
        </a>
      </div>

      <p className="fade-up mt-12 text-sm text-muted [animation-delay:0.2s]">
        {t.hero.tagline}
      </p>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

function WhyBlock({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="why" className="mx-auto w-full max-w-6xl px-5 py-20">
      <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.why.cards.map((reason) => (
          <div
            key={reason.title}
            className="gradient-border group rounded-2xl border border-border-subtle bg-surface/70 p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl transition-transform duration-300 group-hover:scale-110">
              {reason.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
            <p className="text-sm leading-6 text-muted">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow={t.how.eyebrow}
        title={t.how.title}
        subtitle={t.how.subtitle}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {t.how.steps.map((step, index) => (
          <div
            key={step.title}
            className="gradient-border group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface/70 p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-colors duration-300 group-hover:bg-accent/15" />
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">
                {step.icon}
              </span>
              <span className="bg-gradient-to-b from-foreground/15 to-transparent bg-clip-text text-5xl font-extrabold text-transparent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm font-medium text-accent">
              {step.subtitle}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EasyToUse({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="easy" className="mx-auto w-full max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow={t.easy.eyebrow}
        title={t.easy.title}
        subtitle={t.easy.subtitle}
      />
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          {t.easy.steps.map((step) => (
            <div
              key={step.number}
              className="gradient-border group flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface/70 p-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-strong text-lg font-bold text-black">
                {step.number}
              </span>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-xl">{step.icon}</span>
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gradient-border relative flex flex-col justify-center overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-b from-surface-2 to-surface p-8 sm:p-10">
          <div className="glow-blob pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent/12 blur-3xl" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.easy.panelEyebrow}
          </p>
          <h3 className="relative mt-3 text-2xl font-bold leading-snug sm:text-3xl">
            {t.easy.panelTitle}
          </h3>
          <ul className="relative mt-6 grid gap-3">
            {t.easy.points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-sm font-bold text-black">
                  ✓
                </span>
                <span className="text-base leading-7">{point}</span>
              </li>
            ))}
          </ul>
          <p className="relative mt-7 rounded-xl border border-border-subtle bg-surface/60 px-4 py-3 text-sm leading-6 text-muted">
            {t.easy.note}
          </p>
        </div>
      </div>
    </section>
  );
}

function Benefits({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="benefits" className="mx-auto w-full max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow={t.benefits.eyebrow}
        title={t.benefits.title}
      />
      <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {t.benefits.items.map((benefit, i) => (
          <li
            key={benefit}
            className={`gradient-border flex items-start gap-4 rounded-xl border border-border-subtle bg-surface/60 px-5 py-4 ${
              i === t.benefits.items.length - 1 &&
              t.benefits.items.length % 2 === 1
                ? "sm:col-span-2"
                : ""
            }`}
          >
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-sm font-bold text-black">
              ✓
            </span>
            <span className="text-base leading-7">{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Audience({ t }: { t: (typeof content)[Language] }) {
  return (
    <section id="audience" className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="gradient-border relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-b from-surface-2 to-surface p-10 text-center">
        <div className="glow-blob pointer-events-none absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-glow/15 blur-3xl" />
        <div className="relative mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-surface text-3xl">
          🛠️
        </div>
        <p className="relative mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {t.audience.eyebrow}
        </p>
        <h2 className="relative text-2xl font-bold sm:text-3xl">
          {t.audience.title}
        </h2>
        <p className="relative mt-4 text-base leading-7 text-muted">
          {t.audience.text}
        </p>
      </div>
    </section>
  );
}

function FinalCta({ t }: { t: (typeof content)[Language] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="gradient-border relative overflow-hidden rounded-3xl border border-border-subtle bg-surface/70 p-10 text-center md:p-16">
        <div className="glow-blob pointer-events-none absolute inset-x-0 -top-20 mx-auto h-56 w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-glow/10" />
        <blockquote className="relative mx-auto max-w-3xl text-xl font-medium leading-9 sm:text-2xl">
          {t.finalCta.quote}
        </blockquote>
        <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DiscordButton>{t.buttons.connectDayGrid}</DiscordButton>
          <span className="text-sm text-muted">
            {t.finalCta.hint}
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: (typeof content)[Language] }) {
  return (
    <footer className="border-t border-border-subtle/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent to-accent-strong text-black">
            🎶
          </span>
          DayGrid
        </div>
        <p>
          © {new Date().getFullYear()} DayGrid. {t.footer.text}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={ADMIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">🎛️</span>
            {t.buttons.adminPanel}
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <DiscordIcon className="h-4 w-4" />
            {t.buttons.discord}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("daygrid-language");
    if (savedLanguage === "ru" || savedLanguage === "en") {
      window.requestAnimationFrame(() => setLanguage(savedLanguage));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("daygrid-language", language);
  }, [language]);

  const t = content[language];

  return (
    <div className="flex flex-1 flex-col" lang={language}>
      <Header
        t={t}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="flex-1">
        <Hero t={t} />
        <WhyBlock t={t} />
        <HowItWorks t={t} />
        <EasyToUse t={t} />
        <Benefits t={t} />
        <Audience t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
