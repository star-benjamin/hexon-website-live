import { Sun, Moon } from 'lucide-react';


interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-amber-600 dark:text-amber-500 transition-all hover:scale-110 active:scale-90 border border-transparent dark:border-gray-700 shadow-sm"
      aria-label="Toggle Theme"
    >
      
      {darkMode ? (
        <Sun size={20} className="animate-pulse" />
      ) : (
        <Moon size={20} className="text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;