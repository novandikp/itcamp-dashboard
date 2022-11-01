import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InformationHeader from "../components/InformationHeader";
import Timeline from "../components/Timeline";
import Faq from "../components/Faq";
import Question from "../components/Question";
import Additional from "../components/Additional";
import Prize from "../components/Prize";
import InformationDetail from "../components/InformationDetail";
import { competition } from "../public/assets/data/index.json";
import Header from "./Header";
const DetailCompetition = ({ data }) => (
  <Layout pageTitle="Fasilkom Fest">
    <Header />
    <Navigation competition={competition} />
    <InformationHeader data={data} />
    <InformationDetail data={data} />
    <Prize data={data} />
    <Additional data={data} />
    <Timeline data={data} />
    <Faq data={data} />
    <Question data={data} />
    <Footer />
  </Layout>
);

export default DetailCompetition;
