export default function SuitsShowcaseSection() {
  const suits = [
    {
      title: "3 Roll 2 Casual Suit",
      img: "https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1756039066342-3NP6NJR13311Q38OTWA6/Jack+Hao+Romania+Cut+Made+Suits.jpg?format=1000w",
    },
    {
      title: "3 Roll 2 Three Piece Suit",
      img: "https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1756039066342-3NP6NJR13311Q38OTWA6/Jack+Hao+Romania+Cut+Made+Suits.jpg?format=1000w",
    },
    {
      title: "3 Roll 2 Three Piece Suit",
      img: "https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1756039190149-AQZHV4SMBJHYBNJES3X4/Jack+Hao+Red+Suit+Maroon+Holland+%26+sherry+Royal+Mile+Romania+Cuts+Suit.jpg?format=1000w",
    },
    {
      title: "3 Roll 2 Three Piece Suit",
      img: "https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1756039117813-U8NDL29TJ4O5U02PYEXJ/Three+Piece+Suit+StandevenJack+Hao+Romania+Cut+Made+Suits.jpg?format=1000w",
    },
  ];

  return (
    <section
      className="bg-white py-6 "
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-5 ">
        <div className="border-t py-6 mx-5 border-[#a79d9b]"></div>
        {/* Suits Display Grid */}
        <div className="grid  grid-cols-2">
          {suits.map((suit, index) => (
            <div key={index} className="md:text-center">
              <div className="relative py-4">
                <div className={`   flex items-end justify-center`}>
                  <img src={suit.img} alt="" />
                </div>
              </div>
              <h3 className="text-[14px] max-sm:text-[12px] font-light text-gray-800 tracking-wider truncate whitespace-nowrap">
                {suit.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Request Appointment Button */}
        <div className="text-center mt-10 mb-6 ">
          <button className="bg-amber-900 hover:bg-amber-800 rounded-sm text-white px-12 py-3 text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 shadow-lg hover:shadow-xl">
            REQUEST FOR AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}
