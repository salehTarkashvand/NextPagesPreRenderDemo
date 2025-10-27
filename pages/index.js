import { getFeaturedEvents } from "../helpers/api-util"
import EventList from '../components/events/event-list';

function HomePage(props) {
  const {events} = props

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const getFeatured = await getFeaturedEvents()
return{
  props :{
    events: getFeatured
  },
  revalidate : 1800
}
}

export default HomePage;
