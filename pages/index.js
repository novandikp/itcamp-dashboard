import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Events from "../components/Events";
import Video from "../components/Video";
import MediaPartner from "../components/MediaPartner";
import Section from "../components/Section";
import Subscribe from "../components/Subscribe";
import {
    competition,
    header,
    video,
    sponsor,
} from "../public/assets/data/index.json";
import data from "../public/assets/data/cso.json";
import Header from "../components/Header";
import Sponsor from "../components/Sponsor";
import Timeline from "../components/Timeline";
import Faq from "../components/Faq";

import InformationDetail from "../components/InformationDetail";
const HomePage = () => {
    return ( <
        Layout pageTitle = "Fasilkom Fest" >
        <
        Header / >
        <
        Navigation competition = { competition }
        /> <
        Banner header = { header }
        /> <
        InformationDetail data = { data }
        /> <
        Video data = { video }
        />  <
        Timeline data = { data }
        /> <
        Faq data = { data }
        /> <
        Sponsor sponsors = { sponsor }
        /> <
        MediaPartner / >
        <
        Footer / >
        <
        /Layout>
    );
};

export default HomePage;