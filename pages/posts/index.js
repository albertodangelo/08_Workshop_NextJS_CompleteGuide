import React, { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
/* 
const DUMMY_POSTS = [
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
];
 */
const AllPostsPage = (props) => {
  /*  return <AllPosts posts={DUMMY_POSTS} />; */
  return (
    <Fragment>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.allPosts} />;
    </Fragment>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      allPosts: posts,
    },
  };
}

export default AllPostsPage;
