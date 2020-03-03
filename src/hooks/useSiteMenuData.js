import { useStaticQuery, graphql } from "gatsby";

export const useSiteMenuData = () => {
  const data = useStaticQuery(graphql`
    query MenuData {
      wordPress {
        menus {
          nodes {
            name
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `);
  return data.wordPress.menus.nodes;
};
