import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle({mini_format}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-accent/20 text-sm"
    >
      {theme === 'dark' ? 
      <SunIcon className={`${mini_format?"h-3 w-3":"h-5 w-5"} text-yellow-400`} />
      : 
      <MoonIcon className={`${mini_format?"h-3 w-3":"h-5 w-5"} text-gray-800`} />}
      
    </button>
  );
}