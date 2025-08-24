export default function ServicesPage() {
  const services = [
    { title: "Cyber Security Consultation", bullets: [
      "CSP/SWIFT readiness and compliance",
      "Policies, procedures, and awareness programs",
      "Risk assessments and security roadmap"
    ]},
    { title: "Cybersecurity Solutions", bullets: [
      "SIEM, SOAR, EDR/NDR, DLP implementation",
      "Privileged Access Management (PAM)",
      "Vulnerability management & hardening"
    ]},
    { title: "Enterprise Network & Security", bullets: [
      "Next-Gen Firewalls, VPN, SD-WAN",
      "Segmentation and Zero Trust architecture",
      "Secure remote access and SASE"
    ]},
    { title: "Data Center Facility & Power", bullets: [
      "Design & build, rack & power planning",
      "Redundant UPS and power distribution",
      "Environmental monitoring & physical security"
    ]},
  ];

  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl border bg-white shadow-soft">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
