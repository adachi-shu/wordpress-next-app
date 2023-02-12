import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getBlogData } from '../lib/api'
import { Card } from 'flowbite-react'
import Img from "./public/photo.jpg"

export default function Blog({ allPosts: { edges }, preview }) {
  const data = edges

  return (
    <div>
      <Head>
        <title>BLOG</title>
      </Head>
      <div className="m-20">
        <div className="text-center">
          <h1 className="inline-block text-3xl font-bold border-inherit border-solid border-b-2 mb-14">BLOG</h1>
        </div>
        <div className="flex flex-wrap">
          {data.map(({ node }) => (
            <Link href={`/posts/${node.id}`} key={node.id} className="md:basis-1/3 basis-1/2 p-2">
              <Card imgSrc={Img.src}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {node.title}
                </h5>
                <div
                  className="font-normal text-gray-700 dark:text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: `${node.excerpt}`,
                  }}/>
              </Card>
            </Link>
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