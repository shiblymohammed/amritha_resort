// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// const OtelloHotelInterface = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
//   const [loadedImages, setLoadedImages] = useState({});
//   const [activeCard, setActiveCard] = useState(null);
  
//   const accommodations = [
//     {
//       id: 'rooms',
//       title: 'Rooms',
//       subtitle: 'DISCOVER YOUR PERFECT ROOM WITH US',
//       description: 'Elegant chambers designed for ultimate comfort',
//       image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1400&auto=format&fit=crop',
//       subCategories: [
//         {
//           name: 'Suites',
//           subtitle: 'EXPERIENCE SUITE LUXURY AT ITS BEST',
//           image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop'
//         },
//         {
//           name: 'Villas',
//           subtitle: 'PRIVATE VILLAS FOR YOUR EXCLUSIVE RETREAT',
//           image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop'
//         }
//       ]
//     },
//     {
//       id: 'dining',
//       title: 'Dining',
//       subtitle: 'EXCEPTIONAL CULINARY EXPERIENCES AWAIT',
//       description: 'World-class cuisine in elegant settings',
//       image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop',
//       subCategories: [
//         {
//           name: 'Fine Dining',
//           subtitle: 'MICHELIN-STARRED CULINARY EXCELLENCE',
//           image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1400&auto=format&fit=crop'
//         },
//         {
//           name: 'Bar & Lounge',
//           subtitle: 'CRAFTED COCKTAILS IN INTIMATE SETTINGS',
//           image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1400&auto=format&fit=crop'
//         }
//       ]
//     },
//     {
//       id: 'events',
//       title: 'Events',
//       subtitle: 'MEMORABLE CELEBRATIONS & GATHERINGS',
//       description: 'Sophisticated venues for special occasions',
//       image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop',
//       subCategories: [
//         {
//           name: 'Weddings',
//           subtitle: 'YOUR PERFECT DAY IN ELEGANT SURROUNDINGS',
//           image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=1400&auto=format&fit=crop'
//         },
//         {
//           name: 'Conferences',
//           subtitle: 'PROFESSIONAL MEETINGS WITH LUXURY COMFORT',
//           image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop'
//         }
//       ]
//     }
//   ];

//   // Lazy loading implementation
//   useEffect(() => {
//     const imageObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const img = entry.target;
//             const src = img.dataset.src;
//             if (src) {
//               img.src = src;
//               img.onload = () => {
//                 setLoadedImages(prev => ({ ...prev, [img.dataset.id]: true }));
//               };
//               imageObserver.unobserve(img);
//             }
//           }
//         });
//       },
//       { rootMargin: '50px' }
//     );

//     const images = document.querySelectorAll('[data-src]');
//     images.forEach(img => imageObserver.observe(img));

//     return () => imageObserver.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#1C1C1C] relative overflow-hidden">


//       {/* Main Content */}
//       <main 
//         ref={sectionRef}
//         className="pt-20 pb-20"
//         style={{
//           backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(184, 164, 131, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(80, 77, 74, 0.05) 0%, transparent 50%)',
//         }}
//       >
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 1] }}
//           className="text-center mb-16 px-6"
//         >
//           <h1 
//             className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-[#DCD4CB] leading-tight"
//             style={{ fontFamily: 'Cormorant Garamond, serif' }}
//           >
//             Experience Unmatched
//             <br />
//             <span className="text-[#B8A483] italic">Comfort & Luxury</span>
//           </h1>
          
//           <p 
//             className="text-lg md:text-xl text-[#9A9289] max-w-2xl mx-auto leading-relaxed font-light"
//             style={{ fontFamily: 'Work Sans, sans-serif' }}
//           >
//             Escape to a world of sophistication and<br />
//             serene Otello's beauty.
//           </p>
//         </motion.div>

//         {/* Stacked Cards Container */}
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="space-y-4">
//             {accommodations.map((item, index) => (
//               <AccommodationCard
//                 key={item.id}
//                 item={item}
//                 index={index}
//                 isInView={isInView}
//                 loadedImages={loadedImages}
//                 activeCard={activeCard}
//                 setActiveCard={setActiveCard}
//               />
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Grain Texture Overlay */}
//       <div 
//         className="fixed inset-0 pointer-events-none opacity-20 mix-blend-multiply"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         }}
//       />
//     </div>
//   );
// };

// const AccommodationCard = ({ item, index, isInView, loadedImages, activeCard, setActiveCard }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [hoveredSubCard, setHoveredSubCard] = useState(null);

