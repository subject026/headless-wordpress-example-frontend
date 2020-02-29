import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery } from "gatsby";

export default ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      wordPress {
        node {
          id
        }
        allSettings {
          generalSettingsTitle
          generalSettingsDescription
        }
      }
    }
  `);
  const { generalSettingsTitle } = data.wordPress.allSettings;
  return <Helmet title={`${generalSettingsTitle} | ${title}`} />;
};
