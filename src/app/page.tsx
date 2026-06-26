'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Search,
  Brain,
  Globe,
  Zap,
  ShieldCheck,
  FileCode2,
  Gauge,
  Eye,
  HeartHandshake,
  ListChecks,
  Download,
  ScanLine,
  Rocket,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Bot,
  Users,
  Store,
  PenTool,
  Building2,
  TrendingUp,
  Target,
  Clock,
  Layers,
  MessageSquare,
  Mail,
  ChevronDown,
  Star,
  LayoutDashboard,
  FileSearch,
  Lightbulb,
  AlertTriangle,
  ArrowUpRight,
  Cpu,
  Code2,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ============================================================================
// CONSTANTS
// ============================================================================

const FREE_AUDIT_URL = 'https://sitesbrand.com/free-audit';
const CONTACT_URL = 'https://sitesbrand.com/contact';
const INFO_EMAIL = 'info@sitesbrand.com';
const SUPPORT_EMAIL = 'support@sitesbrand.xyz';

// ============================================================================
// REUSABLE ANIMATION COMPONENT
// ============================================================================

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// SCORE RING COMPONENT (matches screenshot visual)
// ============================================================================

function ScoreRing({
  value,
  max = 20,
  label,
  color,
  size = 80,
}: {
  value: number;
  max?: number;
  label: string;
  color: string;
  size?: number;
}) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / max) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="4"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-white">{value}</span>
          <span className="text-[10px] text-slate-500">/{max}</span>
        </div>
      </div>
      <span className="text-xs font-medium text-slate-400">{label}</span>
    </div>
  );
}

// ============================================================================
// SECTION WRAPPER
// ============================================================================

