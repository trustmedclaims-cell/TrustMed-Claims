import { motion } from "framer-motion";
import { ShieldCheck, Phone, Mail, Sparkles, Star, Trophy, Users } from "lucide-react";

const COMPANY = {
  name: "TrustMed Claims",
  tagline: "Focus on patients. We handle the claims.",
  phone: "0324 2240860",
  whatsapp: "https://wa.me/923242240860",
  email: "trustmedclaims@gmail.com",
  address: "Gujranwala, Pakistan",
  manager: "Senior Claim Manager Ms. Hira",
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">
      {title && (
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-800">{title}</h2>
          {subtitle && (
            <p className="text-slate-600 mt-2 md:mt-3 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-semibold tracking-tight group-hover:text-blue-700 transition-colors">
              {COMPANY.name}
            </div>
          </a>
          <a
            href={COMPANY.whatsapp}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-50" />
        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-16 md:pb-24 relative">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900"
          >
            Streamlined Medical Claim Outsourcing
          </motion.h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-700 max-w-3xl">
            {COMPANY.tagline} — Accurate documentation, faster reimbursements, and lower costs.
          </p>
          <p className="mt-2 text-slate-600 font-medium">{COMPANY.manager}</p>
        </div>
      </section>

      <Section id="experience" title="Our Work Experience" subtitle="Years of expertise in medical claim handling and insurance coordination.">
        <p className="text-slate-700 text-center max-w-3xl mx-auto">
          We have successfully processed hundreds of claims across insurance panels. Our expertise ensures fewer rejections and faster reimbursements.
        </p>
      </Section>

      <Section id="stories" title="Success Stories" subtitle="Real results we’ve achieved for our clients.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, title: "90% Faster Processing", desc: "Helped a hospital cut reimbursement delays from 3 months to just 2 weeks." },
            { icon: Star, title: "Reduced Rejections", desc: "Lowered claim rejection rates by 70% with improved documentation." },
            { icon: Users, title: "Expanded Reach", desc: "Supported Gujranwala clinics in empanelment with insurers." },
          ].map((s, i) => (
            <div key={i} className="p-6 text-center rounded-2xl shadow-md bg-white border hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 text-blue-700">
                <s.icon className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-blue-900">{s.title}</h3>
              <p className="text-slate-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact Us">
        <div className="text-center space-y-3">
          <p>📞 {COMPANY.phone}</p>
          <p>📧 {COMPANY.email}</p>
          <p>📍 {COMPANY.address}</p>
        </div>
      </Section>
    </div>
  );
}
