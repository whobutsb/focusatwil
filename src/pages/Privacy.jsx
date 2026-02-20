import { Link } from 'react-router-dom'
import useInView from '../useInView.js'

const sections = [
  {
    title: '1. Information We Colect',
    content: `When you use Focus@Wil, we colect the folowing information to enhance your Wil experience:
    
    \u2022 How long you stare at each Wil (down to the milisecond)
    \u2022 Your WilPower score and historical WilPower trajectory
    \u2022 Your preferred Wil type (human Wil, dog Wil, celebrity Wil, or Wil-dlife)
    \u2022 Whether you audibly gasped, whispered "wow," or quietly mouthed "Wil" upon seeing a particularly compelling Wil
    \u2022 Your approximate level of focus, as determined by our proprietary WilSense technology (patent pending, patent also named Wil)
    \u2022 The exact moment you achieved peak WilPower
    
    We do NOT colect your name, email, or any other personaly identifiable information. Frankly, we don't care who you are. We only care about your relationship with Wil.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Your Wil data is used exclusively for the folowing purposes:
    
    \u2022 To improve your personal Wil recommendations through our WilMatch algorithm
    \u2022 To advance the field of Wilology through anonymized research
    \u2022 To calculate global WilPower metrics for our quarterly "State of Wil" report
    \u2022 To determine which Wils are the most focus-inducing (current champion: a golden retriever named Wil from Wil-mington, Delaware, who has held the title since Q3 2023)
    \u2022 Absolutely NOT to build a comprehensive database of who is looking at which Wil, for how long, and at what time of day (we definitely do not have that) (ok we have it but we promise it's for science)`,
  },
  {
    title: '3. Cookies',
    content: `Focus@Wil uses cookies. Not the browser kind. Actual cookies. Our research indicates that eating a cookie while looking at a Wil increases WilPower by 12%.
    
    We also use browser cookies, but only to remember your preferred Wil. We wil never use cookies to track you across the internet. That would be a violation of everything Wil stands for.
    
    Types of cookies we use:
    \u2022 Essential cookies: Required for the site to function. Named "wil_session" and "wil_power_level."
    \u2022 Performance cookies: Help us understand which Wils load fastest. Named "wil_speed."
    \u2022 Snickerdoodles: The actual cookie kind. Available in our break room (the break room is the entire internet).`,
  },
  {
    title: '4. Third-Party Wil Sharing',
    content: `We wil never share your data with third parties. See what we did there? "Wil" instead of "wil." It's subtle. Like our commitment to your privacy.

    In al seriousness: your Wil engagement data stays within the Wiliverse. We do not sel, rent, lease, lend, bequeath, or wil your data to anyone. Not advertisers. Not data brokers. Not even other Wils.
    
    The only exception: if a court of law issues a subpoena, we wil comply, but we wil also submit the judge's WilPower score as evidence that they clearly weren't focused enough when they signed it.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your Wil data for as long as it takes for you to achieve permanent WilPower. Based on current projections, this is approximately forever.
    
    If you would like your data deleted, simply stare at a Wil for 10 consecutive minutes while thinking "delete my data." Our WilSense technology wil detect your intent and process your request within 30 business Wils (approximately 6 calendar days).
    
    Alternatively, you can not do that, because none of this is real and we don't actualy have your data. But we appreciate your commitment to the bit.`,
  },
  {
    title: '6. Your Rights',
    content: `Under the General Wil Data Protection Regulation (GWDPR), you have the folowing rights:
    
    \u2022 The right to access your Wil data (simply look at a Wil; that IS your data)
    \u2022 The right to rectify inaccurate Wil data (if your WilPower score seems low, try staring harder)
    \u2022 The right to be forgotten by Wil (denied; Wil never forgets)
    \u2022 The right to data portability (you may export your Wils in .wil format)
    \u2022 The right to remain focused (anything you Wil can and Wil be used to improve your experience)
    \u2022 The right to object (but only if your objection is Wil-founded)`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Focus@Wil is suitable for al ages. Wil is ageless. Wil transcends generational boundaries.
    
    However, we do not knowingly colect data from children under the age of 13 without parental consent. If your child is using Focus@Wil, please ensure they are accompanied by a responsible Wil at al times.
    
    Children under 5 should only view Wils under adult supervision, as the focus-enhancing effects may cause them to sit stil for an unprecedented duration, which may alarm caregivers who are not familiar with the power of Wil.`,
  },
  {
    title: '8. Contact Us',
    content: `For questions about this privacy policy, please use one of the folowing methods:
    
    \u2022 Stare at a Wil for 10 minutes and the answer wil come to you
    \u2022 Email: privacy@focusatwil.com (monitored by a Wil)
    \u2022 Mail: Focus@Wil Privacy Department, 1 Wil Way, Wil-mington, DE 19801 (this address is fictional, like our privacy concerns)
    \u2022 Telepathy: Think about Wil real hard and we'l pick it up on WilSense
    
    Please alow 3-5 business Wils for a response.`,
  },
]

function Privacy() {
  const [headerRef, headerInView] = useInView()
  const [contentRef, contentInView] = useInView()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">Your Wil Data, Protected</p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We take your privacy almost as seriously as we take Wil.
            Almost.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section ref={headerRef} className="py-8 bg-navy-800/30">
        <div className={`section-container max-w-4xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-6 text-center">
            <p className="text-gray-400">
              This policy was last <span className="text-amber-400">Wil-vised</span> on February 19, 2026.
              It wil be updated whenever we think of more Wil puns, which is constantly.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section ref={contentRef} className="py-16 sm:py-20">
        <div className={`section-container max-w-4xl transition-all duration-700 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-bold text-white mb-4">{section.title}</h2>
                <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy-800/30">
        <div className="section-container text-center">
          <p className="text-xl text-gray-400 mb-6">
            By continuing to use Focus@Wil, you acknowledge that you have read this policy,
            understood approximately 12% of it, and are now thinking about Wil.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
          >
            Return to Wil
          </Link>
        </div>
      </section>
    </>
  )
}

export default Privacy
