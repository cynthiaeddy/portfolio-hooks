import james from './assets/james.png'
import wint3 from './assets/wint3.png'

const data = [
  {
    id: 0,
    img: { james },
    link: <a href='https://jamesoseland.com'></a>,
    copy: "James Oseland's World Food is James' website for his new book series. Incorporates Mailchimp for newsletter signup. Renders two Carousels: one built from scratch, the other using a library. Displays a React frontend with CSS grid and flexbox, being responsive.",
  },
  {
    id: 1,
    img: <img src={wint3} className='project-solo' alt='painting' />,
    link: <a href='https://earth-paints.netlify.app'></a>,
    copy: (
      <h3>
        <strong>Earth Paints</strong> is an app to discover images that Google
        Earth takes from afar.
        <ul>
          <li>Implements Lazyload for faster rendering in mobile.</li>
          <li>Incorporates a searchbar where users can search by Country.</li>
          <li>React frontend styled with CSS and Semantic-ui-React. </li>
          <li>Fetches data from the Rails API using Javascript.</li>
        </ul>
      </h3>
    ),
  },
]
export default data
