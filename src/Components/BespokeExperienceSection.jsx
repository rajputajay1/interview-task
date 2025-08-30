export default function BespokeExperienceSection() {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1651855100691-P90GHSQOBI2PUSV6JO3X/s2_story-ttl-bg.jpeg?format=2500w')",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-3xl px-6">
        <p className="text-white text-[20px]  font-light leading-relaxed mb-4">
          “ <em className="font-semibold">BESPOKE TO MEASURE</em> ™{" "}
          <span className="text-[16px]">is more than a service.</span>
        </p>

        <p className="text-white text-[18px] font-light italic mb-4">
          It is an <em className="font-semibold">Experience.</em>
        </p>

        <p className="text-white text-[15px] font-light ">
          It is one that starts with a meeting,
          <br /> <em>between you and your tailor.</em>
        </p>

        <p className="text-white text-[20px] font-light mt-8">
          This is the beginning of a garment{" "}
          <em className="font-medium italic">built around you</em> ”
        </p>
      </div>
    </section>
  );
}
