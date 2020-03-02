import { allowedCoreBlocks, customBlocks } from "./Constants";

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
          __typename: customBlocks.coreBlocksBlock,
          blocks: [{ ...block }],
        });
        prevBlockWasCore = true;
      }
    }
  });
  return newBlocksArray;
};
