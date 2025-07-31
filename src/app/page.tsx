

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Ingredient from "./components/ingredient";
import Gallery from "./components/gallery";
import Member from "./components/member";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Ingredient />
      <Gallery />
      <Member />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-slate-700/10 to-slate-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-slate-700/10 to-slate-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">� Thai Mojito</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                The perfect blend of authentic Thai white spirit with fresh kaffir lime leaves 
                and aromatic lemongrass for a unique cocktail experience.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#hero" className="hover:text-white transition-colors duration-300 font-light">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-300 font-light">About Our Drink</a></li>
                <li><a href="#ingredient" className="hover:text-white transition-colors duration-300 font-light">Ingredients</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors duration-300 font-light">Recipe & Making</a></li>
                <li><a href="#member" className="hover:text-white transition-colors duration-300 font-light">Our Team</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3 text-slate-300 font-light">
                <p>📧 hello@thaimojito.com</p>
                <p>📞 +66 2-xxx-xxxx</p>
                <p>📍 Bangkok, Thailand</p>
                <div className="pt-4">
                  <button className="bg-white/10 text-slate-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p className="font-light">&copy; 2025 Thai Mojito. Crafted with passion in Thailand.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
