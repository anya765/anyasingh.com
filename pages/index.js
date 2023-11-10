import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import defaultTheme from 'tailwindcss/defaultTheme'
import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const gradients = {
  0: ' from-[#F28C28] to-[#FF7F50]',
  1: ' from-[#D8B4FE] to-[#818CF8]',
  2: ' to-[#013220] from-[#013220]',
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="grid grid-cols-1 space-y-10 py-4 sm:space-y-5 sm:py-14 xl:grid-cols-5">
          <div className="col-span-3 space-y-5">
            <h1 className="text-background-color pt-2 text-4xl font-bold leading-9 tracking-tight dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-snug">
              Anya Singh
            </h1>
            <p>
              I spend most of my time working on hard engineering problems. I want to build new
              ideas that shape the future of how we think, learn, and build.
            </p>
            <p>I love making people laugh and thinking critically about the world.</p>
            <p>
              In my spare time, I’m learning math. I like to create hypotheses about interesting
              problems in technical industries.
            </p>
            <p>
              I also really like{' '}
              <a href="https://projecteuler.net/about" target="_blank" rel="noopener noreferrer">
                {' '}
                <u> puzzles. </u>{' '}
              </a>
            </p>
          </div>

          <div className="col-span-2 flex flex-col items-center justify-center xl:pl-6">
            <Image src="/static/images/projects/pfp.png" alt="PFP" width={1920} height={1440} />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <svg
            className="h-12 w-12 animate-bounce text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 space-y-10 py-4 sm:space-y-5 sm:py-14 xl:grid-cols-5">
          <div className="col-span-2 space-y-5">
            <Image
              src="/static/images/projects/collage.png"
              alt="collage"
              width={(1600 * 1.75) / 6}
              height={(2000 * 1.75) / 6}
            />
          </div>

          <div className="col-span-3 flex flex-col items-center justify-center xl:pl-6">
            <div className="flex max-w-lg rounded-md border border-gray-300 p-4">
              <div>
                <p className="font-bold">Previously I:</p>
                <ul className="list-disc pl-6">
                  <li>did research and engineering with Purdue & EF</li>
                  <li>
                    explored prosthetics and wearables while developing software at an athletic
                    development company
                  </li>
                  <li>raised $$$ to build smart tech for athletes</li>
                  <li>
                    drafted a paper on how the market for lemons perpetuates poverty traps with
                    Solar4Africa
                  </li>
                  <li>analyzed satellite telemetry data @ JPL</li>
                  <li>
                    used machine learning to understand + optimize new battery (lithium titanate)
                    chemistry
                  </li>
                  <li>built climate resilient housing for droughts in Kenya</li>
                  <li>
                    moved out @ 17 + played tennis in SoCal for 6 mo. after graduating high school
                  </li>
                  <li>
                    growing up played an abnormal amount of chess (and represented Canada at intl.
                    tournaments + SPFGI 3x)
                  </li>
                  <li>
                    did other things &amp; failed - like creating an AI card game like Cards Against
                    Humanity and piloting SMS tech w/ GPT-3 in Bolivia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
