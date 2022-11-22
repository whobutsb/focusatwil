const faqs = [
  {
    question: 'How is it scientifically tested?',
    answer: <p>We've worked with highly regard trained Wil observers since the beginning of our site. <br /><br /> Essentially we have tested every possible variation of Wil to other types of Wils to and measure the effect of on the brain, heart-rate, and tracked alongside personal reportings to ensure our hypothesis of can validated.</p>
  },
  {
    question: 'How long does it take to work?',
    answer: <p>The Wil's you focus on in our service is intended to get you in a state of maximum WilPower.  You can begin focusing on Wil immediately and keep you at the maxium state of willingness for up to 200 minutes.  Although we don't recommend going beyond that because people may start to ask questions.</p>
  },
  {
    question: 'Can I track my focus progress?',
    answer: "Coming Soon to a site near you we will be offering the willing a way track their focus on Wil."
  },
  {
    question: 'Do I need to wear headphones when using Focus@Wil?',
    answer: <p>Your choice of head gear is completely up to you!  Bicycle helmet, fedora, beanie, sunglasses, or fake mustache are all acceptable forms of accessories when focusing on Wil. Let yourself get lost in Wil's eyes and let your mind drift on the adventures you could have together.</p>
  },
];
function FAQ() {
  return(
    <section class="grid grid-cols-1 gap-y-3 divide-y">
      { faqs.map(faq => 

      <details class="group py-1 text-lg">

        <summary class="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
          { faq.question }
          <svg class="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <p class="text-gray-500">
          { faq.answer }
        </p>
      </details>
      ) }
    </section>
  )
}

export default FAQ;
