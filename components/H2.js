import styled from "@emotion/styled";

const H2Styled = styled.h2`
  color: ${(props) => props.h2Color};
  font-weight: ${(props) => props.h2Weigth};
  font-size: ${(props) => props.h2FontSize};
  margin: 0;
  text-align: ${(props) => props.h2TextAlign};
  padding: ${(props) => props.h2Padding};
`;

const H2 = ({
  h2Text,
  h2FontSize = "clamp(2rem, 4vw, 3rem)",
  h2Color = "var(--blue)",
  h2Weigth = "bold",
  h2TextAlign = "unset",
  h2Padding = "0"
}) => {
  return (
    <H2Styled h2FontSize={h2FontSize} h2TextAlign={h2TextAlign} h2Color={h2Color} h2Weigth={h2Weigth} h2Padding={h2Padding}>
      {h2Text}
    </H2Styled>
  );
};

export default H2;
