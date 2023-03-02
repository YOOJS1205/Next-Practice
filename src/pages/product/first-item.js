import styles from '../../../styles/Home.module.css';

import SubLayout from '../../components/SubLayout';
import Layout from '../../components/Layout';

export default function FirstItem() {
  return (
    <>
      <h1 className={styles.title}>First Item</h1>
    </>
  );
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
