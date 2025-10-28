import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceAccordion from "../components/ServiceAccordion";
import PackageCard from "../components/PackageCard";
import PartnerFlipCard from "../components/PartnerFlipCard";
import SolutionCard from "../components/SolutionCard";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import { usePageSEO } from "../hooks/useFavicon";
import { coreServices } from "../data/services";
import { softwareSolutions } from "../data/partners";
import { ServicesHeaderIcon, PackagesHeaderIcon, PartnersHeaderIcon } from "../components/ServiceIcons";

const packages = [
  {
    id: 'mini',
    title: 'Omni Mini',
    price: '€3,500',
    monthly: '1 month total',
    hint: 'Perfect for startups validating their business model',
    description: `
      A one-month strategic sprint to clarify your business model, research your target market, and co-create a strategy deck.
      Includes 2 workshops, a positioning audit, and a tailored implementation roadmap.
    `,
  },
  {
    id: 'alpha',
    title: 'Omni Alpha',
    price: '€10,800',
    monthly: '€1,800/mo (6 months)',
    hint: 'Ideal for growing teams needing ongoing strategic support',
    description: `
      A 6-month coaching retainer with monthly workshops, strategic reviews, and implementation guidance.
      Includes brand refinement, channel strategy, and performance tracking.
    `,
  },
  {
    id: 'omega',
    title: 'Omni Omega',
    price: '€15,900',
    monthly: '€1,325/mo (12 months)',
    hint: 'Full-suite strategic partnership for scaling businesses',
    description: `
      A 12-month executive-level engagement with deep strategic coaching, team enablement, and growth execution.
      Includes quarterly strategy decks, stakeholder workshops, and full implementation support.
    `,
  },
];

export default function ServicesAndPartners() {
  const navigate = useNavigate();
  
  // Set page-specific SEO
  usePageSEO({
    title: 'Business Solutions - Omni Solutions',
    description: 'Comprehensive digital solutions and infrastructure to scale your business globally. Web development, SEO, social media, and more.',
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
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-lg text-3xl sm:text-4xl lg:text-5xl font-heading text-[#ff5c33] leading-tight"
              style={{
                textShadow: '0 0 40px rgba(255, 42, 95, 0.3), 0 0 80px rgba(255, 92, 51, 0.2)',
                fontFamily: 'Cinzel, serif'
              }}
            >
              Business Solutions
            </motion.h1>
            <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-200 mb-2 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                 fontFamily: 'Inter, sans-serif'
               }}>
              Comprehensive digital solutions and infrastructure to scale your business globally with proven strategies and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container section-content">

        {/* Marketing Solutions with Accordions */}
        <section id="core-services" className="section">
          <SectionTitle 
            title="Marketing Solutions" 
            icon={ServicesHeaderIcon}
          />
          
          {/* Services Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Start with our base package for each service, then choose upgrades as needed. 
              <span className="text-[#ff5c33] font-medium"> Upgrade pricing is customized after a discovery call</span> to match your specific requirements perfectly.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {coreServices.map((svc, i) => (
              <ServiceAccordion key={i} {...svc} />
            ))}
          </div>
        </section>

        {/* Software Solutions */}
        <section className="mt-24">
          <SectionTitle 
            title="Software Solutions" 
            icon={PartnersHeaderIcon}
          />
          
          {/* Software Solutions Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Platform and software offerings for enterprise-level digital transformation and scalable solutions.
            </p>
          </div>
          
          <div className="grid-2">
            {softwareSolutions.map((solution, i) => (
              <PartnerFlipCard key={i} {...solution} />
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mt-24">


          <SectionTitle 
            title="Strategy Packages" 
            icon={PackagesHeaderIcon}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg, i) => (
              <PackageCard key={i} {...pkg} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}