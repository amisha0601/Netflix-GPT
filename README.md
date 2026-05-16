# 🎬 Netflix GPT

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-orange?style=for-the-badge&logo=firebase)
![TMDB](https://img.shields.io/badge/TMDB-API-01D277?style=for-the-badge)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-black?style=for-the-badge&logo=openai)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

An AI-powered Netflix-inspired movie discovery platform that combines real-time movie data with conversational AI recommendations and personalized browsing experiences.

Instead of relying only on traditional search, users can discover movies naturally through GPT prompts or use a separate recommendation flow using custom filters.

---

## 🎥 Demo

[Watch Project Demo](https://github.com/user-attachments/assets/1d450ea3-536e-4a96-a203-97fed5539d08)

---

## ✨ Features

- AI-powered GPT movie recommendations
- Live TMDB API integration
- Dedicated GPT Search route
- Dedicated Tailor Your Binge route
- Search movies using everyday language
- Personalized recommendation filters
- Firebase authentication
- Protected routes
- Dynamic multilingual support
- Movie details pages
- Responsive design across devices
- Redux Toolkit state management
- Reusable custom hooks
- Optimized rendering with memoization

---

## 🧠 Application Flow

```text
Authentication
      ↓
Browse Homepage
      ↓

 ┌──────────────┴──────────────┐

 ↓                             ↓

GPT Search Route       Tailor Your Binge Route

 ↓                             ↓

AI Movie Suggestions     Genre / Year / Sort Filters

 ↓                             ↓

TMDB Fetches Data      Personalized Movie Results

      ↓

Movie Details Page
```

The application provides two independent movie discovery experiences:

### GPT Search

- User enters prompts in everyday language
- OpenAI generates movie suggestions
- TMDB fetches complete movie details
- Redux stores and manages recommendation data

Examples:

> Suggest emotional Bollywood movies

> Recommend movies similar to Interstellar

---

### Tailor Your Binge

Users can personalize recommendations using:

- Genres
- Sorting options
- Year filters

This creates a separate personalized browsing experience beyond GPT recommendations.

---

## 🛠 Tech Stack

| Category | Technologies |
|-----------|-------------|
| Frontend | React 19, Vite |
| State Management | Redux Toolkit, React Redux |
| Authentication | Firebase Authentication |
| APIs | TMDB API, OpenAI API, Google Generative AI |
| Styling | Tailwind CSS v4, DaisyUI |
| Routing | React Router DOM |
| UI Libraries | Heroicons, Lucide React |
| Deployment | Vercel |

---

## 📸 Screenshots

### Authentication

<img width="1366" height="642" alt="Image" src="https://github.com/user-attachments/assets/c0893acd-643a-46d9-8b62-e3f6fae047d6" />

---

### Browse Homepage

<img width="1350" height="640" alt="Image" src="https://github.com/user-attachments/assets/a06c50c5-c1ee-4063-b883-efe480e57281" />

---

### Multilingual Support

<img width="1356" height="646" alt="Image" src="https://github.com/user-attachments/assets/c97f6a7d-d12a-48e4-88e4-3069143e2e5c" />

---

### Tailor Your Binge

<img width="1353" height="639" alt="Image" src="https://github.com/user-attachments/assets/e91ee3f4-4fb8-41cd-98c8-45aea1cf83a8" />

---

### GPT Movie Recommendations

<img width="1356" height="645" alt="Image" src="https://github.com/user-attachments/assets/f7c75ab9-8135-41e2-a556-0c8f0ababfd3" />

---

## 📁 Project Structure

```bash
src/
├── components/
├── hooks/
├── utils/
│   ├── appStore.js
│   ├── userSlice.js
│   ├── gptSlice.js
│   ├── discoverSlice.js
│   ├── configSlice.js
│   ├── firebase.js
│   └── constants.js
│
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔐 Authentication Flow

- User registration with Firebase Authentication
- Sign In / Sign Up functionality
- User profile creation with avatar support
- Authentication persistence
- Protected routes
- Sign out functionality

---

## ⚙️ Getting Started

Clone repository:

```bash
git clone https://github.com/amisha0601/Netflix-GPT.git
```

Move into project:

```bash
cd Netflix-GPT
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

---

## 📚 Key Learnings

Through this project I gained practical experience with:

- Integrating AI into frontend applications
- Managing complex application state using Redux Toolkit
- Building authentication systems with Firebase
- Creating reusable component architecture
- Designing multilingual interfaces
- Working with API-driven UI workflows
- Performance optimization using memoization
- Structuring scalable frontend applications

---

## 👩‍💻 Author

**Amisha Singh**

GitHub: https://github.com/amisha0601

LinkedIn: https://www.linkedin.com/in/amisha-singh-896b04398/
