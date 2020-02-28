import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import TextContent from "../components/TextContent";

export default () => {
  return (
    <Layout>
      <SEO title="Index Page" />
      <Hero title="Here is a page title" />
      <TextContent>
        <p>Here is some text content.</p>
      </TextContent>
    </Layout>
  );
};
