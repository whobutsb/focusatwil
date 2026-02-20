import useInView from './useInView.js'

const steps = [
  {
    number: '01',
    title: 'Choose Your Wil',
    description: 'Our patented WilMatch algorithm presents you with a curated rotation of scientifically selected Wils tailored to your focusing needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Stare Deeply',
    description: 'Lock eyes with your designated Wil. Let the outside world fade away. There is only Wil now. You and Wil are one.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Achieve WilPower',
    description: 'Experience up to 200 minutes of maximum WilPower. We don\'t recommend exceeding this limit, as people may start to ask questions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" ref={ref} className="py-20 sm:py-28 bg-navy-800/30">
      <div className="section-container">
        <p className="text-amber-400 font-medium text-sm tracking-widest uppercase text-center mb-3">
          The Process
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          Three simple steps stand between you and a life-changing relationship with Wil-based productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`glass-card p-8 text-center transition-all duration-700 hover:bg-white/10 hover:scale-[1.02] ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : '0ms' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 mb-6">
                {step.icon}
              </div>
              <p className="text-amber-400/60 text-xs font-bold tracking-widest mb-2">
                STEP {step.number}
              </p>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
