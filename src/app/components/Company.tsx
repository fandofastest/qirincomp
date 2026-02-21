import { Building2, Globe, Shield } from 'lucide-react';

export function Company() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Our Company
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            A trusted healthcare technology partner committed to excellence and innovation.
          </p>
        </div>

        {/* Company Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] text-center">
            <div className="w-12 h-12 bg-[#10B981]/10 rounded-[10px] flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">UK Registered</h3>
            <p className="text-[#64748B]">Officially registered company</p>
          </div>

          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] text-center">
            <div className="w-12 h-12 bg-[#10B981]/10 rounded-[10px] flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Healthcare Focus</h3>
            <p className="text-[#64748B]">Specialized in health technology</p>
          </div>

          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] text-center">
            <div className="w-12 h-12 bg-[#10B981]/10 rounded-[10px] flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Professional & Trusted</h3>
            <p className="text-[#64748B]">Committed to quality and security</p>
          </div>
        </div>

        {/* Company Details Card */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-[12px] border border-[#E2E8F0] shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">Company Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#E2E8F0]">
              <span className="text-[#64748B]">Company Name</span>
              <span className="font-semibold text-[#0F172A]">Qirin Health</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#E2E8F0]">
              <span className="text-[#64748B]">Industry</span>
              <span className="font-semibold text-[#0F172A]">Healthcare Technology</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#64748B]">Type</span>
              <span className="font-semibold text-[#0F172A]">Software Company</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
