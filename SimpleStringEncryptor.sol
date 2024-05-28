// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//This Solidity contract provides basic encryption and decryption functionalities. It uses a secret key to perform a simple XOR operation on each byte of the data. 
contract EncryptedData {

    // key
    bytes32 private constant secretKey = hex"0123456789012345678901234567890123456789012345678901234567890123";

    function encrypt(string memory data) public pure returns (bytes32) {
        // Convert string to bytes
        bytes memory dataToEncrypt = bytes(data);

        // XOR each byte of data with the secret key
        for (uint i = 0; i < dataToEncrypt.length; i++) {
            dataToEncrypt[i] ^= secretKey[i % 32];
        }

        // Return the encrypted bytes as bytes32
        return bytes32(keccak256(dataToEncrypt));
    }
    function decrypt(bytes32 data) public pure returns (string memory) {
        // Convert bytes32 back to bytes
        bytes32 encryptedData = bytes32(data);

        // Decrypt by XORing with the secret key again
        for (uint i = 0; i < encryptedData.length; i++) {
            bytes memory encryptedDataBytes = abi.encodePacked(encryptedData);
            encryptedDataBytes[i] ^= secretKey[i % 32];
            encryptedData = bytes32(keccak256(encryptedDataBytes));
        }

        // Return the decrypted string
        return string(abi.decode(abi.encodePacked(encryptedData), (bytes)));
    }
}