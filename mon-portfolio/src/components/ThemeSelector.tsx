import { useTheme } from '../context/ThemeContext';

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-[300px] h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 p-1">
      <div
        className={`
          absolute h-10 w-[94px] rounded-full transition-all duration-500
          ${theme === 'colorful' && 'left-1 bg-gradient-to-r from-rose-500 to-orange-500'}
          ${theme === 'futuristic' && 'left-[100px] bg-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.5)]'}
          ${theme === 'professional' && 'left-[200px] bg-neutral-900 border border-neutral-700'}
        `}
      />
      
      <div className="relative flex justify-between h-full">
        <button
          onClick={() => setTheme('colorful')}
          className={`
            flex-1 rounded-full flex items-center justify-center transition-colors
            ${theme === 'colorful' ? 'text-white' : 'text-gray-400'}
          `}
        >
          <span className="text-sm font-medium">Color</span>
        </button>

        <button
          onClick={() => setTheme('futuristic')}
          className={`
            flex-1 rounded-full flex items-center justify-center transition-colors
            ${theme === 'futuristic' ? 'text-cyan-300' : 'text-gray-400'}
          `}
        >
          <span className="text-sm font-medium">Futur</span>
        </button>

        <button
          onClick={() => setTheme('professional')}
          className={`
            flex-1 rounded-full flex items-center justify-center
            ${theme === 'professional' ? 'text-neutral-200' : 'text-gray-400'}
          `}
        >
          <span className="text-sm font-medium">Pro</span>
        </button>
      </div>
    </div>
  );
}; 