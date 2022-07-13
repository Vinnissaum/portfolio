import { PropTypes } from 'prop-types';

import styles from './PageContainer.module.scss';

export default function PageContainer({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
