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
  selectedDateISO,
  filterOnOrAfterSelectedDate = true,
}: CalendarWidgetProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isListCollapsed, setIsListCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    () => new Date(selectedDateISO ?? Date.now())
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
            onClick={() => setSelectedDate(new Date())}
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
  const [isLogoError, setIsLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="fixed left-0 right-0 top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white">
              {!isLogoError ? (
                <img
                  src="/Q.webp"
                  alt="Queen's University logo"
                  className="h-8 w-8 object-contain"
                  onError={() => setIsLogoError(true)}
                />
              ) : (
                <span className="text-xs font-semibold text-slate-600">
                  Queen&apos;s
                </span>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">
                Queen&apos;s University
              </p>
              <p className="text-base font-semibold text-slate-900">
                CISC 322 • Gemini CLI — Group 3
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-slate-600">
            <nav className="hidden items-center gap-2 text-sm font-medium sm:flex">
              <Link
                className="rounded px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/about"
              >
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
              Gemini CLI — Group 3
            </h1>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            <CalendarWidget events={calendarEvents} />
            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">
                Tutorial Hours
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Tuesday • 11:30–13:30
              </p>
              <p className="text-sm text-slate-700">Prof Bram Adams</p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">
                Quick Links
              </h2>
              <div className="mt-3 space-y-2 text-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  <span>Project roadmap — Coming soon</span>
                  <span className="text-slate-400">↗</span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  <span>Team repository — Coming soon</span>
                  <span className="text-slate-400">↗</span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                >
                  <span>Meeting notes — Coming soon</span>
                  <span className="text-slate-400">↗</span>
                </button>
              </div>
            </section>


            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">
                Recent Updates
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                2026-01-24 — Gemini CLI kickoff
              </p>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-sky-700">Archives</h2>
              <p className="mt-3 text-sm text-slate-700">Coming Soon</p>
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
                <p className="font-semibold">Gemini CLI kickoff</p>
                <p>
                  Gemini CLI is a command-line interface for interacting with
                  Gemini models to assist developers with coding and
                  productivity workflows. Project description coming soon.
                </p>
                <p className="text-xs text-slate-500">
                  Posted Jan 24, 2026 • Updated Jan 24, 2026
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
                  <div className="mt-3 space-y-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Report (PDF) — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Slides — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Video Presentation — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Assignment 2 — Concrete Architecture
                  </p>
                  <div className="mt-3 space-y-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Report (PDF) — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Slides — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Video Presentation — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Assignment 3 — Proposed Enhancement
                  </p>
                  <div className="mt-3 space-y-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Report (PDF) — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Slides — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <span>Video Presentation — Coming soon</span>
                      <span className="text-slate-400">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-sky-700">
                Embedded Resources
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Gemini CLI resources and references for the project.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                  href="https://geminicli.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Gemini CLI</span>
                  <span className="text-xs text-slate-400">geminicli.com</span>
                </a>
                <a
                  className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                  href="https://github.com/google-gemini/gemini-cli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Gemini CLI on GitHub</span>
                  <span className="text-xs text-slate-400">github.com</span>
                </a>
                <a
                  className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                  href="https://virtuslab.com/blog/ai/how-claude-code-works/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>How Claude Code works</span>
                  <span className="text-xs text-slate-400">virtuslab.com</span>
                </a>
              </div>
            </section>
          </div>

        </section>

        <footer className="mt-10 border-t border-slate-200 py-6 text-sm text-slate-500">
          © 2026 Group 3 • Gemini CLI
        </footer>
      </main>
    </div>
  );
}
