import { gql } from "@apollo/client";
import { getClient } from "@/lib/apollo-client";
import Link from "next/link";

export const revalidate = 0; // Disable cache for this page

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node { sourceUrl }
        }
      }
    }
  }
`;

export default async function BlogPage() {
  const { data } = await getClient().query({ query: GET_ALL_POSTS });
  const posts = data?.posts?.nodes || [];

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-10 border-b border-border pb-4 text-foreground">Our Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div key={post.id} className="group border border-border bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            {post.featuredImage?.node?.sourceUrl && (
              <img src={post.featuredImage.node.sourceUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 text-foreground">{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className="text-muted-foreground line-clamp-3 mb-4" />
              <Link href={`/${post.slug}`} className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full hover:brightness-110 transition-colors">
                Read Article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}