import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
    console.log('Theme toggled to:', theme === 'basic' ? 'futuristic' : 'basic'); // Pour déboguer
  };

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        <span>{theme === 'basic' ? '🚀' : '⚫'}</span>
        <span className="text-foreground">Style {theme === 'basic' ? 'Futuriste' : 'Basic'}</span>
      </button>
    </div>
  );
}