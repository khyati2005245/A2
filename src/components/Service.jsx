import React from "react";

// Array containing the list of services offered
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Service designer",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Arts",
    description: "Promote your business with our digital marketing team.",
  },
];

// Service component to display a list of services
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      {/* Container for the section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section title */}
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        
        {/* Grid layout for services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the services array to create a card for each service */}
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              {/* Service ID */}
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              
              {/* Service title */}
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              
              {/* Service description */}
              <p className="mt-2 text-gray-300">{service.description}</p>
              
              {/* Link to read more */}
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
/* Tailwind css properties of the services-
#bg-black: Sets the background color of the div to black.
#text-white: Sets the text color to white.
#py-20: Adds padding of 5rem (80px) to the top and bottom of the div.
#container: Centers the content and applies responsive horizontal padding.
#mx-auto: Centers the container horizontally.
#px-8 md:px-16 lg:px-24: Adds horizontal padding. On medium screens (md) and larger screens (lg), the padding increases.
#text-4xl: Sets the font size of the title to 2.25rem (36px).
#font-bold: Makes the font weight bold.
#text-center: Centers the text horizontally.
#mb-12: Adds margin-bottom of 3rem (48px) to the title.
#grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3: Defines a grid layout with 1 column on small screens, 2 columns on medium screens, and 3 columns on large screens.
#gap-8: Adds a gap of 2rem (32px) between grid items.
#bg-gray-800: Sets the background color of each service card to a dark gray.
#px-6 pb-6: Adds padding of 1.5rem (24px) on the left and right, and padding of 1.5rem (24px) at the bottom of each card.
#rounded-lg: Applies large rounded corners to the card.
#hover:shadow-lg: Adds a large shadow on hover to the card.
#transform transition-transform duration-300 hover:scale-105: Applies a scaling transform on hover with a transition effect over 300ms.
#text-right: Aligns the text to the right.
#text-2xl: Sets the font size of the service ID to 1.5rem (24px).
#text-transparent: Makes the text color transparent.
#bg-clip-text: Clips the background gradient to the text.
#bg-gradient-to-r from-green-600 to-blue-400: Creates a horizontal gradient background from green to blue for the text.
#mt-2: Adds a margin-top of 0.5rem (8px).
#text-gray-300: Sets the text color to a light gray.
#inline-block: Displays the link as an inline-block element.
#text-green-400 hover:text-blue-500: Sets the text color to green and changes it to blue on hover.*/
