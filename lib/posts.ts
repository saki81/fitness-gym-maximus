import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  author: {
    name: string;
    bio: string;
    avatar: string;
    social: {
      instagram?: string;
      linkedin?: string;
    };
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seo: {
    metaDescription: string;
    keywords: string[];
    canonicalUrl: string;
  };
  readingTime: number;
  published: boolean;
  relatedPosts: string[];
  content: string;
}

interface PostFrontmatter {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags?: string[];
  author: {
    name: string;
    bio: string;
    avatar: string;
    social: {
      instagram?: string;
      linkedin?: string;
    };
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seo: {
    metaDescription: string;
    keywords: string[];
    canonicalUrl: string;
  };
  readingTime?: number;
  published?: boolean;
  relatedPosts?: string[];
}

const POSTS_DIR = path.join(process.cwd(), "content");

const CATEGORIES = [
  "ishrana",
  "suplementacija",
  "trening",
];

function getCategoryPath(category: string): string {
  return path.join(POSTS_DIR, category);
}

function readMarkdownFile(filePath: string): string | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}

function createPost(
  slug: string,
  data: PostFrontmatter,
  content: string
): Post {
  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    tags: data.tags ?? [],
    author: data.author,
    image: data.image,
    seo: data.seo,
    readingTime: data.readingTime ?? 5,
    published: data.published !== false,
    relatedPosts: data.relatedPosts ?? [],
    content,
  };
}

export function getAllPosts(): Post[] {
  const allPosts: Post[] = [];

  for (const category of CATEGORIES) {
    const categoryPath = getCategoryPath(category);

    if (!fs.existsSync(categoryPath)) {
      continue;
    }

    const fileNames = fs
      .readdirSync(categoryPath)
      .filter((fileName) => fileName.endsWith(".md"));

    for (const fileName of fileNames) {
      const slug = fileName.replace(/\.md$/, "");
      const post = getPostBySlug(`${category}/${slug}`);

      if (post?.published) {
        allPosts.push(post);
      }
    }
  }

  return allPosts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export function getLatestPosts(limit = 3): Post[] {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = slug.includes("/")
    ? path.join(POSTS_DIR, `${slug}.md`)
    : CATEGORIES
        .map((category) =>
          path.join(POSTS_DIR, category, `${slug}.md`)
        )
        .find((filePath) => fs.existsSync(filePath));

  if (!fullPath) {
    return null;
  }

  const fileContents = readMarkdownFile(fullPath);

  if (!fileContents) {
    return null;
  }

  const { data, content } = matter(fileContents);

  const cleanSlug = slug.split("/").pop() ?? slug;

  return createPost(
    cleanSlug,
    data as PostFrontmatter,
    content
  );
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category === category
  );
}

export function getRelatedPosts(
  category: string,
  currentSlug: string,
  relatedPosts: string[]
): Post[] {
  const posts: Post[] = [];

  for (const relatedSlug of relatedPosts) {
    if (relatedSlug === currentSlug) {
      continue;
    }

    for (const cat of CATEGORIES) {
      const categoryPath = getCategoryPath(cat);

      if (!fs.existsSync(categoryPath)) {
        continue;
      }

      const filePath = path.join(
        categoryPath,
        `${relatedSlug}.md`
      );

      if (!fs.existsSync(filePath)) {
        continue;
      }

      const post = getPostBySlug(`${cat}/${relatedSlug}`);

      if (post?.published) {
        posts.push(post);
      }

      break;
    }
  }

  return posts;
}

