export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ATL Technology. All rights reserved.</p>
        <p className="opacity-70">Addis Ababa, Ethiopia · +251 920 207 346 · +251 910 437 791</p>
      </div>
    </footer>
  );
}
