import { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DataContext } from "../context/DataContext";

import HeadLayout from "../components/HeadLayout";
import ProjectLayout from "../components/ProjectLayout";

const GoogleClone = () => {
  // Context
  const { data } = useContext(DataContext);

  return (
    <HeadLayout
      title="Google Clone Project || EverStarck"
      description="See my Google Clone project, where I made a functional Google from scratch, and no, this is not just a redirect 🤯"
      keywords="Google, clone, google chrome, everstarck, starck, portfolio"
      ogUrl="https://www.googl.everstarck.dev"
      ogTitle="👀 See my Google Clone project"
      ogImg="https://googl.everstarck.dev/glone.png"
      metaIconFolder="google"
    >
      <ProjectLayout projectData={data[0]} />
    </HeadLayout>
  );
};

export default GoogleClone;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["project"])),
  },
});
