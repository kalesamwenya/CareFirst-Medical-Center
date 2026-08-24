"use client";
import { usePathname } from "next/navigation";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
export default function SiteChrome({ children }) { const pathname = usePathname(); const isDashboard = pathname.startsWith("/dashboard"); const isAuth = pathname.startsWith("/auth"); return isDashboard || isAuth ? children : <><SiteHeader /><div className="site-content min-h-[calc(100vh-105px)]">{children}</div><SiteFooter /></>; }
