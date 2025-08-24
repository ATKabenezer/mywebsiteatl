'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/atl-logo.svg" alt="ATL" className="w-8 h-8" />
          <span className="font-bold text-lg tracking-wide">ATL Technology</span>
        </Link>
        <button className="md:hidden px-3 py-2 border rounded" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav className={`md:flex gap-6 ${open ? "block mt-3" : "hidden md:flex"}`}>
          <Link className="hover:text-sky-600" href="/about">About</Link>
          <Link className="hover:text-sky-600" href="/services">Services</Link>
          <Link className="hover:text-sky-600" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
