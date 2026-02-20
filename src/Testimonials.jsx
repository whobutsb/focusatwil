import useInView from './useInView.js'

const testimonials = [
  {
    quote: "I used to waste hours looking for the right Wil. Focus@Wil changed everything. Now the Wils come to me.",
    name: "Wil E. Coyote",
    title: "Professional Focus Seeker",
    initials: "WC",
  },
  {
    quote: "After just 15 minutes of staring at Wil, I wrote an entire screenplay. It was mostly about Wil, but still.",
    name: "Wilhelmina S.",
    title: "Aspiring Screenwriter",
    initials: "WS",
  },
  {
    quote: "My productivity went up 340%. My boss asked what changed. I whispered 'Wil' and walked away.",
    name: "William T.",
    title: "Senior Wil Analyst",
    initials: "WT",
  },
]

function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section id="testimonials" ref={ref} className="py-20 sm:py-28">
      <div className="section-container">
        <p className="text-amber-400 font-medium text-sm tracking-widest uppercase text-center mb-3">
          Wil Believers
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          Don&rsquo;t take our word for it. Take theirs. They&rsquo;ve been focusing on Wil for years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 transition-all duration-700 hover:bg-white/10 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : '0ms' }}
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-navy-900 text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
