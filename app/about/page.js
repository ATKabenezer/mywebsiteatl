export default function AboutPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About ATL Technology</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        ATL Technology is a trusted Ethiopian IT solutions provider specializing in cybersecurity,
        enterprise networking, and data center infrastructure.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl border bg-white shadow-soft">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-2 text-slate-700">
            To be the most trusted cybersecurity and enterprise technology partner in Africa.
          </p>
        </div>
        <div className="p-6 rounded-2xl border bg-white shadow-soft">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-2 text-slate-700">
            To empower organizations with secure, innovative, and reliable technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
