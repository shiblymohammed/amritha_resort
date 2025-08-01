import React, { useEffect, useRef } from 'react';

interface DishCard {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const DiningSection: React.FC = () => {
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const dishes: DishCard[] = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon butter sauce",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      price: "$24.99"
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      description: "Classic Italian pasta with pancetta, eggs, parmesan cheese and black pepper",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      price: "$18.99"
    },
    {
      id: 3,
      name: "Beef Tenderloin",
      description: "Premium cut beef tenderloin served with roasted vegetables and red wine reduction",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      price: "$32.99"
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with homemade croutons, parmesan and caesar dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      price: "$14.99"
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center served with vanilla ice cream",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      price: "$12.99"
    }
  ];

  const handleOrderNow = (dishName: string) => {
    alert(`Ordering ${dishName}!`);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if we're within the dining section bounds
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
        
        // Check if we're at the top or bottom of the scrollable content
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1; // -1 for rounding errors
        
        // Allow natural page scroll if we're at the boundaries and scrolling in that direction
        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          // Don't prevent default - allow natural page scroll
          return;
        }
        
        // Otherwise, handle the scroll within our section
        e.preventDefault();
        leftSection.scrollTop += e.deltaY;
      }
    };

    // Add wheel event listener to the entire window
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="dining-section flex h-screen w-full relative"
         style={{ 
           scrollbarWidth: 'none', 
           msOverflowStyle: 'none'
         }}>
      {/* Left Side - Scrollable Cards */}
      <div 
        ref={leftSectionRef}
        className="w-1/2 bg-[#FBF9F6] overflow-y-auto p-6"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        <style>{`
          .w-1\\/2::-webkit-scrollbar {
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
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Menu</h1>
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#FBF9F6] border-4 border-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto"
            >
              <div className="flex flex-col gap-6">
                <div className="w-full">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">
                    {dish.description}
                  </p>
                  <p className="text-xl font-bold text-gray-800 mb-6">
                    {dish.price}
                  </p>
                  <button
                    onClick={() => handleOrderNow(dish.name)}
                    className="w-full px-8 py-3 bg-transparent border-2 border-white text-gray-800 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 font-medium text-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Fixed Image */}
      <div className="w-1/2 bg-[#DCD7C9] absolute right-0 top-0 h-screen flex items-center justify-center">
        <div className="w-[80%] h-[70%] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=800&fit=crop"
            alt="Restaurant Interior"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DiningSection;