import type { NextPage } from "next";
import { Header } from "../components/Header";
import { HeadTitle } from "../components/HeadTitle";

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle title="Home" />
      <Header />
      <div>main</div>
    </>
  );
};

export default Home;
