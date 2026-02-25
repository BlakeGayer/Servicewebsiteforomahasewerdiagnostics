import { Link } from 'react-router-dom';
import { Heart, Eye, Shield, MessageCircle, Phone } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Honesty',
      description: 'Diagnostics only—no upselling, no pressure, just the facts.',
    },
    {
      icon: MessageCircle,
      title: 'Clarity',
      description: 'Simple explanations with minimal jargon so you understand exactly what we find.',
    },
    {
      icon: Eye,
      title: 'Quality',
      description: 'Thorough, accurate inspections using professional equipment and techniques.',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'We treat every home as our own and provide the same service we\'d want for ourselves.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Omaha Sewer Diagnostics
          </h1>
          <p className="text-xl text-gray-700">
            A locally owned, owner-operated company built on trust, transparency, and accuracy.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Omaha Sewer Diagnostics was founded in 2025 with a simple mission: provide
              homeowners and real estate professionals with clear, honest information about
              residential sewer lines—without the sales pressure.
            </p>
            <p>
              As a locally owned and owner-operated business, we saw a need in the Omaha
              market for an independent sewer diagnostics service that focuses solely on
              inspections and information—not repairs or replacements.
            </p>
            <p>
              We serve homeowners throughout the Omaha metro area, with a special focus on
              the older homes that are common in our community. These homes often have
              unique sewer concerns, and we believe homeowners deserve clear, accurate
              diagnostics to make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Diagnostics Only */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Diagnostics Only?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              We made a deliberate choice not to sell plumbing repairs or replacements.
              This allows us to provide unbiased, honest inspections without any conflict
              of interest.
            </p>
            <p>
              When you work with us, you can trust that our recommendations are based
              solely on what we find—not on what we can sell you. We'll document the
              condition of your sewer line, explain what we see, and provide you with
              clear information to make the best decision for your situation.
            </p>
            <p>
              If repairs are needed, we'll help you understand what's required, but we'll
              never pressure you or exaggerate the issue. Our job is to give you the facts
              so you can move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700">
                Provide clear, honest sewer diagnostics so homeowners and real estate
                professionals can understand the condition of their sewer lines and make
                informed decisions without pressure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700">
                Become a trusted, long-term resource for residential sewer inspections in
                the Omaha metro area, known for transparency, reliability, and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Licensed & Insured
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Omaha Sewer Diagnostics is fully licensed and insured, giving you peace of
            mind when we work on your property. We maintain all required licenses and
            carry comprehensive liability insurance.
          </p>
          <p className="text-lg text-gray-700">
            We're committed to professionalism, safety, and quality in every inspection
            we perform.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your sewer diagnostics needs. We're here to help.
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