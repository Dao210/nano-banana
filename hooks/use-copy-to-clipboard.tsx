import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { toastConfig } from "@/config/toast-config";
import { ProVersionAction } from "@/components/pro-version-action";

/**
 * Copy to Clipboard Hook
 *
 * A reusable hook for copying text to clipboard with toast notifications.
 * Automatically shows Pro version promotion after successful copy.
 *
 * @returns Object containing copy function and loading state
 *
 * @example
 * ```tsx
 * const { copyToClipboard, isCopying } = useCopyToClipboard();
 *
 * <button onClick={() => copyToClipboard(promptText)}>
 *   {isCopying ? 'Copying...' : 'Copy Prompt'}
 * </button>
 * ```
 */
export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  /**
   * Copy text to clipboard and show toast notification
   *
   * @param text - The text to copy to clipboard
   * @param options - Optional configuration
   * @param options.showProPromotion - Whether to show Pro version promotion (default: true)
   */
  const copyToClipboard = async (
    text: string,
    options?: { showProPromotion?: boolean }
  ) => {
    // Prevent empty copy
    if (!text || text.trim().length === 0) {
      toast({
        title: toastConfig.copyError.title,
        description: toastConfig.copyError.message,
        variant: "destructive",
      });
      return;
    }

    setIsCopying(true);

    try {
      // Use navigator clipboard API
      await navigator.clipboard.writeText(text);

      setIsCopied(true);
      setIsCopying(false);

      // Determine whether to show Pro promotion
      const showProPromotion = options?.showProPromotion ?? true;

      if (showProPromotion) {
        // Show toast with Pro version action button
        toast({
          title: toastConfig.copyPrompt.title,
          description: toastConfig.copyPrompt.message,
          action: <ProVersionAction />,
          duration: toastConfig.copyPrompt.duration,
        });
      } else {
        // Show simple success toast
        toast({
          title: "复制成功！",
          description: "Prompt 已复制到剪贴板",
          duration: 2000,
        });
      }

      // Reset copied state after delay
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

    } catch (error) {
      setIsCopying(false);
      setIsCopied(false);

      // Show error toast
      toast({
        title: toastConfig.copyError.title,
        description: toastConfig.copyError.message,
        variant: "destructive",
      });
    }
  };

  return {
    copyToClipboard,
    isCopied,
    isCopying,
  };
}
