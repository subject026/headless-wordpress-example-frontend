import { useStaticQuery, graphql } from "gatsby";

export const useSiteMenuData = () => {
  const data = useStaticQuery(graphql`
    query MenuData {
      wordPress {
        menus(where: { location: HEADER_NAV }) {
          nodes {
            menuItems {
              nodes {
                label
                path
                parentDatabaseId
                childItems {
                  nodes {
                    label
                    path
                    parentDatabaseId
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
