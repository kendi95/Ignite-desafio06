import { FC } from 'react';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';

import styles from './post.module.scss';
import { formatDate } from '../../utils/formatDate';

interface PostProps {
  slug: string;
  title: string;
  subtitle: string;
  first_publication_date: string;
  author?: string;
}

export const Post: FC<PostProps> = ({
  author,
  first_publication_date,
  slug,
  subtitle,
  title,
}) => {
  return (
    <Link href={`/post/${slug}`} passHref>
      <div className={styles.container}>
        <strong>{title}</strong>
        <span>{subtitle}</span>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <FiCalendar />
            <span>{formatDate(first_publication_date)}</span>
          </div>

          <div className={styles.info}>
            <FiUser />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
