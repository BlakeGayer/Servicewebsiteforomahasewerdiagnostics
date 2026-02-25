import { Link } from 'react-router-dom';
import { Camera, Scissors, MapPin, Shield, Users, CheckCircle, Phone, MessageSquare } from 'lucide-react';

export function Home() {
  const services = [
    {
      icon: Camera,
      title: 'Sewer Camera Inspections',
      description: 'Clear video documentation of your sewer line condition, from inside to outside.',
    },
    {
      icon: Scissors,
      title: 'Root Cutting / Descaling',
      description: 'Remove roots and buildup to restore proper flow and improve inspection visibility.',
    },
    {
      icon: MapPin,
      title: 'Sewer Line Locating',
      description: 'Pinpoint the exact location and depth of your sewer line for planning and repairs.',
    },
  ];

  const trustSignals = [
    {
      icon: Shield,
      title: 'Diagnostics Only',
      description: 'We don\'t sell repairs or replacements—just honest, unbiased information.',
    },
    {
      icon: Users,
      title: 'Locally Owned & Operated',
      description: 'Owner-operated business serving the Omaha metro area since 2025.',
    },
    {
      icon: CheckCircle,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Clear, Honest Sewer Diagnostics for Omaha Homes
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get accurate information about your sewer line condition—without the sales pressure.
              Locally owned, diagnostics-only service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17123044216"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (712) 304-4216
              </a>
              <a
                href="sms:+17123044216"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional sewer diagnostics to help you understand your sewer line condition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More About Our Services
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We work with homeowners, home buyers and sellers, real estate agents, and
              home inspectors throughout the Omaha metro area—with a special focus on
              older homes common in our community.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're purchasing a home, experiencing sewer issues, or need clear
              documentation for a transaction, we provide the clarity you need to make
              informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honest diagnostics you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <signal.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {signal.title}
                </h3>
                <p className="text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Clear Answers About Your Sewer Line?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's talk about your needs. No pressure, just honest information.
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