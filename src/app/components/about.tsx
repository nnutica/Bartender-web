export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-slate-900 mb-6">
            About Our <span className="font-bold">Thai Mojito</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            A unique twist on the classic mojito using authentic Thai ingredients
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                The Perfect Blend
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg font-light">
                <p>
                  Our Thai Mojito is more than just a cocktail – it's a celebration of Thai heritage combined with modern mixology expertise. This signature drink brings together the smooth character of Thai white spirit with the vibrant aromatics of Southeast Asian herbs.
                </p>
                <p>
                  Fresh kaffir lime leaves provide that distinctive Thai fragrance, while lemongrass adds a subtle citrusy note that perfectly complements the traditional lime. Each sip delivers a refreshing experience that's both familiar and exotic.
                </p>
                <p>
                  Crafted with precision and served with passion, this cocktail represents our commitment to authentic flavors and innovative presentation.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-1 gap-6">
            <div className="glass p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl">�</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Authentic Thai Spirit</h4>
              </div>
              <p className="text-slate-600 font-light">
                Made with premium Thai white spirit that provides a smooth, clean base with subtle rice notes.
              </p>
            </div>

            <div className="glass p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl">�</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Fresh Kaffir Lime Leaves</h4>
              </div>
              <p className="text-slate-600 font-light">
                Hand-picked kaffir lime leaves that release their essential oils for an authentic Thai aroma.
              </p>
            </div>

            <div className="glass p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl">�</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Aromatic Lemongrass</h4>
              </div>
              <p className="text-slate-600 font-light">
                Fresh lemongrass stalks provide a citrusy, floral note that elevates the entire drinking experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}