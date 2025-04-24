import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "utils/cn"; // Assuming cn utility exists for Tailwind class merging

interface Props {}

// Neo-brutalist glassmorphism navigation bar
export function NavigationBar({}: Props) {
  const navItems = [
    { name: "Open Source MCP Gateway", href: "#why" },
    { name: "Reference Architecture", href: "#architecture" },
    { name: "Threat Model", href: "#threat-model" },
    // Add other sections as needed
  ];

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full",
        "backdrop-filter backdrop-blur-lg bg-opacity-30", // Glassmorphism effect
        "border-b border-neutral-700/80", // Subtle border
        "bg-black" // Dark background for the nav bar itself
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Area */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl tracking-tight">
              Self Hosted MCP <span className="text-sm text-neutral-400 font-medium">- Free & Open Source</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-neutral-300 hover:bg-neutral-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden flex items-center">
            {/* TODO: Implement mobile menu (e.g., using Sheet component) */}
            <Button variant="ghost" className="text-neutral-300 hover:text-white">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
