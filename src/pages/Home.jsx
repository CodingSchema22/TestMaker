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
  Play,
  Star,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  // =========================================================
  // SUBJECTS
  // =========================================================

  const subjects = [
    {
      name: "Mathematics",
      icon: "📐",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      name: "Physics",
      icon: "⚛️",
      bg: "bg-sky-50",
      text: "text-sky-600",
    },
    {
      name: "Chemistry",
      icon: "🧪",
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },
    {
      name: "Biology",
      icon: "🧬",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    {
      name: "English",
      icon: "📖",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
    {
      name: "Computer",
      icon: "💻",
      bg: "bg-violet-50",
      text: "text-violet-600",
    },
  ];

  // =========================================================
  // TEST DATA
  // =========================================================

  const tests = [
    {
      id: 1,
      title: "Class 9 Mathematics",
      category: "Mathematics",
      grade: "Grade 9",
      questions: "25 Questions",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=85",
      height: "h-[390px]",
    },
    {
      id: 2,
      title: "Physics Chapter Test",
      category: "Physics",
      grade: "Grade 10",
      questions: "20 Questions",
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1000&q=85",
      height: "h-[300px]",
    },
    {
      id: 3,
      title: "English Grammar Test",
      category: "English",
      grade: "Grade 9",
      questions: "30 Questions",
      image:
        "https://images.unsplash.com/photo-1455885666463-9e7e3c5f2c45?auto=format&fit=crop&w=1000&q=85",
      height: "h-[350px]",
    },
    {
      id: 4,
      title: "Biology Chapter 3",
      category: "Biology",
      grade: "Grade 10",
      questions: "25 Questions",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1000&q=85",
      height: "h-[420px]",
    },
    {
      id: 5,
      title: "Computer Science",
      category: "Computer",
      grade: "Grade 9",
      questions: "20 Questions",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
      height: "h-[330px]",
    },
    {
      id: 6,
      title: "Chemistry Practice",
      category: "Chemistry",
      grade: "Grade 10",
      questions: "30 Questions",
      image:
        "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=1000&q=85",
      height: "h-[390px]",
    },
  ];

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredTests = tests.filter((test) =>
    `${test.title} ${test.category} ${test.grade}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // =========================================================
  // ANIMATION
  // =========================================================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

  {/* =====================================================
    PINTEREST STYLE FLOATING NAVBAR
===================================================== */}

<header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">

  <div className="mx-auto max-w-[1450px]">

    <div className="relative flex min-h-[68px] items-center gap-3 rounded-full border border-gray-200 bg-white/95 px-3 shadow-lg shadow-gray-200/40 backdrop-blur-xl sm:gap-5 sm:px-5">

      {/* =================================================
          LOGO
      ================================================= */}

      <Link
        to="/"
        className="flex shrink-0 items-center gap-2.5"
      >

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-200">
          <FileText size={19} />
        </div>

        <div className="hidden sm:block">
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            Test<span className="text-blue-600">Maker</span>
          </h1>
        </div>

      </Link>


      {/* =================================================
          HOME BUTTON
      ================================================= */}

      <Link
        to="/"
        className="hidden rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 lg:block"
      >
        Home
      </Link>


      {/* =================================================
          SEARCH
      ================================================= */}

      <div className="relative hidden flex-1 md:block">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tests, subjects, grades..."
          className="h-11 w-full rounded-full bg-gray-100 pl-11 pr-5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 hover:bg-gray-200 focus:bg-gray-200"
        />

      </div>


      {/* =================================================
          DESKTOP NAV
      ================================================= */}

      <nav className="hidden items-center gap-1 lg:flex">

        <a
          href="#subjects"
          className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          Subjects
        </a>

        <a
          href="#tests"
          className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          Tests
        </a>

        <a
          href="#how"
          className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          How It Works
        </a>

      </nav>


      {/* =================================================
          AUTH BUTTONS
      ================================================= */}

      <div className="ml-auto hidden items-center gap-2 md:flex">

        <Link
          to="/login"
          className="rounded-full px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
        >
          Sign Up
        </Link>

      </div>


      {/* =================================================
          MOBILE MENU BUTTON
      ================================================= */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 md:hidden"
      >
        {menuOpen ? (
          <X size={20} />
        ) : (
          <Menu size={20} />
        )}
      </button>


      {/* =================================================
          MOBILE DROPDOWN
      ================================================= */}

      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute left-0 right-0 top-[76px] rounded-3xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50 md:hidden"
        >

          <div className="flex flex-col gap-2">

            {/* MOBILE SEARCH */}

            <div className="relative mb-2">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tests..."
                className="w-full rounded-full bg-gray-100 py-3 pl-11 pr-4 text-sm outline-none transition focus:bg-gray-200"
              />

            </div>


            {/* MOBILE LINKS */}

            <a
              href="#subjects"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Subjects
            </a>

            <a
              href="#tests"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Tests
            </a>

            <a
              href="#how"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              How It Works
            </a>


            {/* DIVIDER */}

            <div className="my-1 border-t border-gray-100" />


            {/* AUTH */}

            <div className="grid grid-cols-2 gap-2">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-gray-100 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Sign Up
              </Link>

            </div>

          </div>

        </motion.div>
      )}

    </div>

  </div>

</header>

      {/* =====================================================
          HERO
      ===================================================== */}

  <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-30">
  
  {/* =====================================================
      BACKGROUND
  ===================================================== */}

  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    
    <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
    
    <div className="absolute right-[5%] top-[5%] h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />

  </div>


  <div className="mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">


    {/* =====================================================
        LEFT CONTENT
    ===================================================== */}

    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-2xl"
    >

      {/* Small Pinterest style label */}

      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">

        <span className="h-2 w-2 rounded-full bg-blue-600" />

        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600">
          Test ideas for every subject
        </span>

      </div>


      {/* Heading */}

      <h2 className="max-w-[720px] text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-gray-900 sm:text-6xl lg:text-[76px]">

        Make tests

        <br />

        <span className="text-blue-600">
          worth taking.
        </span>

      </h2>


      {/* Description */}

      <p className="mt-7 max-w-[570px] text-base leading-7 text-gray-500 sm:text-lg">
        Discover test ideas, customize questions, choose marks
        and create beautiful printable assessments for your students.
      </p>


      {/* Buttons */}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">

        <Link
          to="/create-test"
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-blue-600
            px-7
            py-3.5
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-blue-200
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-700
            hover:shadow-xl
          "
        >

          <Plus
            size={18}
            className="transition-transform duration-300 group-hover:rotate-90"
          />

          Create New Test

        </Link>


        <a
          href="#tests"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-gray-200
            bg-white
            px-7
            py-3.5
            text-sm
            font-semibold
            text-gray-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-gray-300
            hover:shadow-md
          "
        >

          Explore ideas

          <ArrowUpRight size={17} />

        </a>

      </div>


      {/* Small stats */}

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">

        <div>

          <p className="text-xl font-bold text-gray-900">
            100+
          </p>

          <p className="text-[11px] text-gray-400">
            Test ideas
          </p>

        </div>


        <div className="h-8 w-px bg-gray-200" />


        <div>

          <p className="text-xl font-bold text-gray-900">
            6+
          </p>

          <p className="text-[11px] text-gray-400">
            Subjects
          </p>

        </div>


        <div className="h-8 w-px bg-gray-200" />


        <div>

          <p className="text-xl font-bold text-gray-900">
            Print
          </p>

          <p className="text-[11px] text-gray-400">
            Ready format
          </p>

        </div>

      </div>

    </motion.div>



    {/* =====================================================
        PINTEREST STYLE VISUAL COLLAGE
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
      className="relative mx-auto h-[540px] w-full max-w-[680px]"
    >

      {/* =================================================
          BACK CARD
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [-4, -3, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[2%]
          top-[8%]
          hidden
          h-[290px]
          w-[190px]
          overflow-hidden
          rounded-[28px]
          bg-blue-100
          shadow-xl
          sm:block
        "
      >

        <img
          src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80"
          alt="Books"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-5 left-5 text-white">

          <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
            English
          </p>

          <p className="mt-1 font-bold">
            Literature
          </p>

        </div>

      </motion.div>


      {/* =================================================
          MAIN LARGE CARD
      ================================================= */}

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [2, 3, 2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[5%]
          top-[4%]
          h-[390px]
          w-[260px]
          overflow-hidden
          rounded-[32px]
          bg-gray-100
          shadow-2xl
          shadow-gray-300/50
          sm:left-[10%]
          sm:h-[430px]
          sm:w-[290px]
        "
      >

        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=700&q=85"
          alt="Mathematics"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />


        {/* Card top */}

        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

          <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-gray-800 backdrop-blur">
            Mathematics
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg">
            <ArrowUpRight size={15} />
          </div>

        </div>


        {/* Card content */}

        <div className="absolute bottom-6 left-6 right-6 text-white">

          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            Grade 9
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight">
            Algebra
            <br />
            Practice Test
          </h3>

          <div className="mt-4 flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <BookOpen size={14} />
            </div>

            <span className="text-xs text-white/80">
              25 Questions
            </span>

          </div>

        </div>

      </motion.div>


      {/* =================================================
          SMALL TOP CARD
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [4, 5, 4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[18%]
          top-[0]
          z-20
          hidden
          w-[180px]
          overflow-hidden
          rounded-[26px]
          bg-white
          p-2
          shadow-2xl
          shadow-gray-300/50
          md:block
        "
      >

        <div className="relative h-[150px] overflow-hidden rounded-[20px]">

          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80"
            alt="Science"
            className="h-full w-full object-cover"
          />

        </div>

        <div className="p-3">

          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
            Science
          </p>

          <p className="mt-1 text-sm font-bold text-gray-900">
            Physics Quiz
          </p>

        </div>

      </motion.div>


      {/* =================================================
          BOTTOM CARD
      ================================================= */}

      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [-3, -4, -3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[3%]
          right-[4%]
          z-20
          w-[210px]
          overflow-hidden
          rounded-[28px]
          bg-white
          p-2
          shadow-2xl
          shadow-gray-300/50
        "
      >

        <div className="relative h-[170px] overflow-hidden rounded-[22px]">

          <img
            src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=600&q=85"
            alt="Chemistry"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold text-gray-800">
            Chemistry
          </span>

        </div>

        <div className="flex items-center justify-between px-3 py-3">

          <div>

            <p className="text-sm font-bold text-gray-900">
              Quick Quiz
            </p>

            <p className="text-[10px] text-gray-400">
              20 Questions
            </p>

          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <ArrowUpRight size={14} />
          </div>

        </div>

      </motion.div>


      {/* =================================================
          FLOATING BADGE
      ================================================= */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          left-[0]
          z-30
          hidden
          items-center
          gap-3
          rounded-2xl
          border
          border-gray-100
          bg-white
          px-4
          py-3
          shadow-xl
          sm:flex
        "
      >

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Sparkles size={15} />
        </div>

        <div>

          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Smart creation
          </p>

          <p className="text-xs font-bold text-gray-900">
            Ready to print
          </p>

        </div>

      </motion.div>


      {/* Decorative dots */}

      <div className="absolute bottom-8 left-[45%] h-3 w-3 rounded-full bg-blue-200" />
      <div className="absolute right-[3%] bottom-[42%] h-2 w-2 rounded-full bg-blue-400" />

    </motion.div>

  </div>

</section>
      {/* =====================================================
          FEATURED TESTS - PINTEREST STYLE
      ===================================================== */}

  <section
  id="tests"
  className="relative overflow-hidden bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
  <div className="pointer-events-none absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-[1450px]">

    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >

      <div className="max-w-2xl">

        {/* Small label */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-600" />

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
            Explore Tests
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-5xl lg:text-6xl">
          Find inspiration for your
          <span className="text-blue-600"> next test.</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          Explore ready-made test ideas, discover different subjects
          and create your own customized test in just a few clicks.
        </p>

      </div>

      {/* Browse button */}
      <a
        href="#subjects"
        className="group inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
      >
        Browse subjects

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <ChevronRight size={15} />
        </span>
      </a>

    </motion.div>


    {/* =====================================================
        MASONRY GRID
    ===================================================== */}

    {filteredTests.length > 0 ? (

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">

        {filteredTests.map((test, index) => (

          <motion.article
            key={test.id}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
            }}
            className="group mb-5 break-inside-avoid"
          >

            <div
              className={`
                relative
                ${test.height}
                overflow-hidden
                rounded-[28px]
                bg-gray-200
                shadow-sm
                transition-all
                duration-500
                group-hover:-translate-y-1
                group-hover:shadow-2xl
                group-hover:shadow-gray-300/40
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <img
                src={test.image}
                alt={test.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

              {/* Hover blue glow */}
              <div className="absolute inset-0 bg-blue-600/0 transition duration-500 group-hover:bg-blue-600/10" />


              {/* =================================================
                  TOP LEFT CATEGORY
              ================================================= */}

              <div className="absolute left-4 top-4">

                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/90 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-lg backdrop-blur-md">
                  {test.category}
                </span>

              </div>


              {/* =================================================
                  TOP RIGHT ACTION
              ================================================= */}

              <button
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-gray-800
                  opacity-0
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  hover:text-white
                  group-hover:opacity-100
                "
              >
                <ArrowUpRight size={17} />
              </button>


              {/* =================================================
                  CENTER HOVER ICON
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-gray-900
                  opacity-0
                  shadow-2xl
                  transition-all
                  duration-300
                  scale-75
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                <ArrowUpRight size={20} />
              </div>


              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                {/* Grade */}
                <div className="mb-2 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                    {test.grade}
                  </span>

                </div>


                {/* Title */}
                <h3 className="max-w-[250px] text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                  {test.title}
                </h3>


                {/* Bottom information */}
                <div className="mt-5 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md">
                      <BookOpen size={14} />
                    </div>

                    <span className="text-xs font-medium text-white/85">
                      {test.questions}
                    </span>

                  </div>


                  {/* Use test button */}
                  <Link
                    to="/create-test"
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-white
                      px-4
                      py-2.5
                      text-xs
                      font-bold
                      text-gray-900
                      opacity-0
                      translate-y-2
                      shadow-lg
                      transition-all
                      duration-300
                      hover:bg-blue-600
                      hover:text-white
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    Use Test
                    <ArrowUpRight size={13} />
                  </Link>

                </div>

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    ) : (

      /* =====================================================
          EMPTY STATE
      ===================================================== */

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] border border-gray-200 bg-white px-6 py-24 text-center shadow-sm"
      >

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
          <Search size={28} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          No tests found
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
          We couldn't find anything matching your search.
          Try another subject, grade or test name.
        </p>

        <button
          onClick={() => setSearch("")}
          className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
        >
          Clear Search
        </button>

      </motion.div>

    )}

  </div>
</section>

      {/* =====================================================
          SUBJECTS
      ===================================================== */}

      <section
  id="subjects"
  className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-[1450px]">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
    >

      <div className="max-w-2xl">

        {/* Label */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-600" />

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
            Explore Subjects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-5xl lg:text-6xl">
          What do you want to
          <span className="text-blue-600"> teach?</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          Pick a subject to discover test ideas, practice questions
          and create customized assessments for your students.
        </p>

      </div>

      {/* Right side text */}
      <div className="hidden max-w-xs text-right sm:block">

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Available subjects
        </p>

        <p className="mt-1 text-3xl font-bold text-gray-900">
          {subjects.length}
        </p>

      </div>

    </motion.div>


    {/* =====================================================
        SUBJECT GRID
    ===================================================== */}

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

      {subjects.map((subject, index) => (

        <motion.button
          key={subject.name}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.06,
          }}
          whileHover={{
            y: -8,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className={`
            group
            relative
            min-h-[220px]
            overflow-hidden
            rounded-[28px]
            ${subject.bg}
            p-5
            text-left
            shadow-sm
            transition-all
            duration-500
            hover:shadow-xl
          `}
        >

          {/* Decorative circle */}
          <div
            className="
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              bg-white/40
              transition-all
              duration-500
              group-hover:scale-150
            "
          />

          {/* Second decorative circle */}
          <div
            className="
              absolute
              -bottom-12
              -left-12
              h-28
              w-28
              rounded-full
              bg-white/30
              transition-all
              duration-500
              group-hover:scale-125
            "
          />


          {/* =================================================
              TOP ROW
          ================================================= */}

          <div className="relative flex items-start justify-between">

            {/* Icon */}
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/80
                text-3xl
                shadow-sm
                backdrop-blur
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-2
              "
            >
              {subject.icon}
            </div>

            {/* Arrow */}
            <div
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/70
                ${subject.text}
                opacity-0
                translate-x-2
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              `}
            >
              <ArrowUpRight size={17} />
            </div>

          </div>


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative mt-12">

            <h3
              className={`
                text-base
                font-bold
                ${subject.text}
                transition-transform
                duration-300
                group-hover:translate-x-1
              `}
            >
              {subject.name}
            </h3>

            <p className="mt-1.5 text-[11px] font-medium text-gray-500">
              Practice tests
            </p>

          </div>


          {/* Bottom line */}
          <div className="absolute bottom-0 left-5 right-5 h-1 overflow-hidden rounded-full bg-black/5">
            <div
              className={`
                h-full
                w-0
                rounded-full
                bg-current
                ${subject.text}
                transition-all
                duration-500
                group-hover:w-full
              `}
            />
          </div>

        </motion.button>

      ))}

    </div>


    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

    <motion.div
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
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[28px] border border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row"
    >

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
          <BookOpen size={17} />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-900">
            Can't find your subject?
          </p>

          <p className="text-xs text-gray-500">
            You can still create a customized test.
          </p>
        </div>

      </div>

      <Link
        to="/create-test"
        className="group flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600"
      >
        Create Custom Test

        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>

    </motion.div>

  </div>
</section>
      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how"
        className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >

        <div className="mx-auto max-w-[1100px]">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From syllabus to printable test
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Everything you need to create a professional test
              without wasting time.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {/* STEP 1 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[26px] border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                  01
                </div>

                <span className="text-4xl font-black text-gray-100">
                  01
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                Select Subject
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Choose your subject, class, chapter and syllabus
                according to your requirements.
              </p>

            </motion.div>

            {/* STEP 2 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[26px] border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                  02
                </div>

                <span className="text-4xl font-black text-gray-100">
                  02
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                Customize Test
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Pick your questions, configure marks and create
                exactly the test you need.
              </p>

            </motion.div>

            {/* STEP 3 */}

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[26px] border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                  03
                </div>

                <span className="text-4xl font-black text-gray-100">
                  03
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                Download & Print
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Generate your final test and download a clean
                printable version instantly.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="relative overflow-hidden rounded-[32px] bg-gray-900 px-6 py-16 text-center sm:px-12">

            {/* DECORATION */}

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/30 blur-2xl" />

            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-2xl" />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                <Sparkles size={20} />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to create your next test?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Turn your syllabus into a beautiful printable
                test in just a few minutes.
              </p>

              <Link
                to="/create-test"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                <Plus size={18} />
                Create New Test
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-gray-100 bg-white px-4 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <Link
            to="/"
            className="flex items-center gap-2"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              <FileText size={16} />
            </div>

            <span className="text-sm font-bold">
              Test<span className="text-blue-600">Maker</span>
            </span>

          </Link>

          <div className="flex items-center gap-5 text-xs text-gray-400">

            <a
              href="#home"
              className="transition hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#tests"
              className="transition hover:text-blue-600"
            >
              Tests
            </a>

            <a
              href="#how"
              className="transition hover:text-blue-600"
            >
              How It Works
            </a>

          </div>

          <p className="text-xs text-gray-400">
            © 2026 TestMaker
          </p>

        </div>

      </footer>

    </div>
  );
}