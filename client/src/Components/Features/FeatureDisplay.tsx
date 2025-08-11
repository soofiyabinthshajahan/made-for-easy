import React, { useRef, useState, useEffect } from 'react';
// import { FaBuilding } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import { FaIdCard } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { FaCapsules } from "react-icons/fa6";
import { SiQuicktime } from "react-icons/si";


import Feature from './Feature';
import {
  SectionWrapper,
  DisplaySection,
  CardsContainer,
  NavButton,
} from './Feature.style';

interface FeatureData {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

const featureData: FeatureData[] = [
  {
    icon: <FaIdCard />,
    title: 'centralised health record',
    description: 'Secure, comprehensive digital health records platform, anywhere. Your complete health history in one place.',
    features: [
      'Encrypted data storage',
      'Easy sharing with doctors',
      'Complete medical history'
    ],
    buttonText: 'Learn More'
  },
  {
    icon: <FaHospital />,
    title: 'hospital directory',
    description: 'Search, filter, and compare hospitals by specialty, services, and patient reviews nationwide.',
    features: [
      'Verified user ratings',
      'Geo-location based search',
      'Specialties and services listed'
    ],
    buttonText: 'Learn More'
  },
  {
    icon: <SiQuicktime />,
    title: 'quick booking',
    description: 'Book appointments instantly with doctors, labs, or scans — all in just a few clicks.',
    features: [
      'Live availability',
      'Instant confirmation',
      'SMS/email reminders'
    ],
    buttonText: 'Learn More'
  },
  {
    icon: <GiTestTubes />,
    title: 'lab tests',
    description: 'Browse and book lab tests with price comparisons, offers, and home sample collection.',
    features: [
      'Test price comparison',
      'Home sample collection',
      'Reports uploaded digitally'
    ],
    buttonText: 'Learn More'
  },
  {
    icon: <FaCapsules />,
    title: 'diagnostics & imaging',
    description: 'Discover nearby diagnostic centers offering scans, imaging, and radiology with results.',
    features: [
      'CT, MRI, X-ray availability',
      'Discounts and packages',
      'Digital scan reports'
    ],
    buttonText: 'Learn More'
  }
];

const FeatureDisplay: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = isMobile ? 300 : 360;
      const scrollAmount = cardWidth + 16; // Card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <SectionWrapper>
      <DisplaySection>
        <NavButton
          direction="left"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
        >
          <IoChevronBack />
        </NavButton>

        <CardsContainer ref={scrollContainerRef}>
          {featureData.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              buttonText={feature.buttonText}
            />
          ))}
        </CardsContainer>

        <NavButton
          direction="right"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
        >
          <IoChevronForward />
        </NavButton>
      </DisplaySection>
    </SectionWrapper>
  );
};

export default FeatureDisplay;