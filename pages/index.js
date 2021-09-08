import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Main from "../components/Main";
import HeadLayout from "../components/HeadLayout";

export default function Home() {
  return (
    <HeadLayout>
      <Main />
    </HeadLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "project", "phrases"])),
  },
});
