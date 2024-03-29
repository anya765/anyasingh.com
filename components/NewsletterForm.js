import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'keep updated 🗺️' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div className="group relative">
      <div className="animate-tilt absolute -inset-px rounded-2xl bg-gradient-to-r from-[#013220] to-[#013220] blur-sm transition duration-1000 group-hover:-inset-1 group-hover:animate-none group-hover:opacity-100 group-hover:duration-1000"></div>
      <div className="dark:bg-background-color relative h-full w-full rounded-2xl bg-white px-6 py-6 sm:py-8 sm:px-12">
        <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
        <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
          <div>
            <label className="sr-only" htmlFor="email-input">
              Email address
            </label>
            <input
              autoComplete="email"
              className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="email-input"
              name="email"
              placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
              ref={inputEl}
              required
              type="email"
              disabled={subscribed}
            />
          </div>
          <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
            <button
              className={`w-full rounded-md bg-[#013220] py-2 px-2 font-medium text-white sm:py-0 ${
                subscribed ? 'cursor-default' : 'hover:[#013220] dark:hover:[#013220]'
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? 'Thanks!' : 'Submit'}
            </button>
          </div>
        </form>
        {error && (
          <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
        )}
      </div>
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
