import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AccommodationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  subCategories?: {
    name: string;
    subtitle: string;
    image: string;
  }[];
}

interface AccommodationCardProps {
  item: AccommodationItem;
  index: number;
  isInView: boolean;
  loadedImages: { [key: string]: boolean };
  activeCard: string | null;
  setActiveCard: (id: string | null) => void;
}

const OtelloHotelInterface = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  const accommodations: AccommodationItem[] = [
    {
      id: 'rooms',
      title: 'Rooms',
      subtitle: 'DISCOVER YOUR PERFECT ROOM WITH US',
      description: 'Elegant chambers designed for ultimate comfort',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1600&auto=format&fit=crop',
      subCategories: [
        {
          name: 'Suites',
          subtitle: 'EXPERIENCE SUITE LUXURY AT ITS BEST',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop'
        },
        {
          name: 'Villas',
          subtitle: 'PRIVATE VILLAS FOR YOUR EXCLUSIVE RETREAT',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop'
        }
      ]
    },
    {
      id: 'dining',
      title: 'Dining',
      subtitle: 'EXCEPTIONAL CULINARY EXPERIENCES AWAIT',
      description: 'World-class cuisine in elegant settings',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop',
      subCategories: [
        {
          name: 'Fine Dining',
          subtitle: 'MICHELIN-STARRED CULINARY EXCELLENCE',
          image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1600&auto=format&fit=crop'
        },
        {
          name: 'Bar & Lounge',
          subtitle: 'CRAFTED COCKTAILS IN INTIMATE SETTINGS',
          image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop'
        }
      ]
    },
    {
      id: 'events',
      title: 'Events',
      subtitle: 'MEMORABLE CELEBRATIONS & GATHERINGS',
      description: 'Sophisticated venues for special occasions',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop',
      subCategories: [
        {
          name: 'Weddings',
          subtitle: 'YOUR PERFECT DAY IN ELEGANT SURROUNDINGS',
          image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=1600&auto=format&fit=crop'
        },
        {
          name: 'Conferences',
          subtitle: 'PROFESSIONAL MEETINGS WITH LUXURY COMFORT',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop'
        }
      ]
    }
  ];

  // Preload all images
  useEffect(() => {
    const preloadImage = (src: string, id: string) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
      };
      img.src = src;
    };

    // Preload main images
    accommodations.forEach(item => {
      preloadImage(item.image, item.id);
      // Preload subcategory images
      item.subCategories?.forEach(subItem => {
        preloadImage(subItem.image, `${item.id}-${subItem.name}`);
      });
    });
  }, []);

  return (
    <div className="bg-text-primary-title relative overflow-hidden">
      {/* Main Content */}
      <main 
        ref={sectionRef}
        className="pt-16 pb-32"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(58, 74, 62, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45, 58, 49, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 1] }}
          className="text-center mb-20 px-4 sm:px-6"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 text-heritage-bg-primary leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Experience Unmatched
            <br />
            <span className="text-button-accent-bg italic">Comfort & Luxury</span>
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-heritage-bg-secondary max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            Escape to a world of sophistication and<br className="hidden sm:block" />
            serene Otello's beauty.
          </p>
        </motion.div>

        {/* Stacked Cards Container with Outside Border */}
        <div className="max-w-full mx-auto">
          <div className="mx-8 sm:mx-12 lg:mx-16 border-2 border-button-accent-bg p-8 bg-text-primary-title/20 backdrop-blur-sm relative">
            <div className="space-y-4">
              {accommodations.map((item, index) => (
                <div key={item.id} className="relative">
                  <AccommodationCard
                    item={item}
                    index={index}
                    isInView={isInView}
                    loadedImages={loadedImages}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                  {/* Separation Line after each card section (except last) */}
                  {index < accommodations.length - 1 && (
                    <div className="absolute -left-8 -right-8 bottom-[-8px] h-0.5 bg-button-accent-bg" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const AccommodationCard: React.FC<AccommodationCardProps> = ({ item, index, isInView, loadedImages, activeCard, setActiveCard }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredSubCard, setHoveredSubCard] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (activeCard === item.id) {
      setActiveCard(null);
      setIsExpanded(false);
    } else {
      setActiveCard(item.id);
      setIsExpanded(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3, ease: [0.25, 0.25, 0.25, 1] }}
      className="relative"
    >
      {/* Main Card */}
      <motion.div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] cursor-pointer overflow-hidden group border-2 border-button-accent-bg bg-text-primary-title/60 backdrop-blur-sm"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.4 }}
        animate={{
          borderColor: isHovered || isExpanded ? '#9C6A50' : '#B07B5F'
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          {loadedImages[item.id] && (
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ 
                scale: isHovered || isExpanded ? 1.05 : 1.1, 
                opacity: isHovered || isExpanded ? 0.6 : 0.4 
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 1] }}
            />
          )}
        </div>

        {/* Dark Overlay - Always Present */}
        <div className="absolute inset-0 bg-text-primary-title bg-opacity-10" />
        
        {/* Curtain Reveal Overlay - Solid */}
        <motion.div
          className="absolute inset-0 bg-text-primary-title"
          initial={{ y: "0%" }}
          animate={{ y: isHovered || isExpanded ? "100%" : "0%" }}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 1] }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20">
          <motion.div
            className="text-center"
            animate={{
              y: isExpanded ? -20 : isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 1] }}
          >
            <motion.h2 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light mb-6 md:mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                color: isHovered || isExpanded ? '#FBF9F6' : '#EDE8DA'
              }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h2>
            
            <motion.div 
              className="w-20 md:w-24 lg:w-28 h-0.5 bg-button-accent-bg mx-auto mb-6 md:mb-8"
              animate={{
                width: isHovered ? (window.innerWidth >= 1024 ? 140 : window.innerWidth >= 768 ? 120 : 100) : (window.innerWidth >= 1024 ? 112 : window.innerWidth >= 768 ? 96 : 80),
                backgroundColor: isHovered || isExpanded ? '#9C6A50' : '#B07B5F'
              }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg tracking-[0.15em] font-light"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
              animate={{
                opacity: isHovered || isExpanded ? 1 : 0.9,
                y: isHovered ? -5 : 0,
                color: isHovered || isExpanded ? '#FBF9F6' : '#DCD7C9'
              }}
              transition={{ duration: 0.3 }}
            >
              {item.subtitle}
            </motion.p>

            {/* Additional description on hover */}
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light mt-6 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered || isExpanded ? 1 : 0, 
                y: isHovered || isExpanded ? 0 : 20,
                color: isHovered || isExpanded ? '#FBF9F6' : '#DCD7C9'
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Expanded Sub-cards */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 1] }}
        className="overflow-hidden mt-4"
      >
        <div className="space-y-4">
          {item.subCategories?.map((subItem, subIndex) => (
            <div key={subItem.name} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: subIndex * 0.15 }}
                className="relative h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[24rem] cursor-pointer overflow-hidden group border-2 border-button-accent-bg bg-text-primary-title/50 backdrop-blur-sm"
                onMouseEnter={() => setHoveredSubCard(subItem.name)}
                onMouseLeave={() => setHoveredSubCard(null)}
                style={{
                  borderColor: hoveredSubCard === subItem.name ? '#9C6A50' : '#B07B5F'
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {loadedImages[`${item.id}-${subItem.name}`] && (
                    <motion.img
                      src={subItem.image}
                      alt={subItem.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ 
                        scale: hoveredSubCard === subItem.name ? 1.05 : 1.1, 
                        opacity: hoveredSubCard === subItem.name ? 0.6 : 0.4 
                      }}
                      transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 1] }}
                    />
                  )}
                </div>
                
                {/* Dark Overlay - Always Present */}
                <div className="absolute inset-0 bg-text-primary-title bg-opacity-85" />
                
                {/* Curtain Reveal for Sub-cards - Solid */}
                <motion.div
                  className="absolute inset-0 bg-text-primary-title"
                  initial={{ y: "0%" }}
                  animate={{ y: hoveredSubCard === subItem.name ? "100%" : "0%" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.25, 0.25, 1] }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20">
                  <motion.div
                    className="text-center"
                    animate={{
                      y: hoveredSubCard === subItem.name ? -12 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 md:mb-6"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      animate={{
                        scale: hoveredSubCard === subItem.name ? 1.03 : 1,
                        color: hoveredSubCard === subItem.name ? '#FBF9F6' : '#EDE8DA'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {subItem.name}
                    </motion.h3>
                    
                    <motion.div 
                      className="w-16 md:w-20 lg:w-24 h-0.5 bg-button-accent-bg mx-auto mb-4 md:mb-6"
                      animate={{
                        width: hoveredSubCard === subItem.name ? (window.innerWidth >= 1024 ? 120 : window.innerWidth >= 768 ? 100 : 80) : (window.innerWidth >= 1024 ? 96 : window.innerWidth >= 768 ? 80 : 64),
                        backgroundColor: hoveredSubCard === subItem.name ? '#9C6A50' : '#B07B5F'
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    <motion.p 
                      className="text-sm sm:text-base md:text-lg tracking-[0.12em] font-light"
                      style={{ fontFamily: 'Work Sans, sans-serif' }}
                      animate={{
                        opacity: hoveredSubCard === subItem.name ? 1 : 0.9,
                        y: hoveredSubCard === subItem.name ? -3 : 0,
                        color: hoveredSubCard === subItem.name ? '#FBF9F6' : '#DCD7C9'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {subItem.subtitle}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OtelloHotelInterface;