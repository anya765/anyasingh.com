import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function choosingfriends() {
  return (
    <>
      <PageSEO
        title={`choosing friends - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              choosing friends
            </h1>
          </div>
        </div>
        <div>
          <p>this is some information.</p>
          <br />
          <br />
          <ul></ul>
        </div>
      </>
    </>
  )
}
