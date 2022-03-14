import james from './assets/james.png'
import wint3 from './assets/wint3.png'
import whiteDoor1 from './assets/whiteDoor1.jpg'
import museum from './assets/museum.jpg'
import pets from './assets/pets.jpg'
import match_gamealt3 from './assets/match_gamealt3.jpg'
import kayaksWh2 from './assets/kayaksWh2.png'
import simon2 from './assets/simon2.jpg'

const data = [
  {
    img: `${james}`,
    title: 'worldfood',
    link: 'https://jamesoseland.com',
    copy: [
      "James Oseland's World Food ",
      "is James' website for his new book series.",
      [
        'Incorporates Mailchimp for newsletter signup.',
        'Renders two Carousels: one built from scratch, the other using a library.',
        'Displays a React frontend with CSS grid and flexbox, being responsive.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/jim-wf',
    backendLink: null,
  },
  {
    img: `${wint3}`,
    title: 'earthpaints',
    link: 'https://earth-paints.netlify.app',
    copy: [
      'Earth Paints ',
      'is an app to discover images that Google Earth takes from afar.',
      [
        'Implements Lazyload for faster rendering in mobile.',
        'Incorporates a searchbar where users can search by Country.',
        'React frontend styled with CSS and Semantic-ui-React.',
        'Fetches data from the Rails API using Javascript.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/google-earth-client',
    backendLink: 'https://github.com/cynthiaeddy/google-earth-api',
  },

  {
    img: `${whiteDoor1}`,
    title: 'doorescape',
    link: 'https://white-door-escape.netlify.app',
    copy: [
      'The White Door Escape ',
      'is a simple escape game.',
      ['Built with React Hooks and CSS.'],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/room_escape',
    backendLink: null,
  },
  {
    img: `${museum}`,
    title: 'brooklynmuseumproject',
    link: 'https://brooklyn-museum.herokuapp.com',
    copy: [
      'The Brooklyn Museum Project ',
      'is a simple escape game.',
      'Built with React Hooks and CSS.',
    ],
    frontendLink:
      'https://github.com/cynthiaeddy/brooklyn-art/tree/main/client',
    backendLink: 'https://github.com/cynthiaeddy/brooklyn-art/tree/main/server',
  },
  {
    img: `${pets}`,
    title: 'adoptapet',
    link: 'https://adopt-a-pet.netlify.app',
    copy: [
      'Adopt A Pet ',
      'is an app for adopting/maintaining a virtual pet without the upkeep of a live one.',
      [
        'Persists each user to a Postgres database.',
        'Rebuilt from a Single Page Application with Javascript to React frontend and a Rails API with JWT authorization.',
        'Employs flexbox with a hamburger menu.',
      ],
    ],
    frontendLink:
      'https://github.com/cynthiaeddy/brooklyn-art/tree/main/client',
    backendLink: 'https://github.com/cynthiaeddy/brooklyn-art/tree/main/server',
  },
  {
    img: `${match_gamealt3}`,
    title: 'matchgame',
    link: 'https://match-car-game.netlify.app',
    copy: [
      'Match Game ',
      'is a memory game.',
      [
        'Click on one card, then another. If cars match, the cards stay revealed.',
        ' You can reset game at anytime by clicking the little car at bottom. Cards will be shuffled.',
        'Built with CSS, HTML, Javascript and CSS Flexbox.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/match-game',
    backendLink: null,
  },
  {
    img: `${kayaksWh2}`,
    title: 'comeonkayak',
    link: 'https://come-on-kayak.netlify.app',
    copy: [
      'Come On Kayak ',
      'is an app for kayakers to make comments on trips and create upcoming trips.',
      [
        'Persists data to a Rails database and provides a Rails API.',
        'Displays a React, Redux frontend with Semantic-ui-React.',
        'Fetches data from the Rails API using Javascript.',
      ],
    ],
    frontendLink: 'https://github.com/cynthiaeddy/kayaking_frontend',
    backendLink: 'https://github.com/cynthiaeddy/kayaking-backend',
  },
  {
    img: `${simon2}`,
    title: 'colorpicksimon',
    link: 'https://colorpicksimon.netlify.app',
    copy: [
      'Color Pick Simon ',
      'is a variation of my childhood game.',
      [
        'Player vs Simon(computer). Simon picks one color, Player matches. Simon adds one color to each successful sequence.',
        'Player wins when color sequences match 10 times.',
        'Player has the option to restart the game at any time.',
        'Built with CSS, HTML, Javascript, CSS Grid and Flexbox.',
      ],
    ],
    frontendLink: 'https://github.com/zoey7117/color-pick2',
    backendLink: null,
  },
]
export default data
