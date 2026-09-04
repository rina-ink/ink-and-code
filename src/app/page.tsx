import Image from "next/image";
import Link from "next/link";
import StarTrail from "@/components/StarTrail";
import CheckerTransition from "@/components/CheckerTransition";

export default function Home() {
  return (
    <main>
      <div className="opening">
        {/* ==================================================
            HERO
            ================================================== */}

        <section className="hero">
          <nav className="nav">
            <Link href="/" className="logo">
              rina ink
            </Link>

            <div className="nav-links">
              <a href="#work">work</a>
              <a href="#playground">playground</a>
              <a href="#drawings">drawings</a>
              <a href="#about">about</a>
              <a href="#contact">contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <p className="hero-label">
              software development · illustration · things in between
            </p>

            <p className="hero-title">
              I draw things.
              <br />
              I build things.
            </p>
          </div>

          <div className="hero-squirrel" aria-hidden="true">
            <Image
              src="/illustrations/chef-squirrel.png"
              alt=""
              width={900}
              height={700}
              priority
            />

            <div className="sugar">
              <span className="grain grain-1">·</span>
              <span className="grain grain-2">·</span>
              <span className="grain grain-3">·</span>
              <span className="grain grain-4">✦</span>
              <span className="grain grain-5">·</span>
              <span className="grain grain-6">✧</span>
              <span className="grain grain-7">·</span>
            </div>
          </div>

          <a href="#begin" className="scroll-link">
            scroll to explore
            <span>↓</span>
          </a>
        </section>

        {/* ==================================================
            OBSERVE
            ================================================== */}

        <section id="begin" className="begin">
          <span className="section-number">01</span>

          <h2>observe</h2>

          <p>
            curious about -
            <br />
            how things work.
          </p>
        </section>

        {/* sugar escaping from the hero into the dark space */}

        <div className="falling-sugar" aria-hidden="true">
          <span className="falling-grain falling-grain-1">·</span>
          <span className="falling-grain falling-grain-2">·</span>
          <span className="falling-grain falling-grain-3">✦</span>
          <span className="falling-grain falling-grain-4">·</span>

          <span className="falling-grain falling-grain-5 bridge-grain">
            ·
          </span>
          <span className="falling-grain falling-grain-6 bridge-grain">
            ✧
          </span>
          <span className="falling-grain falling-grain-7 bridge-grain">
            ·
          </span>
          <span className="falling-grain falling-grain-8 bridge-grain">
            ·
          </span>
        </div>

        {/* ==================================================
            PLAYGROUND
            ================================================== */}

        <section id="playground" className="playground">
          <div className="playground-copy">
            <span className="section-number">02</span>

            <h2>playground</h2>

            <p>
              little experiments
              <br />
              and interactive things
            </p>

            <span className="playground-hint">follow the stars →</span>
          </div>

          <div className="galaxy" aria-hidden="true">
            <span className="star star-1">·</span>
            <span className="star star-2">✦</span>
            <span className="star star-3">·</span>
            <span className="star star-4">✧</span>
            <span className="star star-5">·</span>
            <span className="star star-6">✦</span>
            <span className="star star-7">·</span>
            <span className="star star-8">·</span>

            <span className="star star-9">·</span>
            <span className="star star-10">✦</span>
            <span className="star star-11">·</span>
            <span className="star star-12">·</span>

            <span className="star bridge-star bridge-star-1">·</span>
            <span className="star bridge-star bridge-star-2">·</span>
            <span className="star bridge-star bridge-star-3">✦</span>
            <span className="star bridge-star bridge-star-4">·</span>
            <span className="star bridge-star bridge-star-5">✧</span>
            <span className="star bridge-star bridge-star-6">·</span>

            <div className="planet planet-large" />
            <div className="planet planet-small" />
          </div>

          <StarTrail />
        </section>

        {/* ==================================================
            CHECKER TRANSITION
            ================================================== */}

        <CheckerTransition />

        {/* ==================================================
            WORK
            ================================================== */}

        <section id="work" className="work">
          <div className="work-intro">
            <span className="section-number">03</span>

            <h2>work</h2>

            <p>
              things I&apos;ve built,
              <br />
              and things I&apos;m still building.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}