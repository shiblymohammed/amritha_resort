import React, { useEffect, useRef, useState } from 'react';

interface DishCard {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const DiningSection: React.FC = () => {
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<{[key: number]: boolean}>({});

  const dishes: DishCard[] = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon butter sauce",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      price: "$24.99"
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      description: "Classic Italian pasta with pancetta, eggs, parmesan cheese and black pepper",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      price: "$18.99"
    },
    {
      id: 3,
      name: "Beef Tenderloin",
      description: "Premium cut beef tenderloin served with roasted vegetables and red wine reduction",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
      price: "$32.99"
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with homemade croutons, parmesan and caesar dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      price: "$14.99"
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center served with vanilla ice cream",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
      price: "$12.99"
    }
  ];

  const handleOrderNow = (dishName: string) => {
    alert(`Ordering ${dishName}!`);
  };

  // Preload images
  useEffect(() => {
    dishes.forEach(dish => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [dish.id]: true }));
      };
      img.src = dish.image;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const diningSection = document.querySelector('.dining-section');
      if (!diningSection) return;
      
      const rect = diningSection.getBoundingClientRect();
      const isWithinSection = 
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom;
      
      if (isWithinSection && leftSectionRef.current) {
        const leftSection = leftSectionRef.current;
        const { scrollTop, scrollHeight, clientHeight } = leftSection;
        
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          return;
        }
        
        e.preventDefault();
        leftSection.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="dining-section flex h-screen w-full relative bg-heritage-bg-primary"
         style={{ 
           scrollbarWidth: 'none', 
           msOverflowStyle: 'none',
           backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(176, 123, 95, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96, 124, 110, 0.05) 0%, transparent 50%)',
         }}>
      
      <style>{`
        .dining-section::-webkit-scrollbar,
        .left-scroll::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 768px) {
          .dining-section {
            flex-direction: column;
          }
          .dining-section > div:first-child {
            width: 100%;
            height: 60%;
          }
          .dining-section > div:last-child {
            width: 100%;
            height: 40%;
            position: relative;
          }
        }
      `}</style>

      {/* Left Side - Scrollable Cards */}
      <div 
        ref={leftSectionRef}
        className="left-scroll w-1/2 overflow-y-auto p-6 lg:p-8 bg-text-primary-title"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        <div className="space-y-8 lg:space-y-12">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 
              className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Heritage Menu
            </h1>
            <div className="w-20 lg:w-24 h-0.5 bg-button-accent-bg mx-auto mb-10" />
            <p 
              className="text-sm lg:text-base tracking-[0.15em] text-text-more-description font-light"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              EXCEPTIONAL CULINARY EXPERIENCES AWAIT
            </p>
          </div>

          {/* Dish Cards */}
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`border overflow-hidden transition-all duration-500 max-w-lg mx-auto group cursor-pointer shadow-sm ${
                hoveredCard === dish.id 
                  ? 'border-white shadow-lg' 
                  : 'border-white'
              }`}
              onMouseEnter={() => setHoveredCard(dish.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === dish.id ? 'scale(1.02) translateY(-4px)' : 'scale(1)',
                boxShadow: hoveredCard === dish.id 
                  ? '0 12px 40px rgba(176, 123, 95, 0.15)' 
                  : '0 2px 8px rgba(93, 92, 80, 0.08)'
              }}
            >
              {/* Image Section */}
              <div className="relative h-48 lg:h-64 overflow-hidden">
                {loadedImages[dish.id] && (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: hoveredCard === dish.id ? 'scale(1.1)' : 'scale(1.05)',
                      opacity: hoveredCard === dish.id ? 0.9 : 0.8
                    }}
                  />
                )}
                
                {/* Dark overlay */}
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: hoveredCard === dish.id 
                      ? 'linear-gradient(to top, rgba(58, 74, 62, 0.7), rgba(58, 74, 62, 0.3))'
                      : 'linear-gradient(to top, rgba(58, 74, 62, 0.6), rgba(58, 74, 62, 0.4))'
                  }}
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6 lg:p-8" style={{ backgroundColor: '#2d3a31' }}>
                <div className="text-center">
                  <h3 
                    className="text-2xl lg:text-3xl font-light text-white mb-4 transition-all duration-300"
                    style={{ 
                      fontFamily: "Cormorant Garamond, serif",
                      transform: hoveredCard === dish.id ? 'translateY(-2px)' : 'translateY(0)'
                    }}
                  >
                    {dish.name}
                  </h3>
                  
                  <div 
                    className="bg-button-accent-bg mx-auto mb-4 transition-all duration-400 h-0.5"
                    style={{
                      width: hoveredCard === dish.id ? '60px' : '48px'
                    }}
                  />
                  
                  <p 
                    className="text-gray-300 text-center mb-6 leading-relaxed text-sm lg:text-base font-light transition-all duration-300"
                    style={{ 
                      fontFamily: 'Work Sans, sans-serif',
                      opacity: hoveredCard === dish.id ? 1 : 0.9
                    }}
                  >
                    {dish.description}
                  </p>
                  
                  <button
                    onClick={() => handleOrderNow(dish.name)}
                    className={`px-6 lg:px-8 py-3 transition-all duration-400 font-light text-xs lg:text-sm tracking-[0.1em] ${
                      hoveredCard === dish.id
                        ? 'bg-text-primary-title text-button-accent-hover-text border border-button-white shadow-lg'
                        : 'bg-button-secondary-bg border border-button-white text-white hover:bg-button-secondary-hover-bg hover:text-button-secondary-hover-text hover:border-button-secondary-hover-border'
                    }`}
                    style={{ 
                      fontFamily: 'Work Sans, sans-serif',
                      transform: hoveredCard === dish.id ? 'translateY(-1px)' : 'translateY(0)',
                      boxShadow: hoveredCard === dish.id ? '0 4px 20px rgba(176, 123, 95, 0.2)' : 'none'
                    }}
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Fixed Image */}
      <div className="w-1/2 bg-heritage-bg-accent absolute right-0 top-0 h-screen flex items-center justify-center">
        <div className="w-[85%] h-[75%] flex items-center justify-center relative">
          <div className="absolute inset-0 border border-border-accent" />
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=1000&fit=crop"
            alt="Restaurant Interior"
            className="w-full h-full object-cover transition-all duration-700"
            style={{
              filter: 'sepia(15%) saturate(85%) brightness(0.95) contrast(1.05)',
            }}
          />
          
          {/* Heritage-themed overlay on right image */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-text-primary-title/10 to-text-primary-title/30" />
          
          {/* Decorative corner elements with heritage colors */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-button-accent-bg opacity-70" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-button-accent-bg opacity-70" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-button-accent-bg opacity-70" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-button-accent-bg opacity-70" />
        </div>
      </div>

      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default DiningSection;