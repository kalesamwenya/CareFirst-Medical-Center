import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

const team = [
  ["Maya Patel", "MD, MPH", "Chief Medical Officer", "Primary care & preventive medicine", "photo-1559839734-2b71ea197ec2"],
  ["Elias Morgan", "MD, FACC", "Director of Cardiology", "Heart & vascular care", "photo-1612349317150-e413f6a5b16d"],
  ["Sofia Chen", "MD, FACOG", "Women's Health Lead", "Women's health & wellness", "photo-1594824476967-48c8b964273f"],
  ["James Okafor", "MD, FAAOS", "Director of Orthopedics", "Movement & recovery", "photo-1622253692010-333f2da6031d"],
];

const principles = [
  [HeartHandshake, "Care that listens", "We start with your story, because the best care plan is one that fits your real life."],
  [ShieldCheck, "Trust by design", "Your privacy, clarity, and safety are part of every decision we make."],
  [Sparkles, "Always improving", "We bring together proven medicine, thoughtful technology, and a curious spirit."],
];

export default function About() {
  return <main className="bg-[#f7fbfc] text-[#102a43]">
    <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div><div className="eyebrow">About CareFirst</div><h1 className="serif mt-5 max-w-[760px] text-[clamp(3.5rem,7vw,7rem)] leading-[.92] tracking-[-.05em]">Health care with<br /><em className="text-[#087ea4]">more humanity.</em></h1></div>
        <div className="border-l border-[#d9e8ed] pl-6 lg:mb-2"><p className="text-lg leading-8 text-[#627d98]">CareFirst was built around a simple belief: excellent medicine should make people feel more seen, not more like a number.</p><p className="mt-5 text-sm leading-7 text-[#627d98]">Since 2011, we have brought primary and specialty care together under one roof, making it easier to get answers, make decisions, and move forward with confidence.</p></div>
      </div>
      <div className="mt-16 h-[360px] overflow-hidden rounded-[2rem] bg-[#d9e8e5] sm:h-[500px]"><div className="h-full bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=85')] bg-cover bg-center" /></div>
    </section>

    <section className="border-y border-[#d9e8ed] bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow">What guides us</div><h2 className="serif mt-4 text-5xl leading-none tracking-[-.04em]">The way care<br /><em className="text-[#087ea4]">should feel.</em></h2></div><div className="grid gap-8 sm:grid-cols-3">{principles.map(([Icon, title, text]) => <article key={title}><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dff5ee] text-[#087ea4]"><Icon size={22} strokeWidth={1.7}/></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#627d98]">{text}</p></article>)}</div></div></section>

    <section className="grid-lines bg-[#eff7f7] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1fr_1fr]"><div><div className="eyebrow">A connected team</div><h2 className="serif mt-4 text-5xl leading-[1.02] tracking-[-.04em]">Good care is<br /><span className="text-[#087ea4]">a team sport.</span></h2><p className="mt-6 max-w-[440px] text-base leading-7 text-[#627d98]">Our doctors, nurses, specialists, and care coordinators share one goal: making your next step feel clear. You never have to navigate your health alone.</p></div><div className="grid grid-cols-2 gap-4"><div className="rounded-2xl bg-[#102a43] p-6 text-white"><UsersRound className="text-[#73d5ba]" size={25}/><strong className="serif mt-10 block text-4xl">180+</strong><span className="mt-2 block text-xs text-white/60">care team members</span></div><div className="mt-8 rounded-2xl bg-white p-6 shadow-sm"><strong className="serif block text-4xl text-[#087ea4]">35+</strong><span className="mt-2 block text-xs text-[#627d98]">medical specialties</span></div><div className="-mt-8 rounded-2xl bg-white p-6 shadow-sm"><strong className="serif block text-4xl text-[#087ea4]">12k</strong><span className="mt-2 block text-xs text-[#627d98]">patients supported</span></div><div className="rounded-2xl bg-[#73d5ba] p-6"><strong className="serif block text-4xl text-[#102a43]">14 yrs</strong><span className="mt-2 block text-xs text-[#102a43]/65">serving Portland</span></div></div></div></section>

    <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="eyebrow">Meet the people</div><h2 className="serif mt-4 text-5xl tracking-[-.04em]">The faces of CareFirst.</h2></div><Link href="/doctors" className="flex items-center gap-2 text-sm font-semibold text-[#087ea4]">See all doctors <ArrowRight size={16}/></Link></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{team.map(([name, credential, role, specialty, image]) => <article key={name}><div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#d9e8e5]"><div className="h-full bg-cover bg-center transition duration-500 hover:scale-105" style={{ backgroundImage: `url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=600&q=85)` }}/></div><p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#087ea4]">{role}</p><h3 className="mt-2 text-lg font-semibold">Dr. {name}</h3><p className="mt-1 text-xs text-[#627d98]">{credential} · {specialty}</p></article>)}</div></section>

    <section className="bg-[#102a43] px-5 py-16 text-white lg:px-8"><div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><div className="eyebrow text-[#73d5ba]">Come see us</div><h2 className="serif mt-3 text-4xl">Your care team is here.</h2></div><Link href="/contact" className="flex w-fit items-center gap-3 rounded-full bg-[#73d5ba] px-6 py-4 text-sm font-semibold text-[#102a43]">Start a conversation <ArrowRight size={17}/></Link></div></section>
  </main>;
}
