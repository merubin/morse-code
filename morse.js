var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
}
var array_keys = new Array();
var array_values = new Array();

for (var key in alphabet) {
    array_keys.push(key);
    array_values.push(alphabet[key]);
}

module.exports =  {
  encode: function(str1){
    var enStr=""
    for (i=0;i<str1.length;i++){
      if (enStr.length){enStr+=" "}
      if (str1[i] == " ") {
        code=" "
        enStr+=code
      }
      else {
      idx = array_keys.indexOf(str1[i].toLowerCase())
      code=array_values[idx]
      enStr+=code
    }

  }
  return(enStr)
}
}
