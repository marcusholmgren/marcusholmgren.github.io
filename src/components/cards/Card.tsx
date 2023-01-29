import Link from 'next/link'
import clsx from 'clsx'
import React, {PropsWithChildren} from "react";

function ChevronRightIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

type CardProps = {
    as ?: "div" | "article" | "li"
    className?: string
}

export function Card({as = "div", className, children}: PropsWithChildren<CardProps>) {
    switch (as) {
        case 'div':
            return (
        <div
            className={clsx(className, 'group relative flex flex-col items-start')}
        >
            {children}
        </div>
    )
        case 'article':
            return (
        <article
            className={clsx(className, 'group relative flex flex-col items-start')}
        >
            {children}
        </article>
    )
        case 'li':
            return (
        <li
            className={clsx(className, 'group relative flex flex-col items-start')}
        >
            {children}
        </li>
    )
    }
}


Card.Link = function CardLink({children, ...props}: PropsWithChildren<{ href: string }>) {
    return (
        <>
            <div
                className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"/>
            <Link {...props}>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"/>
                <span className="relative z-10">{children}</span>
            </Link>
        </>
    )
}

//Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
type CardTitleProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    href?: string
}

Card.Title = function CardTitle({as = "h2", href, children}: PropsWithChildren<CardTitleProps>) {
    switch (as) {
        case 'h1':
            return (
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {href ? <Card.Link href={href}>{children}</Card.Link> : children}
                </h2>
            )
        case 'h2':
            return (
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {href ? <Card.Link href={href}>{children}</Card.Link> : children}
                </h2>
            )
        case 'h3':
            return (
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {href ? <Card.Link href={href}>{children}</Card.Link> : children}
                </h2>
            )
        case 'h4':
            return (
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {href ? <Card.Link href={href}>{children}</Card.Link> : children}
                </h2>
            )
        case 'h5':
            return (
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {href ? <Card.Link href={href}>{children}</Card.Link> : children}
                </h2>
            )
        case 'h6':
            return (
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {href ? <Card.Link href={href}>{children}</Card.Link> : children}
                </h2>
            )


    }
    return (
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            {href ? <Card.Link href={href}>{children}</Card.Link> : children}
        </h2>
    )
}

Card.Description = function CardDescription({children}: PropsWithChildren<{}>) {
    return (
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {children}
        </p>
    )
}


Card.Cta = function CardCta({children}: PropsWithChildren<{}>) {
    return (
        <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
            {children}
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current"/>
        </div>
    )
}

type CardEyebrowProps = {
    as?:  'p' | 'time'
    decorate?: boolean
    dateTime?: string
    className?: string
}

Card.Eyebrow = function CardEyebrow({
                                        as = 'p',
                                        decorate = false,
                                        className,
                                        children,
                                        ...props
                                    }: PropsWithChildren<CardEyebrowProps>) {
    switch (as) {
        case 'p':
                return (
        <p
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
                decorate && 'pl-3.5'
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"/>
        </span>
            )}
            {children}
        </p>
    )
        case 'time':
                return (
        <time
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
                decorate && 'pl-3.5'
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"/>
        </span>
            )}
            {children}
        </time>
    )
    }
}
