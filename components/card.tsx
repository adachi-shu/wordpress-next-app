import React from 'react';
import { Card } from 'flowbite-react'

export default function CardItem({
  title,
  id,
  excerpt,
  image
}) {
  return (
    <Card imgSrc={image?.node.sourceUrl} className="card">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
        {title}
      </h5>
      <div
        className="font-normal text-gray-700 dark:text-gray-400 line-clamp-1"
        dangerouslySetInnerHTML={{
          __html: `${excerpt}`,
        }}/>
    </Card>
  )
}