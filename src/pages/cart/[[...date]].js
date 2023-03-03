import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

import SubLayout from 'components/SubLayout';
import Layout from 'components/Layout';
import Link from 'next/link';

export default function CartDate() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href="/cart/2022/06/05">2022년 6월 5일로</Link>
      <br />
      <button onClick={() => router.push('/cart/2022/06/04')}>
        2022년 6월 4일로
      </button>
    </>
  );
}

CartDate.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
