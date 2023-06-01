import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Bookshelf() {
  return (
    <>
      <PageSEO
        title={`Bookshelf - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              bookshelf
            </h1>
          </div>
        </div>
        <div>
          <div id="coming-soon"></div>
          <h1>
            Page coming soon. <br />
            <br />
          </h1>

          {/* <p>
                A record of the books, lectures, essays - things I've consumed that I go back to frequently.<br />
                I always enjoy reading lists of favourite books and recommendations from others. <br /> Maybe this list would be interesting to someone...
            </p> */}
        </div>
      </>
    </>
  )
}
