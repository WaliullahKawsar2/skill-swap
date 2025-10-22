# Skill Swap

## Live URL
[Insert your live project URL here]

---

## Project Purpose
Skill Swap is a modern skill-sharing platform where users can explore, book, and learn various skills from expert providers. Users can register, login, view skill details, and book sessions, all while enjoying a clean, responsive UI built with React, TailwindCSS, and DaisyUI.

---

## Key Features

- **Authentication**
  - User Registration and Login with email & password
  - Google OAuth login integration
  - Password validation with uppercase, lowercase, and minimum 6 characters
  - Show/hide password toggle

- **Skill Listings**
  - Dynamic skill cards with image, rating, price, and “View Details” button
  - Top Rated Providers section
  - Popular Skills section on the homepage
  - Hero Slider using Swiper

- **Skill Details Page**
  - Protected route (redirects to login if not logged in)
  - Shows all skill details including instructor info and slots availability
  - Book a session form with success toast

- **User Profile**
  - Displays user information (name, email, photo)
  - Update profile functionality

- **Extra Homepage Sections**
  - “How It Works”
  - Additional relevant section to enhance UX

- **Other Features**
  - Persistent Navbar & Footer across pages
  - Responsive design with DaisyUI & TailwindCSS
  - Toast notifications using `react-hot-toast`
  - Animated components using `animate.css`

---

## Installation & Setup

1. **Clone the repository:**
```bash
git clone <your-repo-url>
```

2. **Navigate to the project folder:**
```bash
cd skill-swap
```

3. **Install dependencies:**
```bash
npm install
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open the app in your browser:**
```
http://localhost:5173
```

6. **Build for production (optional):**
```bash
npm run build
```

7. **Preview production build (optional):**
```bash
npm run preview
```

---

## Project Structure

```
skill-swap/
├─ public/                # Static files like index.html, favicon, etc.
├─ src/
│  ├─ assets/             # Images and other static assets
│  ├─ components/         # Reusable components (Navbar, Footer, SkillCard, PasswordInput, etc.)
│  ├─ pages/              # Route-based pages (Home, Login, Signup, SkillDetails, Profile, BookSession)
│  ├─ routes/             # React routes for navigating
│  ├─ firebase/           # firebase credentials
│  └─ main.jsx            # Entry point for React
├─ package.json            # Project dependencies and scripts
├─ tailwind.config.js      # TailwindCSS configuration
├─ vite.config.js          # Vite configuration
└─ README.md               # Project documentation
```

---

## NPM Packages Used

- **react-hot-toast** – For toast notifications  
- **swiper** – For Hero slider carousel  
- **animate.css** – For CSS animations  
- **daisyui** – TailwindCSS component library  
- **firebase** – Authentication and user management  
- **react-icons** – For icons (eye toggle, stars, etc.)  
- **tippy.js** – Tooltip functionality  

---

## Notes

- Skill and provider data is stored in JSON and displayed dynamically.
- Booked sessions are stored in `localStorage` for persistent display.
- All pages are responsive and optimized for both desktop and mobile screens.

