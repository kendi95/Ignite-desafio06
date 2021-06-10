import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Prismic from '@prismicio/client';

import { Header } from '../components/Header';
import { Post } from '../components/Post';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): ReactElement {
  // TODO

  return (
    <>
      <Header />

      {postsPagination.results.length > 0 &&
        postsPagination.results.map(post => (
          <Post
            author={post.data.author}
            first_publication_date={post.first_publication_date}
            slug={post.uid}
            subtitle={post.data.subtitle}
            title={post.data.title}
            key={post.uid}
          />
        ))}

      {postsPagination.next_page && (
        <button type="button" className={styles.loadPostsButton}>
          Carregar mais posts
        </button>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    Prismic.predicates.at('document.type', 'posts'),
    {
      fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 4,
    }
  );

  const { next_page, results } = postsResponse;

  // TODO
  return {
    props: {
      postsPagination: {
        next_page,
        results: results.map(result => {
          return {
            uid: result.uid,
            first_publication_date: result.first_publication_date,
            data: {
              title: result.data.title,
              subtitle: result.data.subtitle,
              author: result.data.author,
            },
          };
        }),
      },
    },
    revalidate: 1000 * 60 * 60,
  };
};
