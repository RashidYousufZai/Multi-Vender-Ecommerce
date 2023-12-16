import EventCard from "../component/Events/EventCard.jsx";
import Footer from "../component/Layout/Footer.jsx";
import Header from "../component/layout/Header.jsx";

const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <Footer />
    </div>
  );
};

export default EventsPage;
