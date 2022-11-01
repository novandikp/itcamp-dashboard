import Link from "next/link";
import Loading from "../../components/Loading";
import { daftar } from "../../public/assets/data/link.json";
import Router from "next/router";
export default function Daftar({ lomba }) {
  React.useEffect(() => {
    Router.replace(daftar[lomba]);
  }, []);
  return <Loading />;
}

export async function getStaticPaths() {
  const paths = Object.keys(daftar).map((key) => ({
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
