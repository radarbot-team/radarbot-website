import ReactMarkdown from 'react-markdown';
import styles from './TermsSection.module.css';

export function TermsSection(props: { titleContent: string, paragraph: string, id: string}) {
  return (
    <div id={props.id} className={styles.container}>
      <div className={styles.title}>
        {props.titleContent}
      </div>
      <p>
        <ReactMarkdown>
          {props.paragraph}

        </ReactMarkdown>
      </p>
    </div>
  )
}