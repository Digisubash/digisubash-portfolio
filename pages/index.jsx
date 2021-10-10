import Head from "next/head";
import Hero from "../components/Home/Hero";
import Videos from "../components/Home/Videos";
import Funfacts from "../components/Home/Funfacts";
import Services from "../components/Home/Services";
import Blog from "../components/Home/Blog";
import Newslatter from "../components/Home/Newslatter";
import Contact from "../components/Home/Contact";

export const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../content", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default function Home({ postsList }) {
  return (
    <>
      <Hero />
      <Videos />
      <Funfacts />
      <Services />
      <Blog posts={postsList} />
      <Newslatter />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const postsList = await importBlogPosts();

  return {
    props: {
      postsList,
    },
  };
}
