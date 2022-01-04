import fs from "fs";
import matter from "gray-matter";
import path from "path";

const pathToMarkdownFiles = path.join(process.cwd(), "pages/mein-inhalt");

export function getPostFiles() {
  return fs.readdirSync(pathToMarkdownFiles);
}

export function getMarkdownData(fileNameIdentifier) {
  const postSlug = fileNameIdentifier.replace(/\.md$/, ""); // entfernt den Datei Type .md

  const filePath = path.join(pathToMarkdownFiles, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  const mardownFiles = getPostFiles();

  const allPosts = mardownFiles.map((postFile) => {
    return getMarkdownData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
