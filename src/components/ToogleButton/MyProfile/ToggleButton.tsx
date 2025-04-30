import { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center select-none">
      <button
        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer ${
          isOn ? "bg-black" : "bg-gray-400"
        }`}
        onClick={() => setIsOn(!isOn)}
        type="button"
        role="switch"
        aria-checked={isOn}
      >
        <span className="sr-only">Toggle</span>
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
            isOn ? "translate-x-9" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}