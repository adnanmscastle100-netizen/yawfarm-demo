import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Coffee", href: "#coffee" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const COFFEES = [
  {
    name: "Desert Sunrise",
    origin: "Yirgacheffe, Ethiopia",
    roast: "Light Roast",
    notes: "Bergamot, peach, jasmine",
    price: "$21",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Red Rock Blend",
    origin: "Huila, Colombia",
    roast: "Medium Roast",
    notes: "Brown sugar, cherry, almond",
    price: "$19",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vegas Nights",
    origin: "Minas Gerais, Brazil",
    roast: "Dark Roast",
    notes: "Dark cocoa, toasted pecan, molasses",
    price: "$18",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1000&q=80",
];

const REVIEWS = [
  {
    name: "Marisol T.",
    area: "Henderson, NV",
    quote:
      "The Desert Sunrise has ruined every other light roast for me. Floral, bright, and never bitter. Yaw Farm is my Saturday ritual now.",
    rating: 5,
  },
  {
    name: "David K.",
    area: "Summerlin, NV",
    quote:
      "You can tell these people actually know the farmers. The Red Rock Blend tastes like someone cared about every step.",
    rating: 5,
  },
  {
    name: "Priya N.",
    area: "Downtown Las Vegas",
    quote:
      "Best cortado on this side of town, hands down. The roastery smell alone is worth the visit.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="bg-espresso text-cream selection:bg-copper">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-cream/10 bg-espresso/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="font-display text-lg tracking-wide">
            Yaw Farm <span className="italic text-copper">Coffee Roaster</span>
          </a>
          <nav className="hidden gap-10 font-body text-sm uppercase tracking-widest2 text-ash md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-copper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden border border-copper px-5 py-2 text-xs uppercase tracking-widest2 text-copper transition-colors hover:bg-copper hover:text-espresso md:inline-block"
          >
            Visit Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80"
            alt="Coffee beans being poured during roasting"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/80 to-espresso/30" />
        </div>

        {/* ambient steam */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[12%] top-1/3 h-40 w-24 rounded-full bg-cream/10 blur-2xl animate-steam"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[16%] top-1/2 h-28 w-16 rounded-full bg-copper/10 blur-2xl animate-steam"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-5 font-body text-xs uppercase tracking-widest2 text-copper animate-fadeUp">
            Small-Batch Roastery · Las Vegas, Nevada
          </p>
          <h1
            className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl animate-fadeUp"
            style={{ animationDelay: "120ms" }}
          >
            Roasted slow,
            <br />
            <span className="italic text-copper">poured</span> with intention.
          </h1>
          <p
            className="mt-6 max-w-lg font-body text-base leading-relaxed text-ash sm:text-lg animate-fadeUp"
            style={{ animationDelay: "240ms" }}
          >
            We bring single-origin beans from farm partners we know by name
            into the heart of the desert, roasting in small batches so every
            cup tells the truth about where it came from.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-5 animate-fadeUp"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#coffee"
              className="bg-copper px-8 py-3.5 font-body text-sm uppercase tracking-widest2 text-espresso transition-transform hover:-translate-y-0.5 hover:bg-ember"
            >
              Shop Our Roasts
            </a>
            <a
              href="#about"
              className="border-b border-cream/40 pb-1 font-body text-sm uppercase tracking-widest2 text-cream transition-colors hover:border-copper hover:text-copper"
            >
              Our Story
            </a>
          </div>

          {/* roast curve signature strip */}
          <div className="mt-16 max-w-md animate-fadeUp" style={{ animationDelay: "480ms" }}>
            <div className="flex justify-between font-body text-[11px] uppercase tracking-widest2 text-ash">
              <span>Green Bean</span>
              <span>First Crack</span>
              <span>Full City</span>
            </div>
            <div className="mt-2 h-1.5 w-full roast-gradient animate-roastSweep" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative bg-char py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
                alt="Warm interior of Yaw Farm Coffee Roaster cafe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mb-4 font-body text-xs uppercase tracking-widest2 text-copper">
              Our Story
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
              From farm soil to <span className="italic text-copper">desert cup.</span>
            </h2>
            <p className="mt-6 font-body leading-relaxed text-ash">
              Yaw Farm Coffee Roaster started in 2017 as a single drum
              roaster in a Las Vegas garage and a stubborn belief that great
              coffee shouldn&apos;t require a passport to find. Today we still
              roast in small batches, still buy direct from the farms we
              visit, and still taste-cup every single lot before it earns a
              place on our shelf.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ash">
              No shortcuts, no filler beans, no mystery blends. Just honest
              sourcing, careful roasting, and a neighborhood roastery that
              treats coffee like the agricultural product it actually is.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              <div>
                <p className="font-display text-3xl text-copper">7+</p>
                <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-ash">
                  Years Roasting
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-copper">12</p>
                <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-ash">
                  Farm Partners
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-copper">100%</p>
                <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-ash">
                  Direct Trade
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED COFFEE */}
      <section id="coffee" className="bg-espresso py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="mx-auto mb-16 max-w-xl text-center">
            <p className="mb-4 font-body text-xs uppercase tracking-widest2 text-copper">
              Featured Roasts
            </p>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              This week&apos;s lineup
            </h2>
          </FadeIn>

          <div className="grid gap-10 md:grid-cols-3">
            {COFFEES.map((coffee, i) => (
              <FadeIn key={coffee.name} delay={i * 120}>
                <div className="group relative overflow-hidden border border-cream/10 bg-char transition-colors hover:border-copper/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={coffee.img}
                      alt={`${coffee.name} coffee bag`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-espresso/80 px-3 py-1 font-body text-[10px] uppercase tracking-widest2 text-copper">
                      {coffee.roast}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-xl text-cream">
                        {coffee.name}
                      </h3>
                      <span className="font-display text-lg text-copper">
                        {coffee.price}
                      </span>
                    </div>
                    <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-ash">
                      {coffee.origin}
                    </p>
                    <p className="mt-4 font-body text-sm leading-relaxed text-ash">
                      Tasting notes: {coffee.notes}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-char py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="mb-16 max-w-xl">
            <p className="mb-4 font-body text-xs uppercase tracking-widest2 text-copper">
              Inside the Roastery
            </p>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              A look around
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {GALLERY.map((src, i) => (
              <FadeIn
                key={src}
                delay={(i % 3) * 100}
                className={i === 0 ? "col-span-2 row-span-2" : ""}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Yaw Farm Coffee Roaster gallery photo"
                    fill
                    className="object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-espresso py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn className="mx-auto mb-16 max-w-xl text-center">
            <p className="mb-4 font-body text-xs uppercase tracking-widest2 text-copper">
              Word on the Street
            </p>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              What Las Vegas is saying
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <FadeIn key={review.name} delay={i * 120}>
                <div className="flex h-full flex-col justify-between border border-cream/10 p-8">
                  <div>
                    <div className="mb-5 flex gap-1 text-copper">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <span key={idx} aria-hidden>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="font-display text-lg italic leading-relaxed text-cream">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-8 border-t border-cream/10 pt-4">
                    <p className="font-body text-sm text-cream">{review.name}</p>
                    <p className="font-body text-xs uppercase tracking-widest2 text-ash">
                      {review.area}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-char py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <FadeIn>
            <p className="mb-4 font-body text-xs uppercase tracking-widest2 text-copper">
              Visit the Roastery
            </p>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              Come sit a while
            </h2>
            <div className="mt-10 space-y-6 font-body text-ash">
              <div>
                <p className="text-xs uppercase tracking-widest2 text-cream">Address</p>
                <p className="mt-1">4821 W Charleston Blvd, Las Vegas, NV 89102</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-cream">Hours</p>
                <p className="mt-1">Mon–Fri · 6:30am – 5:00pm</p>
                <p>Sat–Sun · 7:00am – 4:00pm</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-cream">Contact</p>
                <p className="mt-1">hello@yawfarmcoffee.com</p>
                <p>(702) 555-0148</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <form className="space-y-5 border border-cream/10 p-8">
              <div>
                <label className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ash">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-cream/15 bg-espresso px-4 py-3 font-body text-sm text-cream placeholder:text-ash/60 focus:border-copper focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ash">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-cream/15 bg-espresso px-4 py-3 font-body text-sm text-cream placeholder:text-ash/60 focus:border-copper focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ash">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what's brewing..."
                  className="w-full resize-none border border-cream/15 bg-espresso px-4 py-3 font-body text-sm text-cream placeholder:text-ash/60 focus:border-copper focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-copper px-8 py-3.5 font-body text-sm uppercase tracking-widest2 text-espresso transition-colors hover:bg-ember"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cream/10 bg-espresso py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-10">
          <div>
            <p className="font-display text-lg text-cream">
              Yaw Farm <span className="italic text-copper">Coffee Roaster</span>
            </p>
            <p className="mt-2 font-body text-xs text-ash">
              © {new Date().getFullYear()} Yaw Farm Coffee Roaster · Las Vegas, NV
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-widest2 text-ash">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-copper">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-6 font-body text-xs uppercase tracking-widest2 text-ash">
            <a href="#" className="transition-colors hover:text-copper">Instagram</a>
            <a href="#" className="transition-colors hover:text-copper">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
