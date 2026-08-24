"use client";

import Link from "next/link";
import { HeartPulse, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Services", "/services"], ["Our doctors", "/doctors"], ["Visit us", "/contact"], ["About", "/about"]];

export default function SiteHeader({ action = true }) {
  const [open, setOpen] = useState(false);

  return <>
    <div className="bg-[#102a43] px-5 py-2 text-center text-[11px] font-medium tracking-wide text-white sm:text-xs">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#73d5ba]" />
      <span>Appointments available this week</span>
      <Link href="/doctors" className="ml-2 underline underline-offset-2">Find your care team</Link>
    </div>
    <header className="relative z-20 border-b border-[#edf2f3] bg-[#f7fbfc]">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087ea4] text-white"><HeartPulse size={19} strokeWidth={2.5}/></span>
          <span className="whitespace-nowrap text-[17px] font-semibold tracking-[-.03em] text-[#102a43]">CareFirst <span className="font-normal text-[#627d98]">Medical Center</span></span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-7 text-sm font-medium text-[#486581] lg:flex xl:gap-9">
          {links.map(([label, href]) => <Link href={href} key={label} className="whitespace-nowrap transition-colors hover:text-[#087ea4]">{label}</Link>)}
        </nav>
        {action && <div className="hidden shrink-0 items-center gap-5 md:flex">
          <Link href="/auth/signin" className="whitespace-nowrap text-sm font-semibold text-[#102a43] transition-colors hover:text-[#087ea4]">Patient portal</Link>
          <Link href="/contact" className="whitespace-nowrap rounded-full bg-[#087ea4] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#076b8b]">Book an appointment</Link>
        </div>}
        <button aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-[#102a43] transition hover:bg-[#dff5ee] md:hidden">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && <div className="border-t border-[#d9e8ed] bg-white px-5 py-5 shadow-lg md:hidden"><nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1240px] flex-col gap-1 text-sm font-semibold text-[#102a43]">{links.map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={label} className="rounded-lg px-3 py-3 transition hover:bg-[#eff7f7]">{label}</Link>)}<Link href="/auth/signin" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-[#eff7f7] px-3 py-3 text-[#087ea4]">Patient portal</Link><Link href="/contact" onClick={() => setOpen(false)} className="rounded-full bg-[#087ea4] px-4 py-3 text-center text-white">Book an appointment</Link></nav></div>}
    </header>
  </>;
}
