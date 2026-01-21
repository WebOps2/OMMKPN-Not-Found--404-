export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-700 text-sm font-semibold text-white">
              Q
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">
                Queen&apos;s University
              </p>
              <p className="text-base font-semibold text-slate-900">
                CISC 322 • 404 - Brain.exe Not Found
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <button
              className="flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-white text-sm"
              type="button"
              aria-label="Apps"
            >
              ⬚
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-white text-sm"
              type="button"
              aria-label="Messages"
            >
              ✉
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-white text-sm"
              type="button"
              aria-label="Notifications"
            >
              🔔
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-slate-500">Student</p>
                <p className="text-sm font-semibold text-slate-900">
                  Riley Chen
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600">
                RC
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-10 pt-24">
        <section className="overflow-hidden rounded-md border border-slate-200 bg-white">
          <div
            className="h-56 bg-cover bg-center"
            style={{ backgroundImage: "url('/course-banner.svg')" }}
            role="img"
            aria-label="Course banner"
          />
          <div className="border-t border-slate-200 px-6 py-4">
            <p className="text-sm text-slate-500">Course Home</p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Apollo Project — Group 12
            </h1>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <section className="rounded-md border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  Announcements
                </h2>
                <button
                  className="text-sm text-blue-700 hover:underline"
                  type="button"
                >
                  Collapse
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="font-semibold">
                  WELCOME TO THE APOLLO PROJECT
                </p>
                <p>
                  Imagine a morning commute without the dread of rush-hour
                  traffic. Imagine children playing in total safety. Our
                  autonomous vehicle systems re-imagine how we use roads so
                  communities are safer and families have more time for what
                  they love.
                </p>
                <p className="text-xs text-slate-500">
                  Posted Feb 1, 2022 • Updated Apr 15, 2022
                </p>
              </div>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Assignments & Deliverables
              </h2>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">
                    Assignment 1 — Conceptual Architecture
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://drive.google.com/file/d/1WJ-M-hBluGuTlkuKcbYqM0XkYV5r9T%5FS/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Report
                    </a>
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://docs.google.com/presentation/d/1vX66s%5F2jKwLYytALKSSfMDlTB9DSlz6Q/edit?usp=sharing&ouid=115986065545442787912&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Presentation
                    </a>
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://youtu.be/L6nwc1g3N8k"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Video
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Assignment 2 — Concrete Architecture
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://drive.google.com/file/d/1IraVNZ%5FA1ao1N0PjG6J6bOZAlZ6QLadM/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Report
                    </a>
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://docs.google.com/presentation/d/1B89FomDMDfUp5n1UxvbURF2UxOqJH6DA/edit?usp=sharing&ouid=115986065545442787912&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Presentation
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Assignment 3 — Proposed Enhancement
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://drive.google.com/file/d/1OYY9NTWatYdyWBtlLzdNf74UU2yexsun/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Report
                    </a>
                    <a
                      className="text-blue-700 hover:underline"
                      href="https://docs.google.com/presentation/d/1EaNMbc66dkeQt5RUyWe4QzxC6qgBReEy/edit?usp=sharing&ouid=115986065545442787912&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Presentation
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Embedded Resources
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Apollo is an open, reliable, and comprehensive software platform
                for autonomous vehicle development shared with partners around
                the world.
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://apollo.auto/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apollo Open Platform
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://www.apollographql.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Client Architecture Basics
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Office Hours
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Tue & Thu • 2:00–3:30 PM
              </p>
              <p className="text-sm text-slate-700">Mitchell Hall, Room 218</p>
              <p className="mt-2 text-sm text-slate-500">
                Coordinator: Prof. A. Matos
              </p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Quick Links
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://blog.csdn.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apollo system structure
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://www.geeksforgeeks.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Concurrency in operating system
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gflags
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://aicurious.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apollo Perception
                  </a>
                </li>
              </ul>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Categories
              </h2>
              <p className="mt-3 text-sm text-slate-700">welcome (1)</p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Recent Updates
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                2022-02-01 — Welcome to the Apollo Project
              </p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Archives
              </h2>
              <p className="mt-3 text-sm text-slate-700">February 2022</p>
            </section>
          </aside>
        </section>

        <footer className="mt-10 border-t border-slate-200 py-6 text-sm text-slate-500">
          © 2022 Group 12 • Powered by Hexo & Icarus • Galaxy, Orion, Sol 3
        </footer>
      </main>
    </div>
  );
}
