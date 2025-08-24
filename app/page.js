'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section className="hero-bg">
      <div className="container py-20 md:py-28">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Secure. Reliable. <span className="text-sky-600">ATL Technology</span>.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600">
          We help organizations in Ethiopia design, implement, and operate enterprise-grade
          cybersecurity, networking, and data center solutions.
        </motion.p>
        <div className="mt-10 flex gap-4">
          <Link href="/services" className="px-5 py-3 bg-sky-600 text-white rounded-xl shadow-soft hover:translate-y-[-2px] transition-transform">
            Explore Services
          </Link>
          <Link href="/contact" className="px-5 py-3 border rounded-xl shadow-soft hover:translate-y-[-2px] transition-transform">
            Talk to an Expert
          </Link>
        </div>
      </div>
      <div className="container pb-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Cyber Security Consultation", desc: "Assessments, policies, awareness, and roadmap." },
          { title: "Cybersecurity Solutions", desc: "SIEM, EDR, PAM, DLP, SOC enablement." },
          { title: "Enterprise Network & Security", desc: "Firewalls, VPN, SD-WAN, segmentation." },
        ].map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 * i }}
            className="p-6 rounded-2xl border bg-white shadow-soft">
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="mt-2 text-slate-600">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
