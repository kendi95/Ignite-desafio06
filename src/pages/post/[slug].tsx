import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

import { Header } from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import banner from '../../assets/banner.png';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(): ReactElement {
  // TODO
  return (
    <>
      <Header />

      {/* <Image
        src="../../assets/banner.png"
        alt="Banner"
        width="1440"
        height="400"
      /> */}
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
