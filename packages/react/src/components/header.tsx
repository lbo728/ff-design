import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ff-design/react/components/navigationMenu";
import { cn } from "@ff-design/react/lib/utils";
import { HeartIcon, UserIcon, MenuIcon } from "@ff-design/react";
import { SearchBar } from "./searchBar";

interface NavigationItem {
  label: string;
  href?: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}

interface HeaderProps {
  className?: string;
  logo?: string;
  navigationItems?: NavigationItem[];
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header({ className, logo, navigationItems }: HeaderProps) {
  const defaultNavigationItems: NavigationItem[] = [
    {
      label: "New Arrival",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Best",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Men",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Women",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Kids",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Sport",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
  ];

  const items = navigationItems || defaultNavigationItems;

  return (
    <div
      className={cn(
        "header-container flex flex-row items-center justify-center w-full h-[72px] px-[48px] py-[12px] bg-white border-b border-gray-200",
        className
      )}
    >
      <div className="header-inner flex flex-row items-center justify-between w-full max-w-[1824px] h-full px-0">
        <div className="header-left flex flex-row items-center h-full gap-[120px]">
          {logo && (
            <img src={logo} alt="logo-flux" className="w-[74px] h-[28px]" />
          )}
          <NavigationMenu viewport={false} className="hidden md:block">
            <NavigationMenuList className="flex flex-row items-center gap-4">
              {items.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    {item.label}
                  </NavigationMenuTrigger>
                  {item.items && item.items.length > 0 && (
                    <NavigationMenuContent>
                      <ul className="grid gap-2 w-[280px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {item.items.map((subItem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            href={subItem.href}
                            title={subItem.title}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="header-right flex flex-row items-center gap-2">
          <SearchBar className="w-[240px] bg-gray-100 rounded-full py-2" />
          <div className="hidden md:flex flex-row items-center gap-2">
            <div className="header-icon-container w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-gray-50 rounded-full transition-colors">
              <HeartIcon className="w-5 h-5 stroke-[1.5px] stroke-black" />
            </div>
            <div className="header-icon-container w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-gray-50 rounded-full transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>

          <div className="md:hidden">
            <div className="header-icon-container w-10 h-10 flex justify-center items-center">
              <MenuIcon className="w-5 h-5 cursor-pointer stroke-[1.5px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
