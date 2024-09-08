import React from 'react';
import HeroImage from '../assets/hero-image.png';

// Hero component to display the main hero section with an image, title, and buttons
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      {/* Hero image with hover effect */}
      <img 
        src={HeroImage} 
        alt="Hero" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      {/* Main heading with gradient text */}
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Anne Khyati Chowdary
        </span>
        , UI/UX Designer and front end developer
      </h1>
      {/* Description paragraph */}
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications with a focus on user experience.
      </p>
      {/* Buttons section */}
      <div className='mt-8 space-x-4'>
        {/* Contact button */}
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact With Me
        </button>
        {/* Resume button */}
        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
/*Tailwind CSS Properties Explained
bg-black: Sets the background color of the div to black.

text-white: Sets the text color to white.

text-center: Centers the text horizontally.

py-16: Adds vertical padding of 4rem (64px) to the div.

mx-auto: Centers the image horizontally within its container.

mb-8: Adds bottom margin of 2rem (32px) to the image.

w-48: Sets the width of the image to 12rem (192px).

h-48: Sets the height of the image to 12rem (192px).

rounded-full: Applies a fully rounded border radius to the image, making it a circle.

object-cover: Ensures the image covers the area of its container while preserving aspect ratio.

transform transition-transform duration-300 hover:scale-105: Applies a scaling transform effect on hover with a transition duration of 300ms.

text-4xl: Sets the font size of the heading to 2.25rem (36px).

font-bold: Makes the font weight bold.

text-transparent: Makes the text color transparent.

bg-clip-text: Clips the background gradient to the text, making the text appear as if it's filled with the gradient.

bg-gradient-to-r from-green-400 to-blue-500: Applies a horizontal gradient background to the text from green to blue.

mt-4: Adds top margin of 1rem (16px) to the paragraph.

text-lg: Sets the font size of the paragraph text to 1.125rem (18px).

text-gray-300: Sets the text color to a light gray.

mt-8: Adds top margin of 2rem (32px) to the buttons container.

space-x-4: Adds horizontal spacing of 1rem (16px) between each button.

bg-gradient-to-r from-green-400 to-blue-500: Creates a horizontal gradient background for the "Contact With Me" button from green to blue.

bg-gradient-to-r from-pink-500 to-yellow-500: Creates a horizontal gradient background for the "Resume" button from pink to yellow.

text-white: Sets the text color of the buttons to white.

transform transition-transform duration-300 hover:scale-105: Applies a scaling transform effect on hover with a transition duration of 300ms.

px-4 py-2: Adds padding of 1rem (16px) on the left and right, and 0.5rem (8px) on the top and bottom of the buttons.

rounded-full: Applies fully rounded corners to the buttons, making them pill-shaped.*/