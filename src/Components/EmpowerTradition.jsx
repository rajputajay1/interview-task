import React from 'react';

const EmpowerTradition = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Divider Line */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <hr className="border-t border-gray-300" />
      </div>

      {/* Bespoke to Measure Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wider">
          BESPOKE TO MEASURE™
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-gray-700 mb-4">
          EMPOWERS THE <span className="italic">TRADITIONS</span> WITH <span className="italic">TECHNOLOGY</span>.
        </p>
        
        <p className="text-sm md:text-base text-gray-600 tracking-wide mb-12">
          WITH BESPOKE TO MEASURE™ NOT A SINGLE CHALK IS NEEDED FOR THIS. THAT'S RIGHT NO MESSY DRAWINGS AND RULERS FOR THIS ONE.
        </p>

        {/* First Image - Tailoring Process */}
        <div className="mb-16">
          <img 
            src='https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1597137139378-EQILMKCQL73N1NZL8CKN/No+chalk+loser.jpg?format=2500w'
            alt="Bespoke tailoring process" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Technology Description */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            We Infuse Technology pattern drawings using <span className="font-semibold">Computeried Pattern Drafter [CPD]</span>
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            assuring all aspects are covered. Calibrating all type of body shapes and sizes.
          </p>
        </div>

        {/* Second Image - Computer Pattern Design */}
        <div className="mb-16">
          <img 
            src='https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1543732855870-TKS4X0YWH942QV5QJ7ZN/MADESUITS%2BMADE%2BTO%2BMEASURE%2B_%2BSINGAPORE%2BTAILORING%2BCopyrighted%2Bby%2BMade%2BSuits%2B_%2BBespoke%2Bto%2BMeasure%2B%C2%AE%2BComputer%2BPattern%2BDrafter%2BCPD.gif?format=2500w'
            alt="Computerized Pattern Drafter software" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg bg-gray-900"
          />
        </div>

        {/* Quote Icon/Design */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            There are of course practical benefits to having a suit<br />
            made for you and for you alone: it will be as individual<br />
            as you are, there will be no compromises on fit,<br />
            everything will be exactly as you want it
          </p>

          {/* Make Appointment Button */}
          <button className="bg-amber-900 hover:bg-amber-800 text-white font-medium py-4 px-8 text-sm tracking-wider transition-colors duration-300 transform hover:scale-105">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </section>

      {/* Bottom Divider Line */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  );
};

export default EmpowerTradition;