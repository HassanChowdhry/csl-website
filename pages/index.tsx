import Head from "next/head";
import Navbar from "../components/Navbar";
// import Companies from "../components/Companies";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import JoinUs from "../components/JoinUs";
import Services from "../components/Services";
import Team from "../components/Team";
// import Events from "../components/Events";
// import LatestUpdates from "../components/LatestUpdates";
import Discord from "../components/Discord";
import Testimonials from "../components/Testimonials";
import Content from "../components/Content";
const IndexPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DAL CSL</title>
        <meta name="description" content="The ONLY society that teaches you to crack coding interviews and get your dream job at top tech companies." />
      </Head>
      
      <div>
        <Navbar />
        <Hero />
        <Content />
        <Services />
        <Discord />
        <CTA />
        <Team />
        <Testimonials />
        <JoinUs />
      </div>
    </>
  );
};

export default IndexPage;
