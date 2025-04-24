import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, ShieldCheck, Network, Combine } from "lucide-react"; // Example icons

interface Props {}


export function WhyMCPGatewaySection({}: Props) {
  return (
    <section id="why" className="py-16 md:py-24 bg-black text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          The First Free, Fully Open Source MCP Gateway
        </h2>

        {/* Introduction */}
        <p className="text-lg text-center text-neutral-400 mb-12 md:mb-16 max-w-3xl mx-auto">
          Welcome to MCP Gateway: The world's pioneering 100% free, fully open-source blueprint for a Model Context Protocol (MCP) gateway. We provide guidance on integrating pre-selected, best-in-class open source components for easy deployment. Build a powerful, enterprise-grade secure gateway for your self-hosted AI integrations—entirely free.
        </p>

        {/* Existing content explaining *why* it's needed starts here */}
        <h3 className="text-2xl font-semibold text-center text-white mt-16 mb-10">Why Secure a Self-Hosted MCP Integration?</h3>

        <p className="text-lg text-center text-neutral-400 mb-12 max-w-3xl mx-auto">
            While MCP offers powerful capabilities, directly integrating Large Language Models exposes enterprises to significant security risks that a dedicated gateway architecture mitigates:
        </p>

        {/* Grid for Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Challenge 1: Direct Exposure */}
          <Card className="bg-neutral-900 border-neutral-700 text-white flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-red-400">
                <Terminal className="mr-2 h-5 w-5" /> Challenge: Infrastructure Exposure
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-neutral-400 mb-4">
                Exposing self-hosted MCP servers directly creates substantial attack surfaces. Sensitive data, internal models, and network segments become vulnerable to unauthorized access and attack.
              </p>
              {/* Replace PlaceholderVisual with the actual image */}
              <img 
                src="/images/without-wireguard.png"
                alt="Diagram showing insecure direct exposure of MCP Servers to the internet"
                className="rounded-md my-4 border border-neutral-700"
              />
              <Alert variant="destructive" className="bg-red-900/30 border-red-500/50 text-red-300 mt-auto">
                <AlertTitle>Critical Risk!</AlertTitle>
                <AlertDescription>
                  Direct exposure bypasses essential security controls, risking data breaches, model theft, and lateral movement within your network.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Solution 1: Secure Tunneling */}
          <Card className="bg-neutral-800/50 border-green-500/50 text-white flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <ShieldCheck className="mr-2 h-5 w-5"/> Solution: Secure Zero-Trust Tunneling
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <p className="text-neutral-300 mb-4">
                  The MCP Gateway employs WireGuard to establish secure, encrypted, zero-trust tunnels between the public-facing gateway and backend MCP servers. Your core infrastructure remains completely hidden and isolated.
                </p>
                {/* Replace PlaceholderVisual with the actual image */}
                <img 
                  src="/images/with-wireguard-secure.png"
                  alt="Diagram showing secure setup with MCP Gateway and encrypted tunnel"
                  className="rounded-md my-4 border border-neutral-700"
                />
              </div>
              <p className="text-sm text-neutral-400 mt-4">
                Only the hardened gateway endpoint is exposed, acting as a strictly controlled perimeter enforced by Traefik.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Other Challenges/Solutions */}
        <div className="space-y-12">
          <h3 className="text-2xl font-semibold text-center text-white mt-16 mb-10">Centralized Control & Defense</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Policy Enforcement */}
            <Card className="bg-neutral-900 border-neutral-700 text-white flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="mr-2 h-5 w-5 text-blue-400" /> Policy Enforcement
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                <p className="text-neutral-400 mb-4">
                  Managing security policies across distributed MCP servers is complex and error-prone. The gateway centralizes enforcement at the edge.
                </p>
                 
                 <p className="text-neutral-300 mt-4">
                  Leveraging Traefik as the reverse proxy, managed by tools like Pangolin and Middleware Manager, allows consistent application of authentication, authorization, rate limiting, and custom routing rules before traffic reaches any backend server.
                </p>
                </div>
              </CardContent>
            </Card>

            {/* Threat Detection */}
            <Card className="bg-neutral-900 border-neutral-700 text-white flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-yellow-400"/> Intrusion Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                <p className="text-neutral-400 mb-4">
                  Identifying and blocking malicious traffic targeting MCP endpoints requires dedicated security tooling integrated directly into the request path.
                </p>
                
                <p className="text-neutral-300 mt-4">
                  Integration with CrowdSec's security engine via Traefik middleware provides real-time IP reputation checking, behavioral analysis, and automated blocking of known attackers and suspicious activities, protecting all upstream services.
                </p>
                </div>
              </CardContent>
            </Card>

            {/* Simplified Integration */}
            <Card className="bg-neutral-900 border-neutral-700 text-white flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Combine className="mr-2 h-5 w-5 text-purple-400"/> Simplified Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                <p className="text-neutral-400 mb-4">
                  Providing secure, consistent access to various internal MCP models and applications for different teams can be challenging.
                </p>
                
                <p className="text-neutral-300 mt-4">
                  The gateway offers a unified, secure, and standardized entry point. Development teams interact with a single, well-defined interface, abstracting away the complexity of backend routing, security, and individual server configurations.
                </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
