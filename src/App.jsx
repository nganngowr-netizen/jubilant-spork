import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        {/* HEADER */}
        <header className="max-w-5xl mx-auto mt-8 bg-gradient-to-br from-blue-600 to-sky-400 dark:from-slate-700 dark:to-slate-600 text-white rounded-2xl p-8 grid grid-cols-[96px_1fr] gap-6">
          <img
            src="/avt.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-xl border-4 border-white/60"
          />
          <div>
            <h1 className="text-3xl font-bold">Nguyễn Kim Hà Ngân</h1>
            <p>Sinh viên Công nghệ Vật lý Điện tử và Tin học</p>
            <p className="text-sm opacity-90">nganngowr@gmail.com · GitHub</p>
          </div>
        </header>

        {/* TOGGLE */}
        <div className="max-w-5xl mx-auto text-right mt-4 px-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* CONTENT */}
        <main className="max-w-5xl mx-auto px-4 pb-16">
          <Section title="Tóm tắt">
            <p>
              Sinh viên định hướng công nghệ, có nền tảng lập trình và tư duy kỹ
              thuật.
            </p>
          </Section>

          <Section title="Kỹ năng">
            <div className="flex gap-3 flex-wrap">
              {["HTML", "CSS", "JS", "C++", "Python"].map((s) => (
                <span
                  key={s}
                  className="px-4 py-1 rounded-full bg-blue-100 dark:bg-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-8 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
      <h2 className="text-blue-600 dark:text-blue-400 uppercase text-sm mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
