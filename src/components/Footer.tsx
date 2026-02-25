import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/861a3c472eaa49a39c22b368fb8bf20869a42f67.png';
import qrCode from 'figma:asset/19c0047b7aa266b51ccd7403fb536985ffbf0627.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Omaha Sewer Diagnostics" 
              className="h-10 sm:h-12 w-auto"
            />
            <p className="text-sm mb-4">
              Locally owned and operated. Providing honest, unbiased sewer diagnostics
              for Omaha homeowners and real estate professionals.
            </p>
            <p className="text-sm">
              Licensed & Insured
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+17123044216"
                    className="text-sm hover:text-white transition-colors"
                  >
                    (712) 304-4216
                  </a>
                  <p className="text-xs text-gray-400">Call or Text</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:omahasewerdiagnostics@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  omahasewerdiagnostics@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Serving Omaha & Surrounding Areas
                </span>
              </li>
            </ul>
          </div>

          {/* Google QR Code */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Find Us on Google</h3>
            <div className="bg-white p-3 rounded-lg inline-block">
              <img 
                src={qrCode} 
                alt="Scan to find us on Google" 
                className="w-32 h-32"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Scan to view our Google listing
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} Omaha Sewer Diagnostics. All rights reserved.
          </p>
          <Link
            to="/legal"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy & Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}