import { members } from '../data/member';

export default function Member() {
  return (
    <section id="member" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-slate-900 mb-6">
            Our <span className="font-bold">Team</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Meet the expert team behind our high-quality Thai cocktail creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group">
              <div className="glass p-8 hover:scale-105 transition-all duration-300 text-center">
                {/* Avatar */}
                <div className="mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                    {member.experience} Experience
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {member.description}
                </p>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-white text-slate-600 px-3 py-1 rounded-full text-xs border border-slate-200 font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 glass">
            <div className="text-4xl font-light text-slate-900 mb-2">6</div>
            <p className="text-slate-600 font-medium">Experts</p>
          </div>
          <div className="text-center p-6 glass">
            <div className="text-4xl font-light text-slate-900 mb-2">70+</div>
            <p className="text-slate-600 font-medium">Years Combined</p>
          </div>
          <div className="text-center p-6 glass">
            <div className="text-4xl font-light text-slate-900 mb-2">50+</div>
            <p className="text-slate-600 font-medium">Recipes Developed</p>
          </div>
          <div className="text-center p-6 glass">
            <div className="text-4xl font-light text-slate-900 mb-2">100%</div>
            <p className="text-slate-600 font-medium">Dedication</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="glass p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Want to Know More?
            </h3>
            <p className="text-slate-600 mb-8 font-light text-lg">
              Our team is ready to provide consultation and share knowledge about Thai cocktails
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-2xl hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}