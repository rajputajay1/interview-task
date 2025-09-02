import React from 'react';

const UsingMaterialsWeAdore = () => {
  return (
    <div className="bg-white">
      {/* First Text Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-12 tracking-wider">
          USING MATERIALS WE ADORE
        </h2>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-base md:text-lg">
            The fit of a suit is very important. We believe that the task of a tailor is to delineate an exquisite, customized silhouette for each individual customer, based on their 
            physique. <span className="font-semibold">MADE SUITS</span> In-House Selects Italian Fabrics are deliberately restrained so that they can meet the demands imposed by precise fittings and meticulous 
            sewing.
          </p>
          
          <p className="text-base md:text-lg">
            We believe in the importance of creating an exquisite silhouette and bringing out the individuality of the wearer.
          </p>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="w-full h-96 md:h-80 mb-16">
        <img 
         src='https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1651855719803-NN4XYVSGV1IML481Y82M/Made+Suits+Inhouse+Selects.JPG?format=2500w'
          alt="Premium fabric details and craftsmanship" 
          className="w-3/4 h-96 md:h-80 object-cover justify-center mx-auto"
        />
      </section>

      {/* Second Text Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-base md:text-lg">
            Our manufacturing methods go hand-in-hand with the quality materials that we use. We aim to create the highest quality products that last, and we do that by 
            utilising graded materials. Using only 100% quality wool for our suits. Spun into fine threads and tightly woven, the wool are lightweight and breathable.
          </p>
          
          <p className="text-base md:text-lg">
            We also offer a variety of different wool like worsted wool, fine merino wool etc. For the finest custom tailored experience, we offer a selection of premium fabrics 
            from one of the world's oldest fabric mills,
          </p>
        </div>
      </section>
       <section className="w-full">
        <img 
         src='https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1651856226239-33XQV75S6Z5L94ZN9PJ7/Made+Suits+Inhouse+selection.png?format=2500w'
          alt="Premium fabric details and craftsmanship" 
          className="w-full h-64 md:h-80 object-cover"
        />
      </section>
    </div>
  );
};

export default UsingMaterialsWeAdore;