//   const handleCardClick = () => {
//     if (activeCard === item.id) {
//       setActiveCard(null);
//       setIsExpanded(false);
//     } else {
//       setActiveCard(item.id);
//       setIsExpanded(true);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.25, 0.25, 1] }}
//       className="relative"
//     >
//       {/* Main Card */}
//       <motion.div
//         className="relative h-64 border border-[#403F3E] cursor-pointer overflow-hidden group"
//         onClick={handleCardClick}
//         whileHover={{ scale: 1.002 }}
//         transition={{ duration: 0.3 }}
//         animate={{
//           borderColor: isExpanded ? '#B8A483' : '#403F3E',
//         }}
//       >
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             data-src={item.image}
//             data-id={item.id}
//             alt={item.title}
//             className="w-full h-full object-cover transition-all duration-700"
//             style={{
//               opacity: isExpanded && loadedImages[item.id] ? 0.15 : 0,
//               transform: `scale(${isExpanded ? 1 : 1.1})`,
//             }}
//           />
          
//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/70 to-[#1C1C1C]/90" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-12">
//           <motion.div
//             className="text-center"
//             animate={{
//               y: isExpanded ? -20 : 0,
//             }}
//             transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 1] }}
//           >
//             <h2 
//               className="text-6xl md:text-7xl font-light mb-4 text-[#DCD4CB]"
//               style={{ fontFamily: 'Cormorant Garamond, serif' }}
//             >
//               {item.title}
//             </h2>
            
//             <div className="w-16 h-0.5 bg-[#B8A483] mx-auto mb-4" />
            
