import Orb from '../components/Orb';

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Orb background */}
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />

      {/* Centered text */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="font-primary font-semibold text-6xl mb-4">
          Good stuff <br /> is right on the way!
        </h1>
        <p className="font-secondary font-medium text-xl text-gray-300 my-4">
          The wait will be worth it!
        </p>

        {/* Buttons */}
        <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+94740704176"
            className="rounded-full bg-white font-primary px-6 py-2 text-md font-medium text-black shadow-md transition hover:bg-gray-100"
          >
            📞 (+94) 74 070 4176
          </a>
          <a
            href="mailto:hello@doops.lk"
            className="rounded-full border font-primary border-gray-700 px-6 py-2 text-md font-medium text-gray-300 transition hover:bg-gray-900 hover:text-white"
          >
            ✉️ hello@doops.lk
          </a>
        </div>
      </div>
    </div>
  );
}
