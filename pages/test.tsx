import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getPostsData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

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