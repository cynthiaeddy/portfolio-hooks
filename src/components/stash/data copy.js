import james from './assets/james.png'
import wint3 from './assets/wint3.png'

const data = [
  {
    id: 0,
    img: <img src={james} alt='james' />,
    link: <a href='https://jamesoseland.com'></a>,
    copy: (
      <h3>
        <strong>James Oseland's World Food</strong> is James' website for his
        new book series.
        <ul>
          <li>Incorporates Mailchimp for newsletter signup.</li>
          <li>
            Renders two Carousels: one built from scratch, the other using a
            library.
          </li>
          <li>
            Displays a React frontend with CSS grid and flexbox, being
            responsive.
          </li>
        </ul>
      </h3>
    ),
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
