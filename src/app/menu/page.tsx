'use client'

import { Banner } from '@/components/banner'
import { Cart } from '@/components/cart'
import { MainContainer } from '@/components/main-container'
import { MenuRestaurant } from '@/components/menu'
import { MenuFooter } from '@/components/menu-footer'
import { Navbar } from '@/components/navbar'
import { SearchInput } from '@/components/search-input'
import { Wrapper } from '@/components/wrapper'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useScreen } from '@/hooks/use-screen'

export default function Menu() {
  const isMobile = useMediaQuery('(max-width: 766px)')
  const { currentScreen } = useScreen()

  return (
    <>
      <Navbar />
      <Banner />

      <Wrapper>
        <SearchInput />
        <MainContainer>
          {isMobile ? (
            <>
              {currentScreen === 'menu' && <MenuRestaurant />}
              {currentScreen === 'cart' && <Cart />}
            </>
          ) : (
            <>
              <MenuRestaurant />
              <Cart />
            </>
          )}
        </MainContainer>
      </Wrapper>

      {isMobile && currentScreen === 'menu' && <MenuFooter />}
    </>
  )
}
