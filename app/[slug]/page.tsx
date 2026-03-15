import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowLeft } from "lucide-react";

export const revalidate = 0; // Disable cache for this page

// 1. الـ Query المصححة على حساب طلب السيرفر ديالك
const GET_POST_DETAIL = gql`
  query GetPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
      seo {
        title
        description
        canonicalUrl
        openGraph {
          title
          description
          image {
            secureUrl
          }
        }
      }
    }
  }
`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 2. توليد الـ SEO Metadata (RankMath)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { data } = await getClient().query<any>({
      query: GET_POST_DETAIL,
      variables: { id: slug },
    });

    if (!data?.post) return { title: "Post Not Found" };

    const { seo, title } = data.post;

    return {
      title: seo?.title || title,
      description: seo?.description || "",
      alternates: {
        canonical: seo?.canonicalUrl || "",
      },
      openGraph: {
        title: seo?.openGraph?.title || title,
        description: seo?.openGraph?.description || seo?.description,
        images: seo?.openGraph?.image?.secureUrl ? [seo.openGraph.image.secureUrl] : [],
      },
    };
  } catch (error) {
    console.error("Metadata Error:", error);
    return { title: "Appolo IPTV" };
  }
}

// 3. الصفحة الرئيسية للمقال
export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = await params;

  const { data, errors } = await getClient().query<any>({
    query: GET_POST_DETAIL,
    variables: { id: slug },
    errorPolicy: "all",
  });

  if (errors || !data?.post) {
    console.error("GraphQL Errors:", errors);
    notFound();
  }

  const post = { ...data.post };
  
  // Clean content from WP-injected backend URLs and embeds
  post.content = (post.content as string)
    .replace(/<p>https:\/\/backend\.apollogroupsiptv\.com\/.*?<\/p>/gi, '')
    .replace(/<blockquote[^>]*?class="[^"]*wp-embedded-content[^"]*"[^>]*?>[\s\S]*?<\/blockquote>/gi, '')
    .replace(/<iframe[^>]*?class="[^"]*wp-embedded-content[^"]*"[^>]*?>[\s\S]*?<\/iframe>/gi, '')
    .replace(/<p>\s*<\/p>/gi, '') // Remove empty paragraphs left behind
    .trim();

  // Estimate reading time (rough calculation)
  const wordCount = post.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
            {post.title}
          </span>
        </nav>

        <article className="bg-card rounded-3xl shadow-2xl p-6 md:p-12 border border-border relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-0" />
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>

          <header className="mb-10 border-b border-border pb-10 relative z-10">
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Latest Tech Insights 2026
              </div>
            </div>
          </header>

          {/* عرض المحتوى مع دعم Tailwind Typography */}
          <div
            className="prose prose-lg md:prose-xl prose-invert prose-emerald max-w-none 
                       relative z-10
                       prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:text-muted-foreground prose-p:leading-relaxed
                       prose-img:rounded-3xl prose-img:shadow-2xl
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-foreground prose-strong:font-bold
                       prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic
                       prose-table:border prose-table:border-border prose-table:rounded-xl prose-table:overflow-hidden
                       prose-th:bg-muted/50 prose-th:p-4 prose-th:text-foreground
                       prose-td:p-4 prose-td:border-t prose-td:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-16 pt-10 border-t border-border flex flex-col items-center text-center">
            <p className="text-muted-foreground mb-6">Want to experience this quality yourself?</p>
            <Link href="https://wa.me/212707711512?text=Claim%20Your%20Free%2024H%20Trial%20-%20https%3A%2F%2Fapollogroupsiptv.com" target="_blank" className="neon-glow bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
              Claim Your Free 24H Trial
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}