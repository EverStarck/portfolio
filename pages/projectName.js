import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext, useEffect } from "react";
import { AnimationContext } from "../context/AnimationContext";

const ProjectName = () => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);

  const { t } = useTranslation("common");

  useEffect(() => {
    setAnimationReady({
      ...animationReady,
      projectClick: false,
    });
  }, []);
  return <h1>{t("h1")}</h1>;
};

export default ProjectName;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
