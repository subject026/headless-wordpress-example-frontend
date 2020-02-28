import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import TextContent from "../components/TextContent";

export default () => {
  return (
    <Layout>
      <SEO title="page not found" />
      <Hero title="That page doesn't exist!" />
      <TextContent>
        <p>Nothing here i'm afraid</p>
      </TextContent>
    </Layout>
  );
};
