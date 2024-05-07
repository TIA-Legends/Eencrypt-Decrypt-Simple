
  function encode(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        const newIndex = (index + 1) % alphabet.length;
        encoded += alphabet[newIndex];
      } else {
        encoded += char;
      }
    }
    console.log(encoded);
    return encoded;
  }
  
  
  encode("Code by ybtuti");