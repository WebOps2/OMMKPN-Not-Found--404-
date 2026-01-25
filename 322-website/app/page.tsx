"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CalendarEvent = {
  id: string;
  title: string;
  dueAtISO: string;
};

const calendarEvents: CalendarEvent[] = [
  {
    id: "a0",
    title: "Group 3: A0. Website",
    dueAtISO: "2026-01-27T12:59:00",
  },
  {
    id: "a1-report",
    title: "Group 3: A1. Conceptual Architecture report",
    dueAtISO: "2026-02-14T12:59:00",
  },
  {
    id: "a1-slides",
    title: "Group 3: A1. Conceptual Architecture slides & video presentation",
    dueAtISO: "2026-02-14T12:59:00",
  },
  {
    id: "a2-report",
    title: "Group 3: A2. Concrete Architecture report",
    dueAtISO: "2026-03-14T11:59:00",
  },
  {
    id: "a2-slides",
    title: "Group 3: A2. Concrete Architecture slides & video presentation",
    dueAtISO: "2026-03-14T11:59:00",
  },
  {
    id: "a3-report",
    title: "Group 3: A3. Proposal for Enhancement report",
    dueAtISO: "2026-04-07T11:59:00",
  },
  {
    id: "a3-slides",
    title: "Group 3: A3. Proposal for Enhancement slides & video presentation",
    dueAtISO: "2026-04-07T11:59:00",
  },
];

const formatFullDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

const formatMonth = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { month: "short" })
    .format(date)
    .toUpperCase();

const formatDay = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);

const formatTime = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

type CalendarWidgetProps = {
  events: CalendarEvent[];
  selectedDateISO?: string;
  filterOnOrAfterSelectedDate?: boolean;
};

function CalendarWidget({
  events,
  selectedDateISO = "2026-01-21T12:00:00",
  filterOnOrAfterSelectedDate = true,
}: CalendarWidgetProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isListCollapsed, setIsListCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date(selectedDateISO)
  );

  const visibleEvents = useMemo(() => {
    const sorted = [...events].sort(
      (a, b) =>
        new Date(a.dueAtISO).getTime() - new Date(b.dueAtISO).getTime()
    );

    if (!filterOnOrAfterSelectedDate) {
      return sorted;
    }

    const selectedStart = new Date(selectedDate);
    selectedStart.setHours(0, 0, 0, 0);

    return sorted.filter(
      (event) => new Date(event.dueAtISO).getTime() >= selectedStart.getTime()
    );
  }, [events, filterOnOrAfterSelectedDate, selectedDate]);

  return (
    <section className="rounded-md border border-slate-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-base font-semibold text-sky-700">Calendar</h2>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded text-slate-500"
          aria-expanded={!isCollapsed}
          aria-label="Toggle calendar widget"
          onClick={() => setIsCollapsed((value) => !value)}
        >
          <svg
            className={`h-4 w-4 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {!isCollapsed && (
        <div className="border-t border-slate-200 px-4 pb-4">
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-between rounded border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700"
            aria-label="Select date"
            onClick={() => setSelectedDate(new Date(selectedDateISO))}
          >
            <span>{formatFullDate(selectedDate)}</span>
            <span className="text-slate-500">▸</span>
          </button>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-sky-700">
              Upcoming events
            </h3>
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded text-slate-500"
              aria-expanded={!isListCollapsed}
              aria-label="Toggle upcoming events"
              onClick={() => setIsListCollapsed((value) => !value)}
            >
              <svg
                className={`h-4 w-4 ${
                  isListCollapsed ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {!isListCollapsed && (
            <div className="mt-3 max-h-64 overflow-y-auto pr-2">
              {visibleEvents.map((event, index) => {
                const dueDate = new Date(event.dueAtISO);
                return (
                  <div
                    key={event.id}
                    className={`flex gap-4 py-3 ${
                      index === 0 ? "" : "border-t border-slate-100"
                    }`}
                  >
                    <div className="w-12 text-center text-slate-600">
                      <p className="text-xs font-semibold tracking-wide">
                        {formatMonth(dueDate)}
                      </p>
                      <p className="text-lg font-semibold text-slate-800">
                        {formatDay(dueDate)}
                      </p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-800">
                        {formatTime(dueDate)}
                      </p>
                      <p className="text-sm text-slate-700">{event.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white">
              <img
                src="/Q.webp"
                alt="Queen's University logo"
                className="h-8 w-8 object-contain"
              />
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
          <div className="flex items-center gap-6 text-slate-600">
            <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
              <Link className="text-blue-700 hover:underline" href="/about">
                About us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-10 pt-24">
        <section className="overflow-hidden rounded-md border border-slate-200 bg-white">
          <div
            className="h-56 bg-cover bg-center"
            style={{ backgroundImage: "url('/gemini_pic.webp')" }}
            role="img"
            aria-label="Course banner"
          />
          <div className="border-t border-slate-200 px-6 py-4">
            <p className="text-sm text-slate-500">Course Home</p>
            <h1 className="text-2xl font-semibold text-sky-700">
              OMMKPN-Not-Found--404- group project
            </h1>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <CalendarWidget events={calendarEvents} />
            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">
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
              <h2 className="text-base font-semibold text-sky-700">
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
              <h2 className="text-base font-semibold text-sky-700">
                Categories
              </h2>
              <p className="mt-3 text-sm text-slate-700">welcome (1)</p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">
                Recent Updates
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                2022-02-01 — Welcome to the Group 3 Project
              </p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">Archives</h2>
              <p className="mt-3 text-sm text-slate-700">February 2022</p>
            </section>
          </aside>

          <div className="space-y-6">
            <section className="rounded-md border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-sky-700">
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
                  IMPORTANT: The Department of Totally Useless Research
                </p>
                <p>
                  Today&apos;s update confirms the campus squirrels have formed a
                  tiny focus group to review our Wi‑Fi vibes. Their preliminary
                  findings: more acorns, fewer emails. Please refrain from
                  notifying the clouds; they are currently busy practicing
                  geometry. This announcement has no impact on coursework,
                  grading, or schedules.
                </p>
                <p className="text-xs text-slate-500">
                  Posted Feb 1, 2022 • Updated Apr 15, 2022
                </p>
              </div>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-sky-700">
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
              <h2 className="text-lg font-semibold text-sky-700">
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

        </section>

        <footer className="mt-10 border-t border-slate-200 py-6 text-sm text-slate-500">
          © 2022 Group 12 • Powered by Hexo & Icarus • Galaxy, Orion, Sol 3
        </footer>
      </main>
    </div>
  );
}