function SectionWrapper({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

// ============================================================================
// SECTION HEADING
// ============================================================================

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'
      }`}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-300 ${
              align === 'center' ? '' : ''
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`mt-4 text-base text-slate-400 sm:text-lg ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

// ============================================================================
// 1. HERO SECTION
// ============================================================================

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[100px]" />
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-5xl text-center"
      >
        {/* Badge */}
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-slate-300">
              New: SXO Master v2.0 — AI Search Optimization is here
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.1}>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
            SXO Master: Optimize for{' '}
            <span className="text-gradient-blue">Search, AI,</span> and{' '}
            <span className="text-gradient-cyan">Real User Experience</span>
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            The all-in-one WordPress plugin that audits and improves your
            website&apos;s SEO, AI visibility, content clarity, user experience,
            and conversion readiness — all inside your dashboard.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="btn-gradient group h-14 w-full rounded-xl border-0 px-8 text-base font-semibold text-white sm:w-auto"
            >
              <a href={FREE_AUDIT_URL} target="_blank" rel="noopener noreferrer">
                <Search className="h-5 w-5" />
                Get a Free Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-xl border-white/15 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                <Rocket className="h-5 w-5" />
                Get Early Access
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Bot, label: 'AI-Powered' },
              { icon: Search, label: 'SEO-Ready' },
              { icon: Code2, label: 'WordPress Plugin' },
              { icon: Layers, label: 'SXO-Focused' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
              >
                <badge.icon className="h-4 w-4 text-blue-400" />
                {badge.label}
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>

      {/* Dashboard mockup */}
      <Reveal delay={0.5} className="mx-auto mt-16 max-w-6xl">
        <div className="relative">
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-2xl" />

          {/* Browser frame */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl">
            {/* Browser top bar */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-[#1e293b]/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md bg-[#0f172a] px-4 py-1 text-xs text-slate-500">
                <ShieldCheck className="h-3 w-3 text-green-500" />
                sitesbrand.com/wp-admin/admin.php?page=sxo-master
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="bg-[#0f172a] p-6 sm:p-8">
              {/* Plugin header */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
                    <span className="text-lg font-bold text-white">S</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">
                        SXO Master
                      </h3>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/20">
                        v2.0.5
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500">
                      Strict SEO, AEO, GEO, AIO, and SXO audit dashboard
                    </p>
                  </div>
                </div>
              </div>

              {/* Score rings */}
              <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl border border-white/5 bg-white/[0.02] p-6 sm:gap-10">
                <ScoreRing
                  value={88}
                  max={100}
                  label="Overall"
                  color="#10b981"
                  size={100}
                />
                <ScoreRing value={19} label="AEO" color="#06b6d4" />
                <ScoreRing value={17} label="SEO" color="#22c55e" />
                <ScoreRing value={19} label="AIO" color="#3b82f6" />
                <ScoreRing value={13} label="GEO" color="#8b5cf6" />
                <ScoreRing value={20} label="SXO" color="#f97316" />
              </div>

              {/* Verdict bar */}
              <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-500/15 py-2.5 text-sm font-medium text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                OK — Publish Ready
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Scroll indicator */}
      <Reveal delay={0.6}>
        <div className="mt-12 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-slate-500"
          >
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

// ============================================================================
// 2. PROBLEM SECTION
// ============================================================================

function ProblemSection() {
  const problems = [
    {
      icon: FileCode2,
      title: 'Poor Content Structure',
      desc: 'Pages lack clear hierarchy, headings, and logical flow that both users and search engines need.',
    },
    {
      icon: Search,
      title: 'Weak SEO Signals',
      desc: 'Missing meta tags, thin content, and unoptimized elements that limit your search visibility.',
    },
    {
      icon: Bot,
      title: 'Low AI Visibility',
      desc: 'Content that AI search engines like ChatGPT, Perplexity, and Google AI Overlooks can&apos;t easily parse.',
    },
    {
      icon: Eye,
      title: 'Bad User Experience',
      desc: 'Cluttered layouts, confusing navigation, and friction that pushes visitors away before they convert.',
    },
    {
      icon: Gauge,
      title: 'Slow Page Speed',
      desc: 'Heavy assets and unoptimized code that tank your Core Web Vitals and search rankings.',
    },
    {
      icon: FileSearch,
      title: 'Missing Schema',
      desc: 'No structured data to help search engines and AI tools understand what your content is about.',
    },
    {
      icon: Target,
      title: 'Weak Conversion Flow',
      desc: 'Traffic arrives but never converts — CTAs are unclear, trust signals are missing, and friction is everywhere.',
    },
    {
      icon: TrendingUp,
      title: 'Traffic That Doesn&apos;t Convert',
      desc: 'You&apos;re ranking and getting clicks, but vanity traffic without revenue is wasted effort.',
    },
  ];

  return (
    <SectionWrapper id="problem" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="The Problem"
        title={
          <>
            SEO alone is no longer enough.
            <br />
            <span className="text-slate-500">
              Users and AI search engines want more.
            </span>
          </>
        }
        subtitle="Most websites focus only on keyword rankings. But modern search journeys now care about experience, clarity, speed, content structure, trust signals, and conversion quality. If your site ignores these, you're losing traffic, trust, and revenue every single day."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 0.05}>
            <div className="glass-card glass-card-hover group h-full rounded-2xl p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 transition-colors group-hover:bg-red-500/20">
                <problem.icon className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {problem.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

// (What is SXO Master section removed — covered by Hero + Core Features)

function WhatIsSectionUnused() {
  const pillars = [
    { label: 'SEO', color: '#22c55e', icon: Search },
    { label: 'UX', color: '#06b6d4', icon: Eye },
    { label: 'CRO', color: '#f97316', icon: Target },
    { label: 'AI Visibility', color: '#3b82f6', icon: Bot },
    { label: 'GEO / AIO', color: '#8b5cf6', icon: Globe },
    { label: 'Content Structure', color: '#ec4899', icon: FileCode2 },
    { label: 'Technical Signals', color: '#14b8a6', icon: Cpu },
    { label: 'Page Experience', color: '#eab308', icon: Gauge },
  ];

  return (
    <SectionWrapper id="what-is" className="py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Content */}
        <div>
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-purple-300">
              <Lightbulb className="h-3.5 w-3.5" />
              What is SXO Master?
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              One plugin.{' '}
              <span className="text-gradient-blue">
                The full search experience.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-slate-400">
              SXO Master is a WordPress plugin and audit tool that helps website
              owners, marketers, SEO teams, agencies, and founders analyze and
              improve their website for{' '}
              <span className="font-semibold text-white">
                Search Experience Optimization
              </span>{' '}
              — the practice of optimizing for search engines, AI tools, and
              real users at the same time.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base text-slate-500">
              Instead of running separate tools for SEO, UX, CRO, and AI
              readiness, SXO Master brings everything into one dashboard inside
              WordPress — with clear, actionable recommendations you can
              implement immediately.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="btn-gradient h-12 rounded-xl px-6 text-white"
              >
                <a
                  href={FREE_AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Search className="h-4 w-4" />
                  Get a Free Audit
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right: Pillars grid */}
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent blur-2xl" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="glass-card group flex items-center gap-3 rounded-xl p-4 transition-all hover:border-white/20"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      border: `1px solid ${pillar.color}30`,
                    }}
                  >
                    <pillar.icon
                      className="h-5 w-5"
                      style={{ color: pillar.color }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {pillar.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Floating audit badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 -top-4 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2 backdrop-blur-sm sm:-right-8"
            >
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-xs font-medium text-green-300">
                Audit insights inside WP
              </span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

// ============================================================================
// 4. CORE FEATURES SECTION
// ============================================================================

function CoreFeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'SEO Content Analysis',
      desc: 'Deep-scan every page for keyword usage, title structure, meta tags, heading hierarchy, and content depth — with specific fixes.',
      color: '#22c55e',
    },
    {
      icon: Bot,
      title: 'AI Search Optimization / AIO',
      desc: 'Prepare your content for ChatGPT, Perplexity, and Google AI Overviews with answer patterns, clarity, and extractability checks.',
      color: '#3b82f6',
    },
    {
      icon: Globe,
      title: 'GEO Readiness',
      desc: 'Generative Engine Optimization scoring ensures your content surfaces in AI-generated answers and citations.',
      color: '#8b5cf6',
    },
    {
      icon: Eye,
      title: 'UX & Conversion Review',
      desc: 'Identify friction points, weak CTAs, trust gaps, and layout issues that prevent visitors from converting.',
      color: '#06b6d4',
    },
    {
      icon: Cpu,
      title: 'Technical SEO Signals',
      desc: 'Catch crawlability issues, broken links, redirect chains, robots directives, and indexing problems in one scan.',
      color: '#14b8a6',
    },
    {
      icon: FileCode2,
      title: 'Schema & Structured Data',
      desc: 'Get schema markup suggestions for articles, products, FAQs, and more — so search engines and AI understand your content.',
      color: '#ec4899',
    },
    {
      icon: Gauge,
      title: 'Page Speed & Experience',
      desc: 'Core Web Vitals checks for LCP, CLS, and INP with actionable recommendations to improve load performance.',
      color: '#eab308',
    },
    {
      icon: MessageSquare,
      title: 'Content Clarity Scoring',
      desc: 'Readability, sentence complexity, answer directness, and fact density scoring tuned for both humans and AI.',
      color: '#f97316',
    },
    {
      icon: ShieldCheck,
      title: 'Trust Signal Review',
      desc: 'Evaluate author authority, citations, E-E-A-T signals, and transparency elements that build credibility.',
      color: '#10b981',
    },
    {
      icon: ListChecks,
      title: 'Actionable Recommendations',
      desc: 'Every finding comes with a prioritized, plain-English fix you can implement inside WordPress immediately.',
      color: '#a78bfa',
    },
  ];

  return (
    <SectionWrapper id="features" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Core Features"
        title={
          <>
            Everything your website needs to win{' '}
            <span className="text-gradient-blue">modern search</span>
          </>
        }
        subtitle="Ten powerful audit modules work together to give you a complete picture of how your website performs across search, AI, and user experience."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 0.08}>
            <div className="glass-card glass-card-hover group relative h-full overflow-hidden rounded-2xl p-6">
              {/* Hover gradient */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: feature.color }}
              />
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                <feature.icon
                  className="h-6 w-6"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ============================================================================
// 5. HOW IT WORKS SECTION
// ============================================================================

function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Install SXO Master on WordPress',
      desc: 'Upload and activate the plugin in seconds. No coding, no complex setup — it connects to your WordPress site instantly.',
      color: '#3b82f6',
    },
    {
      number: '02',
      icon: ScanLine,
      title: 'Scan your website or page',
      desc: 'Run a full-site audit or scan a single draft. SXO Master analyzes SEO, AI readiness, UX, content clarity, and technical signals.',
      color: '#8b5cf6',
    },
    {
      number: '03',
      icon: ListChecks,
      title: 'Get actionable recommendations',
      desc: 'Receive clear, prioritized SXO, SEO, AI, and UX fixes you can implement inside WordPress — no guesswork required.',
      color: '#10b981',
    },
  ];

  return (
    <SectionWrapper id="how-it-works" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            From install to insights in{' '}
            <span className="text-gradient-cyan">three steps</span>
          </>
        }
        subtitle="No steep learning curve. No need to juggle five different tools. SXO Master gets you from audit to action faster than any traditional SEO workflow."
      />

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-green-500/0 lg:block" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15}>
              <div className="relative">
                <div className="glass-card glass-card-hover group relative h-full rounded-2xl p-8">
                  {/* Step number */}
                  <div
                    className="mb-6 flex items-center justify-between"
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${step.color}15`,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      <step.icon
                        className="h-7 w-7"
                        style={{ color: step.color }}
                      />
                    </div>
                    <span
                      className="text-5xl font-bold opacity-20"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-6 w-6 text-slate-600" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="btn-gradient h-12 rounded-xl px-8 text-white"
          >
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              <Rocket className="h-4 w-4" />
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

// (Benefits section removed — overlaps with Core Features)

function BenefitsSectionUnused() {
  const benefits = [
    {
      icon: Eye,
      title: 'Improve Website Clarity',
      desc: 'Make your content easier to scan, read, and understand — for humans and machines alike.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Search Visibility',
      desc: 'Strengthen the signals that help your pages rank higher and appear in rich results.',
    },
    {
      icon: Bot,
      title: 'Prepare Content for AI Search',
      desc: 'Structure your content so AI engines can extract, cite, and recommend it with confidence.',
    },
    {
      icon: HeartHandshake,
      title: 'Improve User Experience',
      desc: 'Remove friction, improve layout, and guide visitors toward the actions that matter.',
    },
    {
      icon: Target,
      title: 'Find Conversion Gaps',
      desc: 'Spot exactly where and why visitors drop off — and what to fix to recover lost revenue.',
    },
    {
      icon: ShieldCheck,
      title: 'Strengthen Website Trust',
      desc: 'Build E-E-A-T signals, author authority, and credibility that both users and engines reward.',
    },
    {
      icon: Clock,
      title: 'Save Time on Manual Audits',
      desc: 'Replace hours of spreadsheet audits with a single scan that covers everything at once.',
    },
    {
      icon: LayoutDashboard,
      title: 'Recommendations Inside WordPress',
      desc: 'No more switching between tabs. Every fix lives right where your content does.',
    },
  ];

  return (
    <SectionWrapper id="benefits" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Why Use SXO Master"
        title={
          <>
            Real outcomes, not just{' '}
            <span className="text-gradient-blue">vanity metrics</span>
          </>
        }
        subtitle="SXO Master doesn't just show you numbers. It helps you improve the metrics that actually move traffic, trust, and revenue."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <Reveal key={benefit.title} delay={(i % 4) * 0.06}>
            <div className="group relative h-full">
              <div className="glass-card glass-card-hover h-full rounded-2xl p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {benefit.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ============================================================================
// 7. SCREENSHOT SHOWCASE SECTION
// ============================================================================

function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);

  const screenshots = [
    {
      title: 'Plugin Dashboard',
      desc: 'Get a bird&apos;s-eye view of your site&apos;s SXO health — audited pages, average scores, pages needing work, and last scan activity.',
      image: '/screenshots/dashboard.png',
      badge: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Content Scan & Scoring',
      desc: 'Run keyword-targeted content scans with real-time AEO, SEO, AIO, GEO, and SXO scoring rings — plus an instant publish-ready verdict.',
      image: '/screenshots/content-scan.png',
      badge: 'Content Scan',
      icon: ScanLine,
    },
    {
      title: 'Strengths & Opportunities',
      desc: 'See exactly what your content is doing right — from title length and keyword density to structured data signals and answer patterns.',
      image: '/screenshots/strengths.png',
      badge: 'Strengths',
      icon: CheckCircle2,
    },
    {
      title: 'Audit Report & Issues',
      desc: 'Critical, moderate, and minor issues grouped by category — each with a clear, actionable fix you can implement immediately.',
      image: '/screenshots/audit-results.png',
      badge: 'Audit Report',
      icon: FileSearch,
    },
  ];

  return (
    <SectionWrapper id="showcase" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Product Showcase"
        title={
          <>
            See <span className="text-gradient-blue">SXO Master</span> in action
          </>
        }
        subtitle="Real screenshots from the plugin. Real audit data. Real recommendations. This is what your WordPress dashboard looks like with SXO Master installed."
      />

      {/* Tab selector */}
      <Reveal>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {screenshots.map((screenshot, i) => (
            <button
              key={screenshot.title}
              onClick={() => setActiveTab(i)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                activeTab === i
                  ? 'btn-gradient text-white shadow-lg shadow-blue-500/20'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <screenshot.icon className="h-4 w-4" />
              {screenshot.badge}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Active screenshot */}
      <Reveal delay={0.1}>
        <div className="relative mx-auto max-w-5xl">
          {/* Glow */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-2xl" />

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl"
          >
            {/* Browser frame */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-[#1e293b]/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md bg-[#0f172a] px-4 py-1 text-xs text-slate-500">
                <ShieldCheck className="h-3 w-3 text-green-500" />
                SXO Master — {screenshots[activeTab].badge}
              </div>
            </div>

            {/* Image */}
            <div className="relative bg-[#0f172a]">
              <img
                src={screenshots[activeTab].image}
                alt={screenshots[activeTab].title}
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-white">
              {screenshots[activeTab].title}
            </h3>
            <p
              className="mx-auto mt-2 max-w-2xl text-sm text-slate-400"
              dangerouslySetInnerHTML={{ __html: screenshots[activeTab].desc }}
            />
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

// ============================================================================
// 8. WHO IT IS FOR SECTION
// ============================================================================

function WhoIsItForSection() {
  const audiences = [
    {
      icon: Building2,
      title: 'WordPress Website Owners',
      desc: 'Take control of your site&apos;s performance without hiring an agency for every audit.',
    },
    {
      icon: Search,
      title: 'SEO Professionals',
      desc: 'Go beyond keywords and backlinks with a complete search experience audit.',
    },
    {
      icon: Users,
      title: 'Marketing Agencies',
      desc: 'Deliver client audits faster, with clearer reports and actionable next steps.',
    },
    {
      icon: Rocket,
      title: 'SaaS Founders',
      desc: 'Make sure your product pages rank, read well, and convert visitors into users.',
    },
    {
      icon: Store,
      title: 'Ecommerce Brands',
      desc: 'Optimize product pages for search, AI tools, and conversion — all at once.',
    },
    {
      icon: PenTool,
      title: 'Bloggers & Publishers',
      desc: 'Get your content cited by AI engines and recommended in search results.',
    },
    {
      icon: MapPin,
      title: 'Local Businesses',
      desc: 'Win local search and AI-powered map results with clean, structured content.',
    },
    {
      icon: Target,
      title: 'Conversion-Focused Teams',
      desc: 'Turn traffic into revenue by fixing the UX and CRO gaps your site is hiding.',
    },
  ];

  return (
    <SectionWrapper id="who-for" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Who It&apos;s For"
        title={
          <>
            Built for everyone who cares about{' '}
            <span className="text-gradient-cyan">search growth</span>
          </>
        }
        subtitle="Whether you manage one website or a hundred, SXO Master adapts to your workflow and helps you ship improvements faster."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience, i) => (
          <Reveal key={audience.title} delay={(i % 4) * 0.06}>
            <div className="glass-card glass-card-hover group h-full rounded-2xl p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <audience.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {audience.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-slate-400"
                dangerouslySetInnerHTML={{ __html: audience.desc }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

// (Why Built section removed — founder info moved to footer)

function WhyBuiltSectionUnused() {
  return (
    <SectionWrapper id="why-built" className="py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-[#0f172a] to-purple-950/30 p-8 sm:p-12 lg:p-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-blue-600/10 blur-[80px]" />
          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-purple-600/10 blur-[80px]" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-300">
                <Star className="h-3.5 w-3.5" />
                Why We Built It
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Growth happens where{' '}
                <span className="text-gradient-blue">
                  psychology, design, and technology
                </span>{' '}
                meet.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-slate-400">
                SitesBrand believes that real growth doesn&apos;t come from
                chasing vanity traffic. It comes from improving the full journey
                — from search visibility to user trust to conversion. SXO Master
                was built to help brands stop guessing and start optimizing the
                experience that actually drives results.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Powered by SitesBrand&apos;s hands-on experience in SEO, AI
                search optimization, design, automation, and growth systems, SXO
                Master packages everything we&apos;ve learned into a single
                WordPress plugin.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
                  HS
                </div>
                <div>
                  <p className="font-semibold text-white">Hassam Shabbir</p>
                  <p className="text-sm text-slate-400">
                    Founder &amp; CEO, SitesBrand
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Philosophy pillars */}
          <Reveal delay={0.2}>
            <div className="grid gap-4">
              {[
                {
                  icon: Brain,
                  title: 'Psychology',
                  desc: 'Understand how users think, decide, and trust.',
                  color: '#8b5cf6',
                },
                {
                  icon: PenTool,
                  title: 'Design',
                  desc: 'Build experiences that feel clear, premium, and intentional.',
                  color: '#06b6d4',
                },
                {
                  icon: Cpu,
                  title: 'Technology',
                  desc: 'Use AI and automation to audit and improve at scale.',
                  color: '#3b82f6',
                },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      border: `1px solid ${pillar.color}30`,
                    }}
                  >
                    <pillar.icon
                      className="h-6 w-6"
                      style={{ color: pillar.color }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{pillar.title}</h3>
                    <p className="text-sm text-slate-400">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ============================================================================
// 10. COMPARISON SECTION
// ============================================================================

function ComparisonSection() {
  const traditionalFeatures = [
    'Focuses mostly on keyword rankings',
    'Limited UX review',
    'Manual, time-consuming checks',
    'Little to no AI-readiness focus',
    'Hard to connect traffic with conversion',
    'Requires multiple disconnected tools',
  ];

  const sxoFeatures = [
    'SEO + UX + CRO + AI visibility in one audit',
    'Actionable WordPress recommendations',
    'Better content clarity scoring',
    'AI and GEO readiness built in',
    'Conversion-focused insights',
    'Built for modern search journeys',
  ];

  return (
    <SectionWrapper id="comparison" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Comparison"
        title={
          <>
            Traditional SEO vs{' '}
            <span className="text-gradient-blue">SXO Master</span>
          </>
        }
        subtitle="SEO got you here. SXO takes you further. See how the old way compares to the complete search experience approach."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Traditional SEO */}
        <Reveal>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/10 ring-1 ring-slate-500/20">
                <AlertTriangle className="h-6 w-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-300">
                  Traditional SEO
                </h3>
                <p className="text-sm text-slate-500">The old way</p>
              </div>
            </div>
            <div className="space-y-3">
              {traditionalFeatures.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400/70" />
                  <span className="text-sm text-slate-400">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SXO Master */}
        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-purple-950/20 p-8">
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-600/15 blur-[80px]" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SXO Master</h3>
                  <p className="text-sm text-blue-300">The complete way</p>
                </div>
              </div>
              <div className="space-y-3">
                {sxoFeatures.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="btn-gradient h-11 w-full rounded-xl text-white"
                >
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Rocket className="h-4 w-4" />
                    Get Early Access
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

// (Free Audit CTA section removed — merged into Early Access section)

function FreeAuditCTASectionUnused() {
  return (
    <SectionWrapper className="py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-950/30 via-[#0f172a] to-blue-950/30 p-8 text-center sm:p-12 lg:p-16">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[100px]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-green-300">
              <Search className="h-3.5 w-3.5" />
              Free Website Audit
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Not sure where your website stands?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Get a free SitesBrand audit. We check your SEO, page speed,
              design quality, and AI visibility using real data — no fluff, no
              commitment.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-14 w-full rounded-xl px-8 text-base font-semibold text-white sm:w-auto"
              >
                <a
                  href={FREE_AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Search className="h-5 w-5" />
                  Get a Free Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                SEO analysis
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Speed check
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Design review
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                AI visibility
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

// ============================================================================
// 12. EARLY ACCESS / CONTACT SECTION
// ============================================================================

function EarlyAccessSection() {
  return (
    <SectionWrapper id="contact" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Get Started"
        title={
          <>
            Ready to <span className="text-gradient-blue">level up</span> your
            website?
          </>
        }
        subtitle="Whether you want early access, plugin pricing, a live demo, a partnership, or support — we're here to help you get the most out of SXO Master."
      />

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Get Early Access */}
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-6 text-center"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-opacity group-hover:opacity-40" />
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-500/30">
                <Rocket className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Get Early Access</h3>
              <p className="text-xs text-slate-400">
                Be first to use SXO Master
              </p>
              <ArrowUpRight className="mx-auto mt-3 h-4 w-4 text-blue-400" />
            </a>

            {/* Buy / Request Pricing */}
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-6 text-center"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 ring-1 ring-purple-500/30">
                <Store className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Buy / Request Pricing
              </h3>
              <p className="text-xs text-slate-400">
                Get license &amp; pricing details
              </p>
              <ArrowUpRight className="mx-auto mt-3 h-4 w-4 text-purple-400" />
            </a>

            {/* Contact SitesBrand */}
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-6 text-center"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-500/30">
                <MessageSquare className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Contact SitesBrand
              </h3>
              <p className="text-xs text-slate-400">Talk to our team</p>
              <ArrowUpRight className="mx-auto mt-3 h-4 w-4 text-cyan-400" />
            </a>
          </div>
        </Reveal>

        {/* Email contact options */}
        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${INFO_EMAIL}`}
              className="glass-card glass-card-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-500/30">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500">For product queries</p>
                <p className="truncate font-medium text-white">{INFO_EMAIL}</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-500" />
            </a>

            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="glass-card glass-card-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 ring-1 ring-green-500/30">
                <HeartHandshake className="h-5 w-5 text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500">For support</p>
                <p className="truncate font-medium text-white">
                  {SUPPORT_EMAIL}
                </p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-500" />
            </a>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

// ============================================================================
// 13. FAQ SECTION
// ============================================================================

function FAQSection() {
  const faqs = [
    {
      q: 'What is SXO Master?',
      a: 'SXO Master is a WordPress plugin and audit tool that analyzes and improves your website for Search Experience Optimization — covering SEO, UX, CRO, AI visibility, GEO/AIO readiness, content structure, technical signals, and page experience in a single dashboard.',
    },
    {
      q: 'Is SXO Master only for SEO?',
      a: 'No. While SEO is a core part, SXO Master goes further to cover user experience, conversion optimization, AI search readiness, content clarity, trust signals, and technical performance. It\u2019s a complete search experience audit, not just an SEO checker.',
    },
    {
      q: 'Does it work with WordPress?',
      a: 'Yes. SXO Master is built as a native WordPress plugin. You install it directly in your WordPress admin, scan your pages, and get actionable recommendations right inside your dashboard — no external tools or coding required.',
    },
    {
      q: 'Can agencies use it for client audits?',
      a: 'Absolutely. Agencies can use SXO Master to run fast, comprehensive audits across client sites, deliver clear reports, and implement recommendations efficiently. It\u2019s built to support multi-site and agency workflows.',
    },
    {
      q: 'Does it help with AI search visibility?',
      a: 'Yes. SXO Master includes dedicated AIO (AI Optimization) and GEO (Generative Engine Optimization) scoring. It checks whether your content is structured for AI search engines like ChatGPT, Perplexity, and Google AI Overviews to parse, extract, and cite.',
    },
    {
      q: 'Is it beginner-friendly?',
      a: 'Yes. Every finding comes with a plain-English explanation and an actionable fix. You don\u2019t need to be an SEO expert or developer to understand and implement the recommendations SXO Master provides.',
    },
    {
      q: 'How can I get early access?',
      a: 'Click any \u201CGet Early Access\u201D button on this page to go to the SitesBrand contact page. Tell us about your site and goals, and we\u2019ll get you set up with early access to SXO Master.',
    },
    {
      q: 'How do I contact support?',
      a: 'For product queries, email info@sitesbrand.com. For technical support, email support@sitesbrand.xyz. You can also use the contact options on this page to reach the SitesBrand team directly.',
    },
  ];

  return (
    <SectionWrapper id="faq" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Frequently asked{' '}
            <span className="text-gradient-blue">questions</span>
          </>
        }
        subtitle="Everything you need to know about SXO Master. Can&apos;t find an answer? Reach out to our team — we&apos;re happy to help."
      />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            defaultValue="item-0"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card overflow-hidden rounded-xl border-white/10 px-5 last:border-b"
              >
                <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

// ============================================================================
// 14. FINAL CTA SECTION
// ============================================================================

function FinalCTASection() {
  return (
    <SectionWrapper className="py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/50 via-[#0f172a] to-purple-950/40 p-8 text-center sm:p-12 lg:p-20">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
            <div className="absolute right-1/4 bottom-0 h-60 w-60 rounded-full bg-purple-600/15 blur-[80px]" />
            <div className="absolute left-1/4 bottom-1/3 h-60 w-60 rounded-full bg-cyan-500/10 blur-[80px]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Start Today
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Build a website that{' '}
              <span className="text-gradient-blue">search engines understand</span>
              ,{' '}
              <span className="text-gradient-cyan">AI tools can read</span>, and
              real users can{' '}
              <span className="text-gradient-blue">trust</span>.
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Join the brands optimizing for the complete search experience.
              Your free audit takes minutes — your results last for years.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-14 w-full rounded-xl px-8 text-base font-semibold text-white sm:w-auto"
              >
                <a
                  href={FREE_AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Search className="h-5 w-5" />
                  Get a Free Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-xl border-white/15 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rocket className="h-5 w-5" />
                  Get Early Access
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

// ============================================================================
// NAVBAR
// ============================================================================

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0a0f1e]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
            <span className="text-base font-bold text-white">S</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">SXO Master</span>
            <span className="hidden text-xs text-slate-500 sm:inline">
              by SitesBrand
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            { label: 'Features', href: '#features' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Showcase', href: '#showcase' },
            { label: 'Comparison', href: '#comparison' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden text-slate-300 hover:bg-white/5 hover:text-white sm:inline-flex"
          >
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="btn-gradient h-9 rounded-lg px-4 text-white"
          >
            <a href={FREE_AUDIT_URL} target="_blank" rel="noopener noreferrer">
              <Search className="h-4 w-4" />
              Free Audit
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// FOOTER
// ============================================================================

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0a0f1e]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
                <span className="text-base font-bold text-white">S</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-white">SXO Master</span>
                <span className="text-xs text-slate-500">by SitesBrand</span>
              </div>
            </a>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              The WordPress plugin for Search Experience Optimization. Improve
              SEO, AI visibility, user experience, content clarity, and
              conversion readiness — all in one dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['AI-Powered', 'SEO-Ready', 'WordPress Plugin', 'SXO-Focused'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Comparison
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Get Started</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={FREE_AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Get a Free Audit
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Get Early Access
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${INFO_EMAIL}`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {INFO_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://sitesbrand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  sitesbrand.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SitesBrand. All rights reserved.
            Founded by Hassam Shabbir — Psychology, Design &amp; Technology.
          </p>
          <p className="text-sm text-slate-500">
            Built for modern search journeys
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function Home() {
  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-x-hidden"
    >
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ShowcaseSection />
        <ProblemSection />
        <CoreFeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <WhoIsItForSection />
        <EarlyAccessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
