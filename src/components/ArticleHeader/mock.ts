import { ArticleHeaderProps } from './ArticleHeader';

export default {
  title: 'A Simple Explanation of useEffect()',
  excerpt:
    'But the brevity of hooks comes at a price — theyre relatively difficult to understand at the beginning. That especially true for useEffect() — the hook that manages side-effects in functional React components.',
  cover:
    'https://res.cloudinary.com/dl4ukgn78/image/upload/v1695762301/one_year_of_react_native_33d2a76aec.png',
  createdAt: '2023-09-31',
  author: {
    id: '1',
    displayName: 'Gabriel Labritz',
    slug: 'gabriel-labritz',
  },
  categories: [
    {
      id: '1',
      displayName: 'React',
      slug: 'react',
    },
    {
      id: '2',
      displayName: 'JavaScript',
      slug: 'java-script',
    },
  ],
} as ArticleHeaderProps;
