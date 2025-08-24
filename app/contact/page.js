export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <p><strong>Phone:</strong> +251 920 207 346 / +251 910 437 791</p>
          <p><strong>Origin:</strong> Addis Ababa, Ethiopia</p>
          <p className="text-slate-600">We usually respond within 1 business day.</p>
        </div>
        <form action="https://formspree.io/f/xbldjvqy" method="POST" className="space-y-4">
          <input required name="name" placeholder="Your name" className="w-full border rounded-lg px-4 py-3" />
          <input required type="email" name="email" placeholder="Your email" className="w-full border rounded-lg px-4 py-3" />
          <textarea required name="message" placeholder="Your message" rows="5" className="w-full border rounded-lg px-4 py-3" />
          <button className="px-5 py-3 bg-sky-600 text-white rounded-xl shadow-soft" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
