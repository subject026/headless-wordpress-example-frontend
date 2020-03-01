const allowedCoreBlocks = [
  "WordPress_CoreHeadingBlock",
  "WordPress_CoreParagraphBlock",
  "WordPress_CoreListBlock",
  "WordPress_CoreQuoteBlock",
  "WordPress_CoreSubheadBlock",
];

export default blocks => {
  const newBlocksArray = [];

  let prevBlockWasCore = false;

  blocks.forEach(block => {
    if (!allowedCoreBlocks.includes(block.__typename)) {
      // if the block isn't in the core blocks array just push it onto the new array
      newBlocksArray.push(block);
      prevBlockWasCore = false;
    } else {
      // block is one of the core text blocks....
      if (prevBlockWasCore) {
        // if previous block was a core block push it onto the sub array
        newBlocksArray[newBlocksArray.length - 1].blocks.push(block);
      } else {
        // otherwise create another core block object and sub array and add the block
        newBlocksArray.push({
          __typename: "WordpressCoreBlocks",
          blocks: [{ ...block }],
        });
        prevBlockWasCore = true;
      }
    }
  });
  return newBlocksArray;
};
