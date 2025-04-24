import React from "react";
import { NavigationBar } from "components/NavigationBar";
import { WhyMCPGatewaySection } from "components/WhyMCPGatewaySection";
import { ReferenceArchitectureSection } from "components/ReferenceArchitectureSection"; // Import the new section
import { ThreatModelTable } from "components/ThreatModelTable";
import { Footer } from "components/Footer";
import { AuthOffloadSection } from "components/AuthOffloadSection"; // Import the Auth Offload section
import { IntegrationStepsSection } from "components/IntegrationStepsSection"; // Import the Integration Steps section
import { Button } from "@/components/ui/button"; // Import Button for CTA

// Function to handle smooth scrolling (can be moved to utils if reused)
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Placeholder section for scrolling targets - REMOVED as it's replaced by actual sections
/*
const Section = ({ id, title, height = "500px" }: { id: string, title: string, height?: string }) => (
  <div id={id} style={{ height: height, paddingTop: "80px" }} className="border-t border-neutral-700 p-8">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <p className="text-neutral-400">Content for {title} section goes here...</p>
  </div>
);
*/

// URL for the uploaded image
const HERO_IMAGE_URL = "/images/hero-image.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavigationBar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section (MYA-2) */}
        <section id="hero" className="bg-gradient-to-b from-neutral-950 to-black py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Secure Your Self-Hosted MCP Servers:
                <br className="hidden md:block" />
                <span className="text-blue-400">The Free, Open Source MCP Gateway</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-8">
                Deploy a robust, enterprise-ready MCP Gateway using pre-integrated open-source components. Take control of your AI infrastructure security, completely free.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-150"
                onClick={() => scrollToSection("architecture")} // Scroll to Architecture section
              >
                View Architecture Diagram
              </Button>
            </div>

            {/* Right Side: Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={HERO_IMAGE_URL}
                alt="3D Isometric Diagram of the Secure MCP Gateway Architecture"
                className="rounded-lg shadow-2xl max-w-full h-auto md:max-w-lg lg:max-w-xl border-2 border-neutral-700"
              />
            </div>
          </div>
        </section>

        {/* Why MCP Gateway Section (MYA-3) */}
        <WhyMCPGatewaySection />

        {/* Auth Offload Section */}
        <AuthOffloadSection />

        {/* Integration Steps Section (MYA-6) */}
        <IntegrationStepsSection />

        {/* Reference Architecture Section (MYA-4) */}
        <ReferenceArchitectureSection />

        {/* Threat Model Table Section (MYA-5) */}
        <ThreatModelTable />

        {/* Other sections from tasks MYA-4, MYA-6, MYA-7 will go here */}

      </main>

      {/* Footer (MYA-8) */}
      <Footer />
    </div>
  );
}
