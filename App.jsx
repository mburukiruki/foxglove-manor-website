import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Heart, Clock, Utensils, Activity, Shield, Menu, X, ChevronRight, Star, Thermometer, Truck, Home } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ to, children }) => (
    <button
      onClick={() => scrollToSection(to)}
      className="text-slate-600 hover:text-emerald-700 font-medium transition-colors duration-300 px-4 py-2"
    >
      {children}
    </button>
  );

  const MobileNavLink = ({ to, children }) => (
    <button
      onClick={() => scrollToSection(to)}
      className="block w-full text-left text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 font-medium transition-colors duration-300 px-6 py-3 border-b border-slate-100"
    >
      {children}
    </button>
  );

  const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
        <Icon className="w-6 h-6 text-emerald-700" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );

  const CheckList = ({ items }) => (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <ChevronRight className="w-3 h-3 text-emerald-700" />
          </div>
          <span className="text-slate-600 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center cursor-pointer">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight cursor-pointer">
              Foxglove <span className="text-emerald-700">Manor</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="about">About Us</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="gallery">Our Home</NavLink>
            <NavLink to="contact">
              <span className="bg-emerald-700 text-white px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors shadow-sm hover:shadow">
                Contact Us
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
            <MobileNavLink to="about">About Us</MobileNavLink>
            <MobileNavLink to="services">Services</MobileNavLink>
            <MobileNavLink to="gallery">Our Home</MobileNavLink>
            <MobileNavLink to="contact">Contact Us</MobileNavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50/50 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-emerald-800" />
                <span>Premium Care in Mount Vernon, WA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Welcome Home to <span className="text-emerald-700">Foxglove Manor</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Specializing in Dementia, Alzheimer's, and Geriatric Care. We provide a dignified, safe, and loving environment for your family members right here in the Skagit Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  Schedule a Tour
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md text-center"
                >
                  View Care Services
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                {/* Placeholder for Hero Image */}
                <div className="w-full h-full bg-slate-200 flex items-center justify-center flex-col gap-2">
                  <Heart className="w-16 h-16 text-slate-300" />
                  <span className="text-slate-400 font-medium text-lg px-4 text-center">Image: Exterior of Foxglove Manor or Caregiver</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100 rounded-full -z-10 blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-100 rounded-full -z-10 blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "24/7 Monitoring", icon: Clock },
              { label: "RN on Call", icon: Activity },
              { label: "Home Cooked Meals", icon: Utensils },
              { label: "Secure Environment", icon: Shield }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-emerald-50 rounded-full text-emerald-700">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-800">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                 <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 font-medium text-lg">Image: The Provider/Owner</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Dedicated to Dignity & Independence</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Foxglove Manor is more than just a facility; it is a home. Located in a quiet Mount Vernon neighborhood, we offer an intimate alternative to large institutional facilities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We specialize in complex care needs including <strong>Dementia, Parkinson's, and Diabetes management</strong>. Our team is trained to handle varying levels of care needs, from companionship to complex medication management and hospice care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-slate-700 font-medium">State Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Wheelchair Accessible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Quiet Residential Setting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Developmental Disabilities Support</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Care Services</h2>
            <p className="text-slate-600 text-lg">
              At Foxglove Manor, we provide a full spectrum of care, from daily living assistance to specialized medical support.
            </p>
          </div>
          
          {/* Main Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ServiceCard 
              icon={Heart}
              title="Specialized Care" 
              description="Expert support for Dementia, Alzheimer's, Parkinson's, and Developmental Disabilities. We provide a structured, safe environment."
            />
            <ServiceCard 
              icon={Thermometer}
              title="Clinical Support" 
              description="Professional management of Diabetes, Respiratory Care, Arthritis, Incontinence, and Wound Care/Dressing changes."
            />
             <ServiceCard 
              icon={Home}
              title="Daily Living & Comfort" 
              description="Full housekeeping, food service with nutritious meals, and medication transportation arrangements."
            />
          </div>

          {/* Detailed Lists */}
          <div className="bg-emerald-50/50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Detailed Care Capabilities</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-emerald-700" /> Health Monitoring
                    </h4>
                    <CheckList items={[
                        "Vital signs monitoring",
                        "Medication management",
                        "Diabetes management",
                        "Respiratory care",
                        "Arthritis management"
                    ]} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-700" /> Specialized Needs
                    </h4>
                    <CheckList items={[
                        "Dementia & Alzheimer's",
                        "Developmental Disabilities",
                        "Hospice care",
                        "Parkinson's care",
                        "Incontinence care"
                    ]} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Truck className="w-5 h-5 text-emerald-700" /> Support Services
                    </h4>
                    <CheckList items={[
                        "Medication Transportation",
                        "Food service & Meal prep",
                        "Housekeeping & Laundry",
                        "Dressing assistance",
                        "Wound care"
                    ]} />
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Placeholder */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Inside Foxglove Manor</h2>
              <p className="text-slate-600">A comfortable, clean, and safe environment designed for peace of mind.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="aspect-video bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-8 text-center group hover:shadow-md transition-all">
                 <div className="space-y-2">
                   <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                     <span className="text-slate-400 font-bold">{i}</span>
                   </div>
                   <p className="text-slate-400 font-medium">Photo Placeholder {i}</p>
                   <p className="text-slate-300 text-sm">Bedroom / Living Room / Garden</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Join the Foxglove Family</h2>
              <p className="text-emerald-100 text-lg leading-relaxed">
                Choosing the right home for your loved one is a big decision. We invite you to schedule a tour, meet our caregivers, and see if Foxglove Manor is the right fit for your family.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-800 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-emerald-100">(360) 555-0123</p>
                    <p className="text-sm text-emerald-300 mt-1">Available 8am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-800 rounded-lg">
                    <Mail className="w-6 h-6 text-emerald-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-emerald-100">info@foxglovemanor.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-800 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-emerald-100">123 Valley View Drive</p>
                    <p className="text-emerald-100">Mount Vernon, WA 98273</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-slate-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">How can we help?</label>
                  <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all h-32 resize-none" placeholder="I am looking for care for my mother..."></textarea>
                </div>
                <button className="w-full py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-emerald-500" fill="currentColor" />
                <span className="text-xl font-bold text-white">Foxglove Manor AFH</span>
              </div>
              <p className="max-w-sm mb-6">
                Providing compassionate, professional adult family home services in Mount Vernon, WA. Licensed and dedicated to your family's peace of mind.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-emerald-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Service Area</h4>
              <ul className="space-y-2">
                <li>Mount Vernon</li>
                <li>Burlington</li>
                <li>Sedro-Woolley</li>
                <li>Skagit County</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Foxglove Manor Adult Family Home. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Washington State Licensed AFH</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
