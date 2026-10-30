import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kopi Nusantara — Kopi Asli Indonesia" },
      { name: "description", content: "Kopi Nusantara: kedai kopi dengan biji pilihan dari seluruh Nusantara. Pesan langsung via WhatsApp." },
      { property: "og:title", content: "Kopi Nusantara — Kopi Asli Indonesia" },
      { property: "og:description", content: "Biji kopi pilihan dari Gayo hingga Toraja. Pesan via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Nomor WhatsApp contoh — ganti dengan nomor asli
const WA = "https://wa.me/6281234567890?text=" + encodeURIComponent("Halo Kopi Nusantara, saya ingin memesan kopi.");

const testimonials = [
  { name: "Rina Kusuma", text: "Kopi Gayo-nya luar biasa harum. Tempatnya hangat, cocok untuk kerja seharian." },
  { name: "Budi Santoso", text: "Kopi susu gula aren terbaik yang pernah saya coba. Pesan via WhatsApp juga cepat!" },
  { name: "Dewi Lestari", text: "Baristanya ramah dan paham betul soal kopi. Manual brew Toraja wajib dicoba." },
];

function WaButton({ className = "" }: { className?: string }) {
  return (
    <a href={WA} target="_blank" rel="noreferrer" className={`btn-wa ${className}`}>
      Order via WhatsApp
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-cream">
        <span className="font-display text-2xl">Kopi Nusantara</span>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#tentang">Tentang</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src={hero} alt="Secangkir kopi tubruk" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 text-cream">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-caramel">Sejak 2015</p>
          <h1 className="font-display max-w-2xl text-5xl leading-tight md:text-7xl">Secangkir cerita dari tanah Nusantara.</h1>
          <p className="mt-6 max-w-lg text-lg text-cream/80">Biji kopi pilihan dari Gayo, Toraja, hingga Flores — disangrai segar dan diseduh dengan hati.</p>
          <WaButton className="mt-10" />
        </div>
      </section>

      <section id="tentang" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={about} alt="Barista menyeduh kopi" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-warm" />
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-caramel">Tentang Kami</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">Dari petani lokal, untuk Anda.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Kopi Nusantara lahir dari kecintaan pada kekayaan kopi Indonesia. Kami bekerja langsung dengan petani di berbagai daerah, memastikan setiap biji diproses dengan adil dan berkualitas.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Di kedai kami, setiap cangkir adalah perjalanan rasa — dari espresso yang tegas hingga manual brew yang lembut.</p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[["12+", "Asal biji"], ["10rb+", "Pelanggan"], ["9", "Tahun"]].map(([n, l]) => (
              <div key={l}><div className="font-display text-3xl text-primary">{n}</div><div className="text-sm text-muted-foreground">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-caramel">Testimoni</p>
          <h2 className="font-display mt-3 text-center text-4xl md:text-5xl">Kata mereka</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-8 shadow-warm">
                <div className="text-caramel">★★★★★</div>
                <blockquote className="mt-4 leading-relaxed">“{t.text}”</blockquote>
                <figcaption className="font-display mt-6 text-lg text-primary">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-center text-primary-foreground">
        <h2 className="font-display text-4xl md:text-5xl">Rindu kopi? Pesan sekarang.</h2>
        <p className="mt-4 text-primary-foreground/70">Antar ke rumah atau ambil di kedai.</p>
        <WaButton className="mt-8" />
      </section>

      <footer id="kontak" className="bg-espresso py-14 text-cream/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          <div><div className="font-display text-2xl text-cream">Kopi Nusantara</div><p className="mt-3 text-sm">Kopi asli Indonesia, diseduh dengan hati.</p></div>
          <div className="text-sm"><div className="mb-2 font-semibold text-cream">Alamat</div>Jl. Kopi No. 12, Jakarta<br />Buka setiap hari 07.00–22.00</div>
          <div className="text-sm"><div className="mb-2 font-semibold text-cream">Kontak</div>WhatsApp: +62 812-3456-7890<br />Instagram: @kopinusantara</div>
        </div>
        <p className="mt-10 text-center text-xs text-cream/50">© 2026 Kopi Nusantara. Semua hak dilindungi.</p>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="Order via WhatsApp" className="btn-wa-float">WA</a>
    </main>
  );
}
