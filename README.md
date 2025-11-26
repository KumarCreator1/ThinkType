# ThinkingMode 🧠

**The ultimate stream-of-consciousness typing platform.**

ThinkingMode is a modern, aesthetic typing application designed to help you enter the "Flow State". It prioritizes zero latency, visual feedback, and a distraction-free environment to let your thoughts flow directly onto the screen.

![ThinkingMode Home Page](./src/assets/screenshots/home-preview.png)
*(Note: Add a screenshot here later)*

## 💡 Why ThinkingMode?

### The Problem
Classic typing websites often feel like **tests**. They are stressful, cluttered with distractions, and focus purely on raw speed (WPM) rather than the *quality* of the typing experience. Many suffer from subtle input latency that breaks your immersion.

### The Solution
ThinkingMode is designed for **Flow State**. It solves the disconnect between thought and keystroke by providing a zero-latency, distraction-free environment.

### How We Are Different
- **🚫 No "Test Anxiety"**: Unlike competitive sites, ThinkingMode is a sanctuary for practice. The UI is calming, not alarming.
- **⚡ The "Ghost Engine"**: We built a custom rendering engine from scratch to ensure keystrokes appear on screen the *instant* you press them. No browser lag.
- **🧠 Brain-Computer Connection**: By removing visual clutter and latency, we reduce cognitive load, letting you type at the speed of thought.

## ✨ Features

- **⚡ Zero Latency "Ghost Engine"**: A custom-built typing engine optimized for instant feedback. No lag, just pure speed.
- **🌊 Flow State Design**: Minimalist UI, smooth animations, and a "glassmorphism" aesthetic to keep you focused.
- **📱 Fully Responsive**: Works perfectly on Desktop, Tablet, and Mobile (including iPhone 12 Pro optimizations).
- **📊 Deep Analytics**: Track your WPM, Accuracy, Consistency, and detailed character stats.
- **🎨 Dynamic Theming**: Automatically switches between light (Home) and dark (Practice) modes for the best experience.
- **🛠️ Smart Validation**: Real-time word validation with support for custom dictionaries.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions & Keyframes

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/thinktype.git
    cd thinktype
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```
src/
├── assets/          # Static assets (dictionaries, images)
├── components/      # React components
│   ├── core/        # Core typing engine components (Renderer, Input, Result)
│   ├── dashboard/   # Dashboard and stats components
│   ├── layout/      # Layout components (Navbar, ControlBar)
│   └── pages/       # Page components (LandingPage)
├── hooks/           # Custom hooks (useTypingEngine)
├── lib/             # Utility functions (validator, storage)
├── store/           # Zustand state stores
└── App.tsx          # Main application entry
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
