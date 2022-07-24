import Head from 'next/head';

type SeoProps = {
  title: string;
};

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
