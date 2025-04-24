import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Props {}

// Define the structure based on user's table
interface ComponentThreatEntry {
  component: string;
  mitigationFocus: string; // User's "Key Mitigation Focus"
  threatsAddressed: string[]; // User's "Specific Threats Addressed"
}

// Data based on user-provided Table 1
const componentThreats: ComponentThreatEntry[] = [
  {
    component: "OAuth2 Auth Gateway",
    mitigationFocus:
      "Enhanced OAuth 2.0+ Implementation, Strong Client/User Authentication, Fine-Grained Scoped Tokens, Sender-Constrained Tokens, JIT Access, Continuous Validation",
    threatsAddressed: [
      "Identity/Access Control Subversion",
      "Unauthorized Access",
    ],
  },
  {
    component: "WireGuard Tunnels / ZTA",
    mitigationFocus:
      "Network Segmentation, End-to-End Encryption, Service Mesh (conceptual equivalent via tunnel policy), Assume No Implicit Trust",
    threatsAddressed: [
      "Data Exfiltration",
      "Server Spoofing (prevents direct access)",
      "C2 Channels (limits egress)",
      "Host System Compromise (limits lateral movement)",
    ],
  },
  {
    component: "Security Proxy (Traefik)",
    mitigationFocus:
      "Application Gateway Controls, Rate-Limiting, Protocol Validation",
    threatsAddressed: [
      "Denial of Service",
      "Basic Protocol Abuse / Malformed Requests",
    ],
  },
  {
    component: "WAF / CrowdSec Middleware",
    mitigationFocus:
      "Content Security Policy for Tool Descriptions, Advanced Tool Behavior Monitoring (via IDS), Threat Detection Patterns, Input Validation/Sanitization, Host-Based Monitoring (via IDS agent)",
    threatsAddressed: [
      "Tool Poisoning (Description/Parameters)",
      "Command Injection (via input validation)",
      "Data Leakage (via input pattern matching)",
      "Exploitation of Functions (via behavioral detection)",
    ],
  },
  {
    component: "Centralized Logging / SIEM",
    mitigationFocus:
      "Comprehensive Monitoring and Logging, Correlation and Alerting, Immutable Audit Trails, Incident Response Support",
    threatsAddressed: [
      "Insufficient Auditability",
      "Supports detection/response for all threats through visibility",
    ],
  },
  {
    component: "Backend Isolation",
    mitigationFocus:
      "Network Segmentation, Secure Containerization, Host-Based Security (applied to backend hosts)",
    threatsAddressed: [
      "Limits blast radius of server compromise",
      "Prevents direct attacks",
      "Aids containment",
    ],
  },
];

export function ThreatModelTable({}: Props) {
  return (
    <section id="threat-model" className="py-16 md:py-24 bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16">
          MCP Gateway Component Threat Mapping
        </h2>

        <div className="overflow-x-auto rounded-lg border border-neutral-700">
          <Table className="min-w-full divide-y divide-neutral-700">
            <TableHeader className="bg-neutral-800">
              <TableRow className="border-neutral-700">
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider w-1/4">
                  Gateway Component
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider w-2/5">
                  Key Mitigation Focus
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider w-1/3">
                  Specific Threats Addressed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-neutral-900 divide-y divide-neutral-800">
              {componentThreats.map((entry, index) => (
                <TableRow key={index} className="hover:bg-neutral-800/50 border-neutral-800">
                  <TableCell className="px-6 py-4 whitespace-normal align-top font-semibold text-white">
                    {entry.component}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-normal align-top text-sm text-neutral-300">
                    {entry.mitigationFocus}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-normal align-top">
                    <ul className="list-disc list-inside space-y-1">
                      {entry.threatsAddressed.map((threat) => (
                        <li key={threat} className="text-sm text-neutral-400">
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption className="py-4 text-neutral-500 text-xs">
              Mapping based on MAESTRO Threat Model principles applied to the MCP Gateway components.
            </TableCaption>
          </Table>
        </div>
      </div>
    </section>
  );
}
