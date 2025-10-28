import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ValueCard from '../components/ValueCard';
import TeamMemberCard from '../components/TeamMemberCard';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import { PunctualityIcon, HumblenessIcon, PassionIcon, GrowthInnovationIcon } from '../components/ServiceIcons';
import { teamMembers } from '../data/team';
import { usePageSEO } from '../hooks/usePageSEO';

const values = [
  {
    title: "Punctuality & Manners",
    description: "We're on time with everything we do, we treat everyone with equal respect regardless of their status or title. We're all human.",
    icon: PunctualityIcon,
  },
  {
    title: "Humbleness & Honesty",
    description: "In a capitalistic industry like marketing & sales, we remain humble and honest, building success on trust, not exaggeration.",
    icon: HumblenessIcon,
  },
  {
    title: "Passion & Productivity",
    description: "We are driven by passion for what we do and defined by our ability to get things done.",
    icon: PassionIcon,
  },
  {
    title: "Growth & Innovation",
    description: "Stagnation is the first step towards failure. You can't be impactful if you don't grow, you can't drive change without innovating.",
    icon: GrowthInnovationIcon,
  },
];

const WhoWeAre: React.FC = () => {
  usePageSEO({
    title: 'Who We Are | Omni Solutions',
    description: 'Meet our team of experts dedicated to transforming businesses globally. Learn about our values, mission, and the passionate professionals who make success possible.',
    keywords: 'business team, industry professionals, business consultants, digital advisors',
    ogType: 'website'
  });

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container hero-inner">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
          <motion.h2
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-lg text-3xl sm:text-4xl lg:text-5xl font-heading text-[#ff5c33] leading-tight"
            style={{
              textShadow: '0 0 40px rgba(255, 42, 95, 0.3), 0 0 80px rgba(255, 92, 51, 0.2)',
              fontFamily: 'Cinzel, serif'
            }}
          >
            Origin Story
          </motion.h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 text-center leading-relaxed">
            Omni Solutions began when two passionate founders set out to make multilingual marketing and global operations accessible to more than just enterprise teams. What started as a hands-on duo evolved into a multidisciplinary studio and partner network focused on practical international growth.
          </p>
          <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-offWhite">

      {/* Team Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The passionate experts behind your growth journey"
          />

          {/* Row 1: First 5 team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            {teamMembers.slice(0, 5).map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TeamMemberCard
                  name={member.name}
                  punchline={member.punchline}
                  bio={member.bio}
                  image={member.image}
                  imagePlaceholder={member.imagePlaceholder}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2: Next 5 team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.slice(5, 10).map((member, i) => (
              <motion.div
                key={i + 5}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TeamMemberCard
                  name={member.name}
                  punchline={member.punchline}
                  bio={member.bio}
                  image={member.image}
                  imagePlaceholder={member.imagePlaceholder}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex"
              >
                <ValueCard {...value} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default WhoWeAre;
