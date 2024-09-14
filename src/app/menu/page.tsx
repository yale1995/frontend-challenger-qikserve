import { Venue } from '@/@types/api-type'
import { Banner } from '@/components/banner'
import { Navbar } from '@/components/navbar'
import { SearchInput } from '@/components/search-input'
import { Wrapper } from '@/components/wrapper'

export default async function Menu() {
  const response = await fetch(
    'https://cdn-dev.preoday.com/challenge/venue/9',
    {
      method: 'GET',
    },
  )

  const data = (await response.json()) as Venue

  console.log(data)

  return (
    <>
      <Navbar theme={data.webSettings} />
      <Banner theme={data.webSettings} />

      <Wrapper>
        <SearchInput theme={data.webSettings} />
      </Wrapper>
    </>
  )
}
