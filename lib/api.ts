import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from '../utils/mdxUtils';

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

type PostItems = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: string[] = []): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  // // format date, and if date is less than a month ago show "x days ago"
  // const date = new Date(items.date);
  // const now = new Date();
  // const diff = Math.abs(now.getTime() - date.getTime());
  // const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  // if (diffDays < 14) {
  //   items.date = `${diffDays} days ago`;
  //   // if date is less than 2 months ago show "x weeks ago"
  // } else if (diffDays < 60) {
  //   items.date = `${Math.ceil(diffDays / 7)} weeks ago`;

  //   // if date is less than 4 months ago show "x months ago"
  // } else if (diffDays < 120) {
  //   items.date = `${Math.ceil(diffDays / 30)} months ago`;
  // } else {
  //   items.date = date.toLocaleDateString('en-US', {
  //     day: 'numeric',
  //     month: 'long',
  //     year: 'numeric',
  //   });
  // }

  return items;
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  // after sorting, format dates
  posts.forEach((post) => {
    const date = new Date(post.date);
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays < 14) {
      post.date = `${diffDays} days ago`;

    } else if (diffDays < 60) {
      post.date = `${Math.ceil(diffDays / 7)} weeks ago`;
    } else {
      post.date = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  });

  return posts;
}
