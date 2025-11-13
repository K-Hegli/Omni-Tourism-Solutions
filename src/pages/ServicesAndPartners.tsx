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
import { useLanguage } from "../hooks/useLanguage";
import { coreServices } from "../data/services";
import { softwareSolutions } from "../data/partners";
import { ServicesHeaderIcon, PackagesHeaderIcon, PartnersHeaderIcon } from "../components/ServiceIcons";


export default function ServicesAndPartners() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Set page-specific SEO
  usePageSEO({
    title: 'Business Solutions - Omni Solutions',
    description: 'Comprehensive digital solutions and infrastructure to scale your business globally. Web development, SEO, social media, and more.',
  });

  // Dynamic packages using translations
  const packages = [
    {
      id: 'mini',
      title: t('services.packages.mini.title'),
      price: t('services.packages.mini.price'),
      monthly: t('services.packages.mini.monthly'),
      hint: t('services.packages.mini.hint'),
      description: t('services.packages.mini.description'),
    },
    {
      id: 'alpha',
      title: t('services.packages.alpha.title'),
      price: t('services.packages.alpha.price'),
      monthly: t('services.packages.alpha.monthly'),
      hint: t('services.packages.alpha.hint'),
      description: t('services.packages.alpha.description'),
    },
    {
      id: 'omega',
      title: t('services.packages.omega.title'),
      price: t('services.packages.omega.price'),
      monthly: t('services.packages.omega.monthly'),
      hint: t('services.packages.omega.hint'),
      description: t('services.packages.omega.description'),
    },
  ];

  // Dynamic services using translations
  const translatedServices = [
    {
      title: t('services.data.webdev.title'),
      icon: "WebDevIcon",
      description: t('services.data.webdev.description'),
      tiers: [
        {
          name: t('services.data.webdev.landing.name'),
          description: t('services.data.webdev.landing.description'),
          price: t('services.data.webdev.landing.price')
        },
        {
          name: t('services.data.webdev.business.name'),
          description: t('services.data.webdev.business.description'),
          price: t('services.data.webdev.business.price')
        },
        {
          name: t('services.data.webdev.ecommerce.name'),
          description: t('services.data.webdev.ecommerce.description'),
          price: t('services.data.webdev.ecommerce.price')
        }
      ]
    },
    {
      title: t('services.data.seo.title'),
      icon: "SEOIcon", 
      description: t('services.data.seo.description'),
      tiers: [
        {
          name: t('services.data.seo.local.name'),
          description: t('services.data.seo.local.description'),
          price: t('services.data.seo.local.price')
        },
        {
          name: t('services.data.seo.national.name'),
          description: t('services.data.seo.national.description'),
          price: t('services.data.seo.national.price')
        },
        {
          name: t('services.data.seo.enterprise.name'),
          description: t('services.data.seo.enterprise.description'),
          price: t('services.data.seo.enterprise.price')
        }
      ]
    },
    {
      title: t('services.data.social.title'),
      icon: "SocialMediaIcon",
      description: t('services.data.social.description'),
      tiers: [
        {
          name: t('services.data.social.setup.name'),
          description: t('services.data.social.setup.description'),
          price: t('services.data.social.setup.price')
        },
        {
          name: t('services.data.social.content.name'),
          description: t('services.data.social.content.description'),
          price: t('services.data.social.content.price')
        },
        {
          name: t('services.data.social.ads.name'),
          description: t('services.data.social.ads.description'),
          price: t('services.data.social.ads.price')
        }
      ]
    },
    {
      title: t('services.data.photo.title'),
      icon: "PhotoVideoIcon",
      description: t('services.data.photo.description'),
      tiers: [
        {
          name: t('services.data.photo.product.name'),
          description: t('services.data.photo.product.description'),
          price: t('services.data.photo.product.price')
        },
        {
          name: t('services.data.photo.brand.name'),
          description: t('services.data.photo.brand.description'),
          price: t('services.data.photo.brand.price')
        },
        {
          name: t('services.data.photo.package.name'),
          description: t('services.data.photo.package.description'),
          price: t('services.data.photo.package.price')
        }
      ]
    }
  ];

  // Dynamic software solutions using translations
  const translatedSoftware = [
    {
      name: t('services.software.fullstack.name'),
      icon: "FullStackDevIcon",
      desc: t('services.software.fullstack.desc'),
      details: t('services.software.fullstack.details')
    },
    {
      name: t('services.software.blockchain.name'),
      icon: "BlockchainIcon",
      desc: t('services.software.blockchain.desc'),
      details: t('services.software.blockchain.details')
    }
  ];
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
              {t('services.hero.title')}
            </motion.h1>
            <span className="block bg-[#ff5c33] h-1 w-24 mx-auto my-6 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-200 mb-2 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                 fontFamily: 'Inter, sans-serif'
               }}>
              {t('services.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container section-content">

        {/* Marketing Solutions with Accordions */}
        <section id="core-services" className="section">
          <SectionTitle 
            title={t('services.marketing.title')} 
            icon={ServicesHeaderIcon}
          />
          
          {/* Services Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              {t('services.marketing.intro')}
              <span className="text-[#ff5c33] font-medium"> {t('services.marketing.customPricing')}</span> {t('services.marketing.perfectMatch')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {translatedServices.map((svc, i) => (
              <ServiceAccordion key={i} {...svc} />
            ))}
          </div>
        </section>

        {/* Software Solutions */}
        <section className="mt-24">
          <SectionTitle 
            title={t('services.software.title')} 
            icon={PartnersHeaderIcon}
          />
          
          {/* Software Solutions Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              {t('services.software.intro')}
            </p>
          </div>
          
          <div className="grid-2">
            {translatedSoftware.map((solution, i) => (
              <PartnerFlipCard key={i} {...solution} />
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mt-24">


          <SectionTitle 
            title={t('services.packages.title')} 
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