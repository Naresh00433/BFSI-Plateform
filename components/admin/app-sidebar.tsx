"use client";

import Link from "next/link";
import {
  Bank,
  Buildings,
  ChartBar,
  House,
  Megaphone,
  Package,
  Users,
  Wallet,
} from "@phosphor-icons/react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: House,
  },
  {
    title: "Banks",
    href: "/banks",
    icon: Bank,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Buildings,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Campaigns",
    href: "/campaigns",
    icon: Megaphone,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: Wallet,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: ChartBar,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <h2 className="text-xl font-bold">
          BFSI Platform
        </h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                render={
                  <Link href={item.href}>
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </Link>
                }
              />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}