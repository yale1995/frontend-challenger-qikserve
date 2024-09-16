interface WebSettings {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}

interface Venue {
  id: number
  name: string
  internalName: string
  description: string | null
  liveFlag: number
  demoFlag: number
  address1: string
  address2: string
  address3: string | null
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: WebSettings
  ccy: string
  ccySymbol: string
  currency: string
}

interface ModifierItem {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}

interface Image {
  id: number
  image: string
}

interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ModifierItem[]
}

interface MenuItem {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku: string
  images?: Image[]
  available: boolean
  modifiers?: Modifier[]
}

interface Section {
  id: number
  name: string
  description?: string | null
  position: number
  visible?: number
  images: Image[]
  items: MenuItem[]
}

interface Menu {
  id: number
  name: string
  type: string
  collapse: number
  sections: Section[]
}

export {
  Venue,
  WebSettings,
  Menu,
  Section,
  MenuItem,
  Modifier,
  Image,
  ModifierItem,
}
