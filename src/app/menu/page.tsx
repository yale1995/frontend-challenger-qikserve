import { Banner } from '@/components/banner'
import { MainContainer } from '@/components/main-container'
import { MenuRestaurant } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { SearchInput } from '@/components/search-input'
import { Wrapper } from '@/components/wrapper'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'

export default async function Menu() {
  return (
    <>
      <Navbar />
      <Banner />

      <Wrapper>
        <SearchInput />
        <MainContainer>
          <Provider store={store}>
            <MenuRestaurant />
            <div>ola</div>
          </Provider>
        </MainContainer>
      </Wrapper>
    </>
  )
}
