import { PostGridProps } from './PostGrid';

export default {
  posts: [
    {
      id: '1',
      title: 'A Simple Explanation of useEffect()',
      slug: 'a-simple-explanation-of-useeffect()',
      excerpt:
        'But the brevity of hooks comes at a price — theyre relatively difficult to understand at the beginning. That especially true for useEffect() — the hook that manages side-effects in functional React components.',
      cover:
        'https://res.cloudinary.com/dl4ukgn78/image/upload/v1695762301/one_year_of_react_native_33d2a76aec.png',
    },
    {
      id: '2',
      title: 'Record Type in TypeScript: A Quick Intro',
      slug: 'record-type-in-typeScript:-a-quick-intro',
      excerpt:
        'The usual way to define a type of an object in TypeScript is using an object type',
      cover:
        'https://res.cloudinary.com/dl4ukgn78/image/upload/v1695840203/typescript_707178b8ae.png',
    },
    {
      id: '3',
      title: 'Map JavaScript',
      slug: 'map-java-script',
      excerpt:
        'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...',
      cover:
        'https://i.pinimg.com/originals/7a/fb/04/7afb0491c91b2f9e9aac56667c3be677.jpg',
    },
  ],
} as PostGridProps;
