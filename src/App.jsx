import {
  Hero,
  PopularProducts,
  SuperQuality,
  Subscribe,
  Services,
  SpecialOffer,
  CustomerReviews,
  Footer,
} from "./sections";
import Nav from "./components/Nav.jsx";

const App = () => (
  <main>
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding sm:py-32 py-16 w-dull">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
