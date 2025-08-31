import React from "react";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[56rem]  blur-3xl" />
        <div className="container mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <span className="inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Organize your work,{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              simplify your day
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            TaskNest helps individuals and teams stay productive with simple,
            clear task management.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            Our mission
          </h2>
          <p className="mt-4 text-gray-400">
            TaskNest was built to make task management effortless. We bring
            clarity to busy workflows and design for accessibility, speed, and
            simplicity.
          </p>
          <ul className="mt-6 space-y-3 text-gray-400 list-disc list-inside">
            <li>Make task management effortless</li>
            <li>Bring clarity to busy workflows</li>
            <li>Accessible and inclusive for everyone</li>
            <li>Respect your time with speed and simplicity</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-white">
            What we’re building
          </h3>
          <p className="mt-3 text-gray-400">
            A simple yet powerful platform that lets you track tasks, set
            reminders, and collaborate with your team without the clutter.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Smart reminders and AI-powered insights.</li>
            <li>Seamless integrations with your favorite tools.</li>
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Simplicity",
            desc: "Minimal, intuitive design that just works.",
          },
          {
            title: "Collaboration",
            desc: "Helping teams stay in sync and on track.",
          },
          {
            title: "Trust",
            desc: "Your tasks are private, secure, and safe with us.",
          },
          { title: "Growth", desc: "We evolve with your needs and feedback." },
        ].map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-white">{v.title}</h3>
            <p className="mt-2 text-gray-400">{v.desc}</p>
          </div>
        ))}
      </section>

      
    </div>
  );
}
