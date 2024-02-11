import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function writing() {
  return (
    <>
      <PageSEO title={`writing - ${siteMetadata.author}`} description={siteMetadata.description} />
      <>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              writing
            </h1>
          </div>
        </div>
        <div>
          <ul>
            <h3>
              <a href="https://anyasingh.com/choosingfriends">
                <u>Choosing good friends</u>
              </a>{' '}
            </h3>
          </ul>
        </div>
      </>
    </>
  )
}
