import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Bookshelf() {
  return (
    <>
      <PageSEO
        title={`bookshelf - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              bookshelf
            </h1>
          </div>
        </div>
        <div>
          <p>
            A record of the books, lectures, essays - things I've consumed that I go back to
            frequently. I always enjoy reading lists of favourite books and recommendations from
            others. <br />
            <br /> Maybe this list would be interesting to someone...
          </p>
          <br />
          <br />
          <ul>
            <li>
              <i>
                <a href="http://paulgraham.com/greatwork.html"> how to do great work</a>
              </i>
            </li>
            <li>
              <i>
                <a href="https://www.youtube.com/watch?v=PUv66718DII">inventing on principle </a>
              </i>{' '}
            </li>
            <li>
              <i>
                <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/">
                  meditations on moloch
                </a>
              </i>
            </li>
            <li>
              <i>
                <a href="https://www.benkuhn.net/outliers/">searching for outliers</a>
              </i>{' '}
            </li>
            <li>
              <i>salt: a world history</i>{' '}
            </li>
            <li>
              <i>a collection of poems by robert frost</i>{' '}
            </li>
            <li>
              <i>why nations fail</i>{' '}
            </li>
            <li>
              <i>bell labs - idea factory</i>{' '}
            </li>
            <li>
              <i>the design of everyday things</i>{' '}
            </li>
            <li>
              <i>the art and science of doing engineering</i>{' '}
            </li>
            <li>
              <i>invention on principle</i>{' '}
            </li>
            <li>
              <i>a mathematician's apology</i>{' '}
            </li>
            <li>
              <i>guns, germs and steel</i>{' '}
            </li>
            <li>
              <i>
                <a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">
                  the bitter lesson
                </a>
              </i>{' '}
            </li>
            <li>
              <i>
                <a href="https://www.ben-evans.com/benedictevans/2020/5/16/not-even-wrong">
                  predicting tech
                </a>
              </i>{' '}
            </li>
            <li>
              <i>
                <a href="https://danluu.com/look-stupid/">look stupid</a>
              </i>{' '}
            </li>
          </ul>
        </div>
      </>
    </>
  )
}
