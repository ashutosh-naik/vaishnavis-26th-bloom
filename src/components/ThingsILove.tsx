import React from "react";

const loveItems = [
  "You’re effortlessly smart — even when you pretend not to be.",
  "You calm my chaos without even trying.",
  "Your laugh is my favorite unexpected soundtrack.",
  "You care more than you let on.",
  "You’re honest — even when it’s hard.",
  "You binge Netflix like a pro, and I respect that hustle.",
  "You underestimate your own magic.",
  "You see beauty in people, and that says everything about you.",
  "You make me want to be better — for real.",
  "You listen, not just with ears, but with heart.",
  "You’re adorably stubborn — and somehow always right 😄",
  "You make lazy look like an art form.",
  "You glow quietly, like a soft sunrise.",
  "You smell like calm and comfort.",
  "Your silence often says more than words.",
  "You’re the first person I think of when something random happens.",
  "You ask real questions — the kind that stay with me.",
  "You’ve carved a little home in my world, without even trying.",
  "You challenge me — and I love that.",
  "You’re braver than you know.",
  "You notice the little things — and that matters.",
  "You trust me with pieces of you.",
  "You make even complicated things feel worth it.",
  "You’re that rare blend of soft and strong.",
  "I like you… simply because you’re you. No act. No filters. Just... you.",
];

export const ThingsILove = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto bg-card/90 rounded-3xl shadow-glow p-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          25 Things I Love About You
        </h2>
        <ol className="list-decimal list-inside space-y-4 pacifico-font text-2xl text-primary">
          {loveItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};
