import { IconHelpCircle } from "@tabler/icons-react";
import { Icon } from "lucide-react";

import { useState, useEffect, useMemo, useRef } from "react";

function ToolTipHelp({
  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}) {
    const [showHelp, setShowHelp] = useState(false);
    const handlerTest=()=>{
      setShowHelp(!showHelp);
    }
      useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowHelp(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
  <div className="relative">
    <button
      onClick={() => handlerTest()}
      className="text-sm text-blue-400 hover:text-blue-300"
    >
      <IconHelpCircle />
    </button>

    {showHelp && (
      <div
        className="
          absolute
          right-0
          top-full
          mt-2
          z-50

          w-64
          rounded-xl
          border border-gray-700
          bg-gray-900
          p-4
          text-sm text-gray-300
          shadow-xl
        "
      >
        {content}
      </div>
    )}
  </div>
  );
}

export default ToolTipHelp;

