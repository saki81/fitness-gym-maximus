import fs from "fs";
import path from "path";
import matter from "gray-matter";
 
export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  tags: string[]
  author: {
    name: string
    bio: string
    avatar: string
    social: {
      instagram?: string
      linkedin?: string
    }
  }
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  seo: {
    metaDescription: string
    keywords: string[]
    canonicalUrl: string
  }
  readingTime: number
//  featured: boolean
  published: boolean  
//  lastModified: string
  relatedPosts: string[]
  content: string
}

const POSTS_DIR = path.join(process.cwd(), "content");
const CATEGORIES = ["ishrana", "suplementacija", "trening"]

function getCategoryPath(category: string) {
  return path.join(POSTS_DIR, category);
}

function readMarkdownFile(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

 function Post(slug: string, data: any, content: string): Post {
  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    tags: data.tags || [],
    author: data.author,
    image: data.image,
    seo: data.seo,
    readingTime: data.readingTime || 5,
  //  featured: data.featured || false,
    published: data.published !== false,
  //  lastModified: data.lastModified || data.date,
    relatedPosts: data.relatedPosts || [],
    content,
  };
}

    


export  function getAllPosts(): Post[] {
    const allPosts: Post[] = [];

    for (const category of CATEGORIES) {
        const categoryPath = getCategoryPath(category);
        if (!fs.existsSync(categoryPath)) continue;

        const fileNames = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".md"));

        for (const fileName of fileNames) {
            const slug = fileName.replace(/\.md$/, "");
            const post =  getPostBySlug(`${category}/${slug}`);
            if (post?.published) allPosts.push(post)
        }
    }
   
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());;
} 

export function getLatestPosts(limit = 3): Post[] {
  const allPosts = getAllPosts(); // SINHRONO
  return allPosts.slice(0, limit);
}

export  function getPostBySlug(slug: string): Post | null {
  let fullPath = slug.includes("/")
    ? path.join(POSTS_DIR, `${slug}.md`)
    : CATEGORIES.map((c) => path.join(POSTS_DIR, c, `${slug}.md`)).find(fs.existsSync);

  if (!fullPath) return null;

  const fileContents = readMarkdownFile(fullPath);
  if (!fileContents) return null;

 const { data, content} = matter(fileContents);

 const cleanSlug = slug.split("/").pop() || slug;


  return Post(cleanSlug, data, content);
}

export  function getPostsByCategory(category: string): Post[] {
  const allPosts =  getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export  function getRelatedPosts(category: string, currentSlug: string, limit = 3): Post[] {
  const categoryPath = getCategoryPath(category);
  if (!fs.existsSync(categoryPath)) return [];

  const fileNames = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".md"));
  const posts: Post[] = [];

  for (const fileName of fileNames) {
    const slug = fileName.replace(/\.md$/, "");
    if (slug === currentSlug) continue;

    const post =  getPostBySlug(`${category}/${slug}`);
    if (post?.published) posts.push(post);
  }

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

