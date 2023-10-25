import { PostsTemplateProps } from '../PostsTemplate/PostsTemplate';

export default {
  setting: {
    id: '1',
    blogName: 'RogérioTech',
    blogDescription: 'Apenas um blog sobre programação...',
    logo: {
      data: {
        attributes: {
          id: '7',
          name: 'logoexample.png',
          alternativeText: null,
          url: 'https://styles.redditmedia.com/t5_5ufzky/styles/profileIcon_5mzbuujz03hb1.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=0a4fdd3243ee4239d5709ef64fbb474c03c40fc8',
        },
      },
    },
    menuLinks: [
      {
        id: '1',
        link: '#texto',
        text: 'O texto',
        newTab: false,
      },
      {
        id: '2',
        link: '#link2',
        text: 'O Link 2',
        newTab: false,
      },
    ],
    footer: 'O texto da footer ...',
  },
  posts: [
    {
      id: 1,
      title: 'A Simple Explanation of useEffect()',
      slug: 'a-simple-explanation-of-useeffect()',
      excerpt:
        'But the brevity of hooks comes at a price — theyre relatively difficult to understand at the beginning. That especially true for useEffect() — the hook that manages side-effects in functional React components.',
      cover: {
        id: '1',
        name: '',
        alternativeText: 'cover post 1',
        url: 'https://res.cloudinary.com/dl4ukgn78/image/upload/v1695762301/one_year_of_react_native_33d2a76aec.png',
      },
    },
    {
      id: 2,
      title: 'Record Type in TypeScript: A Quick Intro',
      slug: 'record-type-in-typeScript:-a-quick-intro',
      excerpt:
        'The usual way to define a type of an object in TypeScript is using an object type',
      cover: {
        id: '2',
        name: '',
        alternativeText: 'cover post 2',
        url: 'https://res.cloudinary.com/dl4ukgn78/image/upload/v1695840203/typescript_707178b8ae.png',
      },
    },
    {
      id: 3,
      title: 'Map JavaScript',
      slug: 'map-java-script',
      excerpt:
        'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...',
      cover: {
        id: '3',
        name: '',
        alternativeText: 'cover post 3',
        url: 'https://i.pinimg.com/originals/7a/fb/04/7afb0491c91b2f9e9aac56667c3be677.jpg',
      },
    },
  ],
} as PostsTemplateProps;
