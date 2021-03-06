import React, { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

/* const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS ist the framework for production",
    date: "2021-10-12",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS ist the framework for production",
    date: "2021-10-12",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS ist the framework for production",
    date: "2021-10-12",
  },
]; */

const HomePage = (props) => {
  console.log(props.posts);

  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta name="description" content="I post about web and programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      {/* <FeaturedPosts posts={DUMMY_POSTS} /> */}
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
