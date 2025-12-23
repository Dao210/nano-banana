'use client'

import Script from 'next/script'

interface AdSenseProps {
  slot?: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  className?: string
}

// AdSense script loader - only loads once per page
export function AdSenseScript() {
  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8886185433147735"
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  )
}

// Individual ad unit component
export function AdUnit({
  slot = "auto",
  format = "auto",
  responsive = true,
  className = ""
}: AdSenseProps) {
  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8886185433147735"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
      <Script id={`adsense-init-${slot}`} strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  )
}

// Combined component for easy usage in tutorials layout
export default function AdSense() {
  return <AdSenseScript />
}
