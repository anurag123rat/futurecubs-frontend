import {
  Brain,
  Heart,
  Music,
  Palette,
  Star,
  Users,
} from "lucide-react";

export default function Home() {
  const programs = [
    {
      title: "Tiny Explorers",
      age: "2 - 4 Years",
      icon: "🧸",
    },
    {
      title: "Creative Cubs",
      age: "4 - 6 Years",
      icon: "🎨",
    },
    {
      title: "Smart Learners",
      age: "6 - 8 Years",
      icon: "🚀",
    },
  ];

  const activities = [
    {
      title: "Brain Games",
      icon: <Brain size={40} />,
    },
    {
      title: "Art & Craft",
      icon: <Palette size={40} />,
    },
    {
      title: "Music & Dance",
      icon: <Music size={40} />,
    },
    {
      title: "Life Skills",
      icon: <Heart size={40} />,
    },
  ];

  return (
    <main className="bg-[#FFF9F2]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">
                Early Childhood Development
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
                Learning Through Play & Fun
              </h1>

              <p className="text-white/90 mt-6 text-lg">
                Interactive classes, activities and brain
                development programs designed specially
                for toddlers and young learners.
              </p>

              <div className="flex gap-4 mt-8 flex-wrap">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full">
                  Join Now
                </button>

                <button className="bg-white text-slate-800 px-8 py-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200"
                alt=""
                className="rounded-[40px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="-mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow">
              <Brain className="text-pink-500" />
              <h3 className="font-bold text-xl mt-4">
                Brain Development
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow">
              <Heart className="text-red-500" />
              <h3 className="font-bold text-xl mt-4">
                Safe Environment
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow">
              <Users className="text-blue-500" />
              <h3 className="font-bold text-xl mt-4">
                Expert Teachers
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow">
              <Star className="text-yellow-500" />
              <h3 className="font-bold text-xl mt-4">
                Fun Learning
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold">
            Learning Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-6xl">
                  {program.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {program.title}
                </h3>

                <p className="text-slate-500 mt-2">
                  {program.age}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold">
            Fun Activities
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="text-center bg-slate-50 rounded-3xl p-8"
              >
                <div className="flex justify-center text-pink-500">
                  {activity.icon}
                </div>

                <h3 className="font-bold text-xl mt-5">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold">
            Gallery
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-16">
            {[1, 2, 3, 4].map((item) => (
              <img
                key={item}
                src={`https://picsum.photos/500/400?random=${item}`}
                alt=""
                className="rounded-3xl h-72 w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold">
            Happy Parents
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-slate-50 rounded-3xl p-8"
              >
                <p>
                  EarlyCubs has helped my child become
                  more confident and creative.
                </p>

                <h4 className="font-bold mt-6">
                  Parent {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-yellow-300 to-pink-300 rounded-[40px] p-12 text-center">
            <h2 className="text-5xl font-bold">
              Give Your Child The Best Start
            </h2>

            <button className="mt-8 bg-pink-600 text-white px-10 py-4 rounded-full">
              Enroll Today
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-indigo-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-3xl font-bold">
                EarlyCubs
              </h3>

              <p className="mt-4 text-white/70">
                Building bright futures through joyful
                learning.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">
                Programs
              </h4>

              <ul className="space-y-2">
                <li>Tiny Explorers</li>
                <li>Creative Cubs</li>
                <li>Smart Learners</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2">
                <li>About</li>
                <li>Gallery</li>
                <li>Activities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">
                Contact
              </h4>

              <p>info@earlycubs.com</p>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}