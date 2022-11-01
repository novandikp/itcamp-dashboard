import Link from "next/link";
import Loading from "../../components/Loading";
import { submission } from "../../public/assets/data/link.json";
import Router from "next/router";
export default function Submissions({ lomba }) {
  React.useEffect(() => {
    Router.replace(submission[lomba]);
  }, []);
  return <Loading />;
}

export async function getStaticPaths() {
  const paths = Object.keys(submission).map((key) => ({
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
