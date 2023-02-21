import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchPopularPosts } from '../lib/ga';


export const getStaticProps: GetStaticProps = async () => {

  const popularData = await fetchPopularPosts('14daysAgo', 2);
  return {
    props: {
      popularData
    }
  };
};

const Popular: NextPage = (popularData) => {
  const router = useRouter();
  console.log(popularData)

  // if (router.isFallback || !articles) {
  //   return <Loader />;
  // }

  // const popularArticles: Article[] = popularData
  //   .map((pd: PopularData) => {
  //     return articles.find((article: Article) => `/articles/${article.id}` === pd.path);
  //   })
  //   .filter((article): article is Exclude<typeof article, undefined> => article !== undefined)
  //   .slice(0, 12);

  return (
    <>
      {/* <PageSeo
        description={`人気記事の一覧ページです。よく読まれている記事を一覧表示しています。`}
        title={'人気記事一覧'}
      />
      <ListPaper articles={popularArticles} id='popular-articles' title='人気記事一覧' /> */}
      test
    </>
  );
};

export default Popular;