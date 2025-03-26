
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type SliderImage = {
  url: string;
  alt: string;
  title: string;
  subtitle: string;
};

const sliderImages: SliderImage[] = [
  {
    url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern architectural interior",
    title: "Elegant Design",
    subtitle: "Crafted with precision and care"
  },
  {
    url: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Minimalist workstation",
    title: "Clean Aesthetics",
    subtitle: "Simplicity meets functionality"
  },
  {
    url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80",
    alt: "Workspace with natural light",
    title: "Inspiring Spaces",
    subtitle: "Where ideas come to life"
  }
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState<boolean[]>(Array(sliderImages.length).fill(true));
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to advance to next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Handle image preloading
  const handleImageLoad = (index: number) => {
    const newLoadingState = [...loading];
    newLoadingState[index] = false;
    setLoading(newLoadingState);
  };

  // Handle manual navigation
  const goToSlide = (index: number) => {
    if (currentSlide === index || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-black transition-opacity duration-1000",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background image */}
          <div className="absolute inset-0 transition-transform duration-[10s] ease-out scale-105" style={{
            transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)',
            opacity: loading[index] ? 0 : 1,
            transition: 'transform 10s ease-out, opacity 1.5s ease-out'
          }}>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad(index)}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className={cn(
              "text-center text-white transform transition-all duration-1000 max-w-4xl",
              currentSlide === index && !loading[index] 
                ? "translate-y-0 opacity-100" 
                : "translate-y-10 opacity-0"
            )}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4">{image.title}</h1>
              <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8">{image.subtitle}</p>
              <button className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
