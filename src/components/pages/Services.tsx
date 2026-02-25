import { Link } from 'react-router-dom';
import { Camera, Scissors, MapPin, Clock, DollarSign, CheckCircle, Phone } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Sewer Camera Inspections',
      description: 'Get a clear view of your sewer line condition from inside your home to the city connection.',
      whatItIs: [
        'High-definition video camera inspection of your entire sewer line',
        'Recording provided for your records',
        'Detailed explanation of what we find',
        'Photo and video documentation of any issues',
      ],
      whoItsFor: [
        'Home buyers wanting to know the condition before purchase',
        'Homeowners experiencing slow drains or backups',
        'Sellers providing transparency to buyers',
        'Real estate agents and home inspectors needing documentation',
        'Homeowners with older homes seeking peace of mind',
      ],
      whatToExpect: [
        'Typically takes 1-2 hours depending on line length and accessibility',
        'We\'ll explain everything we see in real-time',
        'You\'ll receive a copy of the video inspection',
        'Clear, jargon-free summary of findings',
      ],
    },
    {
      icon: Scissors,
      title: 'Root Cutting / Descaling',
      description: 'Remove roots and buildup to restore proper flow and improve visibility during inspections.',
      whatItIs: [
        'Mechanical removal of tree roots that have entered the sewer line',
        'Cleaning of scale, grease, and buildup inside pipes',
        'Restoration of proper flow and drainage',
        'Improved visibility for accurate camera inspections',
      ],
      whoItsFor: [
        'Homeowners with mature trees near sewer lines',
        'Properties experiencing slow drainage or frequent backups',
        'Pre-inspection cleaning to get a clear view of pipe condition',
        'Maintenance to extend the life of existing sewer lines',
      ],
      whatToExpect: [
        'Usually completed in 1-3 hours depending on severity',
        'We\'ll explain what we\'re removing and why',
        'Often performed before or during a camera inspection',
        'Noticeable improvement in drainage',
      ],
    },
    {
      icon: MapPin,
      title: 'Sewer Line Locating',
      description: 'Pinpoint the exact location and depth of your sewer line for planning, repairs, or documentation.',
      whatItIs: [
        'Electronic locating of your sewer line path',
        'Depth measurement at key points',
        'Marking of the line on your property',
        'Documentation for planning or repair work',
      ],
      whoItsFor: [
        'Homeowners planning landscaping or construction projects',
        'Property owners preparing for sewer repairs or replacement',
        'Real estate professionals documenting property features',
        'Anyone needing to know exactly where their sewer line runs',
      ],
      whatToExpect: [
        'Typically takes 30 minutes to 1 hour',
        'Line is marked with flags or spray paint (your choice)',
        'Depth measurements provided at requested locations',
        'Clear map or diagram if needed',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700">
            Professional sewer diagnostics to give you clear, accurate information about
            your sewer line condition.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? 'py-16 sm:py-24' : 'bg-gray-50 py-16 sm:py-24'}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-4">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {service.title}
              </h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-12">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* What It Is */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What It Is
                </h3>
                <ul className="space-y-3">
                  {service.whatItIs.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It's For */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Who It's For
                </h3>
                <ul className="space-y-3">
                  {service.whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {service.whatToExpect.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Philosophy */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <DollarSign className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Transparent Pricing
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              We believe in straightforward, honest pricing with no hidden fees or
              surprise charges. When you call, we'll discuss your specific needs and
              provide clear pricing information upfront.
            </p>
            <p>
              Pricing varies based on the service, property size, and accessibility.
              We're happy to answer any questions and help you understand what to expect.
            </p>
            <p className="font-medium text-gray-900">
              Contact us for a quote tailored to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Schedule a Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss which service is right for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17123044216"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (712) 304-4216
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-lg"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}