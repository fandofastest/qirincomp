import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-[12px] overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763198302243-51142ba5b24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzE2NDU2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical technology illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
              About Qirin Health
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Qirin Health is a healthcare technology company focused on developing secure and modern digital health solutions. Our mission is to help individuals track and manage their health data safely and efficiently.
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              We believe that everyone should have access to simple, reliable tools for monitoring their health. Our platform combines cutting-edge technology with user-friendly design to make health tracking accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
