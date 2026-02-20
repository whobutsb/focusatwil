import { useState } from 'react'
import useInView from './useInView.js'

const faqs = [
  {
    question: 'How is it scientifically tested?',
    answer: "We've worked with highly regarded, trained Wil observers since the very beginning. We've tested every possible variation of Wil against other types of Wils and measured the effect on brain activity, heart rate, and personal well-being to ensure our hypothesis is validated. The results were staggering. Mostly because we staggered out of the lab in disbelief.",
  },
  {
    question: 'How long does it take to work?',
    answer: "The Wils in our service are designed to get you into a state of maximum WilPower immediately. You can maintain peak willingness for up to 200 minutes. We don't recommend exceeding this limit, as people around you may start to ask questions you're not prepared to answer.",
  },
  {
    question: 'Can I track my focus progress?',
    answer: "Coming soon! We're building a proprietary WilTracker dashboard that monitors your Wil engagement metrics, focus streaks, and cumulative WilPower score. Early beta testers have described it as 'life-changing' and 'the reason I got fired.'",
  },
  {
    question: 'Do I need to wear headphones?',
    answer: "Your choice of headgear is entirely up to you. Bicycle helmets, fedoras, beanies, sunglasses, and fake mustaches are all acceptable accessories when focusing on Wil. Let yourself get lost in Wil's eyes and let your mind drift to the adventures you could have together.",
  },
  {
    question: 'Is Focus@Wil free?',
    answer: "Focusing on Wil is a fundamental human right. Our service is completely free, funded entirely by the good Wil of the Wiliverse community. If you'd like to support us, simply tell three friends about Wil. Or don't. Wil already knows.",
  },
  {
    question: 'Can I submit my own Wil?',
    answer: "Absolutely! The Wiliverse is always expanding. Head to our GitHub repository and submit a pull request with your Wil. All Wils are subject to our rigorous peer-review process, which consists of looking at the Wil for at least 45 seconds and saying 'yeah, that's a Wil.'",
  },
]

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-amber-400 transition-colors pr-4">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-amber-500 border-amber-500 rotate-45' : 'group-hover:border-amber-400'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
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
          <p className="pb-5 text-gray-400 leading-relaxed pr-12">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      aria-label="Frequently Asked Questions"
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          faq={faq}
          index={idx}
          isOpen={openIndex === idx}
          toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </section>
  )
}

export default FAQ
