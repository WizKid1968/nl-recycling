import { useState } from 'react';
import { 
  IconCoin,
  IconCurrencyDollar,
  IconBottle,
  IconRecycle,
  IconLeaf,
  IconSun,
  IconWind
} from '@tabler/icons-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', e.target.elements);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      path: 'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z'
    },
    {
      name: 'Twitter',
      path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    },
    {
      name: 'Instagram',
      path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <a href="#" className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <IconRecycle className="w-8 h-8 text-primary-500" />
                Next Level Recycling
              </a>
            </div>
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <a 
                href="#contact" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              >
                Schedule Pickup
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-16 bg-gradient-radial from-white via-primary-50/50 to-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Icons */}
          <div className="absolute top-[2%] left-[2%] -rotate-6 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconBottle className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>
          
          <div className="absolute top-[2%] right-[2%] rotate-6 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconBottle className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>
          
          <div className="absolute bottom-[2%] left-[2%] rotate-3 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconRecycle className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>

          <div className="absolute top-[15%] left-[35%] -rotate-3 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconCoin className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>

          <div className="absolute bottom-[2%] right-[2%] rotate-6 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconCurrencyDollar className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>

          <div className="absolute bottom-[15%] right-[35%] -rotate-6 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconSun className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>

          <div className="absolute top-[35%] right-[5%] rotate-3 bg-white w-16 h-16 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center">
            <IconWind className="w-10 h-10 text-primary-500" stroke={1.5} />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-center mb-6">
              <span className="font-cursive text-primary-600">Convenient</span> Recycling<br/>
              for <span className="font-cursive text-primary-600">Everyone,</span> <span className="whitespace-nowrap">Every Time</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-12">
              Bring your bottles and cans to our center, or let us come to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Visit Us Today
              </a>
              <a 
                href="#pickup-form" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-3"
              >
                Schedule a Pickup
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            About Next Level Recycling
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 text-center mb-12">
              We're more than just a recycling center – we're your community partner in environmental stewardship. Our mission is to make recycling accessible to everyone, with a special focus on serving elderly and disabled members of our community.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Community Focus</h3>
                <p className="text-gray-600">
                  We believe everyone should have easy access to recycling services. That's why we've created a welcoming environment and offer special assistance to those who need it.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Pickup Service</h3>
                <p className="text-gray-600">
                  Our dedicated pickup service ensures that elderly and disabled individuals can participate in recycling without leaving their homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Redemption Facility</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4">✓</span>
                  Quick and accurate counting
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4">✓</span>
                  Immediate payment
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4">✓</span>
                  Clean, organized facility
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pickup Service</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4">✓</span>
                  Door-to-door collection
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4">✓</span>
                  Scheduled at your convenience
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4">✓</span>
                  Direct payment options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Facility Drop-off</h3>
              <ol className="space-y-6">
                {[
                  'Bring recyclables to our center',
                  'Quick sorting and counting process',
                  'Receive payment immediately'
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 text-lg">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Pickup Service</h3>
              <ol className="space-y-6">
                {[
                  'Schedule your pickup online or by phone',
                  'We collect from your location',
                  'Receive payment directly'
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 text-lg">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visit Us</h3>
              <div className="space-y-6 text-gray-600">
                <div>
                  <p className="font-semibold mb-2">Address:</p>
                  <p>325 N. Main Street<br />Liberty, NY 12754</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Hours:</p>
                  <p>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 4pm<br />Sunday: Closed</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phone:</p>
                  <a href="tel:+15187386212" className="text-primary-600 hover:text-primary-700 text-lg">
                    (518) 738-6212
                  </a>
                </div>
              </div>
            </div>
            <div id="pickup-form">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule a Pickup</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2 font-medium">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="instructions" className="block text-gray-700 mb-2 font-medium">Special Instructions</label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="E.g., Wheelchair accessible needed, preferred pickup time"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Schedule Pickup
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Bottle Redemption</a></li>
                <li><a href="#pickup-form" className="hover:text-primary-400 transition-colors">Pickup Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>325 N. Main Street</li>
                <li>Liberty, NY 12754</li>
                <li><a href="tel:+15187386212" className="hover:text-primary-400 transition-colors">(518) 738-6212</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d={social.path} />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Next Level Recycling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
