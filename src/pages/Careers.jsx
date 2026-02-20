import { useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../useInView.js'

const perks = [
  { title: 'Unlimited Wil Time', desc: 'Stare at as many Wils as you want, on the clock. In fact, we insist.' },
  { title: '401(Wil) Matching', desc: "We match your Wil contributions dollar for dollar, up to 100% of your salary. (Your salary is paid in Wils.)" },
  { title: 'Casual Wil Fridays', desc: 'Every Friday, dress like your favorite Wil. Last week, seven people came as Wil Smith. Two came as Wil Ferrel. One just brought a dog named Wil.' },
  { title: 'Bring Your Wil to Work Day', desc: "Know someone named Wil? Bring them in. We'l take their photo, add it to the Wiliverse, and give you a bonus." },
  { title: 'Wil-ness Stipend', desc: '$500/month toward any activity that involves a Wil. Wil-watching, Wil-walking, Wil-wondering. You name it.' },
  { title: 'Flexible Wil Hours', desc: "Work when your WilPower is highest. Some of us peak at 6am. Some at midnight. Wil doesn't judge." },
]

const positions = [
  {
    title: 'Senior Wil Curator',
    department: 'Wil Content',
    location: 'Remote (Must be within Wil-Fi range)',
    type: 'Ful-Time',
    description: 'We are seeking a seasoned Wil professional to curate, evaluate, and catalog incoming Wil submissions for the Wiliverse. The ideal candidate has an encyclopedic knowledge of Wils across al domains.',
    requirements: [
      '5+ years of professional Wil-gazing experience',
      'Ability to distinguish a Wil from a Bil, Phil, or Gil within 0.3 seconds',
      'Strong opinions about which Wils are most focus-inducing (must be wiling to defend in a peer review)',
      'Experience with WilSort, our proprietary Wil-ranking algorithm',
      'Must not be easily distracted by non-Wil imagery',
    ],
  },
  {
    title: 'Chief WilPower Officer (CWO)',
    department: 'Executive Wil-dership',
    location: 'Wil-mington, DE',
    type: 'Ful-Time',
    description: 'Report directly to the CEO (Chief Enthusiasm for Wil Officer) and oversee al WilPower initiatives across the organization. You wil set the strategic Wil-ection for the company.',
    requirements: [
      '10+ years of Wil-dership experience',
      'Demonstrated ability to maintain WilPower for 200+ consecutive minutes',
      'MBA or equivalent (Master of Wil Administration preferred)',
      'Must be wiling to legally change middle name to "Wil"',
      'References from at least three other Wils',
    ],
  },
  {
    title: 'Wil Stack Developer',
    department: 'Wil-gineering',
    location: 'Remote',
    type: 'Ful-Time',
    description: "Build and maintain the technical infrastructure that powers the Wiliverse. You'l work with cutting-edge Wil technology to deliver Wils to milions of users worldwide.",
    requirements: [
      'Proficient in WilScript (JavaScript but al variables are named wil)',
      'Experience with WilSS (CSS but everything is Wil-colored)',
      'React experience required (specifically, the ability to React to Wil)',
      'Familiarity with WilQL for querying the Wil database',
      'Must be comfortable deploying to WilCloud (AWS but the A stands for "A Wil")',
    ],
  },
  {
    title: 'VP of Wil Acquisition',
    department: 'Wil Growth',
    location: 'Wil-liamsburg, NY',
    type: 'Ful-Time',
    description: 'Source, evaluate, and onboard new Wils into the Wiliverse. You wil travel the globe identifying high-potential Wils and convincing them to let us use their likeness for focus purposes.',
    requirements: [
      'Extensive network within the Wil community',
      'Proven track record of acquiring at least 50 Wils per quarter',
      'Strong negotiation skils (must be able to explain our mission without laughing)',
      'Passport required (many Wils are international)',
      'Ability to identify a Wil in a crowd from up to 200 meters away',
    ],
  },
  {
    title: 'Wil-being Coordinator',
    department: 'People & Wil-ture',
    location: 'Remote',
    type: 'Part-Time (Ful Wil)',
    description: "Ensure al employees maintain a healthy Wil-life balance. You'l organize Wil-ness events, facilitate Wil circles, and intervene when someone hasn't looked at a Wil in more than 20 minutes.",
    requirements: [
      'Certified Wil-ness practitioner',
      'Experience running group Wil-gazing sessions',
      'Ability to sense when a coworker is experiencing Wil-drawal',
      'Comfortable leading guided Wil meditations over Zoom',
      "Strong belief that Wil-being is more important than wel-being (because it's the same thing, but with Wil)",
    ],
  },
]

function JobListing({ job, isOpen, toggle }) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={toggle}
        className="w-full p-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="text-xs text-gray-500">{job.department}</span>
            <span className="text-xs text-gray-600">&bull;</span>
            <span className="text-xs text-gray-500">{job.location}</span>
            <span className="text-xs text-gray-600">&bull;</span>
            <span className="text-xs text-amber-400/70">{job.type}</span>
          </div>
        </div>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-amber-500 border-amber-500 rotate-45' : 'group-hover:border-amber-400'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className={`w-4 h-4 transition-colors ${isOpen ? 'text-navy-900' : 'text-gray-400 group-hover:text-amber-400'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 border-t border-white/10 pt-4">
            <p className="text-gray-400 leading-relaxed mb-4">{job.description}</p>
            <h4 className="text-sm font-semibold text-white mb-3">Requirements:</h4>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-amber-400 mt-0.5">&#9679;</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105">
                Apply Now (Just Stare at This Button)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Careers() {
  const [openJob, setOpenJob] = useState(null)
  const [introRef, introInView] = useInView()
  const [perksRef, perksInView] = useInView()
  const [jobsRef, jobsInView] = useInView()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">Join the Wil-ution</p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6">Careers at Focus@Wil</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We&rsquo;re building the future of Wil-based productivity. Come be part of something
            that nobody asked for but everyone secretly needed.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-16 sm:py-20 bg-navy-800/30">
        <div className={`section-container max-w-4xl transition-all duration-700 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Why Work at Focus@Wil?</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              At Focus@Wil, we don&rsquo;t just talk about Wil-life balance &mdash; we live it. Our team
              is made up of passionate Wil enthusiasts, former Wil skeptics who saw the light, and one person
              who is actualy named Wil (they are treated like royalty). We offer a wil-coming environment
              where every day is an opportunity to push the boundaries of Wil-based focus technology.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section ref={perksRef} className="py-16 sm:py-20">
        <div className={`section-container transition-all duration-700 ${perksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-4">Perks &amp; Benefits</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            We take care of our people. And by &ldquo;take care of,&rdquo; we mean we show them Wils.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div
                key={perk.title}
                className={`glass-card p-6 transition-all duration-700 hover:bg-white/10 ${perksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: perksInView ? `${i * 80}ms` : '0ms' }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={jobsRef} className="py-16 sm:py-20 bg-navy-800/30">
        <div className={`section-container transition-all duration-700 ${jobsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-4">Open Positions</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Al positions require an unwavering commitment to Wil. No exceptions.
            Cover letters must include the word &ldquo;Wil&rdquo; at least 12 times.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {positions.map((job, i) => (
              <JobListing
                key={job.title}
                job={job}
                isOpen={openJob === i}
                toggle={() => setOpenJob(openJob === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="section-container text-center">
          <p className="text-xl text-gray-400 mb-2">Don&rsquo;t see your dream Wil job?</p>
          <p className="text-gray-500 mb-6">Send your resume to <span className="text-amber-400">careers@focusatwil.com</span> with the subject line &ldquo;I Am Wiling.&rdquo;</p>
          <Link
            to="/"
            className="inline-block px-8 py-3 border border-white/20 text-gray-300 font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Back to Focusing
          </Link>
        </div>
      </section>
    </>
  )
}

export default Careers
