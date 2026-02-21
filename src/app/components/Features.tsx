import { Activity, Shield, Zap } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Our Features
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Powerful tools designed to make health tracking simple, secure, and effective.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Activity}
            title="Health Tracking"
            description="Track weight, blood pressure, and glucose easily with our intuitive interface and comprehensive monitoring tools."
          />
          <FeatureCard
            icon={Shield}
            title="Secure Data"
            description="Your health data is protected with modern security standards and encrypted storage for complete peace of mind."
          />
          <FeatureCard
            icon={Zap}
            title="Modern Technology"
            description="Built using reliable and scalable healthcare technology to ensure fast performance and seamless experience."
          />
        </div>
      </div>
    </section>
  );
}
