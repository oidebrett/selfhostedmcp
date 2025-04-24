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
import { LockKeyhole, Workflow } from "lucide-react"; // Icons

export function AuthOffloadSection() {
  // Placeholder for the image URL you will provide
  const AUTH_FLOW_IMAGE_URL = "placeholder-image-url.png"; // Replace later

  return (
    <section id="auth-offload" className="py-16 md:py-24 bg-neutral-900 text-neutral-300 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            Simplify & Secure
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Offload Authentication, Empower Developers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-400 lg:mx-auto">
            Implementing MCP servers often forces developers to juggle OAuth2, API security, and threat mitigation directly, increasing the risk of insecure design and configuration errors.
          </p>
        </div>

        <div className="mt-10 md:mt-16 text-center">
           <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto">
            The MCP Gateway centralizes robust OAuth2 authentication at the edge. This frees your developers to focus on core AI integration tasks, knowing security is handled consistently and correctly.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-700 hover:border-blue-800">
                <Workflow className="mr-2 h-5 w-5" /> See Authentication Flow
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl bg-neutral-900 border-neutral-700 text-white">
              <DialogHeader>
                <DialogTitle className="text-white">OAuth2 Authentication Flow via Gateway</DialogTitle>
                <DialogDescription className="text-neutral-400">
                  This diagram shows how the gateway handles user authentication before securely proxying requests to backend MCP servers.
                </DialogDescription>
              </DialogHeader>
              <div className="my-4 flex justify-center items-center bg-neutral-800 rounded p-4 min-h-[300px]">
                {/* Image will go here */}
                {/* <span className="text-neutral-500">
                  [Authentication Flow Diagram Placeholder - Upload Required]
                </span> */}
                 <img src="https://static.databutton.com/public/4674c2ab-ebe8-4b88-8fbc-a7ec374852fd/OAuth2MessageFlow.png" alt="Authentication Flow Diagram" className="max-w-full h-auto rounded border border-neutral-600" />
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
        </div>
      </div>
    </section>
  );
}
