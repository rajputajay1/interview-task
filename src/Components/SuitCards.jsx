import React from "react";

function SuitCards() {
  return (
    <section className="bg-white py-12 px-6">
     <div className="w-full border-t border-gray-300 my-6 mx-auto "></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671128465036-ZJ7XQQF8FHL7TGL13RUD/Made%2BSuits%2BFilarte%2BThe%2BBond%2BTailor%2BMade%2BSuits.jpg"
            alt="Sentimental Value"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-center h-full text-white px-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-snug">
              WANT SOMETHING WITH A LITTLE MORE SENTIMENTAL VALUE?
            </h2>
            <button className="mt-6 border border-white px-6 py-2 text-lg font-medium hover:bg-white hover:text-black transition">
              GO BESPOKE.
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671128468326-K1KTPWPE7WFB6T2DPMSX/Xegna%2B_%2BTailor%2BMade%2BSuits%2B_%2BGuabello%2B_%2BBespoke%2BSuit%2BSingapore%2B_%2BSingapore%2BTailor.jpg"
            alt="Convinced to Know More"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-center h-full text-white px-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-snug">
              CONVINCED TO KNOW MORE?
            </h2>
            <p className="mt-4 text-sm md:text-base">
              MAKE YOUR APPOINTMENT TODAY, TAKE THE NEXT STEP
            </p>
            <button className="mt-6 border border-white px-6 py-2 text-lg font-medium hover:bg-white hover:text-black transition">
              GET MADE.
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SuitCards;
