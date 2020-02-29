const allowedCoreBlocks = [
  "WordPress_CoreHeadingBlock",
  "WordPress_CoreParagraphBlock",
  "WordPress_CoreListBlock",
  "WordPress_CoreQuoteBlock",
  "WordPress_CoreSubheadBlock",
];

export default blocks => {
  const finalArray = [];

  let prevBlockWasCore = false;

  for (let i = 0; i < blocks.length; i++) {
    if (!allowedCoreBlocks.includes(blocks[i].__typename)) {
      prevBlockWasCore = false;
      finalArray.push(blocks[i]);
    } else {
      // if previous block was core then add this block to the last block sub array
      if (prevBlockWasCore) {
        finalArray[finalArray.length - 1].blocks.push(blocks[i]);
      } else {
        // otherwise create another core block array and add this block
        finalArray.push({
          __typename: "WordpressCoreBlocks",
          blocks: [{ ...blocks[i] }],
        });
        prevBlockWasCore = true;
      }
    }
  }

  return finalArray;
};
