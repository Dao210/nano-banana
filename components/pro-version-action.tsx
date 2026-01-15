import { toastConfig } from "@/config/toast-config";
import { ExternalLink } from "lucide-react";

/**
 * Pro Version Action Component
 *
 * Action button component for toast notifications
 * Displays a link to the Pro version with an external link icon
 */
export function ProVersionAction() {
  return (
    <a
      href={toastConfig.proVersionAffiliateLink}
      target={toastConfig.copyPrompt.openInNewTab ? "_blank" : undefined}
      rel={toastConfig.copyPrompt.openInNewTab ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
    >
      {toastConfig.copyPrompt.actionButtonText}
      <ExternalLink className="ml-2 h-3 w-3" />
    </a>
  );
}
