import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Youtube, Server, Globe, Network, Lock, TestTube, Settings, Route, CheckCircle, KeyRound, ShieldCheck, LinkIcon } from "lucide-react"; // Added Youtube, ShieldCheck, LinkIcon

// Placeholder - Ask user for the correct YouTube video URL
const YOUTUBE_VIDEO_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with actual video embed URL

const integrationSteps = [
  {
    title: "Provision the Base Environment",
    icon: Server,
    description: "Deploy an Ubuntu-based VPS and install Docker. Configure your root domain (e.g., selfhostedmcp.com) and point A records to your VPS IP.",
    links: []
  },
  {
    title: "Install Pangolin Gateway Stack",
    icon: Network,
    description: "Clone the ",
    links: [
        { text: "Pangolin repository", url: "https://github.com/fosrl/pangolin" },
    ],
    descriptionContinued: " and install its components. This sets up Traefik (reverse proxy), WireGuard (tunneling), and supporting services."
  },
  {
    title: "Create Secure Tunnel to MCP Servers",
    icon: Route,
    description: "Define a site and configure a WireGuard-based \"newt\" tunnel in Pangolin to securely connect local or remote MCP servers.",
    links: []
  },
  {
    title: "Deploy and Verify a Test MCP Server",
    icon: TestTube,
    description: "Use the sample MCP server for initial setup. Map a subdomain to the server via Pangolin and verify access using an MCP client like ",
    links: [
        { text: "MCP Inspector", url: "https://modelcontextprotocol.io/docs/tools/inspector" },
        { text: " or ", url: null}, // Separator text
        { text: "Cloudflare AI Playground", url: "https://playground.ai.cloudflare.com/" },
    ],
    descriptionContinued: "."
  },
   {
    title: "Configure Middleware for Optimal Security",
    icon: ShieldCheck,
    description: "Using the ",
    links: [
        { text: "Middleware-manager", url: "https://github.com/hhftechnology/middleware-manager.git" },
    ],
    descriptionContinued: ", configure your optimal security posture such as ",
    linksContinued: [
        { text: "Crowdsec Bouncer", url: "https://www.crowdsec.net/" },
        { text: " intrusion detection, Security headers and content policies, Geographic IP blocking, Rate Limiting and DDoS protection.", url: null },
    ]
  },
  {
    title: "Set Up OAuth2 Authentication",
    icon: Lock,
    description: "Register with an Identity Provider (e.g., Auth0, GitHub, Google) and configure the ",
     links: [
        { text: "MCPAuth component", url: "https://github.com/oidebrett/mcpauth.git" },
     ],
    descriptionContinued: " using your Client ID and Secret. Integrate with Traefik using ForwardAuth middleware.",
  },
  {
    title: "Launch Production MCP Services",
    icon: CheckCircle,
    description: "After successful authentication testing, deploy your production MCP servers behind the gateway with full authentication, tunneling, and intrusion detection enabled.",
    links: []
  },
];

export function IntegrationStepsSection() {
  return (
    <section id="integration-steps" className="py-16 md:py-24 bg-black text-neutral-300 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12 md:mb-16">
          {/* Updated Title */}
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            MCP Gateway Installation – DevOps Quick Guide
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-neutral-400 lg:mx-auto">
            Deploy your secure, self-hosted MCP Gateway efficiently using this guide.
          </p>
        </div>

        {/* Updated Steps Layout */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {integrationSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                 <step.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
              </div>
              <div className="flex-grow pt-1">
                 <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                 <p className="text-neutral-400">
                   {step.description}
                   {step.links?.map((link, linkIndex) => (
                     link.url ? (
                       <a
                         key={linkIndex}
                         href={link.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-blue-400 hover:text-blue-300 underline decoration-dotted underline-offset-2 transition-colors duration-150 mx-1"
                       >
                         {link.text} <LinkIcon className="inline h-3 w-3 ml-0.5"/>
                       </a>
                     ) : <span key={linkIndex}>{link.text}</span>
                   ))}
                   {step.descriptionContinued}
                    {step.linksContinued?.map((link, linkIndex) => (
                     link.url ? (
                       <a
                         key={linkIndex}
                         href={link.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-blue-400 hover:text-blue-300 underline decoration-dotted underline-offset-2 transition-colors duration-150 mx-1"
                       >
                         {link.text} <LinkIcon className="inline h-3 w-3 ml-0.5"/>
                       </a>
                     ) : <span key={linkIndex}>{link.text}</span>
                   ))}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Modal Button Placeholder */} 
        <div className="mt-16 text-center">
           <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Youtube className="mr-2 h-5 w-5" /> Watch Configuration Example
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl bg-neutral-900 border-neutral-700 text-white">
              <DialogHeader>
                <DialogTitle className="text-white">MCP Gateway Configuration Walkthrough</DialogTitle>
                <DialogDescription className="text-neutral-400">
                  This video demonstrates the complete setup process for a secure MCP Gateway.
                </DialogDescription>
              </DialogHeader>
              <div className="my-4 flex justify-center items-center bg-neutral-800 rounded p-4">
                <iframe 
                  src={YOUTUBE_VIDEO_EMBED_URL}
                  className="w-full aspect-video rounded border border-neutral-600" 
                  title="MCP Gateway Configuration Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary" className="bg-neutral-700 hover:bg-neutral-600 text-neutral-200">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
           <p className="mt-4 text-sm text-neutral-500">
            See a video walkthrough of the setup process.
          </p>
        </div>
      </div>
    </section>
  );
}
