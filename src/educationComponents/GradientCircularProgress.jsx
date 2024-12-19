import React, { useRef, useEffect, useState } from "react";

export const GradientCircularProgress = ({
  progress , // Target progress value
  strokeWidth = 8,
  animationDuration = 1000, // Animation duration in milliseconds
  strokeColor = ['#FFA500', '#FFFF00'], // Gradient or color for the stroke (progress circle)
  imageUrl, // Image URL to display in the center
}) => {
  const parentRef = useRef(null);
  const [size, setSize] = useState(100); // Default size
  const [animatedProgress, setAnimatedProgress] = useState(0); // Animated progress value
  const [isVisible, setIsVisible] = useState(false); // Track visibility in viewport

  useEffect(() => {
    // Update the size based on the parent's height
    const updateSize = () => {
      if (parentRef.current) {
        const parentHeight = parentRef.current.offsetHeight;
        setSize(parentHeight);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    // Handle animation restart on viewport entry
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when visible
          animateProgress();
        } else {
          setIsVisible(false); // Stop the animation when not in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, [progress]);

  const animateProgress = () => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressValue = Math.min(
        (elapsed / animationDuration) * progress,
        progress
      );
      setAnimatedProgress(progressValue);

      if (elapsed < animationDuration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div ref={parentRef} className="relative w-full h-full">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full transform rotate-[-90deg] !z-10"
      >
        {/* Define Gradient for Progress Circle */}
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={strokeColor[0]} />
            <stop offset="100%" stopColor={strokeColor[1]} />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="#E3EDF9" // Fixed background color
          className="stroke-white shadow-inner shadow-black"
        />

        {/* Outer Shadow Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          className="stroke-[#6A8FB0]  "
          strokeDasharray={strokeWidth}
          strokeDashoffset={offset + 5}
          
        />

        {/* Main Progress Circle with Gradient or Solid Stroke */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke={strokeColor.length > 1 ? "url(#progress-gradient)" : strokeColor[0]} // Apply gradient or solid color
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? offset : circumference} // Control animation with visibility
          strokeLinecap="round"
          style={{
            transition: `stroke-dashoffset ${animationDuration}ms ease-out, stroke ${animationDuration}ms ease-out`,
          }}
        />

        {/* Inner Shadow Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth={strokeWidth}
          style={{
            filter: "inset(0px 2px 4px rgba(0,0,0,0.2))",
          }}
        />
      </svg>

      {/* Centered Image */}
      {imageUrl && (
        <div
          className="absolute  inset-0 flex items-center justify-center !z-0 p-2"
          style={{ zIndex: 1 }}
        >
          <img
            src={imageUrl}
            alt="centered"
            className="object-cover rounded-full absolute w-[70%] "
          />
        </div>
      )}
    </div>
  );
};
