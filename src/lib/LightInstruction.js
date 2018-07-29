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

function off(){
  return 'O|000000';
}

function pause(){
  return 'X|000000';
}

function play(){
  return 'P|000000';
}


const LightInstruction = {
  "off" : off,
  "animate" : animate,
  "pause" : pause,
  "play": play
};

export default LightInstruction;
