'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <section className="bg-atlGold hero-bg">
        <div className="container py-20 md:py-28 text-center">
          <motion.img
            src="/logo.svg"
            alt="ATL Logo"
            className="mx-auto w-24 h-24 md:w-28 md:h-28 drop-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-atlNavy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Secure. Reliable. ATL Technology.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-atlNavy/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Cybersecurity, enterprise networking, and data center solutions for modern Ethiopian organizations.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#services" className="btn btn-primary bg-atlNavy text-white">Explore Our Services</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-atlNavy">Mission</h2>
            <p className="mt-2 text-slate-700">
              To empower organizations with secure, innovative, and reliable technology solutions that reduce risk,
              improve resilience, and accelerate business outcomes.
            </p>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="text-2xl font-bold text-atlNavy">Vision</h2>
            <p className="mt-2 text-slate-700">
              To be the most trusted cybersecurity and enterprise technology partner in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="container py-10 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Cyber Security Consultation", desc: "CSP/SWIFT readiness, policies, awareness & roadmap." },
            { title: "Cybersecurity Solutions", desc: "SIEM, SOAR, EDR/NDR, DLP, PAM & SOC enablement." },
            { title: "Enterprise Network & Security", desc: "NGFW, VPN, SD-WAN, Zero Trust & SASE." },
            { title: "Data Center Facility & Power", desc: "Design & build, power, monitoring & physical security." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="card hover:shadow-glow hover:-translate-y-0.5 transition"
            >
              <h3 className="font-semibold text-lg text-atlNavy">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-atlNavy text-white">
        <div className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <p><strong>Phone:</strong> +251 920 207 346 / +251 910 437 791</p>
              <p><strong>Address:</strong> Addis Ababa, Ethiopia</p>
              <p className="text-white/80">We usually respond within 1 business day.</p>
            </div>
            <form action="https://formspree.io/f/xbldjvqy" method="POST" className="space-y-4">
              <input required name="name" placeholder="Your name" className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-4 py-3" />
              <input required type="email" name="email" placeholder="Your email" className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-4 py-3" />
              <textarea required name="message" placeholder="Your message" rows="5" className="w-full border border-white/20 bg-white/10 text-white placeholder-white/70 rounded-lg px-4 py-3" />
              <button className="btn btn-primary bg-white text-atlNavy" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
