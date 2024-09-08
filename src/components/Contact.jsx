import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

// Contact component for displaying contact information and a form
const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      {/* Container to center and add padding to the content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading for the contact section */}
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        
        {/* Flex container for contact information and form */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact information section */}
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            
            {/* Email contact */}
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2' />
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    khyati@example.com
                </a>
            </div>
            
            {/* Phone contact */}
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2' />
                <span>+9828839922</span>
            </div>
            
            {/* Address contact */}
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                <span>Ammerpet, Hyderabad, India</span>
            </div>
          </div>

          {/* Contact form section */}
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                {/* Name input field */}
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                      focus:border-green-400'
                      placeholder='Enter Your Name'
                    />
                </div>

                {/* Email input field */}
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                      focus:border-green-400'
                      placeholder='Enter Your Email'
                    />
                </div>

                {/* Message textarea field */}
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                      id="message"
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                      focus:border-green-400'
                      rows="5"
                      placeholder='Enter Your Message'
                    />
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                >
                  Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
/*Tailwind CSS Properties Explained
bg-black: Sets the background color of the container to black.

text-white: Sets the text color to white.

py-20: Adds vertical padding of 5rem (80px) to the container.

container: Centers the content within a maximum-width container.

mx-auto: Centers the container horizontally.

px-8 md:px-16 lg:px-24: Adds horizontal padding of 2rem (32px) on small screens, 4rem (64px) on medium screens, and 6rem (96px) on large screens.

text-4xl: Sets the font size to 2.25rem (36px) for the heading.

font-bold: Applies bold font weight.

text-center: Centers the text horizontally.

mb-12: Adds bottom margin of 3rem (48px) to the heading.

flex: Applies a flexbox layout to the container.

flex-col: Arranges items in a column on small screens.

md:flex-row: Changes layout to a row on medium and larger screens.

items-center: Vertically centers items within the flex container.

md:space-x-12: Adds horizontal spacing of 3rem (48px) between items on medium and larger screens.

flex-1: Allows the div to grow and fill available space.

w-full: Sets the width to 100% of its container.

text-3xl: Sets the font size to 1.875rem (30px) for the subheading.

text-transparent: Makes the text color transparent.

bg-clip-text: Clips the background gradient to the text.

bg-gradient-to-r from-green-400 to-blue-500: Applies a horizontal gradient background from green to blue.

mb-4: Adds bottom margin of 1rem (16px).

mb-4 mt-8: Adds bottom margin of 1rem (16px) and top margin of 2rem (32px) to the contact details.

inline-block: Makes the icon an inline-block element for proper alignment with text.

text-green-400: Sets the text color of icons to green.

mr-2: Adds right margin of 0.5rem (8px) to the icons.

space-y-4: Adds vertical spacing of 1rem (16px) between form fields.

block: Makes the label a block-level element.

mb-2: Adds bottom margin of 0.5rem (8px) to the label.

w-full: Sets the width of input and textarea to 100% of their container.

p-2: Adds padding of 0.5rem (8px) inside input and textarea.

rounded: Applies default border-radius to input and textarea.

bg-gray-800: Sets the background color of input and textarea to dark gray.

border border-gray-600: Adds a border with a gray color to input and textarea.

focus:outline-none: Removes the default focus outline.

focus:border-green-400: Changes the border color to green on focus.

bg-gradient-to-r from-green-400 to-blue-500: Applies a horizontal gradient background to the button.

text-white: Sets the text color of the button to white.

hidden md:inline: Hides the button on small screens and shows it on medium and larger screens.

transform transition-transform duration-300 hover:scale-105: Applies a scaling transform with transition on hover.

px-8 py-2: Adds padding of 2rem (32px) on the left and right, and 0.5rem (8px) on the top and bottom of the button.

rounded-full: Applies a fully rounded border radius to the button.*/