import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface Room {
  id: number;
  type: string;
  title: string;
  price: string;
  priceUnit: string;
  size: string;
  sizeUnit: string;
  guests: string;
  description: string;
  image: string;
}

const AccommodationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  const isInView = useInView(sectionRef, { 
    amount: 0.2,
    margin: "-100px 0px -100px 0px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const rooms: Room[] = [
    {
      id: 1,
      type: "SUITES",
      title: "Deluxe Suite",
      price: "FROM $250",
      priceUnit: "PER NIGHT",
      size: "35 SQM",
      sizeUnit: "/ 376 SQFT",
      guests: "UP TO 2 ADULTS",
      description: "Elegant suite with modern amenities and premium comfort for discerning guests.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      type: "SUITES",
      title: "Junior Suite",
      price: "FROM $300",
      priceUnit: "PER NIGHT",
      size: "45 SQM",
      sizeUnit: "/ 484 SQFT",
      guests: "UP TO 2 ADULTS AND 1 CHILD",
      description: "Spacious suite with luxury amenities and integrated living area for comfort.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      type: "SUITES",
      title: "Executive Suite",
      price: "FROM $400",
      priceUnit: "PER NIGHT",
      size: "60 SQM",
      sizeUnit: "/ 645 SQFT",
      guests: "UP TO 4 ADULTS",
      description: "Ideal for business or leisure, offering separate living areas and VIP amenities.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      type: "SUITES",
      title: "Presidential Suite",
      price: "FROM $600",
      priceUnit: "PER NIGHT",
      size: "85 SQM",
      sizeUnit: "/ 914 SQFT",
      guests: "UP TO 6 ADULTS",
      description: "Ultimate luxury experience with panoramic views and exclusive personalized service.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      type: "SUITES",
      title: "Royal Suite",
      price: "FROM $800",
      priceUnit: "PER NIGHT",
      size: "120 SQM",
      sizeUnit: "/ 1291 SQFT",
      guests: "UP TO 8 ADULTS",
      description: "The pinnacle of luxury living with private terrace, butler service and exclusive amenities.",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const roomVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="min-h-screen bg-heritage-bg-accent overflow-hidden relative py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div 
        className="text-center pt-16 pb-12 relative z-10"
        variants={headerVariants}
        style={{ y: headerY }}
      >
        <motion.h1 
          className="text-5xl lg:text-7xl font-light text-primary-title mb-8 px-6"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          whileInView={{
            opacity: [0, 1],
            y: [40, 0],
            textShadow: [
              "0px 0px 0px rgba(255, 255, 255, 0)",
              "2px 2px 8px rgba(255, 255, 255, 0.1)"
            ]
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Luxurious Suites with
          <br />
          Exclusive Comfort
        </motion.h1>
      </motion.div>

      {/* Rooms Grid */}
      <div className="px-4 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] border-2 p-5 border-text-primary-title relative group ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
                variants={roomVariants}
                whileInView={{
                  opacity: [0, 1],
                  y: [60, 0],
                  scale: [0.95, 1]
                }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                {/* Image Section */}
                <motion.div 
                  className={`relative overflow-hidden bg-gray-800 border-2 border-text-primary-title ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1
                    }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    animate={{
                      scale: hoveredRoom === room.id ? 1.05 : 1,
                      filter: hoveredRoom === room.id 
                        ? "brightness(1.1) contrast(1.1)" 
                        : "brightness(1) contrast(1)"
                    }}
                  />
                  
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"
                    animate={{
                      opacity: hoveredRoom === room.id ? 0.3 : 0.5
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Floating Room Number */}
                  <motion.div
                    className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                  >
                    <span className="text-white font-light text-sm">
                      {String(room.id).padStart(2, '0')}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className={`bg-heritage-bg-accent p-8 lg:p-12 flex flex-col justify-center relative ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  transition={{ duration: 0.5 }}
                >
                  {/* Room Type Label */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span 
                      className="text-xs tracking-[0.2em] text-button-accent-bg font-light"
                      style={{ fontFamily: 'Work Sans, sans-serif' }}
                    >
                      {room.type}
                    </span>
                  </motion.div>

                  {/* Room Title */}
                  <motion.h2 
                    className="text-3xl lg:text-4xl xl:text-5xl font-light text-text-primary-title mb-8"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                    animate={{
                      scale: hoveredRoom === room.id ? 1.02 : 1,
                      textShadow: hoveredRoom === room.id 
                        ? "2px 2px 4px rgba(0, 0, 0, 0.3)"
                        : "none"
                    }}
                    whileHover={{
                      letterSpacing: "0.02em"
                    }}
                  >
                    {room.title}
                  </motion.h2>

                  {/* Room Details */}
                  <motion.div 
                    className="border border-text-primary-title p-6 mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{
                      borderColor: "rgba(156, 163, 175, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {/* Price */}
                      <motion.div 
                        className="flex justify-between items-center"
                        whileHover={{ x: 2 }}
                      >
                        <span className="text-sm text-text-primary-title font-light">PRICE</span>
                        <div className="text-right">
                          <span className="text-text-primary-title font-light">{room.price}</span>
                          <span className="text-xs text-text-primary-title ml-1">{room.priceUnit}</span>
                        </div>
                      </motion.div>
                      
                      {/* Size */}
                      <motion.div 
                        className="flex justify-between items-center"
                        whileHover={{ x: 2 }}
                      >
                        <span className="text-sm text-text-primary-title font-light">SIZE</span>
                        <div className="text-right">
                          <span className="text-text-primary-title font-light">{room.size}</span>
                          <span className="text-xs text-text-primary-title ml-1">{room.sizeUnit}</span>
                        </div>
                      </motion.div>
                      
                      {/* Guests */}
                      <motion.div 
                        className="flex justify-between items-center"
                        whileHover={{ x: 2 }}
                      >
                        <span className="text-sm text-text-primary-title font-light">GUESTS</span>
                        <span className="text-text-primary-title font-light">{room.guests}</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-text-description text-base lg:text-lg leading-relaxed mb-8 font-light"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                    animate={{
                      opacity: hoveredRoom === room.id ? 1 : 0.9
                    }}
                  >
                    {room.description}
                  </motion.p>

                  {/* Details Button */}
                  <motion.button
                    className="self-start text-sm tracking-[0.15em] text-text-primary-title border-2 border-text-primary-title font-normal rounded-md px-3 py-1 transition-all duration-300"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{
                      borderColor: "rgba(156, 163, 175, 0.8)",
                      color: "rgb(209, 213, 219)",
                      x: 5,
                      letterSpacing: "0.2em"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    
                    <span className="text-sm">Book Now</span>
                  </motion.button>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-8 h-8 border-r border-t border-button-accent-bg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 1 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    animate={{
                      rotate: hoveredRoom === room.id ? 45 : 0,
                      borderColor: hoveredRoom === room.id 
                        ? "rgba(156, 163, 175, 0.5)" 
                        : "rgba(156, 163, 175, 0.2)"
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      </div>
    </motion.div>
  );
};

export default AccommodationSection;