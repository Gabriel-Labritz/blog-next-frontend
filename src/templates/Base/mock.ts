import { BaseTemplateProps } from './Base';

export default {
  setting: {
    id: '',
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
  children: 'Hello World !!!',
} as BaseTemplateProps;
