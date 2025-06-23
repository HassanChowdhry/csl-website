import { Head } from "next/document";
import Link from "next/link";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import Content from "../components/Content";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinUs from "../components/JoinUs";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Team from "../components/Team";
import UserForm from "../components/UserForm";
import MockInterviews from "../components/MockInterviews";
import ICPC from "../components/ICPC";
import UpcomingEvents from "../components/UpcomingEvents";
import LatestUpdates from "../components/LatestUpdates";
import DiscordInvite from "../components/DiscordInvite";
import Testimonials from "../components/Testimonials";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Content />
      <MockInterviews />
      <ICPC />
      <CTA />
      <UpcomingEvents />
      <Testimonials />
      <Team />
      <LatestUpdates />
      <DiscordInvite />
      {/* <Stats /> */}
      <JoinUs />
      {/* <Features />  */}
      {/* <Contact /> */}
    </div>
  );
};

export default IndexPage;
