import Head from "next/head";
import Hero from "../components/Home/Hero";
import Videos from "../components/Home/Videos";
import Funfacts from "../components/Home/Funfacts";
import Services from "../components/Home/Services";
import Blog from "../components/Home/Blog";
import Newslatter from "../components/Home/Newslatter";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Videos />
      <Funfacts />
      <Services />
      <Blog />
      <Newslatter />
      <Contact />
    </>
  );
}
