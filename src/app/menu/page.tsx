import { Banner } from '@/components/banner'
import { Navbar } from '@/components/navbar'
import { SearchInput } from '@/components/search-input'
import { Wrapper } from '@/components/wrapper'

export default async function Menu() {
  return (
    <>
      <Navbar />
      <Banner />

      <Wrapper>
        <SearchInput />
        oi
      </Wrapper>
    </>
  )
}
