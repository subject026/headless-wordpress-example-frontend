import styled from "styled-components";

export const Header = styled.header`
  height: ${props => props.theme.layout.headerHeight};
  color: #202020;
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SiteTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;
