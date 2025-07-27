import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 15; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 8,
          size: Math.random() * 0.5 + 0.5,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 bg-rose rounded-full opacity-70 animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.animationDelay}s`,
            transform: `scale(${petal.size})`,
          }}
        />
      ))}
    </div>
  );
};