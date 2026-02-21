import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
              Modern Health Tracking Made Simple
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Qirin Health is a healthcare technology company providing secure and easy-to-use digital health tracking solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#2563EB] text-white px-8 py-3 rounded-[10px] hover:bg-[#1d4ed8] transition-colors font-semibold shadow-lg shadow-[#2563EB]/20">
                Get Started
              </button>
              <button
                onClick={scrollToContact}
                className="bg-white text-[#0F172A] px-8 py-3 rounded-[10px] border-2 border-[#E2E8F0] hover:border-[#2563EB] transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-[12px] overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605186909539-7a0ba14a6637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwJTIwbW9iaWxlJTIwbW9ja3VwfGVufDF8fHx8MTc3MTY0NTY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare app mockup"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative gradient */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB] opacity-10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
