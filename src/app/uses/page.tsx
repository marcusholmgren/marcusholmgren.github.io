import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { PropsWithChildren } from 'react'

function ToolsSection({
  children,
  ...props
}: PropsWithChildren<{ title: string }>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: PropsWithChildren<{ title: string; href?: string }>) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I use and things I recommend."
      intro="A curated list of the software, gadgets, and services I rely on for building applications, staying productive, and exploring new ideas. Everything here is essential to my workflow."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Apple Studio M2 Ultra, 64GB RAM (2023)">
            This is my new workstation. The performance is incredible, and it
            have made running local LLMs easy and fast.
          </Tool>
          <Tool title="Omarchy on MacBook Pro, 16GB RAM (2017)">
            I have revived my Intel-based 15” MacBook Pro by installing Omarchy
            and I really like this os. There are some drawbacks, like the
            touchbar not being supported, but overall it works really well and
            it has given this machine a new life.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="JetBrains PyCharm">
            I’m a big fan of JetBrains’ IDEs. I use PyCharm for my Python,
            React, and Rust projects.
          </Tool>
          <Tool title="RustRover">
            I use RustRover for all my Rust projects. It’s a great way to
            navigate and understand large Rust codebases.
          </Tool>
          <Tool title="Zed">
            I’m really amazed by the speed and simplicity of Zed. Zed is a
            next-generation code editor designed for high-performance
            collaboration with humans and AI.
          </Tool>
          <Tool title="GitHub Copilot">
            My AI pairing buddy. It’s fantastic to get the code suggestions that
            are context relevant. Love it.
          </Tool>
          <Tool title="Rancher Desktop">
            I think this is the easiest way to do Kubernetes on your Desktop.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Tailwind UI">
            With the exception of a few things I’ve built myself, I’ve used
            Tailwind UI for every design I’ve done in the last year. It’s a
            great way to get started quickly and it’s a great way to get started
            quickly. And Tailwind CSS is a great way to to style things quickly.
          </Tool>
          <Tool title="Tremor">
            I like to use Tremor for to build charts and dashboards in React
            apps.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Educational platforms">
          <Tool title="O´Reilly Safari">
            I love to have access to books, videos, and lab environments all in
            one place. Safari is the best way to do that.
          </Tool>
          <Tool title="DataCamp">
            I really like the gamified approach to practice and learn data
            science. The hosted notebooks are great when you don’t want to
            install or setup anything on your local machine.
          </Tool>
          <Tool title="Maven">
            I have participated in a few courses on Maven and I have found them
            to be of high quality. In early summer of 2024 the course{' '}
            <span className="font-semibold text-purple-700 dark:text-purple-400">
              Mastering LLMs For Developers & Data Scientists
            </span>{' '}
            included so many guest lectures that is became a conference in
            itself.
          </Tool>
          <Tool title="Brilliant">
            I have found it to be a great resource for learning about math and
            science during commute.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Gemini Pro">
            I use Gemini Pro for brainstorming, writing, and coding. It’s
            incredibly useful for generating ideas, writing content, and
            debugging code. I use it in the browser, but also in the JetBrains
            IDEs.
          </Tool>
          <Tool title="Jules">
            This AI agent is a great way to get help with coding tasks. I have
            used it to help me write features and tests and it works great where
            it pushes changes to GitHub.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
