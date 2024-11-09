export interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content?: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    }
    categories: {
      nodes: Category[]
    }
    seo?: {
      title: string;
      metaDesc: string;
      opengraphImage?: {
        sourceUrl: string;
      }
    }
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
    posts?: {
      nodes: Post[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      }
    }
  }