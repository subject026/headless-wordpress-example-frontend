import React from "react";
import { graphql } from "gatsby";
import ReactHTMLParser from "react-html-parser";

import Layout from "../Layout";
import SEO from "../SEO";
import Hero from "../Hero";
import TextContent from "../TextContent";
import SeperateBlocks from "../../util/SeperateBlocks";
import { customBlocks } from "../../util/Constants";

export default ({ data }) => {
  let { blocks } = data.wordPress.pageBy;
  // blocksJSON = JSON.parse(blocksJSON);
  // const seperatedBlocks = SeperateBlocks([...blocksJSON]);

  return (
    <Layout>
      <SEO title="Index Page" />
      {/* {seperatedBlocks.map((block, i) => {
        console.log("block: ", block);
        switch (block.name) {
          case customBlocks.heroBlock:
            // console.log("booooooooooooooooo");
            const { main_text, secondary_text } = block.attributes.data;
            // console.log(main_text);
            // console.log(secondary_text);
            return (
              <Hero
                key={`customBlock__${i}`}
                main_text={main_text}
                secondary_text={secondary_text}
                // background_image={block.acf.background_image}
              />
            );
          case customBlocks.coreBlocksBlock:
            console.log("oooooooooooooo", block);
            return (
              <TextContent key={`customBlock__${i}`}>
                {block.blocks.map(block =>
                  ReactHTMLParser(block.originalContent)
                )}
              </TextContent>
            );
          default:
            // <TextContent key={`customBlock__${i}`}>
            //   <pre>
            //     {block.blocks.map(block =>
            //       ReactHTMLParser(block.att)
            //     )}
            //   </pre>
            // </TextContent>;
            console.error("Unrecognised block returned from query!");
            return null;
        }
      })} */}
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageById($id: ID!) {
    wordPress {
      pageBy(id: $id) {
        title
        slug
        # blocks {
        #   # ... on WordPress_AcfHeroBlock {
        #   #   attributes {
        #   #     data
        #   #   }
        #   # }
        #   # ... on WordPress_CoreHeadingBlock {
        #   #   attributes {
        #   #     data
        #   #   }
        #   # }
        #   # ... on WordPress_CoreParagraphBlock {
        #   #   attributes {
        #   #     data
        #   #   }
        #   # }
        #   # ... on WordPress_CoreListBlock {
        #   #   attributes {
        #   #     data
        #   #   }
        #   # }
        #   # ... on WordPress_CoreQuoteBlock {
        #   #   attributes
        #   # }
        #   # ... on WordPress_CoreSubheadBlock {
        #   #   attributes
        #   # }
        #   name
        # }
      }
    }
  }
`;
