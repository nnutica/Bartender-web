
'use client';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Member from "./components/member";
import About from "./components/about";
import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Member />
      
      {/* Footer */}
      <footer 
        className="py-16 relative overflow-hidden text-center"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        
            <p 
              className="font-light"
              style={{ color: theme.colors.textSecondary }}
            >
              &copy; 2025 Thai Napa Product. Crafted with passion in Thailand.
            </p>
     
        
      </footer>
    </div>
  );
}
