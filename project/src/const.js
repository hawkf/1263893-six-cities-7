export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOT: '/',
  OFFER: '/offer/:id',
  PAGE_NOT_FOUND: '/page-not-found',
};

export const CURRENT_MARKER_URL = 'img/pin-active.svg';
export const DEFAULT_MARKER_URL = 'img/pin.svg';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/',
  FAVORITE: '/favorite'
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: high to low',
  PRICE_HIGH_TO_LOW: 'Price: low to high',
  TOP_RATED_FIRST: 'Top rated first',
}
