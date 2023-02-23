import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchPopularPosts } from '../lib/ga';
import { getAllPostsForHome, getBlogData, getPostData } from '../lib/api'
import Header from '../components/header';
import Head from 'next/head'
import Link from 'next/link'
import { Card } from 'flowbite-react'
import Img from "./public/photo.jpg"


export const getStaticProps: GetStaticProps = async ({preview = false}) => {

  const popularData = await fetchPopularPosts('14daysAgo', 5);
  const allData = await getBlogData(preview);

  return {
    props: {
      popularData,
      allData
    }
  };
};

export default function Blogs({ allData: { edges }, popularData }) {
  const data = edges
  const img = data.featuredImage?.node.sourceUrl
  console.log(data)

  const popularBlogData = popularData.map((v) => {
    return data.find((e) => {
      return e.node.id == v
    })
  })

  return (
    <div>
      <Header/>
      <Head>
        <title>BLOG</title>
        <meta
          property="og:image"
          content={popularBlogData.featuredImage?.node.sourceUrl}
        />
      </Head>
      <div className="m-20">
        <div className="text-center">
          <h1 className="inline-block text-3xl font-bold border-inherit border-solid border-b-2 mb-14">人気投稿</h1>
        </div>
        <div className="flex flex-wrap">
          {popularBlogData.map(({ node }) => (
            <Link href={`/blog/${node.id}`} key={node.id} className="md:basis-1/3 basis-1/2 p-2">
              <Card imgSrc={Img.src}>
                <div
                  dangerouslySetInnerHTML={{ __html: img }}
                />
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