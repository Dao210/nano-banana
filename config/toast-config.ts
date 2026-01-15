/**
 * Toast Configuration
 *
 * Centralized configuration for all toast notifications across the application.
 *
 * Update the affiliate link below to point to your Pro version landing page.
 */

export const toastConfig = {
  /**
   * Pro Version Affiliate Link
   *
   * TODO: Update this URL with your actual affiliate link
   * Example: "https://example.com/pro?ref=your-affiliate-code"
   */
  proVersionAffiliateLink: "https://example.com/pro?ref=your-affiliate-code",

  /**
   * Copy Prompt Success Toast Configuration
   */
  copyPrompt: {
    /**
     * Toast title
     */
    title: "✨ Pro 版推荐",

    /**
     * Toast message
     */
    message: "想生成更好的效果？试试 Pro 版工具",

    /**
     * Call-to-action button text
     */
    actionButtonText: "立即体验 →",

    /**
     * Auto-dismiss duration in milliseconds (4 seconds)
     */
    duration: 4000,

    /**
     * Whether to open link in new tab
     */
    openInNewTab: true,
  },

  /**
   * Copy Error Toast Configuration
   */
  copyError: {
    title: "复制失败",
    message: "请重试或手动复制",
    variant: "error" as const,
  },
} as const;

export type ToastConfig = typeof toastConfig;
