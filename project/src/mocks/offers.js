const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers = [
  {
    id: '1',
    cityName: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: true,
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: '1',
      isPro: true,
      name: 'Angelina',
    },
    cardImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    isPremium: true,
  },
  {
    id: '2',
    cityName: 'Cologne',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: true,
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: '2',
      isPro: true,
      name: 'Angelina',
    },
    cardImage: 'img/room.jpg',
    price: 80,
    rating: 3.1,
    title: 'Wood and stone place',
    type: 'Private room',
    isPremium: false,
  },
  {
    id: '3',
    cityName: 'Paris',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    isFavorite: true,
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: '3',
      isPro: true,
      name: 'Angelina',
    },
    cardImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.5,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    isPremium: true,
  },
  {
    id: '4',
    isFavorite: false,
    cityName: 'Paris',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: '4',
      isPro: true,
      name: 'Angelina',
    },
    cardImage: 'img/apartment-03.jpg',
    price: 150,
    rating: 4.1,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    isPremium: false,
  },
];


