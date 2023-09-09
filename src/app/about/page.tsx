import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from  '@/components/SocialIcons'
import portraitImage from '@/images/marcus-sum50.jpg'
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";

function SocialLink({ className, href, children, icon: Icon }: PropsWithChildren<{ className?: string, href: string, icon: React.FC<{ className?: string }> }>) {
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
              I’m Marcus Holmgren. I design and build software.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My interests in computers started when my dad bought a Commodore 64 in 1985 and I did my first attempt to programming by type in BASIC printouts from magazines.
                Honestly, most of the time was used to play and trade games with friends.
              </p>
              <p>
                Much of my childhood was spent with my family were we would go on snowmobile trips, boat trips, fishing, and camping.
                In the late 80’s I discovered snowboarding and that was it. I was hooked. I spent most of my free time on the slopes.
                After a snowboarding injury in the middle of the 90’s I transition more into running and learned that I enjoy cross country running more than asphalt running.
                Several years later that led me to start to explore trail running and I wondered if I could run a ultra marathon?
                After completing a couple of 50km, and 68km events I have discovered that I don’t need to be signed up for a race to motivate myself to train.
                I train so that I know can spend a day on the trail when the weather is right.
              </p>
              <p>
                By chance in december 2016 I saw that Udacity would start a nanodegree program on Deep Learning.
                I was fascinated by the projects that we would be building during the program so I signed up.
                I had little to no experience in machine learning and deep learning.
                But after spending nearly six months studying and building projects I had a good understanding of the basics of deep learning.
              </p>
              <p>
                Today, I do consulting work for companies that need help with building and deploying their systems.
                I intend to continue to explore the field of machine learning and deep learning. Because I believe that it will be a big part of the future of computing.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/marcusholmgren" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/marcusholmgren" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/marcus-holmgren-yacero" icon={LinkedInIcon} className="mt-4">
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
          </div>
        </div>
        </Container>
  )
}
