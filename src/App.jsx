import React from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Heart,
  Home,
  MessageCircle,
  Plane,
  Shield,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const PHONE_DISPLAY = "Book Intro Call";
const PHONE_NUMBER = "+18182376399";

const services = [
  { icon: CalendarDays, label: "Appointments & Scheduling" },
  { icon: ShoppingBag, label: "Returns & Errands" },
  { icon: ShoppingBag, label: "Groceries & Deliveries" },
  { icon: Plane, label: "Travel Coordination" },
  { icon: Home, label: "Household Planning" },
  { icon: FileText, label: "Administrative Tasks" },
];

const steps = [
  { icon: MessageCircle, title: "Text us what you need." },
  { icon: Sparkles, title: "We get to work." },
  { icon: CheckCircle2, title: "We follow up until it’s done." },
  { icon: Heart, title: "You get your time back." },
];

const reasons = [
  {
    icon: Shield,
    title: "Discreet & Confidential",
    copy: "Your privacy is protected and your information is handled with care.",
  },
  {
    icon: Clock,
    title: "Reliable & Proactive",
    copy: "We anticipate what’s next, follow through, and keep the details moving.",
  },
  {
    icon: Sparkles,
    title: "Details Obsessed",
    copy: "We care about the little things so they stop living in your head.",
  },
];

