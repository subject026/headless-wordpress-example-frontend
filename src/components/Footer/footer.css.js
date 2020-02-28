import styled from "styled-components";

export default styled.footer`
  height: ${props => props.theme.layout.footerHeight};
  margin: 0;
  background-color: #202020;
  color: white;
`;

export const FooterInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
