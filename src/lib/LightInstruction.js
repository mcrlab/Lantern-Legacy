import ColorCompression from '../lib/ColorCompression';

function animate(data, frameRate = 1, loop = 1) {
  let output = [];

  data.map((frame)=> {
    output.push(ColorCompression.compress(frame));
  });

  const dataString = output.join('');
  const instruction = `A|${loop},${data.length},${frameRate},${dataString}`;

  return instruction;
}

const LightInstruction = {
  "animate" : animate,
};

export default LightInstruction;
