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
              <a href="http://paulgraham.com/greatwork.html" target="_blank" rel="noreferrer"> how to do great work</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=PUv66718DII" target="_blank" rel="noreferrer">inventing on principle </a>{' '}
            </li>
            <li>
              <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/" target="_blank" rel="noreferrer">
                meditations on moloch
              </a>
            </li>
            <li>
              <a href="https://www.benkuhn.net/outliers/" target="_blank" rel="noreferrer">searching for outliers</a>{' '}
            </li>
            <li>salt: a world history </li>
            <li>a collection of poems by robert frost </li>
            <li>building scientific apparatus </li>
            <li>why nations fail </li>
            <li>bell labs - idea factory </li>
            <li>
              <a href="https://thesephist.com/posts/prolific-focus/" target="_blank" rel="noreferrer">prolific focus </a>{' '}
            </li>
            <li>
              <a href="https://sive.rs/kimo" target="_blank" rel="noreferrer">there is no speed limit </a>{' '}
            </li>
            <li>building scientific apparatus</li>
            <li>the design of everyday things </li>
            <li>the art and science of doing engineering </li>
            <li>invention on principle </li>
            <li>a mathematician's apology </li>
            <li>guns, germs and steel </li>
            <li>
              <a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" target="_blank" rel="noreferrer">
                the bitter lesson
              </a>{' '}
            </li>
            <li>
              <a href="https://www.ben-evans.com/benedictevans/2020/5/16/not-even-wrong" target="_blank" rel="noreferrer">
                predicting tech
              </a>{' '}
            </li>
            <li>
              <a href="https://danluu.com/look-stupid/" target="_blank" rel="noreferrer">look stupid</a>{' '}
            </li>
          </ul>
        </div>
      </>
    </>
  )
}
