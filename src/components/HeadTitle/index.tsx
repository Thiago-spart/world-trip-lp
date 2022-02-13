import Head from "next/head";

interface Props {
  title: string;
}

export const HeadTitle: React.FC<Props> = ({ title }) => (
  <Head>
    <title>{title} | WorldTrip</title>
  </Head>
);
