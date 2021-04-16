import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ProjectName = () => {
  const { t } = useTranslation("common");
  return <h1>{t("h1")}</h1>;
};

export default ProjectName;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
