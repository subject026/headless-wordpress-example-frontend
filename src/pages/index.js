import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ReactHTMLParser from "react-html-parser";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import TextContent from "../components/TextContent";
import SeperateBlocks from "../util/SeperateBlocks";
import { customBlocks } from "../util/Constants";

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wordPress {
        pages {
          nodes {
            title
            slug
            blocks {
              ... on WordPress_AcfHeroBlock {
                acf {
                  main_heading
                  sub_heading
                  background_image {
                    altText
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(maxWidth: 2000) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              ... on WordPress_CoreHeadingBlock {
                originalContent
              }
              ... on WordPress_CoreParagraphBlock {
                originalContent
              }
              ... on WordPress_CoreListBlock {
                originalContent
              }
              ... on WordPress_CoreQuoteBlock {
                originalContent
              }
              ... on WordPress_CoreSubheadBlock {
                originalContent
              }
            }
          }
        }
      }
    }
  `);
  const { blocks } = data.wordPress.pages.nodes[0];

  const seperatedBlocks = SeperateBlocks([...blocks]);

  return (
    <Layout>
      <SEO title="Index Page" />
      {seperatedBlocks.map((block, i) => {
        switch (block.__typename) {
          case customBlocks.heroBlock:
            // console.log(block);
            return (
              <Hero
                key={`customBlock__${i}`}
                mainHeading={block.acf.main_heading}
                subHeading={block.acf.sub_heading}
                background_image={block.acf.background_image}
              />
            );
          case customBlocks.coreBlocksBlock:
            return (
              <TextContent key={`customBlock__${i}`}>
                {block.blocks.map(block =>
                  ReactHTMLParser(block.originalContent)
                )}
              </TextContent>
            );
          default:
            console.error("Unrecognised block returned from query!");
            return null;
        }
      })}
    </Layout>
  );
};
