import cn from 'classnames'
import Link from 'next/link'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  return (
    <div className="sm:mx-0">
      CoverImage
    </div>
  )
}
