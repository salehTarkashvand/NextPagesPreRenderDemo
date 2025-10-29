import { getFeaturedEvents } from "../helpers/api-util"
import EventList from '../components/events/event-list';
import Head from "next/head";

function HomePage(props) {
  const {events} = props

  return (
    <div>
      <Head>
        <title>nextJs events</title>
        <meta name="description" content="find a lot of great events that allow you to evolve" />
      </Head>
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
