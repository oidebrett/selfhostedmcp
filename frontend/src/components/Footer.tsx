import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Props {}

export function Footer({}: Props) {
  // Placeholders - Replace with actual data
  const GITHUB_URL = "https://github.com/oidebrett/mcpauth";
  const CONTACT_EMAIL = "testerformcp@gmail.com";
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black border-t border-neutral-800 text-neutral-400 py-12 md:py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Branding & Copyright */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white">SelfHostedMCP</h3>
          <p className="text-sm text-center md:text-left">
            Building secure, self-hosted MCP integrations with open-source components.
          </p>
          <p className="text-xs">&copy; {CURRENT_YEAR} SelfHostedMCP. All rights reserved.</p>
        </div>

        {/* Column 2: Links & Contact */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-neutral-300">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors flex items-center"
              >
                <Github className="w-4 h-4 mr-2" /> GitHub Repository
              </a>
            </li>
            {/* Add more links here if needed (e.g., Documentation) */}
          </ul>
        </div>

        {/* Column 3: Newsletter Signup */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
        <h4 className="font-semibold text-neutral-300 pt-4">Contact</h4>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm hover:text-white transition-colors block"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
