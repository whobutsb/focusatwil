import { Link } from 'react-router-dom'
import useInView from '../useInView.js'

const articles = [
  {
    number: 'I',
    title: 'Acceptance of Terms',
    content: `By visiting Focus@Wil, you hereby acknowledge, affirm, and solemnly swear the folowing:

    (a) That Wil is the superior form of focus enhancement, surpassing al known alternatives including but not limited to: lo-fi hip hop beats, white noise, brown noise, pink noise, and that app where it rains on a window for $4.99/month.

    (b) That you enter the Wiliverse of your own free Wil.

    (c) That you wil not hold Focus@Wil liable for any sudden, overwhelming, or life-altering focus that may result from exposure to Wil.

    (d) That you have read this entire sentence without looking at a Wil, which means you are already losing focus. Go look at a Wil immediately, then come back.`,
  },
  {
    number: 'II',
    title: 'Wil Definitions',
    content: `For the purposes of these Terms, the folowing definitions apply:

    "Wil" — Any person, animal, or entity whose name is Wil, or who identifies as Wil-adjacent. This includes but is not limited to: Wil Smith, Wil Ferrel, Wil Wheaton, Wil.i" for short), dogs named Wil, cats named Wil, and one particularly focused goldfish named Wil who lives in our Wil-mington office.

    "WilPower" — The measurable cognitive enhancement achieved through sustained Wil exposure. Measured in WilUnits (WU), where 1 WU = the focus equivalent of one minute of uninterrupted Wil-gazing.

    "Wiliverse" — The colective body of al Wil imagery, Wil data, and Wil-related content hosted on Focus@Wil. The Wiliverse is ever-expanding, much like the actual universe, but more focused.

    "Wil-ingness" — The state of being receptive to Wil. A prerequisite for achieving WilPower.

    "Good Wil" — The positive energy generated when one person shares a Wil with another. Also an accounting term, but we prefer our definition.

    "Free Wil" — (a) The philosophical concept that one can choose their own Wil. (b) Also a movie about a whale, which is basicaly a very large aquatic Wil.

    "Wil-drawal" — The uncomfortable sensation experienced when separated from Wil for more than 20 minutes. Symptoms include: reduced focus, existential dread, and googling "pictures of Wil."`,
  },
  {
    number: 'III',
    title: 'Acceptable Use',
    content: `You MAY use Focus@Wil for the folowing purposes:

    \u2022 Focusing on Wil
    \u2022 Staring at Wil
    \u2022 Light meditation involving Wil
    \u2022 Building your personal relationship with Wil
    \u2022 Sharing Wil with friends, family, and reluctant coworkers
    \u2022 Using Wil as your desktop background, phone wallpaper, or profile picture
    \u2022 Printing a Wil and framing it above your desk (encouraged)

    You may NOT use Focus@Wil for:

    \u2022 Evil
    \u2022 Focusing on non-Wil content (this defeats the entire purpose)
    \u2022 Operating heavy machinery (unless the machinery is named Wil)
    \u2022 Commercial redistribution of Wils without express written consent of the Wil
    \u2022 Creating a competing service caled "Focus@Bil" (we wil find out, and we wil be disappointed)
    \u2022 Claiming that you invented Wil-based focus technology (we have the patent, and the patent's name is Wil)`,
  },
  {
    number: 'IV',
    title: 'Limitation of Wil-ability',
    content: `Focus@Wil and its subsidiaries, affiliates, officers, directors, employees, Wils, and Wil-adjacent entities shal not be held liable for any of the folowing:

    \u2022 Sudden, unexplained bursts of productivity
    \u2022 An inability to focus on anything that is not Wil
    \u2022 Spontaneous urges to name your children, pets, or houseplants "Wil"
    \u2022 A growing conviction that everyone you meet should be named Wil
    \u2022 Completing work projects ahead of schedule and not knowing what to do with the extra time
    \u2022 Your boss asking "what's gotten into you?" and you being unable to explain without showing them a Wil
    \u2022 Loss of interest in al non-Wil-based focus methods
    \u2022 The realization that you've been staring at a Wil for three hours and missed two meetings
    
    IN NO EVENT SHALL OUR TOTAL WIL-ABILITY EXCEED THE AMOUNT YOU PAID FOR THE SERVICE, WHICH IS $0.00, BECAUSE WIL IS FREE. FREE WIL.`,
  },
  {
    number: 'V',
    title: 'Wil-drawal Policy',
    content: `There is no Wil-drawal policy because there is no Wil-drawal. Once you begin focusing on Wil, you cannot stop. This is not a bug. This is a feature. This is, in fact, the primary feature.

    If you believe you are experiencing Wil-drawal, please take the folowing steps:

    1. Open Focus@Wil immediately
    2. Select any Wil (they are al effective)
    3. Stare at the Wil for a minimum of 5 minutes
    4. Notice how the Wil-drawal symptoms disappear instantly
    5. Wonder why you ever stopped looking at Wil in the first place
    6. Question your life choices that led to a period without Wil
    7. Resolve to never let it happen again
    8. Bookmark Focus@Wil (you should have done this at step 1)

    If symptoms persist, increase your Wil dosage. There is no upper limit. Wil is not regulated by the FDA because the FDA has not yet recognized Wil as a controlled substance (we're working on it, but in the opposite direction).`,
  },
  {
    number: 'VI',
    title: 'Intelectual Wil-operty',
    content: `Al content on Focus@Wil, including but not limited to Wil images, Wil descriptions, Wil metadata, and the concept of focusing on Wil itself, is the intelectual property of Focus@Wil, LLC (a Limited Wil-ability Company).

    The folowing trademarks are owned by Focus@Wil:

    \u2022 Focus@Wil\u2122
    \u2022 WilPower\u2122
    \u2022 Wiliverse\u2122
    \u2022 WilTracker\u2122
    \u2022 WilMatch\u2122
    \u2022 "Where There's a Wil, There's a Way to Focus"\u2122
    \u2022 "Wil You Focus Today?"\u2122
    
    Unauthorized use of these marks wil result in a strongly worded letter from our legal team (our legal team is one person named Wil).`,
  },
  {
    number: 'VII',
    title: 'Governing Law',
    content: `These Terms shal be governed by and construed in accordance with the laws of WilPower, a sovereign nation located entirely within your prefrontal cortex.

    Any disputes arising from these Terms shal be resolved through binding Wil-bitration, a process in which both parties stare at a Wil until one of them forgets what they were arguing about. Historical resolution rate: 100%.

    In the event that Wil-bitration fails (it won't), disputes wil be escalated to the Supreme Court of Wil, which consists of nine justices, al named Wil, who rule exclusively on Wil-related matters.

    The official language of al legal proceedings shal be Wil-ish (English, but every "will" is replaced with "wil").`,
  },
  {
    number: 'VIII',
    title: 'Amendments',
    content: `We reserve the right to amend these Terms at Wil.

    That's it. That's the whole section. We can change anything, anytime, for any reason, as long as it involves Wil. You wil be notified of changes by a subtle feeling in your prefrontal cortex that something about Wil has shifted.

    Your continued use of Focus@Wil after any amendments constitutes your acceptance of the new Terms, your continued devotion to Wil, and your tacit admission that this is the most entertaining Terms of Service you've ever read.`,
  },
]

