"use client";

import Link from "next/link";

type TeamMember = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "lead",
    firstName: "Ming",
    lastName: "Yuan",
    role: "Team Lead",
    imageUrl: "/gemini_pic.webp",
  },
  {
    id: "presenter-1",
    firstName: "Michael",
    lastName: "Liu",
    role: "Presenter 1",
    imageUrl: "/gemini_pic.webp",
  },
  {
    id: "presenter-2",
    firstName: "Enrong",
    lastName: "Pan",
    role: "Presenter 2",
    imageUrl: "/gemini_pic.webp",
  },
  {
    id: "member-2",
    firstName: "Omar",
    lastName: "",
    role: "Member",
    imageUrl: "/gemini_pic.webp",
  },
  {
    id: "member-3",
    firstName: "Kosi",
    lastName: "Amobi-Oleka",
    role: "Member",
    imageUrl: "/gemini_pic.webp",
  },
  {
    id: "member-4",
    firstName: "Nandan",
    lastName: "",
    role: "Member",
    imageUrl: "/gemini_pic.webp",
  },
];

export default function AboutPage() {
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
                CISC 322 • OMMKPN-Not-Found--404-
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
            <Link className="text-blue-700 hover:underline" href="/">
              Course Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-12 pt-24">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-semibold text-sky-700">About Us</h1>
          <p className="mt-2 text-sm text-slate-600">
            Meet the OMMKPN-Not-Found--404- team and presentation roles.
          </p>
        </div>

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="rounded-md border border-slate-200 bg-white p-4"
            >
              <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                <img
                  src={member.imageUrl}
                  alt={`${member.firstName} ${member.lastName}`.trim()}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {member.firstName}
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {member.lastName || " "}
                </p>
                <p className="mt-2 text-xs text-slate-500">{member.role}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}