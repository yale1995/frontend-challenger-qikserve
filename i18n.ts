import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const response = await fetch(
    'https://cdn-dev.preoday.com/challenge/venue/9',
    { method: 'GET' },
  )

  const parsedResponse = await response.json()
  const locale = parsedResponse.locale

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
