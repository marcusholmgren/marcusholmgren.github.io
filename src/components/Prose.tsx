import clsx from 'clsx'
import {PropsWithChildren} from "react";

export function Prose({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
