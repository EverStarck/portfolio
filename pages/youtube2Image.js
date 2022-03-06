import { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DataContext } from "../context/DataContext";

import HeadLayout from "../components/HeadLayout";
import ProjectLayout from "../components/ProjectLayout";

const Youtube2Image = () => {
  // Context
  const { data } = useContext(DataContext);
  return (
    <HeadLayout
      title="Youtube2Image Project || EverStarck"
      description="Look at my Youtube2Image project, where I made an application that gives you the banner and avatar of your YouTube channel, Also, find out if it's family-friendly!"
      keywords="Download, Youtube, Free, Banner, Avatar, Channel, Family friendly, black list, download banner youtube, download avatar youtube, everstarck, starck, portfolio"
      ogUrl="https://www.yt2img.everstarck.dev"
      ogTitle="👀 See my Youtube2Image project"
      ogImg="https://yt2img.everstarck.dev/yt2image.png"
      metaIconFolder="yt2img"
    >
      <ProjectLayout projectData={data[2]} />
    </HeadLayout>
  );
};

export default Youtube2Image;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["project"])),
  },
});
