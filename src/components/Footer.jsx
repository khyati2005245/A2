import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Footer component for the website footer section
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container to center and add padding to the content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Flex container for the main content */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          {/* Left section with description */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">AKC</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Hyderabad, specializing in web and
              UI/UX design.
            </p>
          </div>
          {/* Subscription form */}
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom section with social links and additional links */}
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          {/* Copyright text */}
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AKC. All rights reserved.
          </p>
          {/* Social media icons */}
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          {/* Additional links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
/*Tailwind CSS Properties Explained
bg-black: Sets the background color of the footer to black.

text-white: Sets the text color to white.

py-8: Adds vertical padding of 2rem (32px) to the footer.

container: Centers the content within a max-width container.

mx-auto: Centers the container horizontally.

px-8 md:px-16 lg:px-24: Adds horizontal padding of 2rem (32px) on small screens, 4rem (64px) on medium screens, and 6rem (96px) on large screens.

flex: Applies a flexbox layout to the container.

flex-col: Arranges items in a column on small screens.

md:flex-row: Changes layout to a row on medium and larger screens.

md:space-x-12: Adds horizontal spacing of 3rem (48px) between items on medium and larger screens.

items-center: Vertically centers the items within the flex container.

mb-4: Adds bottom margin of 1rem (16px) to the first section.

md:mb-0: Removes the bottom margin on medium and larger screens.

flex-1: Allows the div to grow and fill available space.

w-full: Sets the width of the div to 100% of its container.

w-full: Sets the width of the input to 100% of its container.

p-2: Adds padding of 0.5rem (8px) to the input.

rounded-l-lg: Applies large border-radius to the left side of the input, making the corners rounded.

bg-gray-800: Sets the background color of the input to a dark gray.

border border-gray-600: Adds a border with a dark gray color.

focus:outline-none: Removes the default focus outline.

focus:border-green-400: Changes the border color to green on focus.

bg-gradient-to-r from-green-400 to-blue-500: Applies a horizontal gradient background from green to blue to the button.

text-white: Sets the text color to white.

px-4 py-2: Adds padding of 1rem (16px) on the left and right, and 0.5rem (8px) on the top and bottom of the button.

rounded-r-lg: Applies large border-radius to the right side of the button.

border-t border-gray-600: Adds a top border with a dark gray color.

pt-4: Adds top padding of 1rem (16px) to the bottom section.

my-4: Adds vertical margin of 1rem (16px) on small screens.

md:my-0: Removes vertical margin on medium and larger screens.

space-x-4: Adds horizontal spacing of 1rem (16px) between the social media icons.

hover:text-white: Changes the text color to white on hover.

text-gray-400: Sets the text color of the additional links and social media icons to a light gray.

flex space-x-4: Arranges the additional links in a row with horizontal spacing.*/
