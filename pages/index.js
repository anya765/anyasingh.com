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

        <h1 className="my-4 mt-16 pb-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Recently{' '}
        </h1>
        <ul className="flex flex-col gap-10 dark:border-gray-700 md:flex-row">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, 1).map((frontMatter, index) => {
            const { slug, date, title, summary, tags, readTime } = frontMatter
            return (
              <>
                <Link
                  href={'https://medium.com/geekculture/towards-meta-rl-b80586019292'}
                  key={slug}
                  className="group relative w-full transform transition-all duration-500 hover:scale-[1] hover:duration-500 md:w-1/3"
                >
                  <div
                    className={
                      `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-500 group-hover:-inset-1 group-hover:blur-sm group-hover:duration-500` +
                      gradients[2]
                    }
                  ></div>
                  <article className="bg-background-color relative h-full rounded-xl">
                    <div className="dark:bg-background-color flex h-full flex-col justify-between rounded-xl bg-white p-5">
                      <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                              {title}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex">
                        <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
                <Link
                  href={'https://thearchprojects.com'}
                  key={slug}
                  className="group relative w-full transform transition-all duration-500 hover:scale-[1] hover:duration-500 md:w-1/3"
                >
                  <div
                    className={
                      `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-sm group-hover:duration-500` +
                      gradients[2]
                    }
                  ></div>
                  <article className="bg-background-color relative h-full rounded-xl">
                    <div className="dark:bg-background-color flex h-full flex-col justify-between rounded-xl bg-white p-5">
                      <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                              The ARCH Project - Engineering Adaptive Resilient Climate Housing
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex">
                        <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
                <Link
                  href={
                    'https://selfsupervisedlearning.substack.com/p/a-hypothesis-for-addressing-rural'
                  }
                  key={slug}
                  className="group relative w-full transform transition-all duration-500 hover:scale-[1] hover:duration-500 md:w-1/3"
                >
                  <div
                    className={
                      `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-sm group-hover:duration-500` +
                      gradients[2]
                    }
                  ></div>
                  <article className="bg-background-color relative h-full rounded-xl">
                    <div className="dark:bg-background-color flex h-full flex-col justify-between rounded-xl bg-white p-5">
                      <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                              A hypothesis for addressing rural poverty - analyzing the market for
                              lemons market failure
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex">
                        <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </>
            )
          })}
        </ul>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-6 flex justify-end text-base font-medium leading-6"></div>
        )}
      </div>
    </>
  )
}
