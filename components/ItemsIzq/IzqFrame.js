import { useTranslation } from "next-i18next";
import styled from "@emotion/styled";

import ChangeLanguage from "../ChangeLanguage";
import ProjectFrame from "./project/ProjectFrame";

const IzqStyled = styled.main`
  background-color: antiquewhite;
  width: 90vw;
  height: 100%;
  min-height: 200vh;
`;

const IzqFrame = () => {
  const { t } = useTranslation("common");

  return (
    <IzqStyled>
      <h1>{t("h1")}</h1>
      <ChangeLanguage />

      <ProjectFrame />
      <ProjectFrame />
      <ProjectFrame />
      <ProjectFrame />

    </IzqStyled>
  );
};

export default IzqFrame;
