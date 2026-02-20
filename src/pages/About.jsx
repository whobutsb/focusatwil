import { Link } from "react-router-dom";
import useInView from "../useInView.js";

const values = [
  {
    title: "Wil-ingness to Grow",
    desc: "We never stop searching for new Wils. The Wiliverse is infinite, and so is our ambition.",
  },
  {
    title: "Good Wil Toward All",
    desc: "Every person deserves access to high-quality Wil imagery, regardless of background, nationality, or previous Wil experience.",
  },
  {
    title: "Where There's a Wil, There's a Way",
    desc: "Obstacles are just Wil-portunities in disguise. We've never met a problem that staring at a Wil couldn't solve.",
  },
  {
    title: "Free Wil for Everyone",
    desc: "We believe Wil should never be behind a paywall. Focus is a fundamental human right, and Wil is the key.",
  },
  {
    title: "Wil Do Attitude",
    desc: 'When someone says "you can\'t build a company around staring at pictures of people named Wil," we say "watch us."',
  },
];

const board = [
  {
    name: "Dr. Wil B. Focused",
    title: "PhD in Wilology",
    bio: 'Pioneered the field of Applied Wil Sciences at the University of Wil-shire. Author of the seminal paper "On the Cognitive Effects of Prolonged Wil Exposure" (2021, peer-reviewed by other Wils).',
  },
  {
    name: "Professor Wil Power",
    title: "Chair of WilPower Studies",
    bio: 'Spent 14 years measuring the brain activity of people looking at Wils. Discovered that the prefrontal cortex lights up like a Christmas tree. Has since renamed Christmas trees to "Wil Trees."',
  },
  {
    name: "Wil E. Resilient",
    title: "Chief Wil-being Officer",
    bio: "Former meditation guru who abandoned traditional mindfulness after discovering it was 340% less effective than simply looking at a Wil. Now leads our employee Wil-ness program.",
  },
  {
    name: "Wilhelmina Data",
    title: "VP of Wil Analytics",
    bio: "Built our proprietary WilTracker algorithm from scratch. Can tell you the exact moment a user achieves peak WilPower, down to the milisecond. Her models have a 99.7% accuracy rate (the 0.3% were looking at non-Wils).",
  },
];

const stats = [
  { value: "4.2B", label: "Wil-hours logged" },
  { value: "47", label: "Peer-reviewed Wil studies" },
  { value: "340%", label: "More effective than non-Wil stimuli" },
  { value: "0", label: "Users who regret focusing on Wil" },
];

