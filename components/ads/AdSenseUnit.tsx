'use client'

import { useEffect, useRef } from 'react'

interface AdSenseUnitProps {
  slot?: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * AdSense 广告单元组件
 *
 * 使用示例:
 * <AdSenseUnit slot="1234567890" format="auto" responsive={true} />
 *
 * @param slot - AdSense 广告位 ID (可选)
 * @param format - 广告格式: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'
 * @param responsive - 是否响应式 (默认 true)
 * @param className - 自定义 CSS 类名
 * @param style - 自定义样式
 */
export function AdSenseUnit({
  slot = 'auto',
  format = 'auto',
  responsive = true,
  className = '',
  style = {},
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null)
  const isInitialized = useRef(false)

  useEffect(() => {
    // 只在客户端执行一次初始化
    if (isInitialized.current || !adRef.current) return

    try {
      // 检查 adsbygoogle 是否已加载
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ;(window as any).adsbygoogle.push({})
        isInitialized.current = true
      }
    } catch (error) {
      console.error('AdSense initialization error:', error)
    }
  }, [slot])

  const defaultStyle: React.CSSProperties = {
    display: 'block',
    textAlign: 'center',
    ...style,
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={defaultStyle}
        data-ad-client="ca-pub-8886185433147735"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

/**
 * 预设广告尺寸组件
 */
export function AdBanner({ className = '' }: { className?: string }) {
  return (
    <AdSenseUnit
      format="horizontal"
      className={className}
      style={{ minHeight: '90px' }}
    />
  )
}

export function AdSidebar({ className = '' }: { className?: string }) {
  return (
    <AdSenseUnit
      format="vertical"
      className={className}
      style={{ minHeight: '250px' }}
    />
  )
}

export function AdInArticle({ className = '' }: { className?: string }) {
  return (
    <AdSenseUnit
      format="fluid"
      className={className}
      style={{ minHeight: '200px' }}
    />
  )
}

export default AdSenseUnit
