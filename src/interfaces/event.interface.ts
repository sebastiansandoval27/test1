export interface Event {
  _embedded: EventEmbedded
  _links: EventLinksClass
  page: Page
}

export interface EventEmbedded {
  events: EventElement[]
}

export interface EventElement {
  name: string
  type: EventType
  id: string
  test: boolean
  url: string
  locale: Locale
  images: Image[]
  sales: Sales
  dates: Dates
  classifications: Classification[]
  promoter?: Promoter
  promoters?: Promoter[]
  priceRanges?: PriceRange[]
  products?: Product[]
  seatmap: Seatmap
  accessibility?: Accessibility
  ageRestrictions?: AgeRestrictions
  ticketing: Ticketing
  _links: EventLinks
  _embedded: EventEmbeddedClass
  info?: string
  pleaseNote?: string
  ticketLimit?: TicketLimit
  outlets?: Outlet[]
}

export interface EventEmbeddedClass {
  venues: Venue[]
  attractions: Attraction[]
}

export interface Attraction {
  name: string
  type: AttractionType
  id: string
  test: boolean
  url: string
  locale: Locale
  externalLinks?: ExternalLinks
  images: Image[]
  classifications: Classification[]
  upcomingEvents: UpcomingEvents
  _links: AttractionLinks
  aliases?: string[]
}

export interface AttractionLinks {
  self: First
}

export interface First {
  href: string
}

export interface Classification {
  primary: boolean
  segment: Genre
  genre: Genre
  subGenre: Genre
  type?: Genre
  subType?: Genre
  family: boolean
}

export interface Genre {
  id: string
  name: GenreName
}

export enum GenreName {
  AllOfUS = 'All of US',
  Atlanta = 'Atlanta',
  Basketball = 'Basketball',
  Competition = 'Competition',
  EventStyle = 'Event Style',
  Group = 'Group',
  LittleRockMore = ' Little Rock & More"',
  Miscellaneous = 'Miscellaneous',
  NCaliforniaNNevada = 'N. California/N. Nevada',
  Nba = 'NBA',
  NewYorkTriStateArea = 'New York/Tri-State Area',
  Orlando = 'Orlando',
  Parking = 'Parking',
  PhoenixAndTucson = 'Phoenix and Tucson',
  PortlandAndMore = 'Portland and More',
  Regular = 'Regular',
  Sports = 'Sports',
  Team = 'Team',
  Undefined = 'Undefined',
}

export interface ExternalLinks {
  twitter: Facebook[]
  wiki: Facebook[]
  facebook: Facebook[]
  instagram: Facebook[]
  homepage: Facebook[]
}

export interface Facebook {
  url: string
}

export interface Image {
  ratio: Ratio
  url: string
  width: number
  height: number
  fallback: boolean
}

export enum Ratio {
  The16_9 = '16_9',
  The3_2 = '3_2',
  The4_3 = '4_3',
}

export enum Locale {
  EnUs = 'en-us',
}

export enum AttractionType {
  Attraction = 'attraction',
}

export interface UpcomingEvents {
  tmr?: number
  ticketmaster: number
  _total: number
  _filtered: number
}

export interface Venue {
  name: string
  type: VenueType
  id: string
  test: boolean
  url?: string
  locale: Locale
  images?: Image[]
  postalCode: string
  timezone: Timezone
  city: City
  state: State
  country: Country
  address: Address
  location: Location
  markets?: Genre[]
  dmas: DMA[]
  boxOfficeInfo?: BoxOfficeInfo
  accessibleSeatingDetail?: string
  generalInfo?: GeneralInfo
  upcomingEvents: UpcomingEvents
  _links: AttractionLinks
  parkingDetail?: string
  aliases?: string[]
  social?: Social
  ada?: Ada
}

export interface Ada {
  adaPhones: string
  adaCustomCopy: string
  adaHours: string
}

export interface Address {
  line1: string
}

export interface BoxOfficeInfo {
  phoneNumberDetail: string
  openHoursDetail?: string
  acceptedPaymentDetail?: string
  willCallDetail?: string
}

export interface City {
  name: string
}

export interface Country {
  name: CountryName
  countryCode: CountryCode
}

export enum CountryCode {
  Us = 'US',
}

export enum CountryName {
  UnitedStatesOfAmerica = 'United States Of America',
}

export interface DMA {
  id: number
}

export interface GeneralInfo {
  generalRule?: string
  childRule: string
}

export interface Location {
  longitude: string
  latitude: string
}

export interface Social {
  twitter: Twitter
}

export interface Twitter {
  handle: string
}

export interface State {
  name: string
  stateCode: string
}

export enum Timezone {
  AmericaChicago = 'America/Chicago',
  AmericaDenver = 'America/Denver',
  AmericaLosAngeles = 'America/Los_Angeles',
  AmericaNewYork = 'America/New_York',
  AmericaPhoenix = 'America/Phoenix',
}

export enum VenueType {
  Venue = 'venue',
}

export interface EventLinks {
  self: First
  attractions: First[]
  venues: First[]
}

export interface Accessibility {
  ticketLimit?: number
  info?: string
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean
}

export interface Dates {
  start: Start
  timezone?: Timezone
  status: Status
  spanMultipleDays: boolean
}

export interface Start {
  localDate: string
  localTime: string
  dateTime: string
  dateTBD: boolean
  dateTBA: boolean
  timeTBA: boolean
  noSpecificTime: boolean
}

export interface Status {
  code: Code
}

export enum Code {
  Onsale = 'onsale',
}

export interface Outlet {
  url: string
  type: string
}

export interface PriceRange {
  type: PriceRangeType
  currency: Currency
  min: number
  max: number
}

export enum Currency {
  Usd = 'USD',
}

export enum PriceRangeType {
  Standard = 'standard',
}

export interface Product {
  name: string
  id: string
  url: string
  type: ProductType
  classifications: Classification[]
}

export enum ProductType {
  Parking = 'Parking',
  Upsell = 'Upsell',
}

export interface Promoter {
  id: string
  name: PromoterName
  description: Description
}

export enum Description {
  NbaRegularSeasonNtlUsa = 'NBA REGULAR SEASON / NTL / USA',
}

export enum PromoterName {
  NbaRegularSeason = 'NBA REGULAR SEASON',
}

export interface Sales {
  public: Public
  presales?: Presale[]
}

export interface Presale {
  startDateTime: string
  endDateTime: string
  name: string
}

export interface Public {
  startDateTime: string
  startTBD: boolean
  startTBA: boolean
  endDateTime: string
}

export interface Seatmap {
  staticUrl: string
}

export interface TicketLimit {
  info: string
}

export interface Ticketing {
  safeTix?: AllInclusivePricing
  allInclusivePricing: AllInclusivePricing
}

export interface AllInclusivePricing {
  enabled: boolean
}

export enum EventType {
  Event = 'event',
}

export interface EventLinksClass {
  first: First
  self: First
  next: First
  last: First
}

export interface Page {
  size: number
  totalElements: number
  totalPages: number
  number: number
}
