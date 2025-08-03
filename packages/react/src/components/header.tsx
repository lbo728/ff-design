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
      label: "New Arrivals",
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
  ];

  const items = navigationItems || defaultNavigationItems;

  return (
    <div
      className={cn(
        "header-container flex flex-row items-center justify-between w-full  h-16 md:h-18 lg:h-[72px] px-4 md:px-6 lg:px-[48px] bg-white",
        className
      )}
    >
      <div className="header-inner flex flex-row items-center justify-between w-full max-w-full lg:max-w-[800px] h-full gap-2 md:gap-4 lg:gap-[">
        <div className="header-left flex flex-row items-center w-full h-full gap-2 md:gap-4 lg:gap-[48px]">
          {logo && (
            <img
              src={logo}
              alt="logo-flux"
              className="w-12 h-8 md:w-16 md:h-10 lg:w-[74px] lg:h-[28px]"
            />
          )}
          <NavigationMenu viewport={false} className="hidden md:block">
            <NavigationMenuList className="flex flex-col md:flex-row gap-1 md:gap-2 lg:gap-4">
              {items.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="text-sm md:text-base lg:text-base">
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
        <SearchBar className="w-48 md:w-56 lg:w-60" />
        <div className="flex flex-row items-center gap-1 md:gap-2 lg:gap-0">
          <div className="md:hidden">
            <div className="header-icon-container w-10 h-10 flex justify-center items-center">
              <MenuIcon className="w-5 h-5 cursor-pointer stroke-[1.5px]" />
            </div>
          </div>

          <div className="hidden md:flex flex-row items-center gap-2 lg:gap-0">
            <div className="header-icon-container w-12 h-12 lg:w-[48px] lg:h-[48px] flex justify-center items-center">
              <HeartIcon className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer stroke-[1.5px]" />
            </div>
            <div className="header-icon-container w-12 h-12 lg:w-[48px] lg:h-[48px] flex justify-center items-center">
              <UserIcon className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer stroke-[1.5px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
