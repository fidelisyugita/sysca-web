# Sysca Anggelia - Multi-Persona Portfolio Platform

A high-performance, visually immersive Single Page Application (SPA) designed to showcase the diverse professional personas of Sysca Anggelia: **Virtual Assistant, HR Specialist, Educator, and Artist**.

This project leverages modern web technologies to deliver a premium, "Clean but Modern" user experience characterized by glassmorphism, vertical parallax scrolling, and gamified interaction.

![Project Preview](/public/hero.webp)

## 🚀 Features

### Core Experience
*   **Vertical Parallax Engine**: Smooth, snap-scrolling sections that guide the user through different professional personas.
*   **Video Backgrounds**: High-quality, optimized WebP video loops create a dynamic and engaging atmosphere without compromising performance.
*   **Glassmorphism UI**: Frosted glass effects (`backdrop-blur`) allow content to remain legible while blending seamlessly with the moving backgrounds.
*   **Smart Navigation**: A vertically fixed dot navigation that tracks scroll position and highlights the active section.

### 📅 Booking System
*   **Custom Calendar UI**: A bespoke booking interface built from scratch (no heavy libraries).
*   **Service Logic**: Filters availability based on service duration (e.g., 60min vs 180min slots).
*   **Seamless Integration**: Accessed via a smooth slide-over modal or deep-linked from the Quiz module.
*   **Firebase Architecture**: Service logic is separated into a `db.ts` layer, ready for real-time Firestore integration.

### 🎮 Gamification (English Proficiency Quiz)
*   **Interactive Quiz Module**: A dedicated `/quiz` route to assess user English levels.
*   **Conversion Funnel**: Users scoring >80% are automatically redirected to the booking flow with the "Advanced English Class" pre-selected.
*   **Animations**: Card-style interface with fluid Framer Motion transitions.

## 🛠 Tech Stack

*   **Frontend Framework**: [React 18](https://reactjs.org/) (TypeScript)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast development and build.
*   **Styling**: 
    *   [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling.
    *   **Google Fonts**: Playfair Display (Headings), Inter (Body), Oswald (Creative).
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) - Complex layout transitions and scroll effects.
*   **Routing**: [React Router](https://reactrouter.com/) - Client-side routing for the Quiz module.
*   **Backend (Ready)**: [Firebase](https://firebase.google.com/) - Configured for Authentication and Firestore.

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── BookingCalendar.tsx  # Custom calendar logic
│   ├── BookingModal.tsx     # Slide-over modal
│   ├── Navigation.tsx       # Smart side-nav
│   ├── ParallaxSection.tsx  # Scroll-snap wrapper
│   └── VideoBackground.tsx  # WebP/Video handler
├── lib/
│   ├── db.ts           # Mock service layer (API simulation)
│   ├── firebase.ts     # Firebase config
│   └── quiz-data.ts    # Gamification content
├── pages/
│   ├── Home.tsx        # Main Landing Page
│   └── Quiz.tsx        # Gamified Experience
└── App.tsx             # Routing & Layout Shell
```

## ⚡️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd sysca-web
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5174` to view the app.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🔮 Future Enhancements

*   **Firebase Integration**: Replace the mock data in `src/lib/db.ts` with actual Firestore queries.
*   **Admin Dashboard**: A private route for managing booking availability.
*   **Payment Gateway**: Stripe integration for securing booking deposits.

---

Designed & Developed with ❤️ for Sysca Anggelia.
