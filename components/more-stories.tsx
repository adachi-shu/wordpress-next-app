import PostPreview from './post-preview'
import Link from 'next/link'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          // <PostPreview
          //   key={node.slug}
          //   title={node.title}
          //   coverImage={node.featuredImage}
          //   date={node.date}
          //   author={node.author}
          //   slug={node.slug}
          //   excerpt={node.excerpt}
          // />
          <Link href={`/posts/${node.id}`} key={node.id} className="md:basis-1/3 basis-1/2 p-2">
            <p>{node.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
