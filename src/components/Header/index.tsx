import { FC } from 'react';
import { RiCodeSSlashLine } from 'react-icons/ri';

import styles from './header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <RiCodeSSlashLine />
      <strong>
        spacetraveling <span>.</span>
      </strong>
    </div>
  );
};
