import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

// Array containing the list of projects
const projects = [
  {
    id: 1,
    name: "UI/UX Designer",
    technologies: "Figma",
    image: employeeMSImage,
    url: "https://www.figma.com/proto/wtlfx4wLCq0tutZWFrpOVU/Amazon-Kindle?node-id=244-157&starting-point-node-id=244%3A157",
  },
  {
    id: 2,
    name: "Service Design",
    technologies: "Service design tools",
    image: bookMSImage,
    url: "https://www.canva.com/design/DAFyfpGOk8c/lCg32pJ1IWT2fc7bvw1Dpw/edit",
  },
  {
    id: 3,
    name: "Basic HTML",
    technologies: "HTML and CSS",
    image: employeeMSImage,
    url: "file:///C:/Users/Khyati/demoreact/Portfolio-React-Tailwind-main/src/assets/Extra%20work/Temperature%20converter/Index.html",
  },
];

// Projects component to display a list of projects
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      {/* Container for the section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section title */}
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the projects array to create a card for each project */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              {/* Project name */}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              {/* Technologies used */}
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              {/* Link to the project */}
              <a
                href={project.url}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Show More
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
 /*Tailwind CSS Properties Explained
#bg-black: Sets the background color of the div to black.
#text-white: Sets the text color to white.
#py-20: Adds padding of 5rem (80px) to the top and bottom of the div.
#container: Centers the content and applies responsive horizontal padding.
mx-auto: Centers the container horizontally.
px-8 md:px-16 lg:px-24: Adds horizontal padding of 2rem (32px) on small screens, increasing to 4rem (64px) on medium screens, and 6rem (96px) on large screens.
text-4xl: Sets the font size of the section title to 2.25rem (36px).
font-bold: Makes the font weight bold.
text-center: Centers the text horizontally.
mb-12: Adds margin-bottom of 3rem (48px) to the section title.
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3: Defines a grid layout with 1 column on small screens, 2 columns on medium screens, and 3 columns on large screens.
gap-8: Adds a gap of 2rem (32px) between grid items.
bg-gray-800: Sets the background color of each project card to a dark gray.
p-6: Adds padding of 1.5rem (24px) to all sides of the project card.
rounded-lg: Applies large rounded corners to the card.
hover:shadow-lg: Adds a large shadow on hover to the card.
transform transition-transform duration-300 hover:scale-105: Applies a scaling transform on hover with a transition effect over 300ms.
rounded-lg: Applies rounded corners to the image.
mb-4: Adds margin-bottom of 1rem (16px) to the image.
w-full: Sets the image width to 100% of its container.
h-48: Sets the image height to 12rem (192px).
object-cover: Ensures the image covers the element’s box while preserving aspect ratio.
text-2xl: Sets the font size of the project name to 1.5rem (24px).
mb-2: Adds margin-bottom of 0.5rem (8px) to the project name.
text-gray-400: Sets the text color of the technologies used to a medium light gray.
inline-block: Displays the link as an inline-block element.
bg-gradient-to-r from-green-400 to-blue-500: Creates a horizontal gradient background for the link from green to blue.
text-white: Sets the text color of the link to white.
px-4 py-2: Adds padding of 1rem (16px) on the left and right, and 0.5rem (8px) on the top and bottom of the link.
rounded-full: Applies fully rounded corners to the link.
flex items-center: Uses Flexbox to align items in the center of the link.
ml-2: Adds margin-left of 0.5rem (8px) to the arrow.*/

