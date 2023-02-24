import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getBlogData } from '../lib/api'
import { Card } from 'flowbite-react'
import Img from "./public/photo.jpg"
import Header from '../components/header';
import CardItem from '../components/card';

export default function Blogs({ allPosts: { edges }, preview }) {
  const data = edges
  const img = data.featuredImage?.node.sourceUrl

  return (
    <div>
      <Header/>
      <Head>
        <title>BLOG</title>
        <meta
          property="og:image"
          content={data.featuredImage?.node.sourceUrl}
        />
      </Head>
      <div className="m-20">
        <div className="text-center">
          <h1 className="inline-block text-3xl font-bold border-inherit border-solid border-b-2 mb-14">BLOG</h1>
        </div>
        <div className="flex flex-wrap">
          {data.map(({ node }) => (
           <div className="md:basis-1/3 basis-1/2 p-2">
            <Link href={`/posts/${node.id}`} key={node.id}>
              {data && (
                <CardItem
                  title={node.title}
                  id={node.id}
                  excerpt={node.excerpt}
                  image={node.featuredImage}
                />
              )}
            </Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getBlogData(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}