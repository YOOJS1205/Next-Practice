import Layout from 'components/Layout';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

// export default function App({ Component, pageProps }) {
//   const Layout = Component.Layout || ((page) => <Layout>{page}</Layout>);
//   return Layout(<Component {...pageProps} />);
// }