//             <p 
//               className="text-sm tracking-[0.15em] text-[#9A9289] font-light"
//               style={{ fontFamily: 'Work Sans, sans-serif' }}
//             >
//               {item.subtitle}
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Expanded Sub-cards */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{
//           height: isExpanded ? 'auto' : 0,
//           opacity: isExpanded ? 1 : 0,
//         }}
//         transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 1] }}
//         className="overflow-hidden"
//       >
//         <div className="space-y-1 pt-1">
//           {item.subCategories?.map((subItem, subIndex) => (
//             <motion.div
//               key={subItem.name}
//               initial={{ opacity: 0, x: -20 }}
//               animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//               transition={{ duration: 0.5, delay: subIndex * 0.1 }}
//               className="relative h-48 border border-[#403F3E] cursor-pointer overflow-hidden group"
//               onMouseEnter={() => setHoveredSubCard(subItem.name)}
//               onMouseLeave={() => setHoveredSubCard(null)}
//             >
//               {/* Background Image */}
//               <div className="absolute inset-0">
//                 <img
//                   data-src={subItem.image}
//                   data-id={`${item.id}-${subItem.name}`}
//                   alt={subItem.name}
//                   className="w-full h-full object-cover transition-all duration-700"
//                   style={{
//                     opacity: hoveredSubCard === subItem.name && loadedImages[`${item.id}-${subItem.name}`] ? 0.25 : 0,
//                     transform: `scale(${hoveredSubCard === subItem.name ? 1 : 1.1})`,
//                   }}
//                 />
                
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/85 via-[#1C1C1C]/60 to-[#1C1C1C]/85" />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 h-full flex flex-col justify-center px-12">
//                 <motion.div
//                   className="text-center"
//                   animate={{
//                     y: hoveredSubCard === subItem.name ? -8 : 0,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h3 
//                     className="text-4xl md:text-5xl font-light mb-3 text-[#DCD4CB]"
//                     style={{ fontFamily: 'Cormorant Garamond, serif' }}
//                   >
//                     {subItem.name}
//                   </h3>
                  
//                   <div className="w-12 h-0.5 bg-[#B8A483] mx-auto mb-3" />
                  
//                   <p 
//                     className="text-xs tracking-[0.12em] text-[#9A9289] font-light"
//                     style={{ fontFamily: 'Work Sans, sans-serif' }}
//                   >
//                     {subItem.subtitle}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Hover Border Glow */}
//               <motion.div
//                 className="absolute inset-0 border-2 border-transparent"
//                 animate={{
//                   borderColor: hoveredSubCard === subItem.name ? '#B8A483' : 'transparent',
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default OtelloHotelInterface;













import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OtelloHotelInterface = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [loadedImages, setLoadedImages] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  
  const accommodations = [
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
    const preloadImage = (src, id) => {
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
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(184, 164, 131, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(80, 77, 74, 0.05) 0%, transparent 50%)',
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
            className="text-base sm:text-lg md:text-xl text-heritage-bg-primary max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            Escape to a world of sophistication and<br className="hidden sm:block" />
            serene Otello's beauty.
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 md:space-y-8">
            {accommodations.map((item, index) => (
              <AccommodationCard
                key={item.id}
                item={item}
                index={index}
                isInView={isInView}
                loadedImages={loadedImages}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

const AccommodationCard = ({ item, index, isInView, loadedImages, activeCard, setActiveCard }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredSubCard, setHoveredSubCard] = useState(null);
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
        className="relative h-80 sm:h-96 md:h-[420px] lg:h-[480px] border border-border-accent cursor-pointer overflow-hidden group"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
        animate={{
          borderColor: isExpanded ? '#B07B5F' : isHovered ? '#A09782' : '#A09782',
          height: isHovered ? (window.innerWidth >= 1024 ? 500 : window.innerWidth >= 768 ? 440 : window.innerWidth >= 640 ? 400 : 336) : (window.innerWidth >= 1024 ? 480 : window.innerWidth >= 768 ? 420 : window.innerWidth >= 640 ? 384 : 320)
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
                scale: isHovered ? 1.05 : 1.1, 
                opacity: isHovered ? 0.4 : 0.2 
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 1] }}
            />
          )}
          
          {/* Curtain Reveal Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-text-primary-title via-text-primary-title/95 to-text-primary-title/80"
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? "0%" : "40%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 1] }}
          />
          
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-text-primary-title/90 via-text-primary-title/70 to-text-primary-title/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12">
          <motion.div
            className="text-center"
            animate={{
              y: isExpanded ? -20 : isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 1] }}
          >
            <motion.h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-6 text-heritage-bg-primary"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                color: isHovered ? '#FBF9F6' : '#FBF9F6'
              }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h2>
            
            <motion.div 
              className="w-16 md:w-20 h-0.5 bg-button-accent-bg mx-auto mb-4 md:mb-6"
              animate={{
                width: isHovered ? (window.innerWidth >= 768 ? 100 : 80) : (window.innerWidth >= 768 ? 80 : 64),
                backgroundColor: isHovered ? '#9C6A50' : '#B07B5F'
              }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.p 
              className="text-xs sm:text-sm tracking-[0.15em] text-heritage-bg-primary font-light"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
              animate={{
                opacity: isHovered ? 1 : 0.8,
                y: isHovered ? -5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {item.subtitle}
            </motion.p>

            {/* Additional description on hover */}
            <motion.p
              className="text-sm sm:text-base text-button-accent-bg font-light mt-4 leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 20 
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 border border-button-accent-bg opacity-0"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Expanded Sub-cards */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 1] }}
        className="overflow-hidden"
      >
        <div className="space-y-2 pt-2">
          {item.subCategories?.map((subItem, subIndex) => (
            <motion.div
              key={subItem.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: subIndex * 0.15 }}
              className="relative h-64 sm:h-72 md:h-80 lg:h-96 border border-border-accent cursor-pointer overflow-hidden group"
              onMouseEnter={() => setHoveredSubCard(subItem.name)}
              onMouseLeave={() => setHoveredSubCard(null)}
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
                      opacity: hoveredSubCard === subItem.name ? 0.5 : 0.25 
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 1] }}
                  />
                )}
                
                {/* Curtain Reveal for Sub-cards */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-text-primary-title via-text-primary-title/90 to-text-primary-title/70"
                  initial={{ y: "100%" }}
                  animate={{ y: hoveredSubCard === subItem.name ? "0%" : "50%" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.25, 0.25, 1] }}
                />
                
                {/* Base Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-text-primary-title/85 via-text-primary-title/60 to-text-primary-title/85" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12">
                <motion.div
                  className="text-center"
                  animate={{
                    y: hoveredSubCard === subItem.name ? -12 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 md:mb-4 text-heritage-bg-primary"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    animate={{
                      scale: hoveredSubCard === subItem.name ? 1.03 : 1,
                      color: hoveredSubCard === subItem.name ? '#FBF9F6' : '#FBF9F6'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {subItem.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="w-12 md:w-16 h-0.5 bg-button-accent-bg mx-auto mb-3 md:mb-4"
                    animate={{
                      width: hoveredSubCard === subItem.name ? (window.innerWidth >= 768 ? 80 : 64) : (window.innerWidth >= 768 ? 64 : 48),
                      backgroundColor: hoveredSubCard === subItem.name ? '#9C6A50' : '#B07B5F'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <motion.p 
                    className="text-xs sm:text-sm tracking-[0.12em] text-heritage-bg-primary font-light"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                    animate={{
                      opacity: hoveredSubCard === subItem.name ? 1 : 0.8,
                      y: hoveredSubCard === subItem.name ? -3 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {subItem.subtitle}
                  </motion.p>
                </motion.div>
              </div>

              {/* Hover Border Glow */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent"
                animate={{
                  borderColor: hoveredSubCard === subItem.name ? '#B07B5F' : 'transparent',
                  boxShadow: hoveredSubCard === subItem.name ? '0 0 30px rgba(176, 123, 95, 0.2)' : '0 0 0px rgba(176, 123, 95, 0)'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OtelloHotelInterface;













































