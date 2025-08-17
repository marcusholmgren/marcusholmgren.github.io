import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { XIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/marcus-sum50.jpg'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import awsCertifiedDeveloper from './aws-certified-developer-associate.png'
import dataCampDataScientist from './data_scientist_professional_badge.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: PropsWithChildren<{
  className?: string
  href: string
  icon: React.FC<{ className?: string }>
}>) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: ComponentPropsWithoutRef<any>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Marcus Holmgren portrait"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Marcus Holmgren. I build for the future of computing.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My interest in software began with a Commodore 64 in 1985, typing my first lines of <span className="font-semibold text-purple-700 dark:text-purple-400">BASIC</span> from magazines. This early curiosity laid the groundwork for my career, paralleling a lifelong passion for physical challenges. Just as I learned to navigate trails and complete ultra marathons, I’ve found a similar drive in exploring new technical fields.
            </p>
            <p>
                In 2016, I dove headfirst into <span className="font-semibold text-purple-700 dark:text-purple-400">Deep Learning</span> through a nanodegree program, which cemented my fascination with data and intelligent systems. I had little experience at the time, but the experience solidified my belief in the future of <span className="font-semibold text-purple-700 dark:text-purple-400">Machine Learning</span>.
            </p>
            <p>
                Today, I work as a consultant, designing and building robust systems for companies. My work is focused on creating practical solutions while I continue to explore and expand my knowledge in areas like <span className="font-semibold text-purple-700 dark:text-purple-400">Machine Learning</span> and cloud technologies. I believe these fields will be a massive part of the future of computing, and I&apos;m excited to be a part of it.
              <AwsCertifiedDeveloper />
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/marcusholmgren"
              icon={XIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/marcusholmgren"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/marcus-holmgren-yacero"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:marcus.holmgren1@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              marcus.holmgren1@gmail.com
            </SocialLink>
          </ul>
          <DataCampDataScientist />
        </div>
      </div>
    </Container>
  )
}

function AwsCertifiedDeveloper() {
  return (
    <a
      href="https://www.credly.com/badges/08b4a129-3da6-4a51-8a4a-ae9356d777db/public_url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={awsCertifiedDeveloper}
        alt="AWS Certified Developer Associate"
        className="mt-8"
        width="600"
        height="600"
      />
    </a>
  )
}

function DataCampDataScientist() {
  return (
    <a
      href="https://www.datacamp.com/portfolio/marcusholmgren"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={dataCampDataScientist}
        alt="DataCamp Professional Data Scientist Certificate"
        className="mt-8"
        width="186"
        height="215"
      />
    </a>
  )
}
