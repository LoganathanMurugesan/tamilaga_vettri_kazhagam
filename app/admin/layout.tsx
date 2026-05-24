"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Image as ImageIcon,
  Newspaper,
  BarChart2,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminNav = [
  { href: "/admin", label: "Dashboard", Icon: LayoutDashboard },
  { href: "/admin/complaints", label: "Complaints", Icon: MessageSquare },
  { href: "/admin/updates", label: "Updates", Icon: Newspaper },
  { href: "/admin/gallery", label: "Gallery", Icon: ImageIcon },
  { href: "/admin/polls", label: "Polls", Icon: BarChart2 },
  { href: "/admin/volunteers", label: "Volunteers", Icon: Users },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className="w-60 shrink-0 hidden lg:flex flex-col"
        style={{ background: "#1a0505", borderRight: "1px solid #2a0a0a" }}
      >
        {/* Brand */}
        <div className="px-5 py-5 border-b" style={{ borderColor: "#2a0a0a" }}>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm"
              style={{ background: "#f3b316", color: "#8f0d0d" }}
            >
              TVK
            </div>
            <div className="text-white font-bold text-sm">Admin Panel</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {adminNav.map(({ href, label, Icon }) => {
            const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  active
                    ? "text-white font-bold"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                )}
                style={active ? { background: "#8f0d0d" } : {}}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t space-y-1" style={{ borderColor: "#2a0a0a" }}>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/5 transition-all"
          >
            <Settings size={16} />
            Settings
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/5 transition-all"
          >
            <LogOut size={16} />
            Exit to Public Site
          </Link>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div
          className="h-14 flex items-center px-6 border-b bg-white gap-4"
          style={{ borderColor: "#eadfda" }}
        >
          {/* Mobile nav hint */}
          <div className="flex gap-1 lg:hidden">
            {adminNav.slice(0, 4).map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <Icon size={18} style={{ color: "#8f0d0d" }} />
              </Link>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "#8f0d0d", color: "white" }}
            >
              A
            </div>
            <span className="text-sm font-medium hidden sm:block">Admin</span>
          </div>
        </div>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
