import { useStaticQuery, graphql } from "gatsby";

export const useSiteMenuData = () => {
  console.log("booffff");
  const data = useStaticQuery(graphql`
    query MenuData {
      wordPress {
        menus(where: { location: HEADER_NAV }) {
          nodes {
            menuItems {
              nodes {
                label
                path
                childItems {
                  nodes {
                    label
                    path
                    childItems {
                      nodes {
                        label
                        path
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return data.wordPress.menus.nodes[0];
};
