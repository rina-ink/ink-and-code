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
            PAPER SECTIONS
            work + drawings share one continuous paper surface
            ================================================== */}

        <div className="paper-sections">
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

            {/* ==================================================
                PROJECT 01 — INNER FLOW
                ================================================== */}

            <article className="project project-inner-flow">
              <div className="project-visual">
                <div className="inner-flow-mark" aria-hidden="true">
                  <span className="flow-line flow-line-1" />
                  <span className="flow-line flow-line-2" />
                  <span className="flow-line flow-line-3" />
                </div>
              </div>

              <div className="project-copy">
                <span className="project-number">01 / selected work</span>

                <h3>inner flow</h3>

                <p className="project-description">
                  a quiet space for
                  <br />
                  movement, rest and touch.
                </p>

                <p className="project-tech">
                  React · TypeScript · Node
                  <br />
                  Express · MongoDB
                </p>

                <a
                  href="https://inner-flow-frontend.onrender.com/"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  view project ↗
                </a>
              </div>
            </article>

            {/* ==================================================
                PROJECT 02 — GUITAR STORE
                ================================================== */}

            <article className="project project-guitar-store">
              <div className="project-copy">
                <span className="project-number">02 / selected work</span>

                <h3>guitar store api</h3>

                <p className="project-description">
                  a backend for products,
                  <br />
                  orders and inventory.
                </p>

                <p className="project-tech">
                  Node · Express · TypeScript
                  <br />
                  MongoDB · Mongoose · Zod
                </p>

                <a
                  href="https://github.com/rina-ink/guitar-store"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  view project ↗
                </a>
              </div>

              <div className="project-visual project-visual-guitar">
                <Image
                  src="/illustrations/guitar-store-bass.png"
                  alt="Hand-drawn bass guitar study"
                  width={900}
                  height={1200}
                  className="guitar-store-image"
                />
              </div>
            </article>

            {/* ==================================================
                PROJECT 03 — INSTRUMENT TIMBRE
                ================================================== */}

            <article className="project project-timbre">
              <div className="project-visual project-visual-timbre">
                <div className="timbre-mark" aria-hidden="true">
                  <span className="music-note music-note-1">
                    <span className="music-note-head" />
                    <span className="music-note-stem" />
                    <span className="music-note-flag" />
                  </span>

                  <span className="music-note music-note-2">
                    <span className="music-note-head" />
                    <span className="music-note-stem" />
                    <span className="music-note-flag" />
                  </span>

                  <span className="music-note music-note-3">
                    <span className="music-note-head" />
                    <span className="music-note-stem" />
                    <span className="music-note-flag" />
                  </span>
                </div>
              </div>

              <div className="project-copy">
                <span className="project-number">03 / selected work</span>

                <h3>instrument timbre</h3>

                <p className="project-description">
                  exploring how different
                  <br />
                  instruments sound.
                </p>

                <p className="project-tech">
                  Python · audio analysis
                  <br />
                  data visualization · Streamlit
                </p>

                <a
                  href="https://timbre.streamlit.app/"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  explore ↗
                </a>
              </div>
            </article>
          </section>

          {/* ==================================================
              DRAWINGS
              ================================================== */}

          <section id="drawings" className="drawings">
            <div className="drawings-inner">
              <div className="drawings-visual">
                <Image
                  src="/illustrations/strudel-drawing.jpg"
                  alt="Hand-drawn illustrated story of squirrels making strudel"
                  width={1536}
                  height={2048}
                  className="strudel-drawing"
                />
              </div>

              <div className="drawings-copy">
                <span className="section-number">04</span>

                <h2>drawings</h2>

                <p>
                  things I make
                  <br />
                  away from the screen.
                </p>
              </div>
            </div>
          </section>

          {/* ==================================================
              ABOUT
              ================================================== */}

          <section id="about" className="about">
            <div className="about-inner">
              <span className="section-number">05</span>

              <h2>about</h2>

              <div className="about-copy">
                <p className="about-thought">
                  figuring things out,
                  <br />
                  following ideas.
                </p>

                <p className="about-thought">
                  learning as I go,
                  <br />
                  making things along the way.
                </p>

                <p className="about-location">
                  based in Berlin.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}