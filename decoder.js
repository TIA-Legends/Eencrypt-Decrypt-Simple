// This is a decoder based of the encoder file in the repo
function decode(encodedStr) {
    let decoded = "";
    for (let i = 0; i < encodedStr.length; i++) {
        const char = encodedStr[i];
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            const newIndex = (index - 1 + alphabet.length) % alphabet.length;
            decoded += alphabet[newIndex];
        } else {
            decoded += char;
        }
    }
    return decoded
}
const encodeMessage = encode("Code by ybtuti");
const decodeMessage = decode(encodeMessage);

console.log(decodedMessage);