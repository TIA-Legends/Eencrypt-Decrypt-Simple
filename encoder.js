function encoder() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let input = prompt('Please enter a string to encode:');
    let encodedChars = '';
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const charIndex = alphabet.indexOf(char.toLowerCase());
  
      if (charIndex !== -1) {
        const newIndex = (charIndex + 1) % alphabet.length;
        const newChar = alphabet[newIndex];
        encodedChars += newChar;
      } else {
        encodedChars += char;
      }
    }
  
    return encodedChars;
  }
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