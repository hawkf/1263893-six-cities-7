import {nanoid} from 'nanoid';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const comments  = [
  {
    comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: 'Max',
    }
  },
  {
    comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    date: '2021-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: 'Max',
    }
  },
]
