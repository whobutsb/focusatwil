import SlideShow from './SlideShow.jsx'
import FAQ from './FAQ.jsx'
import HowItWorks from './HowItWorks.jsx'
import Testimonials from './Testimonials.jsx'
import useInView from './useInView.js'

function HomePage() {
  const [heroRef, heroInView] = useInView()

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden py-16 sm:py-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-wilblue-500/10 rounded-full blur-3xl" />

        <div className={`section-container relative z-10 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">
              Scientifically Optimized
            </p>
            <h2 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6 text-balance">
              Focus at Wil.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 text-balance">
              Harness the power of peer-reviewed Wil imagery to unlock unprecedented levels of concentration and WilPower.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
              >
                Start Focusing
              </button>
              <a
                href="#faq"
                className="px-8 py-3 border border-white/20 text-gray-300 font-medium rounded-full hover:bg-white/5 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          <SlideShow />
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Backed by 47 peer-reviewed Wil studies
          </p>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />

      <section id="faq" className="py-20 sm:py-28">
        <div className="section-container">
          <p className="text-amber-400 font-medium text-sm tracking-widest uppercase text-center mb-3">
            Got Questions?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white text-center mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
