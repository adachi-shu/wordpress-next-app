import { GetStaticProps } from 'next'
import { getPostsData } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const data = edges
  // console.log(data)

  return (
    <div>
      test sample
      <ul>
        {data.map(({ node }) => (
          <p>{node.title}</p>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getPostsData(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}