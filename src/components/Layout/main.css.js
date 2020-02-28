import styled from "styled-components";

export default styled.main`
  min-height: calc(
    100vh -
      (
        ${props => props.theme.layout.footerHeight} +
          ${props => props.theme.layout.headerHeight}
      )
  );
  margin: 0;
`;
