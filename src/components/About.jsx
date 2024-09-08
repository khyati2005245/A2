import React from "react";
import AboutImage from "../assets/aboutme-image.png";

// About component that displays information about the user
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      {/* Container for centering and adding padding */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section title */}
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        {/* Flex container for layout, switching between column and row */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image section */}
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          {/* Text and skill bars section */}
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate UI/UX and frontend developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              {/* Skill bar for HTML & CSS */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              {/* Skill bar for React JS */}
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>
              </div>
              {/* Skill bar for Node JS */}
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-5/12"
                  ></div>
                </div>
              </div>
              {/* Skill bar for Figma */}
              <div className="flex items-center">
                <label htmlFor="figma" className="w-2/12">
                  Figma
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              {/* Skill bar for Writing Skills */}
              <div className="flex items-center">
                <label htmlFor="writing" className="w-2/12">
                  Writing skills
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            {/* Statistics section */}
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  Fresher
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  Just Started
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
/*Tailwind CSS Properties Explained
bg-black: Sets the background color of the container to black.

text-white: Sets the text color to white.

py-20: Adds vertical padding of 5rem (80px) to the container.

container: Centers the content and provides a max-width container.

mx-auto: Centers the container horizontally.

px-8 md:px-16 lg:px-24: Adds horizontal padding of 2rem (32px) on small screens, 4rem (64px) on medium screens, and 6rem (96px) on large screens.

text-4xl: Sets the font size to 2.25rem (36px) for the section title.

font-bold: Applies bold font weight.

text-center: Centers the text.

mb-12: Adds bottom margin of 3rem (48px) to the section title.

flex: Applies a flexbox layout to the container.

flex-col: Arranges items in a column on small screens.

md:flex-row: Changes layout to a row on medium and larger screens.

items-center: Vertically centers items within the flex container.

md:space-x-12: Adds horizontal spacing of 3rem (48px) between items on medium and larger screens.

w-72: Sets the width of the image to 18rem (288px).

h-80: Sets the height of the image to 20rem (320px).

rounded: Applies border-radius to make the image rounded.

object-cover: Ensures the image covers its container while preserving its aspect ratio.

mb-8 md:mb-0: Adds bottom margin of 2rem (32px) on small screens, removes it on medium and larger screens.

text-lg: Sets the font size to 1.125rem (18px) for the paragraph text.

mb-8: Adds bottom margin of 2rem (32px) to the paragraph.

space-y-4: Adds vertical spacing of 1rem (16px) between skill bars.

w-2/12: Sets the width of the label to 2/12 (16.67%) of its container's width.

grow: Allows the div to grow and fill available space.

bg-gray-800: Sets the background color of the skill bar to dark gray.

rounded-full: Applies full border-radius to make the skill bar rounded.

h-2.5: Sets the height of the skill bar to 0.625rem (10px).

bg-gradient-to-r from-green-400 to-blue-500: Applies a horizontal gradient background from green to blue to the skill fill.

transform transition-transform duration-300 hover:scale-105: Scales up the skill fill slightly on hover with a smooth transition.

mt-12: Adds top margin of 3rem (48px) to the statistics section.

flex justify-between: Arranges items in a row with space between them.

text-center: Centers the text within each statistic block.

text-2xl: Sets the font size to 1.5rem (24px) for the statistics headings.

text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500: Makes the text transparent and applies a gradient background to it.*/