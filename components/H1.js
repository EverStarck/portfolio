import styled from "@emotion/styled";

const H1Styled = styled.h1`
  color: ${(props) => props.h1Color};
  font-weight: ${(props) => props.h1Weigth};
  font-size: ${(props) => props.h1FontSize};
  margin: 0;
  text-align: ${(props) => props.h1TextAlign};
  padding: ${(props) => props.h1Padding};
`;

const H1 = ({
  h1Text,
  h1FontSize = "clamp(2rem, 4vw, 3rem)",
  h1Color = "var(--yellow)",
  h1Weigth = "bold",
  h1TextAlign = "center",
  h1Padding = "0",
}) => {
  return (
    <H1Styled
      h1FontSize={h1FontSize}
      h1TextAlign={h1TextAlign}
      h1Color={h1Color}
      h1Weigth={h1Weigth}
      h1Padding={h1Padding}
    >
      {h1Text}
    </H1Styled>
  );
};

export default H1;
