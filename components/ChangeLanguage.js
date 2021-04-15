import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ChangeLanguage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Link href="/" locale={router.locale === "en" ? "es" : "en"}>
      {/* <button>{changeL}</button> */}
      <button>{t("button")}</button>
    </Link>
  );
};

export default ChangeLanguage;
