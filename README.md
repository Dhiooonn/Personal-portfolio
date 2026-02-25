# Personal Portfolio

A modern, minimalist personal portfolio website built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Deploy

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
Personal-portfolio/
├── data/
│   └── projects.json              # Project data for portfolio
├── public/
│   ├── asset/
│   │   └── butterfly.json         # Lottie animation assets
│   └── images/                    # Static images
├── rag-data/
│   ├── about.txt
│   ├── contact.txt
│   ├── harga.txt
│   ├── projects.txt
│   ├── services.txt
│   └── skills.txt
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts       # Chat API endpoint
│   │   ├── components/
│   │   │   ├── Animasi/
│   │   │   │   └── FadeInWhenVisible.tsx
│   │   │   ├── BtnLihatSelengkapnya.tsx
│   │   │   ├── customerService.tsx
│   │   │   ├── ExperienceItem.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── icons.tsx
│   │   │   ├── LottieFiles.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── Skill.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── types/
│   │   └── project.ts             # TypeScript type definitions
│   └── utils/
│       ├── embed.ts
│       ├── gemini.ts              # Gemini AI integration
│       └── search.ts
├── eslint.config.mjs
├── next.config.js
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: [Fredoka](https://fonts.google.com/specimen/Fredoka), [Poppins](https://fonts.google.com/specimen/Poppins)
- **Animations**: [Lottie](https://lottiefiles.com/)
- **AI**: [Google Gemini API](https://ai.google.dev/)

## 📝 Features

- Minimalist design with smooth animations
- AI-powered chat integration
- Project showcase with RAG-based data
- Experience timeline
- Responsive design
- Type-safe TypeScript configuration

## 📦 Dependencies

- `next`: ^14.2.35
- `react`: ^18
- `tailwindcss`: Latest
- `typescript`: ^5

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.
