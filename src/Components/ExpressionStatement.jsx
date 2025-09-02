import React from "react";

function ExpressionStatement() {
  return (
    <div className="bg-white text-gray-800">
      {/* Heading Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          EXPRESSION IS A STATEMENT
        </h2>
      </section>

      {/* Hero Image */}
      <section className="flex justify-center px-4">
        <div className="w-full max-w-4xl">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1bb4a39e-a149-4462-9192-414f44c62273/Brown+Fox+Oasis+Lining+Made+Suits.JPG?format=1000w"
            alt="Suit expression"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* Description */}
      <section className="py-10 px-6 max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Something to express yourself with is the inside of your very own
          suit jacket.
        </p>
      </section>

      {/* Image Gallery 1 */}
      <section className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671129055136-464Y4CMOJGU3XQ1IEOZZ/Omega%2BSpace%2BLining%2Bby%2BMade%2BSuits%2BSingapore.jpg?format=750w"
            alt="Omega Space Lining"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671129057446-2XSIJO9XUFI0WC5Y649V/Made%2BSuits%2Bx%2BCWKIRIN%2BPeaky%2BBlinders%2BLining.jpg?format=750w"
            alt="Peaky Blinders Lining"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671129182371-AKU7MZ5MUG0FZBWE3VN8/IMG_8946.JPG?format=750w"
            alt="Jacket Lining"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Yours For Life */}
      <section className="py-10 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          YOURS, FOR LIFE
        </h3>
        <p className="mt-4 text-gray-700 text-lg">
          Your garment is now finished and is receiving the final touch.
        </p>
        <p className="text-gray-700 text-lg">
          At this moment your tailor is sewing a Monogram label
        </p>
        <p className="text-gray-700 text-lg">
          bearing your name also with your very own SIGNATURE.
        </p>
      </section>

      {/* Image Gallery 2 */}
      <section className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671128468326-K1KTPWPE7WFB6T2DPMSX/Xegna%2B_%2BTailor%2BMade%2BSuits%2B_%2BGuabello%2B_%2BBespoke%2BSuit%2BSingapore%2B_%2BSingapore%2BTailor.jpg"
            alt="Tailor Made Suit"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671128465036-ZJ7XQQF8FHL7TGL13RUD/Made%2BSuits%2BFilarte%2BThe%2BBond%2BTailor%2BMade%2BSuits.jpg"
            alt="Bond Tailor Suit"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1671128463318-XGGFWE1HC8HJCIYEG7WF/Made%2BSuits%2BSignature%2BMonogram%2B%257C%2BTailor%2BSingapore%2B%257C%2BBespoke%2BSuits%2BSingapore.jpg"
            alt="Signature Monogram"
            className="rounded-lg shadow"
          />
        </div>
      </section>
    </div>
  );
}

export default ExpressionStatement;
