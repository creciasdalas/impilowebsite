import { forwardRef, useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode, Ref } from 'react'
import './Reveal.css'

interface RevealProps {
  as?: ElementType
  children: ReactNode
  delay?: number
  className?: string
  [key: string]: unknown
}

function mergeRefs(...refs: Array<Ref<unknown> | undefined>) {
  return (node: unknown) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') ref(node)
      else (ref as { current: unknown }).current = node
    })
  }
}

const Reveal = forwardRef<unknown, RevealProps>(function Reveal(props, forwardedRef) {
  const { as, children, delay = 0, className = '', ...rest } = props
  const Component = (as ?? 'div') as ElementType
  const internalRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = internalRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={mergeRefs(internalRef, forwardedRef)}
      className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Reveal
