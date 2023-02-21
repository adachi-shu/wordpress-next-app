import { isConstructorDeclaration } from 'typescript'
import styles from './post-body.module.css'

export default function PostBody({ content }) {
  console.log(content)
  return (
    <div className="max-w-2xl mx-auto postbody">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
