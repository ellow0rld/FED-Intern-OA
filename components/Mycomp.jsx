// components/MyComponent.js or components/MyComponent.tsx
import { useEffect } from 'react';
import { gsap } from 'gsap';

function Mycomp() {
  useEffect(() => {
    const elementToAnimate = document.querySelector('.downloadButton');

    // Create a GSAP animation
    gsap.to(elementToAnimate, {
      duration: 10,   // Animation duration (in seconds)
      x: 100,
      opacity: 0.5,  
    });
  }, []);

  return (
    <div>
      <div className="downloadButton">Download on App Store</div>
    </div>
  );
}

export default Mycomp;
