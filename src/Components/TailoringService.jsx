import React from 'react';

const TailoringService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* First Text Section - Wealth of Choices */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-16 tracking-wide">
          WEALTH OF CHOICES
        </h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-lg md:text-xl">
            The experience means that as well as taking up to <span className="font-semibold">30 individual measurements</span>,
            <br />which we'll assess your posture and look to accentuate your best features.
          </p>
          
          <p className="text-lg md:text-xl">
            Our ability to continue thinking in three dimensions means that when our house cutters will cut your cloth,
            <br />they will make subtle adjustments to the fit and hang that, at this point, only we can see.
          </p>
          
          <p className="text-lg md:text-xl">
            We will have Conversations about your fabrics, linings and other details,
          </p>
          
          <p className="text-lg md:text-xl italic font-medium text-gray-600">
            IT CAN BE AS WIDE-RANGING OR AS SIMPLE AS YOU LIKE.
          </p>
          
          <p className="text-lg md:text-xl">
            Many clients enjoy making their garments uniquely suited to their lifestyle,
            <br />with hidden pockets for a cigar, phone, loose change, or even a pouch for pills
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          
            {/* Simulated image with elegant placeholder */}
          
              <div className="flex items-center justify-center h-full">
               <img src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1570625837747-C46JHFVM65QKXV5Y4V1E/Made+Suits+Consultation+%7C+Tailor+Made+Suits+Singapore.jpg?format=2500w" alt="" />
              </div>
           
          
        </div>
      </section>

      {/* Second Text Section - An Investment in Time */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 tracking-wide">
          An investment in time
        </h2>
        
        <p className="text-lg md:text-xl font-medium text-gray-600 mb-16 tracking-wider">
          A BEAUTIFULLY TAILORED GARMENT TAKES TIME.
        </p>
        
        <div className="space-y-12 text-gray-700">
          <div>
            <h3 className="text-2xl md:text-3xl italic font-light text-gray-800 mb-4">
              Time to get to know you,
            </h3>
            <p className="text-lg md:text-xl tracking-wide">
              YOUR PHYSIQUE BODY SHAPE, YOUR BUSY LIFE, YOUR TASTES AND PREFERENCES.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl italic font-light text-gray-800 mb-4">
              Time for fittings,
            </h3>
            <p className="text-lg md:text-xl tracking-wide">
              FOR SOURCING THE BEST FABRICS, THE PRICE RANGE, THE CLIMATE YOU ARE LIVING IN.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl italic font-light text-gray-800 mb-4">
              Time to get everything just right,
            </h3>
            <p className="text-lg md:text-xl tracking-wide mb-8">
              SO THAT WHEN YOU FINALLY PUT THE FINISHED GARMENT ON, YOU NEVER WANT TO TAKE IT OFF.
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <p className="text-xl md:text-2xl font-light text-gray-800 mb-4">
              As a <span className="font-semibold">Made Suits</span> client,
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              you'll benefit from the knowledge of a team that's dedicated to achieving that result for you.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              First you'll speak to one of our experience specialist who will introduce you to
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              the <span className="underline decoration-2 decoration-gray-400">different bespoke styles</span> and <span className="underline decoration-2 decoration-gray-400">fabrics</span> you could choose.
            </p>
          </div>
        </div>
      </section>
      
      {/* Elegant bottom spacing */}
      <div className="h-16"></div>
    </div>
  );
};

export default TailoringService;