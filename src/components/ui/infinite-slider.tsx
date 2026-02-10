import { motion } from 'motion/react'
import useMeasure from 'react-use-measure'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface InfiniteSliderProps {
  children: ReactNode
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

export function InfiniteSlider({
  children,
  speed = 40,
  direction = 'left',
  className,
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure()

  const duration = width > 0 ? width / speed : 0
  const translateFrom = direction === 'left' ? 0 : -width
  const translateTo = direction === 'left' ? -width : 0

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max gap-12"
        animate={width > 0 ? { x: [translateFrom, translateTo] } : undefined}
        transition={
          width > 0
            ? {
                x: {
                  duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                },
              }
            : undefined
        }
      >
        <div ref={ref} className="flex shrink-0 items-center gap-12">
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
