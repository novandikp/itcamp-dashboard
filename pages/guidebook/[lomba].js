import Link from "next/link";
import Loading from "../../components/Loading";
import { guidebook } from "../../public/assets/data/link.json";
import Router from "next/router";
export default function Guidebook({ lomba }) {
  React.useEffect(() => {
    Router.replace(guidebook[lomba]);
  }, []);
  return <Loading />;
}

export async function getStaticPaths() {
  const paths = Object.keys(guidebook).map((key) => ({
    params: { lomba: key },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { lomba } = params;

  return {
    props: { lomba },
  };
}
