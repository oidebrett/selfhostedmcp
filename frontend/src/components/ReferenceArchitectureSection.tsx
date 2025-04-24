import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {}

// URL for the uploaded architecture diagram
const ARCHITECTURE_DIAGRAM_URL = "/images/architecture-diagram-colors.png";

export function ReferenceArchitectureSection({}: Props) {
  return (
    <section id="architecture" className="py-16 md:py-24 bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16">
          Reference Architecture
        </h2>

        {/* Introduction */}
        <p className="text-lg text-center text-neutral-400 mb-12 max-w-3xl mx-auto">
          This diagram illustrates the high-level architecture of how the MCP Gateway acts as a central control point, connecting users and clients to backend MCP servers securely within your internal network.
        </p>

        {/* Architecture Diagram */}
        <div className="mb-16 flex justify-center">
          <img
            src={ARCHITECTURE_DIAGRAM_URL}
            alt="Reference Architecture Diagram for Secure MCP Gateway"
            className="rounded-lg shadow-xl max-w-full h-auto md:max-w-3xl border border-neutral-700 p-2" // Added bg-white and padding for better visibility if diagram has transparent background
          />
        </div>

        {/* Key Components Explanation (Placeholder) */}
        <h3 className="text-2xl font-semibold text-center text-white mb-10">
          Key Components & Flow
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Cards for component explanations */}
          <Card className="bg-neutral-900 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>User & MCP Client</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">Users interact via MCP Clients (e.g., Cursor, custom apps) which initiate requests.</p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>MCP Gateway</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">The central security and routing point. It intercepts all client requests.</p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>IdP Integration (OAuth2)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">Authenticates users/clients against your existing Identity Provider before granting access.</p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>Secure Tunnel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">Establishes encrypted connections (e.g., WireGuard) to backend servers, isolating them from direct exposure.</p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>Internal Network / MCP Servers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">Your private network where the actual MCP-enabled LLMs or services reside, protected by the gateway.</p>
            </CardContent>
          </Card>
           <Card className="bg-neutral-900 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>MCP Security Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-400">The gateway enforces Identity Access Control, Network Infrastructure Security, and Threat Detection & Response policies.</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
