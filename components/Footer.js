export default function Footer() {
  return (
    <footer className="bg-atlNavy text-white mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="ATL" className="w-8 h-8" />
          <p className="font-semibold">ATL Technology</p>
        </div>
        <p className="text-white/80 text-sm">
          Addis Ababa, Ethiopia · +251 920 207 346 · +251 910 437 791
        </p>
        <p className="text-white/60 text-xs">© {new Date().getFullYear()} ATL Technology</p>
      </div>
    </footer>
  );
}
