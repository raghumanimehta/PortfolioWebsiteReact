export interface BlogMetadata {
    slug: string;
    title: string;
    publishedAt: string;
    excerpt: string;
    tags: string[];
    coverImage?: string;
    readingTime?: string;
    featured?: boolean;
}

export interface BlogSection {
    heading?: string;
    paragraphs: string[];
}

export interface BlogPost {
    metadata: BlogMetadata;
    content: BlogSection[];
}