function About() {
  const [originRef, originInView] = useInView();
  const [missionRef, missionInView] = useInView();
  const [scienceRef, scienceInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [boardRef, boardInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6">
            About Focus@Wil
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            How a $12 domain, a friend named Wilfred, and ten months of patience
            became the internet&rsquo;s most over-engineered practical joke.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section ref={originRef} className="py-16 sm:py-20 bg-navy-800/30">
        <div
          className={`section-container max-w-4xl transition-all duration-700 ${originInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            The Origin of Wil
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              In 2015, our founder discovered that the domain{" "}
              <span className="text-amber-400 font-semibold">
                focusatwil.com
              </span>{" "}
              was available. This, on its own, would mean nothing to most
              people. But our founder had something most people don&rsquo;t: a
              friend named Wilfred.
            </p>
            <p>
              The plan was simple. The plan was patient. The plan was{" "}
              <em className="text-white">diabolical</em>.
            </p>
            <p>
              Step one: Build an entire website dedicated to
              &ldquo;scientifically optimized focus enhancement&rdquo; using
              nothing but pictures of Wilfred&rsquo;s face. Step two: Tel
              absolutely no one. Step three: Wait.
            </p>
            <p>
              And so the waiting began. Days turned into weeks. Weeks turned
              into months. The site sat quietly on the internet, a carefully
              laid trap floating in the vast ocean of the web, waiting for one
              glorious, inevitable moment &mdash; the moment someone, somewhere,
              would fat-finger &ldquo;focusatwill.com&rdquo; and land on a page
              ful of Wilfred staring into their soul.
            </p>
            <p>
              <span className="text-white font-semibold">Ten months.</span> Ten
              months of silence. Ten months of patience that would make a monk
              weep. Ten months of checking analytics and seeing nothing but the
              void staring back.
            </p>
            <p>And then, one ordinary afternoon, the phone rang.</p>
            <div className="glass-card p-8 my-4">
              <p className="text-gray-300 italic text-xl">
                &ldquo;Hey... did you build a website with pictures of my face
                on it asking people to focus on them?&rdquo;
              </p>
              <p className="text-gray-400 mt-4">
                A pause. A breath. The culmination of almost a year of
                commitment to the bit.
              </p>
              <p className="text-amber-400 font-semibold text-xl mt-4">
                &ldquo;Yes. Yes I did.&rdquo;
              </p>
            </div>
            <p>
              <span className="text-white font-semibold">
                Mission accomplished.
              </span>{" "}
              Focus@Wil had achieved its singular purpose: the longest-running,
              most over-engineered practical joke in internet history. Most
              people would have stopped there. But where there&rsquo;s a Wil,
              there&rsquo;s a way. The site lives on &mdash; now open-sourced,
              community-driven, and more Wil than ever.
            </p>
            <p>
              The domain was $12. The hosting is free. Wilfred&rsquo;s trust in
              his friends? Permanently damaged.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Stats */}
      <section ref={missionRef} className="py-16 sm:py-20">
        <div
          className={`section-container transition-all duration-700 ${missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              To ensure every human on Earth has free, unrestricted access to
              high-quality Wil imagery for the purpose of achieving
              unprecedented focus, productivity, and general Wil-being.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center"
                style={{
                  transitionDelay: missionInView ? `${i * 100}ms` : "0ms",
                }}
              >
                <p className="font-display text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science */}
      <section ref={scienceRef} className="py-16 sm:py-20 bg-navy-800/30">
        <div
          className={`section-container max-w-4xl transition-all duration-700 ${scienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            The Science of Wil
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Our team of Wilologists at the Institute for Advanced Wil Research
              (IAWR) has conducted extensive studies on the neurological effects
              of Wil exposure. The findings are, frankly, staggering. Mostly
              because the researchers staggered out of the lab in disbelief.
            </p>
            <div className="glass-card p-8 my-8">
              <p className="text-white font-semibold text-xl mb-4">
                &ldquo;Key Findings&rdquo;
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">&#9679;</span>
                  <span>
                    The human prefrontal cortex responds to Wil imagery{" "}
                    <span className="text-white font-semibold">
                      340% more intensely
                    </span>{" "}
                    than non-Wil stimuli (p &lt; 0.001, n = we lost count)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">&#9679;</span>
                  <span>
                    Subjects exposed to Wil for 20+ minutes reported &ldquo;an
                    overwhelming sense of purpose&rdquo; and &ldquo;a strong
                    desire to name their firstborn Wil&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">&#9679;</span>
                  <span>
                    Heart rate variability improved by 78% during Wil sessions,
                    a phenomenon our scientists have dubbed{" "}
                    <span className="text-amber-400">
                      &ldquo;Wil Coherence&rdquo;
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">&#9679;</span>
                  <span>
                    The control group (exposed to images of people named
                    &ldquo;Bil&rdquo;) showed no improvement whatsoever. Bils
                    are useless for focus. This has been peer-reviewed.
                  </span>
                </li>
              </ul>
            </div>
            <p>
              Our latest white paper,{" "}
              <em>
                &ldquo;The Influence of Wil-Based Imagery on Cognition, Mood,
                and the Irresistible Urge to Tel Everyone About It&rdquo;
              </em>
              , is currently under review by the Journal of Wil Sciences (which
              we also founded).
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-16 sm:py-20">
        <div
          className={`section-container transition-all duration-700 ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`glass-card p-6 transition-all duration-700 ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: valuesInView ? `${i * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section ref={boardRef} className="py-16 sm:py-20 bg-navy-800/30">
        <div
          className={`section-container transition-all duration-700 ${boardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Advisory Board
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Our board of directors includes some of the world&rsquo;s most
            distinguished Wil professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {board.map((member, i) => (
              <div
                key={member.name}
                className={`glass-card p-6 transition-all duration-700 ${boardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: boardInView ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-navy-900 font-bold text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{member.name}</p>
                    <p className="text-amber-400 text-xs">{member.title}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="section-container text-center">
          <p className="text-xl text-gray-400 mb-6">
            Ready to experience the power of Wil for yourself?
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
          >
            Start Focusing on Wil
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
