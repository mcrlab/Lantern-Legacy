
function toRGB(hexInput){
    let red = hexInput.substring(0,2);
    let green = hexInput.substring(2,4);
    let blue = hexInput.substring(4,6);

    let output = [];
    output.push(parseInt(red, 16));
    output.push(parseInt(green, 16));
    output.push(parseInt(blue, 16));

    return output;
}

function toHex(color){
  let char = color.toString(16);
  if(char.length == 1){
    char = "0"+char;
  }
  return char.toUpperCase();
}

function toAscii(input) {
  const compressedInput = Math.floor(input / 2);
  let shiftedInput = compressedInput + 32;

  if(shiftedInput > 126){
    shiftedInput = 126;
  }

  const character = String.fromCharCode(shiftedInput);
  return character;
}

function fromAscii(input){
  let r = (input.charCodeAt(0) - 32) * 2;
  let g = (input.charCodeAt(1) - 32) * 2;
  let b = (input.charCodeAt(2) - 32) * 2;

  return [r,g,b];
}

const ColorCompression = {
  toRGB: toRGB,
  toAscii: toAscii,

  compress: (hexInput) => {
    const colors = toRGB(hexInput);

    let output = colors.map((color) => {
      return toAscii(color);
    });

    return output.join('');
  },
  decompress: (compressedInput) => {
    const colors = fromAscii(compressedInput);
    let output = colors.map((color)=> {
      return toHex(color);
    });
    return output.join('');
  }

};

export default ColorCompression;
