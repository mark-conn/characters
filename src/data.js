export const cartoonCharacters = [
  {
      name: 'Homer Simpson',
      show: 'The Simpsons',
      images: [
          'https://i.ytimg.com/vi/pjAF3BWSan0/maxresdefault.jpg',
          'https://pbs.twimg.com/profile_images/609439993094770690/MqfzEbtj.jpg'
      ],
      firstAppearance: '1989',
      reference: '#HomersCard',
      supportingCharacters: [
          {
              name: 'Barney Gumble',
              reference: '#BarneysCard',
              image: 'https://englishvg1.wikispaces.com/file/view/image012.gif/33664991/215x219/image012.gif'
          },
          {
              name: 'Marge Simpson',
              reference: '#MargesCard',
              image: 'http://pngimg.com/uploads/simpsons/simpsons_PNG91.png'
          },   
      ],
      bestQuotes: [
          {
              quote: 'I’ve learned that life is one crushing defeat after another until you just wish Flanders was dead.',
              episode: { 
                  title: 'Homer and Apu', 
                  year: '1994' 
              },
              insight: 'I live for unneeded Flanders insults, and Homer always delivers'
          }
      ],
      superPowers: [
          'Inhaling Beer',
          'Horrible Parenting',
          'Thick head',
          'Nuclear Technician with no education',
          'Married Marge'
      ]
  },
];

export const headerList = [
    {
        title: 'Trending',
        subTopics: [

        ],
        icon: 'icon'
    },
    {
        title: 'Topics',
        subTopics: [
            {
                title: 'Charts'
            },
            {
                title: 'Commerce'
            },
            {
                title: 'Bitcoin'
            },
        ],
        icon: 'icon'
    },
    {
        title: 'Writers',
        subTopics: [
            {
                title: 'Charts'
            },
            {
                title: 'Commerce'
            },
            {
                title: 'Bitcoin'
            },
        ],
        icon: 'icon'
    },
    {
        title: 'More',
        subTopics: [

        ],
        icon: 'icon'
    }
]