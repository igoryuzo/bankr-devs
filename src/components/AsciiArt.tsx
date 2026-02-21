"use client";

import { useEffect, useState } from "react";

const ASCII_FRAMES = [
  `
    x0000000000000000000000000000000000000000000000x
    00                                            00
    00    xx00xxxxxxxxxxxxxxxxxxxxxxxxx00xx        00
    00      00x                     x00           00
    00    00                          x0          00
    00    0x                          x0x         00
    00    0x                          x0x         00
    00    0x      xxxx      xxxx      x0x         00
    00    0x      000x      x000      x0x         00
    00    0x      000x      x000      x0x         00
    00    0x                          x0x         00
    00    0x                          x0x         00
    00    0x     x0          0x       x0x         00
    00    0x       x0      x0         x0x         00
    00    0x        000000000000      x0x         00
    00    0x                          x0x         00
    00    0x                        x0            00
    00      x0x                   x0x             00
    00        x0xxxxxxxxxxxxxxxx0xx               00
    00          xxxxxxxxxxxxxxxx                  00
    00                                            00
    00xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx00
    00xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx00
    00      xxxxxxx                               00
    00                                            00
    0000000000000000000000000000000000000000000000000
      x0000000000000000000000000000000000000000000x`,
];

export default function AsciiArt() {
  const [visible, setVisible] = useState(false);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    setVisible(true);

    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 4000 + Math.random() * 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const glitchLine = (line: string) => {
    if (!glitching) return line;
    const chars = line.split("");
    const numGlitches = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numGlitches; i++) {
      const pos = Math.floor(Math.random() * chars.length);
      const glitchChars = "█▓▒░╠╗╚╝";
      chars[pos] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
    return chars.join("");
  };

  return (
    <div
      className={`transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <pre
        className="text-text-secondary leading-[1.15] select-none"
        style={{ fontSize: "clamp(0.35rem, 1.1vw, 0.7rem)" }}
      >
        {ASCII_FRAMES[0].split("\n").map((line, i) => (
          <div
            key={i}
            className={`${glitching && Math.random() > 0.7 ? "text-accent" : ""}`}
            style={{
              transform: glitching && Math.random() > 0.85 ? `translateX(${Math.random() * 4 - 2}px)` : "none",
            }}
          >
            {glitchLine(line)}
          </div>
        ))}
      </pre>
    </div>
  );
}
