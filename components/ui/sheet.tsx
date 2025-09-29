'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

export function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open: boolean
  onOpenChange: (o: boolean) => void
  children: React.ReactNode
}) {
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { open, onOpenChange })
          : child
      )}
    </div>
  )
}

export function SheetTrigger({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode
  onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(
        'inline-flex items-center justify-center',
        props.className
      )}
    >
      {children}
    </button>
  )
}

export function SheetContent({
  open,
  onOpenChange,
  children,
  side = 'right',
  className,
}: {
  open?: boolean
  onOpenChange?: (o: boolean) => void
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => onOpenChange?.(false)}
      />
      {/* Drawer */}
      <div
        className={cn(
          'absolute top-0 h-full w-80 bg-white shadow-lg transition-transform',
          side === 'left' ? 'left-0' : 'right-0',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function SheetClose({
  children,
  onClick,
  asChild,
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  asChild?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e: any) => {
        onClick?.()
        children.props.onClick?.(e)
      },
    })
  }
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn('inline-flex items-center justify-center', props.className)}
    >
      {children}
    </button>
  )
}
