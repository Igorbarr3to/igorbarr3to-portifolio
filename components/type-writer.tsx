// components/Typewriter.tsx
'use client'; // se estiver usando App Router

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Typewriter() {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    typed.current = new Typed(el.current!, {
      strings: ['&lt;igorbarr3to /&gt;'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      style={{
        fontFamily: 'var(--font-jetbrains-mono)',
        fontSize: '24px',
        borderRight: '2px solid black',
        whiteSpace: 'nowrap',
        display: 'inline-block',
      }}
    />
  );
}
