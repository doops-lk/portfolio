import Orb from '../components/Orb';

export default function Home() {
  return (
    
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="font-primary font-medium text-6xl mb-4">Good stuff is right on the way!</h1>
        <p className="font-secondary font-medium text-xl text-gray-300 my-4">The wait will be worth it!</p>
      </div>
    </div>
    
  );
}
