import {CSSProperties, forwardRef, PropsWithChildren} from 'react'
import clsx from 'clsx'

type ContainerProps = {
  className?: string,
  style?: CSSProperties
}

export const OuterContainer = forwardRef<HTMLInputElement>(function OuterContainer(
  { className, children, ...props }: PropsWithChildren<ContainerProps>, ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

export const InnerContainer = forwardRef<HTMLInputElement>(function InnerContainer(
  { className, children, ...props }:  PropsWithChildren<ContainerProps>, ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

export const Container = forwardRef<HTMLInputElement>(function Container(
  { children, ...props }:  PropsWithChildren<ContainerProps>, ref
) {
  return (
     <>
       { /* @ts-ignore */ }
    <OuterContainer ref={ref} {...props}>
      { /* @ts-ignore */}
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
       </>
  )
})

