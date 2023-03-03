import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

import SubLayout from 'components/SubLayout';
import Layout from 'components/Layout';

export default function CategorySlug() {
  const router = useRouter();
  const { slug, from } = router.query;
  return (
    <>
      <h1 className={styles.title}>
        Category {slug} {from}
      </h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
