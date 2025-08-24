'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const linkCls = "text-white/90 hover:text-white transition-colors";
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-atlNavy/95 backdrop-blur border-b border-white/10" : "bg-atlNavy"}`}>
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="ATL" className="w-9 h-9" />
          <span className="font-bold text-white tracking-wide">ATL Technology</span>
        </Link>
        <button className="md:hidden px-3 py-2 border border-white/20 rounded text-white" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav className={`md:flex gap-6 ${open ? "block mt-3" : "hidden md:flex"}`}>
          <Link className={linkCls} href="/about">About</Link>
          <Link className={linkCls} href="/#services">Services</Link>
          <Link className={linkCls} href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
