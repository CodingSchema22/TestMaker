import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  FileText,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  // =========================
  // SUBJECTS
  // =========================

  const subjects = [
    {
      name: "Mathematics",
      icon: "📐",
      color: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      name: "Physics",
      icon: "⚛️",
      color: "bg-sky-50",
      text: "text-sky-600",
    },
    {
      name: "Chemistry",
      icon: "🧪",
      color: "bg-cyan-50",
      text: "text-cyan-600",
    },
    {
      name: "Biology",
      icon: "🧬",
      color: "bg-emerald-50",
      text: "text-emerald-600",
    },
    {
      name: "English",
      icon: "📖",
      color: "bg-indigo-50",
      text: "text-indigo-600",
    },
    {
      name: "Computer",
      icon: "💻",
      color: "bg-violet-50",
      text: "text-violet-600",
    },
  ];

  // =========================
  // TESTS
  // =========================

  const tests = [
    {
      id: 1,
      title: "Class 9 Mathematics",
      category: "Mathematics",
      grade: "Grade 9",
      questions: "25 Questions",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
      height: "h-[330px]",
    },
    {
      id: 2,
      title: "Physics Chapter Test",
      category: "Physics",
      grade: "Grade 10",
      questions: "20 Questions",
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=900&q=80",
      height: "h-[260px]",
    },
    {
      id: 3,
      title: "English Grammar Test",
      category: "English",
      grade: "Grade 9",
      questions: "30 Questions",
      image:
        "https://images.unsplash.com/photo-1455885666463-9e7e3c5f2c45?auto=format&fit=crop&w=900&q=80",
      height: "h-[300px]",
    },
    {
      id: 4,
      title: "Biology Chapter 3",
      category: "Biology",
      grade: "Grade 10",
      questions: "25 Questions",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80",
      height: "h-[360px]",
    },
    {
      id: 5,
      title: "Computer Science",
      category: "Computer",
      grade: "Grade 9",
      questions: "20 Questions",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      height: "h-[280px]",
    },
    {
      id: 6,
      title: "Chemistry Practice",
      category: "Chemistry",
      grade: "Grade 10",
      questions: "30 Questions",
      image:
        "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=900&q=80",
      height: "h-[330px]",
    },
  ];

  // =========================
  // SEARCH
  // =========================

  const filteredTests = tests.filter((test) =>
    `${test.title} ${test.category} ${test.grade}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // =========================
  // ANIMATION
  // =========================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-5 sm:px-8">

          {/* LOGO */}

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
              <FileText size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                Test<span className="text-blue-600">Maker</span>
              </h1>

              <p className="hidden text-[9px] font-medium uppercase tracking-widest text-gray-400 sm:block">
                Create • Customize • Print
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#subjects"
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              Subjects
            </a>

            <a
              href="#tests"
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              Tests
            </a>

            <a
              href="#how"
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              How It Works
            </a>
          </nav>

          {/* DESKTOP BUTTONS */}

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Login
            </Link>

            <Link
              to="/create-test"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <Plus size={17} />
              Create Test
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE NAV */}

        {menuOpen && (
          <div className="border-t border-blue-100 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">

              <a href="#home" className="text-sm font-medium">
                Home
              </a>

              <a href="#subjects" className="text-sm font-medium">
                Subjects
              </a>

              <a href="#tests" className="text-sm font-medium">
                Tests
              </a>

              <a href="#how" className="text-sm font-medium">
                How It Works
              </a>

              <Link
                to="/login"
                className="mt-2 text-sm font-medium text-gray-600"
              >
                Login
              </Link>

              <Link
                to="/create-test"
                className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Create Test
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24"
      >

        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px] text-center">

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >

            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={14} className="text-blue-600" />

              <span className="text-xs font-semibold text-blue-600">
                Simple test creation for teachers & students
              </span>
            </div>

            <h2 className="mx-auto max-w-[900px] text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-gray-900 sm:text-6xl lg:text-7xl">
              Create beautiful
              <span className="text-blue-600"> tests </span>
              in minutes.
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-base leading-7 text-gray-500 sm:text-lg">
              Build customized printable tests from your syllabus,
              select questions, set marks and download your test
              whenever you need it.
            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-9 flex max-w-[650px] items-center rounded-2xl border border-blue-100 bg-white p-2 shadow-lg shadow-blue-100/50">

              <Search
                size={21}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tests, subjects or grades..."
                className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400"
              />

              <button className="hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:block">
                Search
              </button>
            </div>

            {/* HERO BUTTONS */}

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/create-test"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
              >
                <Plus size={18} />
                Create New Test
              </Link>

              <a
                href="#tests"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Explore Tests
                <ArrowUpRight size={17} />
              </a>

            </div>

          </motion.div>
        </div>
      </section>

      {/* =========================
          SUBJECTS
      ========================= */}

      <section
        id="subjects"
        className="px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Browse
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Explore Subjects
              </h2>
            </div>

            <a
              href="#tests"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-600 sm:flex"
            >
              View all
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {subjects.map((subject) => (
              <motion.button
                key={subject.name}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-2xl ${subject.color} p-5 text-left transition-shadow hover:shadow-md`}
              >
                <div className="text-3xl">
                  {subject.icon}
                </div>

                <h3
                  className={`mt-5 text-sm font-bold ${subject.text}`}
                >
                  {subject.name}
                </h3>

                <p className="mt-1 text-[11px] text-gray-400">
                  Practice tests
                </p>
              </motion.button>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          TESTS
      ========================= */}

      <section
        id="tests"
        className="bg-blue-50/40 px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Discover
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Tests
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Browse ready-to-use test ideas or create your own
              customized version.
            </p>
          </div>

          {filteredTests.length > 0 ? (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

              {filteredTests.map((test, index) => (
                <motion.article
                  key={test.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >

                  {/* IMAGE */}

                  <div
                    className={`relative ${test.height} overflow-hidden`}
                  >
                    <img
                      src={test.image}
                      alt={test.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-blue-600 backdrop-blur">
                      {test.category}
                    </span>

                    <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-blue-600 hover:text-white">
                      <ArrowUpRight size={16} />
                    </button>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                        {test.grade}
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        {test.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <BookOpen size={15} />
                        </div>

                        <span className="text-xs font-medium text-gray-500">
                          {test.questions}
                        </span>
                      </div>

                      <Link
                        to="/create-test"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Use Test
                      </Link>

                    </div>
                  </div>

                </motion.article>
              ))}

            </div>
          ) : (
            <div className="rounded-2xl border border-blue-100 bg-white py-16 text-center">

              <Search
                size={35}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-4 font-semibold text-gray-700">
                No tests found
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Try searching for another subject or grade.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* =========================
          HOW IT WORKS
      ========================= */}

      <section
        id="how"
        className="px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1100px]">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Make a test in 3 simple steps
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* STEP 1 */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Select Subject
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Choose your subject, grade and chapter from the
                available syllabus.
              </p>

            </div>

            {/* STEP 2 */}

            <div className="rounded-2xl border border-blue-100 bg-white p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Customize Test
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Select questions, set marks and customize your
                test according to your requirements.
              </p>

            </div>

            {/* STEP 3 */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Download & Print
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Generate your final test and download it as a
                clean printable document.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-7 py-14 text-center sm:px-12">

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/10" />

            <div className="relative">

              <Sparkles
                size={25}
                className="mx-auto text-blue-200"
              />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to create your test?
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-blue-100">
                Build a customized printable test from your
                syllabus in just a few minutes.
              </p>

              <Link
                to="/create-test"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                <Plus size={18} />
                Create New Test
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-blue-100 bg-white px-5 py-8 sm:px-8">

        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">

          <Link to="/" className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FileText size={16} />
            </div>

            <span className="text-sm font-bold">
              Test<span className="text-blue-600">Maker</span>
            </span>

          </Link>

          <p className="text-xs text-gray-400">
            © 2026 TestMaker. Built for better test creation.
          </p>

        </div>

      </footer>

    </div>
  );
}