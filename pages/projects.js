import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import blockchainProjectsData from '@/data/blockchainProjectsData'
import otherProjectsData from '@/data/otherProjectsData'
import consultingProjectsData from '@/data/consultingProjectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { green } from '@tailwindcss/typography/src/styles'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">project highlights</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <h3 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              AI and Robotics
            </h3>
            <div className="-m-10 flex flex-wrap" style={{ marginTop: '10px', width: '105%' }}>
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  // description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
            <h3 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              <br /> <br />
              Blockchain
            </h3>
            <br /> <br />
            <div className="-m-10 flex flex-wrap" style={{ marginTop: '10px', width: '105%' }}>
              {blockchainProjectsData.map((d) => (
                <Card
                  key={d.title2}
                  title={d.title2}
                  // description={d.description2}
                  imgSrc={d.imgSrc2}
                  href={d.href2}
                />
              ))}
            </div>
            <h3 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              <br /> <br />
              Consulting
            </h3>
            <div className="-m-10 flex flex-wrap" style={{ marginTop: '10px', width: '105%' }}>
              {consultingProjectsData.map((d) => (
                <Card
                  key={d.title3}
                  title={d.title3}
                  // description={d.description3}
                  imgSrc={d.imgSrc3}
                  href={d.href3}
                />
              ))}
            </div>
            <h3 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              <br /> <br />
              Other Projects
            </h3>
            <div className="-m-10 flex flex-wrap" style={{ marginTop: '10px', width: '105%' }}>
              {otherProjectsData.map((d) => (
                <Card
                  key={d.title4}
                  title={d.title4}
                  // description={d.description4}
                  imgSrc={d.imgSrc4}
                  href={d.href4}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
