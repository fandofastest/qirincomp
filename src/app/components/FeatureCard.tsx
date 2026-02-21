import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-[#2563EB]/10 rounded-[10px] flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-[#2563EB]" />
      </div>
      <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
        {title}
      </h3>
      <p className="text-[#64748B] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
