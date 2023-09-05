"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ButtonTheme = () => {
  const [
    mounted,
    setMounted,
  ] = useState(false);

  const {
    theme,
    setTheme,
  } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted ? (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="p-0.5">
          {
            theme === "dark" ? (
              <FaMoon
                className="text-sky-300"
                size={20}
              />
            ) : (
              <FaSun
                className="text-amber-500"
                size={20}
              />
            )
          }
        </div>
      </button>
    ): (
      <div>
        <div className="w-6 h-6"></div>
      </div>
    )
  );
};

export default ButtonTheme;