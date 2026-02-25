import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-start text-left hover:bg-gray-50 transition-colors px-4 sm:px-0"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 px-4 sm:px-0">
          {Array.isArray(answer) ? (
            <div className="space-y-4">
              {answer.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-700">{answer}</p>
          )}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need a sewer inspection?',
      answer: [
        'A sewer inspection is a good idea if you\'re buying an older home, experiencing drainage issues, or want peace of mind about your sewer line condition.',
        'Many home buyers request sewer inspections during the due diligence period, especially for homes built before 1980. It\'s also helpful if you\'ve noticed slow drains, gurgling sounds, or frequent backups.',
        'Even if everything seems fine, an inspection can help you understand the current condition and plan for future maintenance.',
      ],
    },
    {
      question: 'What does a sewer camera inspection show?',
      answer: [
        'A sewer camera inspection provides a clear video view of the inside of your sewer line from your home to the city connection.',
        'We can identify cracks, breaks, root intrusion, bellies (sagging sections), offset joints, corrosion, and buildup. You\'ll see exactly what we see, and we\'ll explain it in plain language.',
        'You\'ll receive a copy of the inspection video for your records and to share with contractors if repairs are needed.',
      ],
    },
    {
      question: 'How long does an inspection take?',
      answer: 'Most sewer camera inspections take 1-2 hours depending on the length of your sewer line and accessibility. Root cutting or descaling may add time depending on the severity. Sewer line locating typically takes 30 minutes to 1 hour. We\'ll give you a time estimate when you schedule.',
    },
    {
      question: 'What happens if you find an issue?',
      answer: [
        'If we find an issue, we\'ll explain exactly what we see, what it means, and what options you have.',
        'Because we don\'t sell repairs, you can trust that our assessment is unbiased. We\'ll provide you with clear documentation and information so you can get quotes from licensed plumbers or contractors.',
        'There\'s no pressure—just honest information to help you make the best decision for your situation.',
      ],
    },
    {
      question: 'Is this service used in real estate transactions?',
      answer: [
        'Yes, sewer inspections are commonly requested during home purchases, especially for older homes. Many buyers include a sewer inspection contingency in their offer.',
        'We work with home buyers, sellers, real estate agents, and home inspectors to provide clear documentation of sewer line condition before closing.',
        'Our diagnostics-only approach means both parties can trust the inspection results without concerns about upselling repairs.',
      ],
    },
    {
      question: 'Will you try to sell me repairs?',
      answer: [
        'No. We do not sell plumbing repairs or replacements—that\'s our commitment.',
        'Our only job is to diagnose and document the condition of your sewer line. If repairs are needed, we\'ll help you understand what\'s required and provide clear documentation you can share with contractors for quotes.',
        'This approach allows us to provide completely unbiased, honest information you can trust.',
      ],
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the greater Omaha metro area and surrounding communities. If you\'re not sure whether we cover your area, just give us a call—we\'re happy to discuss your location.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, Omaha Sewer Diagnostics is fully licensed and insured. We maintain all required licenses and carry comprehensive liability insurance for your peace of mind.',
    },
    {
      question: 'How do I schedule a service?',
      answer: 'The easiest way is to call or text us at (712) 304-4216. You can also fill out our contact form, and we\'ll get back to you promptly. We\'ll discuss your needs, answer any questions, and schedule a convenient time.',
    },
    {
      question: 'What should I expect on the day of service?',
      answer: [
        'We\'ll arrive on time and introduce ourselves. We\'ll explain the process, locate the access point to your sewer line (usually a cleanout), and begin the inspection.',
        'You\'re welcome to watch the inspection in real-time on our monitor—we\'ll explain what we\'re seeing as we go. When finished, we\'ll provide a summary, answer your questions, and give you a copy of the recording.',
        'The process is straightforward and informative, with no pressure or sales tactics.',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700">
            Clear answers to common questions about our sewer diagnostic services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We're here to help. Give us a call or send us a message, and we'll be happy
            to answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17123044216"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (712) 304-4216
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}