const packages = [
  {
    name: "Essentials",
    subtitle: "Light ongoing support",
    price: "$600",
    cadence: "/ mo.",
    hours: "10 hrs/month",
    response: "24–72 hr response",
    bestFor: "Best for occasional help with errands, appointments, returns, forms, and recurring household admin.",
    featured: false,
  },
  {
    name: "Home Flow",
    subtitle: "Ongoing household support",
    price: "$1,000",
    cadence: "/ mo.",
    hours: "20 hrs/month",
    response: "Same-day response",
    bestFor: "Best for busy households that want a reliable layer of weekly support and follow-through.",
    featured: true,
  },
  {
    name: "Fully Handled",
    subtitle: "Embedded lifestyle support",
    price: "$2,000",
    cadence: "/ mo.",
    hours: "40 hrs/month",
    response: "Priority handling",
    bestFor: "Best for families and professionals who want high-touch operational support across their life.",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function CTAButtons({ compact = false }) {
  return (
    <div className={`flex w-full flex-col gap-3 ${compact ? "" : "sm:flex-row"}`}>
      <motion.a
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        href={`sms:${PHONE_NUMBER}`}
        className="group inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#23281F] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#EDE7DD] shadow-xl shadow-[#23281F]/10 transition hover:bg-[#4A583F] sm:w-auto"
      >
        Text Handled
        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </motion.a>
      <motion.a
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        href={`tel:${PHONE_NUMBER}`}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#A4916A] bg-[#EDE7DD]/50 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#23281F] transition hover:bg-white/60 sm:w-auto"
      >
        {PHONE_DISPLAY}
      </motion.a>
    </div>
  );
}

function FloatingLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[7%] top-24 h-36 w-36 rounded-full border border-[#A4916A]/25 bg-white/15 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-3rem] top-72 h-48 w-48 rounded-full bg-[#4A583F]/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-1/4 h-px w-48 bg-[#A4916A]/50"
      />
    </div>
  );
}

function HeroCard() {
  const messages = [
    {
      from: "client",
      text: "Hi! Can you help reschedule Maleek’s pediatrician appointment and set up a grocery delivery for tomorrow?",
      time: "9:41 AM",
    },
    {
      from: "handled",
      text: "Absolutely — I rescheduled Maleek’s appointment for Thursday at 3:30 PM and secured a grocery delivery window for tomorrow between 1–3 PM.",
      time: "9:42 AM",
    },
    {
      from: "client",
      text: "Perfect. I also need a return label printed if possible.",
      time: "9:43 AM",
    },
    {
      from: "handled",
      text: "Handled — I printed the return label and added it to today’s pickup list. I’ll send over everything confirmed in one text.",
      time: "9:44 AM",
      delivered: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 0.6 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none"
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-[#4A583F]/30 blur-3xl"
      />

      <div className="relative rounded-[2.15rem] border border-white/70 bg-white/35 p-3 shadow-2xl shadow-[#23281F]/10 backdrop-blur sm:p-5">
        <div className="overflow-hidden rounded-[1.85rem] border border-[#A4916A]/25 bg-[#F7F0E6] shadow-xl shadow-[#23281F]/10">
          {/* iOS-style top bar */}
          <div className="border-b border-[#A4916A]/20 bg-[#EDE7DD]/85 px-4 pb-3 pt-4 sm:px-5">
            <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[#23281F]/20" />

            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-[#4A583F]">Messages</div>
              <div className="text-xs text-[#23281F]/45">9:45 AM</div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A583F] text-sm font-semibold text-[#EDE7DD] shadow-inner">
                AG
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#23281F]">Ayesha Greene</p>
                <p className="text-xs text-[#23281F]/50">Client conversation</p>
              </div>
              <div className="ml-auto rounded-full bg-[#4A583F]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#4A583F]">
                Active
              </div>
            </div>
          </div>

          {/* Message thread */}
          <div className="space-y-3 px-4 py-5 sm:px-5">
            <div className="text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#A4916A]">
              Today
            </div>

            {messages.map((message, index) => {
              const isHandled = message.from === "handled";

              return (
                <motion.div
                  key={`${message.text}-${index}`}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.38, delay: 0.35 + index * 0.14 }}
                  className={`flex ${isHandled ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[82%] flex-col ${isHandled ? "items-end" : "items-start"}`}>
                    <div
                      className={`rounded-[1.25rem] px-4 py-3 text-sm leading-6 shadow-sm ${
                        isHandled
                          ? "rounded-br-md bg-[#4A583F] text-[#EDE7DD]"
                          : "rounded-bl-md bg-[#E8E1D6] text-[#23281F]/82"
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className={`mt-1 text-[0.68rem] ${isHandled ? "text-[#4A583F]/70" : "text-[#23281F]/38"}`}>
                      {message.delivered ? "Delivered" : message.time}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-1.5 rounded-[1.25rem] rounded-bl-md bg-[#E8E1D6] px-4 py-3">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-[#23281F]/35"
                />
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
                  className="h-1.5 w-1.5 rounded-full bg-[#23281F]/35"
                />
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.24 }}
                  className="h-1.5 w-1.5 rounded-full bg-[#23281F]/35"
                />
              </div>
            </motion.div>
          </div>

          {/* iOS-style input bar */}
          <div className="border-t border-[#A4916A]/20 bg-[#EDE7DD]/85 px-4 py-4 sm:px-5">
            <div className="flex items-center gap-2 rounded-full border border-[#A4916A]/25 bg-[#F7F0E6] px-4 py-3 shadow-inner">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4A583F] text-xs text-[#EDE7DD]">
                +
              </div>
              <p className="flex-1 text-sm text-[#23281F]/45">Text Handled what you need...</p>
              <ArrowRight className="h-4 w-4 text-[#A4916A]" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between px-2 text-[0.65rem] uppercase tracking-[0.24em] text-[#A4916A] sm:text-xs">
          <span>Discreet</span>
          <span>Proactive</span>
          <span>Human</span>
        </div>
      </div>
    </motion.div>
  );
}

function PricingSection() {
  return (
    <motion.section
      id="packages"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative px-5 py-10 sm:px-6 md:px-10 md:py-16 lg:px-14"
    >
      <div className="absolute inset-x-0 top-20 mx-auto h-72 max-w-5xl rounded-full bg-white/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-serif text-sm uppercase tracking-[0.36em] text-[#4A583F] sm:text-lg sm:tracking-[0.45em]">
            Monthly Support
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl">
            Choose the level of support that fits your life.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#23281F]/72 sm:text-lg sm:leading-8">
            Choose a monthly support plan designed to keep everyday tasks moving without hiring a full-time assistant.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.015 }}
              className={`relative overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition hover:shadow-2xl hover:shadow-[#23281F]/10 sm:p-7 ${
                plan.featured
                  ? "border-[#A4916A]/70 bg-[#23281F] text-[#EDE7DD]"
                  : "border-[#A4916A]/25 bg-white/30 text-[#23281F]"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 rounded-full border border-[#A4916A]/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#A4916A]">
                  Most Flexible
                </div>
              )}

              <p className={`font-serif text-3xl tracking-[-0.04em] ${plan.featured ? "text-[#EDE7DD]" : "text-[#23281F]"}`}>
                {plan.name}
              </p>
              <p className={`mt-2 text-sm leading-6 ${plan.featured ? "text-[#EDE7DD]/70" : "text-[#23281F]/65"}`}>
                {plan.subtitle}
              </p>

              <div className="mt-7 flex items-end gap-2">
                <span className="font-serif text-6xl leading-none tracking-[-0.06em] text-[#A4916A]">
                  {plan.price}
                </span>
                <span className={`pb-2 text-sm ${plan.featured ? "text-[#EDE7DD]/70" : "text-[#23281F]/65"}`}>
                  {plan.cadence}
                </span>
              </div>

              <div className={`my-7 h-px ${plan.featured ? "bg-[#A4916A]/35" : "bg-[#A4916A]/30"}`} />

              <ul className={`space-y-4 text-sm leading-6 ${plan.featured ? "text-[#EDE7DD]/82" : "text-[#23281F]/75"}`}>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A4916A]" />
                  {plan.hours}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A4916A]" />
                  {plan.response}
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A4916A]" />
                  Unused support hours roll over for 60 days
                </li>
              </ul>

              <p className={`mt-6 text-sm leading-6 ${plan.featured ? "text-[#EDE7DD]/68" : "text-[#23281F]/65"}`}>
                {plan.bestFor}
              </p>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={`sms:${PHONE_NUMBER}`}
                className={`mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  plan.featured
                    ? "bg-[#A4916A] text-white hover:bg-[#4A583F]"
                    : "border border-[#A4916A] text-[#23281F] hover:bg-white/55"
                }`}
              >
                Ask About {plan.name}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#23281F]/60">
          Larger projects such as relocations, events, renovations, or extensive travel coordination are scoped separately.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default function HandledLandingPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.55]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#EDE7DD] font-sans text-[#23281F] selection:bg-[#A4916A]/30">
      {/* Sticky Mobile CTA */}
      <motion.div
        initial={{ y: 90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#A4916A]/25 bg-[#4A583F]/95 p-3 shadow-2xl backdrop-blur md:hidden"
      >
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={`sms:${PHONE_NUMBER}`}
            className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#EDE7DD] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#23281F]"
          >
            Text Us
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-[#A4916A] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#EDE7DD]"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(164,145,106,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(74,88,63,0.12),transparent_34%)]" />
        <FloatingLayer />

        <div className="relative mx-auto max-w-7xl">
          <motion.header
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="fixed left-0 right-0 top-0 z-50 border-b border-[#A4916A]/35 bg-[#4A583F]/94 px-5 py-3 shadow-lg shadow-[#23281F]/10 backdrop-blur-xl sm:px-6 md:px-10 lg:px-14"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <a href="#top" className="font-serif text-4xl tracking-[-0.05em] text-[#EDE7DD] sm:text-5xl">
                Handled
              </a>

              <nav className="hidden items-center gap-7 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#EDE7DD]/75 lg:flex">
                <a href="#services" className="transition hover:text-[#A4916A]">Services</a>
                <a href="#how" className="transition hover:text-[#A4916A]">How It Works</a>
                <a href="#intro-offer" className="transition hover:text-[#A4916A]">Intro Offer</a>
                <a href="#packages" className="transition hover:text-[#A4916A]">Pricing</a>
              </nav>

              <div className="hidden items-center gap-2 sm:flex">
                <motion.a
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  href={`sms:${PHONE_NUMBER}`}
                  className="rounded-full bg-[#EDE7DD] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#23281F] transition hover:bg-white"
                >
                  Text Handled
                </motion.a>

                <motion.a
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${PHONE_NUMBER}`}
                  className="rounded-full border border-[#A4916A]/70 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#EDE7DD] transition hover:bg-[#A4916A] hover:text-white"
                >
                  {PHONE_DISPLAY}
                </motion.a>
              </div>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href={`sms:${PHONE_NUMBER}`}
                className="inline-flex rounded-full bg-[#EDE7DD] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#23281F] sm:hidden"
              >
                Text
              </motion.a>
            </div>
          </motion.header>

          <div id="top" className="grid gap-10 pb-2 pt-10 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-12 md:pb-12 md:pt-16 lg:gap-16">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-2xl"
            >
              <motion.p variants={fadeUp} className="font-serif text-xl leading-7 text-[#A4916A] sm:text-2xl">
                Real People Here for <em>You.</em>
              </motion.p>

              <motion.h1 variants={fadeUp} className="mt-6 font-serif text-[3.8rem] leading-[0.92] tracking-[-0.065em] text-[#23281F] sm:text-7xl md:text-7xl lg:text-8xl">
                For the things you keep <span className="italic text-[#A4916A]">meaning to get to.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-7 text-[#23281F]/78 sm:text-lg sm:leading-8">
                Handled is your dedicated micro-assistant for the everyday details that take up your time and mental space. Just text what you need, and we’ll handle the rest.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 max-w-md sm:max-w-none">
                <CTAButtons />
              </motion.div>
            </motion.div>

            <HeroCard />
          </div>
        </div>
      </section>

      {/* Services */}
      <motion.section
        id="services"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative px-5 py-14 sm:px-6 md:px-10 md:py-20 lg:px-14"
      >
        <div className="absolute left-1/2 top-8 h-40 w-[70vw] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#A4916A]/50" />
            <h2 className="text-center font-serif text-sm uppercase tracking-[0.36em] text-[#4A583F] sm:text-xl sm:tracking-[0.45em]">
              What We Handle
            </h2>
            <div className="h-px flex-1 bg-[#A4916A]/50" />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {services.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-[1.35rem] border border-[#A4916A]/25 bg-white/25 p-5 text-center shadow-sm transition hover:bg-white/45 hover:shadow-xl hover:shadow-[#23281F]/10 sm:p-6"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE7DD]/80 shadow-inner transition group-hover:-translate-y-1">
                  <Icon className="h-8 w-8 stroke-[1.4] text-[#4A583F]" />
                </div>
                <p className="text-sm leading-5 text-[#23281F]/80">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        id="how"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 py-10 sm:px-6 md:px-10 md:py-16 lg:px-14"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/40 bg-white/35 p-5 shadow-xl shadow-[#23281F]/5 backdrop-blur sm:p-8 md:p-12">
          <div className="text-center">
            <p className="font-serif text-sm uppercase tracking-[0.36em] text-[#4A583F] sm:text-lg sm:tracking-[0.45em]">
              How It Works
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl">
              Simple. Proactive. Reliable.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-[1.5rem] border border-[#A4916A]/25 bg-[#EDE7DD]/70 p-5 text-center shadow-sm sm:p-6"
              >
                <div className="absolute right-4 top-4 font-serif text-5xl text-[#A4916A]/15">{index + 1}</div>
                <div className="mb-4 font-serif text-4xl text-[#A4916A]">{index + 1}</div>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE7DD] shadow-inner">
                  <Icon className="h-7 w-7 stroke-[1.5] text-[#23281F]" />
                </div>
                <p className="text-base leading-6 text-[#23281F]/80">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Intro Offer */}
      <motion.section
        id="intro-offer"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 py-14 sm:px-6 md:px-10 md:py-20 lg:px-14"
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#23281F] text-[#EDE7DD] shadow-2xl shadow-[#23281F]/15"
        >
          <div className="grid gap-0 md:grid-cols-[.85fr_1.25fr_1fr]">
            <div className="flex items-center justify-center border-b border-[#A4916A]/35 p-7 text-center md:border-b-0 md:border-r md:p-8">
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[#A4916A]"
              >
                <p className="text-xs uppercase tracking-[0.22em]">Limited Time</p>
                <p className="mt-2 text-lg uppercase tracking-[0.14em]">Intro Offer</p>
                <Heart className="mt-4 h-5 w-5 fill-[#A4916A] text-[#A4916A]" />
              </motion.div>
            </div>

            <div className="border-b border-[#A4916A]/35 p-7 text-center md:border-b-0 md:border-r md:p-10 md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm">Try Handled for 1 week</p>
              <p className="mt-3 font-serif text-3xl italic leading-tight text-[#A4916A] sm:text-4xl">up to 10 hours for only</p>
              <p className="mt-1 font-serif text-7xl leading-none tracking-[-0.06em] text-[#A4916A] sm:text-8xl">$100</p>
            </div>

            <div className="p-7 md:p-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">Intro offer includes:</p>
              <ul className="space-y-4 text-base leading-7 text-[#EDE7DD]/90 sm:text-lg">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#A4916A]" />
                  One week of service
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#A4916A]" />
                  Up to 10 hours of support
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#A4916A]" />
                  Starts the day of your first request
                </li>
              </ul>
              <div className="mt-7">
                <motion.a
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href={`sms:${PHONE_NUMBER}`}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#A4916A] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#4A583F]"
                >
                  Start by Text
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <PricingSection />

      {/* Why Handled */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5 py-10 sm:px-6 md:px-10 md:py-16 lg:px-14"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} className="mb-8 text-center">
            <p className="font-serif text-sm uppercase tracking-[0.36em] text-[#4A583F] sm:text-lg sm:tracking-[0.45em]">Why Handled</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl">We protect your time like it’s our own.</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, copy }) => (
              <motion.div
                key={title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.015 }}
                className="rounded-[1.5rem] border border-[#A4916A]/25 bg-white/30 p-6 shadow-sm transition hover:bg-white/45 hover:shadow-xl hover:shadow-[#23281F]/10 sm:p-7"
              >
                <Icon className="mb-5 h-8 w-8 stroke-[1.4] text-[#4A583F]" />
                <h3 className="font-serif text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#23281F]/70">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 pb-28 pt-10 sm:px-6 md:px-10 md:pb-20 lg:px-14"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#A4916A]/30 bg-[#EDE7DD] p-7 text-center shadow-xl shadow-[#23281F]/5 sm:p-10 md:p-14">
          <div className="absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
          <div className="relative">
            <p className="font-serif text-4xl leading-tight tracking-[-0.055em] sm:text-6xl">Let’s make your life easier.</p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#23281F]/75 sm:text-lg sm:leading-8">
              Book a quick intro call to tell us about your needs, or simply text us what’s been sitting on your list.
            </p>
            <div className="mx-auto mt-8 max-w-md sm:max-w-none">
              <CTAButtons />
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-[#A4916A]/30 px-5 py-8 pb-28 text-center text-xs leading-6 text-[#23281F]/60 md:pb-8">
        <p>Handled is designed to provide ongoing operational support without the complexity of hiring full-time staff.</p>
        <p>Larger projects such as relocations, events, renovations, or extensive travel coordination are scoped separately.</p>
      </footer>
    </main>
  );
}
