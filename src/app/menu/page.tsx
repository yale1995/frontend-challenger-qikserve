import { Banner } from '@/components/banner'
import { Cart } from '@/components/cart'
import { MainContainer } from '@/components/main-container'
import { MenuRestaurant } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { ReduxProvider } from '@/components/redux-provider'
import { SearchInput } from '@/components/search-input'
import { Wrapper } from '@/components/wrapper'

export default async function Menu() {
  return (
    <>
      <Navbar />
      <Banner />

      <Wrapper>
        <SearchInput />
        <MainContainer>
          <ReduxProvider>
            <MenuRestaurant />
            <Cart />
          </ReduxProvider>
        </MainContainer>
      </Wrapper>
    </>
  )
}