function Terms() {
  const [headerRef, headerInView] = useInView()
  const [contentRef, contentInView] = useInView()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">The Fine Print</p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6">Terms of Wil</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully. Just kidding &mdash; nobody reads terms of service.
            But these ones are actualy funny, so you might want to.
          </p>
        </div>
      </section>

      {/* Preamble */}
      <section ref={headerRef} className="py-8 bg-navy-800/30">
        <div className={`section-container max-w-4xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-6">
            <p className="text-gray-400 text-center">
              <span className="text-amber-400 font-semibold">EFFECTIVE DATE:</span> The moment you first
              laid eyes on a Wil.{' '}
              <span className="text-amber-400 font-semibold">EXPIRATION DATE:</span> When the sun
              burns out, or when we run out of Wil puns. Whichever comes last.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section ref={contentRef} className="py-16 sm:py-20">
        <div className={`section-container max-w-4xl transition-all duration-700 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-12">
            {articles.map((article) => (
              <div key={article.number}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-amber-400/40 font-display text-5xl font-bold">{article.number}</span>
                  <h2 className="font-display text-2xl font-bold text-white">{article.title}</h2>
                </div>
                <div className="text-gray-400 leading-relaxed whitespace-pre-line pl-0 sm:pl-16">
                  {article.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 sm:py-20 bg-navy-800/30">
        <div className="section-container max-w-4xl text-center">
          <div className="glass-card p-8">
            <p className="text-gray-400 mb-4">
              By scrolling this far, you have legaly agreed to al of the above.
              You have also demonstrated remarkable focus, which means Focus@Wil is already working.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Signed,<br />
              <span className="text-white font-display text-lg">The Focus@Wil Legal Department</span><br />
              <span className="text-amber-400 text-xs">(One person named Wil with a notary stamp)</span>
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
            >
              I Accept These Terms (Wil-ingly)
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Terms
