import React from 'react';

// Navbar component to display the navigation bar
const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      {/* Container for the navbar items */}
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        {/* Brand name */}
        <div className='text-2xl font-bold hidden md:inline'>AKC</div>
        {/* Navigation links */}
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        {/* Connect button */}
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
/*Tailwind css properties:
bg-black: Sets the background color of the nav element to black.
text-white: Sets the text color to white.
px-8 md:px-16 lg:px-24: Adds horizontal padding of 2rem (32px) on small screens, increasing to 4rem (64px) on medium screens, and 6rem (96px) on large screens.
container: Centers the content and applies responsive horizontal padding.
py-2: Adds padding of 0.5rem (8px) to the top and bottom of the container.
flex: Applies Flexbox layout to the container.
justify-center md:justify-between: Centers the items horizontally on small screens, and spaces them out (justify-between) on medium and larger screens.
items-center: Vertically centers the items within the container.
text-2xl: Sets the font size of the brand name to 1.5rem (24px).
font-bold: Makes the font weight bold.
hidden md:inline: Hides the brand name on small screens and displays it as an inline element on medium and larger screens.
space-x-6: Adds horizontal spacing of 1.5rem (24px) between each navigation link.
hover:text-gray-400: Changes the text color to a light gray when a link is hovered over.
bg-gradient-to-r from-green-400 to-blue-500: Creates a horizontal gradient background for the button from green to blue.
text-white: Sets the text color of the button to white.
hidden md:inline: Hides the button on small screens and displays it as an inline element on medium and larger screens.
transform transition-transform duration-300 hover:scale-105: Applies a scaling transform on hover with a transition effect over 300ms.
px-4 py-2: Adds padding of 1rem (16px) on the left and right, and 0.5rem (8px) on the top and bottom of the button.
rounded-full: Applies fully rounded corners to the button.
Feel free to ask if you have any more questions or need further explanations!*/