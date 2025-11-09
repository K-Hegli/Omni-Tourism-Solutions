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
import { useLanguage } from '../hooks/useLanguage';

const getValues = (t: (key: string) => string) => [
  {
    title: t('values.punctuality.title'),
    description: t('values.punctuality.description'),
    icon: PunctualityIcon,
  },
  {
    title: t('values.humbleness.title'),
    description: t('values.humbleness.description'),
    icon: HumblenessIcon,
  },
  {
    title: t('values.passion.title'),
    description: t('values.passion.description'),
    icon: PassionIcon,
  },
  {
    title: t('values.growth.title'),
    description: t('values.growth.description'),
    icon: GrowthInnovationIcon,
  },
];

const WhoWeAre: React.FC = () => {
  const { t } = useLanguage();
  const values = getValues(t);
  
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
            {t('home.hero.title')}
          </motion.h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 text-center leading-relaxed">
            {t('home.hero.subtitle')}
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
            title={t('home.team.title')} 
            subtitle={t('home.team.subtitle')}
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
                  keyName={member.key}
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
                  keyName={member.key}
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
      
      <Footer />
      </div>
    </>
  );
};

export default WhoWeAre;
