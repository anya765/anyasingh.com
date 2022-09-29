import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const gradients = {
  0: ' from-[#F28C28] via-[#C04000] to-[#FF7F50]',
  1: ' from-[#D8B4FE] to-[#818CF8]',
  2: ' to-[#5be3ad] from-[#46d5eb]',
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="grid grid-cols-1 space-y-10 py-4 sm:space-y-5 sm:py-14 xl:grid-cols-5">
          <div className="col-span-3 justify-center space-y-5 align-middle">
            <h1 className="text-background-color pt-2 text-4xl font-bold leading-9 tracking-tight dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-snug">
              Anya Singh
            </h1>
            <p>
              I spend most of my time working on hard problems and trying to <br /> understand the world
              around me. At the moment, I'm developing my technical <br /> skills in AI, working
              blockchain research, and exploring healthtech.
            </p>
            <p className="leading-7 text-gray-500 underline underline-offset-4 sm:pr-6 sm:text-lg">
              <Link
                href="/about"
                className="hover:cursor-pointer hover:text-primary-500 dark:text-gray-500 hover:dark:text-primary-500"
              >
                <a>Read the rest of my bio &rarr;</a>
              </Link>
            </p>
          </div>
          {siteMetadata.newsletter.provider !== '' && (
            <div className="col-span-2 flex xl:items-center xl:justify-center xl:pl-6">
              <NewsletterForm />
            </div>
          )}
        </div>

        <h1 className="my-4 mt-16 pb-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Featured Content{' '}
        </h1>
        <ul className="flex flex-col gap-10 dark:border-gray-700 md:flex-row">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, 1).map((frontMatter, index) => {
            const { slug, date, title, summary, tags, readTime } = frontMatter
            return (
              <>
                <Link
                  href={'https://www.youtube.com/watch?v=_-3d8nF_Rtw'}
                  key={slug}
                  className="group relative w-full transform transition-all duration-500 hover:scale-[1.05] hover:duration-500 md:w-1/3"
                >
                  <div
                    className={
                      `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-md group-hover:duration-500` +
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
                  href={
                    'https://medium.com/@anyasingh/banking-the-unbanked-using-defi-for-financial-inclusion-8225f62d56f1'
                  }
                  key={slug}
                  className="group relative w-full transform transition-all duration-500 hover:scale-[1.05] hover:duration-500 md:w-1/3"
                >
                  <div
                    className={
                      `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-md group-hover:duration-500` +
                      gradients[2]
                    }
                  ></div>
                  <article className="bg-background-color relative h-full rounded-xl">
                    <div className="dark:bg-background-color flex h-full flex-col justify-between rounded-xl bg-white p-5">
                      <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                              Mobile solutions can change banking
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
                  href={'https://www.youtube.com/watch?v=_-3d8nF_Rtw'}
                  key={slug}
                  className="group relative w-full transform transition-all duration-500 hover:scale-[1.05] hover:duration-500 md:w-1/3"
                >
                  <div
                    className={
                      `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-md group-hover:duration-500` +
                      gradients[2]
                    }
                  ></div>
                  <article className="bg-background-color relative h-full rounded-xl">
                    <div className="dark:bg-background-color flex h-full flex-col justify-between rounded-xl bg-white p-5">
                      <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                              Companies can use blockchain for utility <br /> @ Collision Conf
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
