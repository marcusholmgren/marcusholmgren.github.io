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
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            I was using an Intel-based 15” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
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
            I’m really amazed by the speed and simplicity of Zed.
            Zed is a next-generation code editor designed for high-performance collaboration with humans and AI.
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
          <Tool title="Brilliant">
            I have found it to be a great resource for learning about math and
            science during commute.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Gemini Pro">
            I use Gemini Pro for brainstorming, writing, and coding. It’s
            incredibly useful for generating ideas, writing content, and
            debugging code. I use it in the browser, but also in the
            JetBrains IDEs.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
