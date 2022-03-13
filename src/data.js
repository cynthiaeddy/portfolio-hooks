import james from './assets/james.png'
import wint3 from './assets/wint3.png'

const data = [
  {
    id: 0,
    src: `${james}`,
    link: 'https://jamesoseland.com',
    copy: [
      "James Oseland's World Food",
      "is James' website for his new book series.",
      'Incorporates Mailchimp for newsletter signup.',
      'Renders two Carousels: one built from scratch, the other using a library.',
      'Displays a React frontend with CSS grid and flexbox, being responsive.',
    ],
    frontendLink: 'https://github.com/cynthiaeddy/jim-wf',
    backendLink: null,
  },
  {
    id: 1,
    img: `${wint3}`,
    link: 'https://earth-paints.netlify.app',
    copy: 'Earth Paints is an app to discover images that Google Earth takes from afar. Implements Lazyload for faster rendering in mobile. Incorporates a searchbar where users can search by Country. React frontend styled with CSS and Semantic-ui-React.Fetches data from the Rails API using Javascript.',
    frontendLink: 'https://github.com/cynthiaeddy/google-earth-client',
    backendLink: 'https://github.com/cynthiaeddy/google-earth-api',
  },

  {
    id: 2,
    src: `${james}`,
    link: 'https://jamesoseland.com',
    copy: "James Oseland's World Food is James' website for his new book series. Incorporates Mailchimp for newsletter signup. Renders two Carousels: one built from scratch, the other using a library. Displays a React frontend with CSS grid and flexbox, being responsive.",
    frontendLink: 'https://github.com/cynthiaeddy/jim-wf',
    backendLink: null,
  },
]
export default data
