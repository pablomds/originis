// DropdownButton.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
  id: string;
  label: string;
}

interface DropdownButtonProps {
  options: DropdownOption[];
  defaultOption?: string;
  onSelect?: (optionId: string) => void;
  buttonLabel?: string;
  className?: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  options,
  defaultOption,
  onSelect,
  buttonLabel = "Select Option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find(option => option.id === selectedOption)?.label || buttonLabel;

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setIsOpen(false);
    if (onSelect) {
      onSelect(optionId);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-between items-center w-full rounded-md border border-slate-200 shadow-sm px-[14px] py-[5px] bg-white text-sm font-medium text-black hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedLabel}
        <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option) => (
              <button
                key={option.id}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedOption === option.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => handleSelect(option.id)}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;