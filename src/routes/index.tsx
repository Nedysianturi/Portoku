import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Download,
  MessageCircle,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Send,
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Wrench,
  Code2,
  FileText,
  Palette,
  Share2,
  ClipboardList,
  CheckCircle2,
  Sparkles,
  Quote,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kennedi Sianturi",
          jobTitle: "IT Support & Web Developer",
          description:
            "IT Support, Web Developer, Social Media Specialist & Administrator dengan 10+ tahun pengalaman.",
          email: "mailto:kennedysianturi@gmail.com",
          telephone: "+6282285883512",
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/kennedi-sianturi",
            "https://wa.me/6282285883512",
          ],
          knowsAbout: [
            "IT Support",
            "Web Development",
            "Social Media Management",
            "Administration",
            "Graphic Design",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Sistem Informasi",
          },
          worksFor: {
            "@type": "Organization",
            name: "Yayasan Tadika Puri",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kennedi Sianturi — Portofolio",
          url: "/",
          inLanguage: "id-ID",
          author: { "@type": "Person", name: "Kennedi Sianturi" },
        }),
      },
    ],
  }),
});

/* ---------- Data ---------- */

const NAV_LINKS = [
  { id: "hero", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "skills", label: "Keahlian" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimoni" },
  { id: "contact", label: "Kontak" },
];

const EXPERIENCES = [
  {
    company: "Yayasan Tadika Puri",
    role: "Staff IT",
    period: "2021 – Sekarang",
    points: [
      "Mendesain poster dan materi promosi.",
      "Mengembangkan website yayasan.",
      "Mengelola media sosial.",
      "Membantu tim manajemen.",
      "Membuat konten digital.",
    ],
  },
  {
    company: "Megara Hotel",
    role: "Staff IT Night Audit",
    period: "2017 – 2020",
    points: [
      "Night Audit.",
      "Check In & Check Out.",
      "Verifikasi data tamu.",
      "City Ledger & Deposit.",
      "Membuat laporan harian & mengirim ke General Manager.",
      "Troubleshooting komputer.",
      "Perbaikan pintu kamar, listrik, dan AC.",
    ],
  },
  {
    company: "TK Elshadday Kids",
    role: "Staff Administrasi",
    period: "2014 – 2017",
    points: [
      "Administrasi sekolah.",
      "Mengelola pembayaran SPP.",
      "Mengelola kas kecil.",
      "Pengajuan data guru.",
      "Administrasi pendidikan.",
    ],
  },
  {
    company: "PT Safira Jayatelkomindo",
    role: "Staff IT",
    period: "2013 – 2014",
    points: [
      "Pengembangan Website.",
      "Instalasi CCTV, Alarm, & Fingerprint.",
      "Maintenance Hardware & Software.",
      "Technical Support.",
    ],
  },
];

const SKILL_CARDS = [
  { icon: Wrench, title: "IT Support", items: ["Troubleshooting", "Hardware", "Software", "Networking"] },
  { icon: Code2, title: "Website Development", items: ["HTML", "CSS", "JavaScript", "WordPress"] },
  { icon: FileText, title: "Microsoft Office", items: ["Word", "Excel", "PowerPoint"] },
  { icon: Palette, title: "Graphic Design", items: ["Adobe Photoshop", "Poster Design", "Social Media Design"] },
  { icon: Share2, title: "Social Media", items: ["Content Planning", "Content Design", "Basic Analytics"] },
  { icon: ClipboardList, title: "Administration", items: ["Data Entry", "Reporting", "Documentation", "Filing"] },
];

const SKILL_BARS = [
  { name: "Administrasi", value: 95 },
  { name: "Microsoft Office", value: 90 },
  { name: "Website Development", value: 85 },
  { name: "Photoshop", value: 90 },
  { name: "Social Media Management", value: 90 },
  { name: "IT Support", value: 90 },
  { name: "Customer Service", value: 85 },
];

const REASONS = [
  "Cepat belajar",
  "Komunikatif",
  "Teliti",
  "Multitasking",
  "Bertanggung jawab",
  "Berorientasi pada solusi",
  "Mudah beradaptasi",
  "Kreatif",
  "Manajemen waktu yang baik",
];

const PORTFOLIO = [
  { title: "Desain Poster", category: "Graphic Design", hue: 220 },
  { title: "Website", category: "Web Development", hue: 205 },
  { title: "Konten Instagram", category: "Social Media", hue: 265 },
  { title: "Banner", category: "Graphic Design", hue: 195 },
  { title: "Brosur", category: "Print", hue: 235 },
  { title: "Landing Page", category: "Web Development", hue: 250 },
  { title: "Desain Sekolah", category: "Branding", hue: 210 },
  { title: "Social Media Campaign", category: "Marketing", hue: 275 },
];

const TESTIMONIALS = [
  {
    name: "Nama Klien 1",
    role: "Manager, Perusahaan Anda",
    text: "Kennedi sangat teliti dan cepat dalam menyelesaikan pekerjaan IT support kami. Sangat direkomendasikan.",
  },
  {
    name: "Nama Klien 2",
    role: "Kepala Yayasan",
    text: "Website dan konten media sosial yang dibuat sangat membantu meningkatkan citra lembaga kami.",
  },
  {
    name: "Nama Klien 3",
    role: "Rekan Kerja",
    text: "Profesional, multitasking, dan selalu memberikan solusi terbaik dalam setiap situasi.",
  },
];

const CERTIFICATES = [1, 2, 3, 4];

/* ---------- Reveal-on-scroll hook ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Theme ---------- */

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark" | null) ?? "dark";
    setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

/* ---------- Page ---------- */

function PortfolioPage() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState<null | (typeof PORTFOLIO)[number]>(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(t);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loader */}
      <div className={`page-loader ${loading ? "" : "hidden"}`} aria-hidden={!loading}>
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-14 w-14">
            <span className="absolute inset-0 rounded-full border-2 border-primary/20" />
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
          </div>
          <p className="font-display text-sm tracking-widest text-muted-foreground">KENNEDI SIANTURI</p>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-elegant py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => goTo("hero")}
            className="font-display text-lg font-extrabold tracking-tight"
          >
            Kennedi<span className="text-primary">.</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-colors hover:bg-primary/10"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 md:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mx-4 mt-2 rounded-2xl glass-strong shadow-elegant md:hidden animate-fade-in">
            <div className="flex flex-col p-2">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium hover:bg-primary/10"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero onCTA={goTo} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <SkillBars />
        <WhyMe />
        <Certificates />
        <Portfolio onPreview={setPreview} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Portfolio preview */}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-navy/80 p-4 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl overflow-hidden rounded-3xl glass-strong shadow-elegant animate-scale-in"
          >
            <PortfolioTile item={preview} large />
            <div className="flex items-center justify-between p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  {preview.category}
                </p>
                <h3 className="text-xl font-bold">{preview.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Placeholder preview — ganti dengan karya asli Anda.
                </p>
              </div>
              <button
                onClick={() => setPreview(null)}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-primary/10"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <BackToTop />
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero({ onCTA }: { onCTA: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Tersedia untuk kolaborasi
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="block">KENNEDI</span>
            <span className="block gradient-text">SIANTURI</span>
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground sm:text-base">
            IT Support · Web Developer · Social Media Specialist · Administrator
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Lulusan Sistem Informasi dengan pengalaman lebih dari 10 tahun di bidang Administrasi,
            IT Support, Night Audit Hotel, Website Development, Desain Grafis, dan Manajemen Media
            Sosial. Terbiasa bekerja secara multitasking, teliti, dan mampu memberikan solusi
            teknologi yang efektif.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Tambahkan file CV Anda di sini.");
              }}
              className="btn-glow inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button
              onClick={() => onCTA("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary/10"
            >
              <MessageCircle className="h-4 w-4" /> Hubungi Saya
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href="https://wa.me/6282285883512" label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="mailto:kennedysianturi@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/kennedi-sianturi" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <div className="relative reveal">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] gradient-brand opacity-30 blur-2xl" />
            <div className="animate-float">
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elegant">
                <img
                  src={profilePhoto}
                  alt="Kennedi Sianturi"
                  width={768}
                  height={960}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Floating badges */}
              <div className="glass absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 shadow-elegant sm:block">
                <p className="text-xs text-muted-foreground">Pengalaman</p>
                <p className="font-display text-lg font-bold">10+ Tahun</p>
              </div>
              <div className="glass absolute -right-4 bottom-16 hidden rounded-2xl px-4 py-3 shadow-elegant sm:block">
                <p className="text-xs text-muted-foreground">IPK</p>
                <p className="font-display text-lg font-bold">3.59</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
    >
      {children}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="Tentang Saya" title="Profil Singkat" />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="reveal glass rounded-3xl p-6 shadow-elegant md:col-span-2">
          <p className="leading-relaxed text-muted-foreground">
            Saya merupakan lulusan Sistem Informasi{" "}
            <span className="font-semibold text-foreground">STMIK Dharmapala Riau</span> dengan IPK{" "}
            <span className="font-semibold text-foreground">3,59</span>. Saya memiliki pengalaman
            bekerja pada bidang administrasi, hotel, teknologi informasi, pengembangan website,
            desain grafis, serta pengelolaan media sosial.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Saya pernah bekerja sebagai Staff Administrasi, Staff IT CCTV, Staff IT Night Audit
            Hotel, hingga Staff IT di Yayasan Pendidikan. Saya senang mempelajari teknologi baru
            serta membantu perusahaan meningkatkan efisiensi melalui solusi digital.
          </p>
        </div>
        <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-1">
          <StatCard label="Pengalaman" value="10+" suffix="Tahun" />
          <StatCard label="Proyek" value="50+" suffix="Selesai" />
          <StatCard label="IPK" value="3.59" suffix="/ 4.00" />
          <StatCard label="Klien" value="20+" suffix="Puas" />
        </div>
      </div>
    </Section>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: string; suffix: string }) {
  return (
    <div className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-extrabold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground">{suffix}</p>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Perjalanan Karier" title="Pengalaman Kerja" />
      <div className="relative mt-14">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
        <div className="space-y-10">
          {EXPERIENCES.map((e, i) => (
            <div
              key={e.company}
              className={`reveal relative grid md:grid-cols-2 md:gap-8 ${
                i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
              }`}
            >
              <div className="absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary shadow-[0_0_0_4px_var(--color-background)] md:left-1/2" />
              <div
                className={`ml-10 md:ml-0 ${
                  i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:col-start-2"
                }`}
              >
                <div className="glass rounded-2xl p-6 shadow-elegant transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {e.period}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{e.company}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{e.role}</p>
                  <ul
                    className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${
                      i % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2 md:justify-start">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Latar Belakang" title="Pendidikan & Organisasi" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="reveal glass rounded-3xl p-6 shadow-elegant">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-brand text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-display text-lg font-bold">STMIK Dharmapala Riau</h3>
              <p className="text-sm text-muted-foreground">Sistem Informasi · 2016 – 2020</p>
            </div>
          </div>
          <div className="rounded-xl bg-primary/10 px-4 py-3 text-sm">
            <span className="font-semibold">IPK:</span>{" "}
            <span className="text-primary font-bold">3.59 / 4.00</span>
          </div>
        </div>

        <div className="reveal glass rounded-3xl p-6 shadow-elegant">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-brand text-white">
              <Users className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-display text-lg font-bold">
                BEM STMIK Dharmapala Riau
              </h3>
              <p className="text-sm text-muted-foreground">Staff · 2017 – 2018</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Membantu pengelolaan informasi organisasi.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Kemampuan" title="Keahlian" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CARDS.map((s) => (
          <div
            key={s.title}
            className="reveal group glass rounded-3xl p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl gradient-brand text-white shadow-elegant transition-transform group-hover:rotate-6">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillBars() {
  return (
    <Section id="progress">
      <SectionHeader eyebrow="Progress" title="Level Keahlian" />
      <div className="mx-auto mt-12 grid max-w-4xl gap-5">
        {SKILL_BARS.map((s) => (
          <SkillBar key={s.name} name={s.name} value={s.value} />
        ))}
      </div>
    </Section>
  );
}

function SkillBar({ name, value }: { name: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(value);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="reveal">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-semibold text-primary">{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full gradient-brand transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

function WhyMe() {
  return (
    <Section id="why">
      <SectionHeader eyebrow="Kelebihan" title="Mengapa Memilih Saya" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r) => (
          <div
            key={r}
            className="reveal group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <span className="font-medium">{r}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeader
        eyebrow="Sertifikat"
        title="Galeri Sertifikat"
        desc="Placeholder — silakan tambahkan sertifikat Anda nanti."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((c) => (
          <div
            key={c}
            className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-elegant transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 gradient-brand opacity-20 transition-opacity group-hover:opacity-40" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <Award className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-2 text-sm font-semibold">Sertifikat #{c}</p>
                <p className="text-xs text-muted-foreground">Placeholder</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PortfolioTile({
  item,
  large,
}: {
  item: (typeof PORTFOLIO)[number];
  large?: boolean;
}) {
  const bg = `linear-gradient(135deg, hsl(${item.hue} 80% 55%) 0%, hsl(${item.hue + 30} 70% 40%) 100%)`;
  return (
    <div
      className={`relative ${large ? "aspect-[16/9]" : "aspect-[4/3]"} w-full overflow-hidden`}
      style={{ background: bg }}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.25),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-widest opacity-80">
          {item.category}
        </p>
        <p className="font-display text-lg font-bold">{item.title}</p>
      </div>
    </div>
  );
}

function Portfolio({
  onPreview,
}: {
  onPreview: (i: (typeof PORTFOLIO)[number]) => void;
}) {
  return (
    <Section id="portfolio">
      <SectionHeader
        eyebrow="Karya"
        title="Portfolio"
        desc="Klik salah satu karya untuk membuka preview."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PORTFOLIO.map((p) => (
          <button
            key={p.title}
            onClick={() => onPreview(p)}
            className="reveal group relative overflow-hidden rounded-2xl border border-border shadow-elegant transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <PortfolioTile item={p} />
            <div className="absolute inset-0 grid place-items-center bg-navy/60 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-navy">
                Lihat <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader eyebrow="Testimoni" title="Apa Kata Mereka" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="reveal glass relative rounded-3xl p-6 shadow-elegant transition-transform hover:-translate-y-1"
          >
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/20" />
            <p className="text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-brand font-display font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Kontak"
        title="Mari Terhubung"
        desc="Punya proyek atau ingin berdiskusi? Kirimkan pesan Anda."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="reveal space-y-4 lg:col-span-2">
          <ContactRow icon={<Phone className="h-4 w-4" />} label="Nomor HP" value="082285883512" href="tel:082285883512" />
          <ContactRow
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="kennedysianturi@gmail.com"
            href="mailto:kennedysianturi@gmail.com"
          />
          <ContactRow
            icon={<Linkedin className="h-4 w-4" />}
            label="LinkedIn"
            value="linkedin.com/in/kennedi-sianturi"
            href="https://www.linkedin.com/in/kennedi-sianturi"
          />
          <div className="glass overflow-hidden rounded-3xl shadow-elegant">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Lokasi (Placeholder)</span>
            </div>
            <iframe
              title="Peta Lokasi"
              src="https://www.openstreetmap.org/export/embed.html?bbox=101.35%2C0.45%2C101.55%2C0.60&layer=mapnik"
              className="h-56 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal glass rounded-3xl p-6 shadow-elegant lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nama" name="name" placeholder="Nama Anda" required />
            <Field label="Email" name="email" type="email" placeholder="anda@email.com" required />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">Pesan</label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tulis pesan Anda di sini..."
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            className="btn-glow mt-6 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white"
          >
            <Send className="h-4 w-4" /> {sent ? "Terkirim!" : "Kirim Pesan"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass flex items-center gap-4 rounded-2xl p-4 shadow-elegant transition-all hover:-translate-y-0.5 hover:border-primary"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-brand text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="truncate font-semibold">{value}</p>
      </div>
    </a>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>© 2026 Kennedi Sianturi</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-red-500">❤️</span>
        </p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="btn-glow fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full gradient-brand text-white animate-fade-in"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
