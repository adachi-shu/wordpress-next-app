import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getPostData,getAllBlogWithId } from '../../lib/api'
import { Card } from 'flowbite-react'
import Img from "./public/photo.jpg"
import Header from '../../components/header';

export default function Blog({post}) {

  return (
    <div>
      <Header/>
      <Head>
        <title>BLOG</title>
        <meta
          property="og:image"
          // content={data.featuredImage?.node.sourceUrl}
        />
      </Head>
      <div className="m-20">
        <div className="text-center">
          <h1 className="inline-block text-3xl font-bold border-inherit border-solid border-b-2 mb-14">BLOG</h1>
        </div>
        <div className="flex flex-wrap">
          post.title = {post.title}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getPostData(context.params.id)

  return {
    props: {
      post: data.post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllBlogWithId()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.id}`) || [],
    fallback: false,
  }
}
