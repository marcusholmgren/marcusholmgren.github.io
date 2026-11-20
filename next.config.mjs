// next.config.mjs
import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm', 'remark-math'],
    rehypePlugins: ['rehype-katex', '@mapbox/rehype-prism'],
  },
})

export default withMDX(nextConfig)
