import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Contact Us
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Have questions or want to learn more about Qirin Health? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-[10px] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Email</p>
                  <a href="mailto:contact@qirinhealth.com" className="text-[#2563EB] hover:underline">
                    contact@qirinhealth.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2563EB] text-white px-6 py-3 rounded-[10px] hover:bg-[#1d4ed8] transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/20"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
