//
// Created by benar on 5/6/24.
//
#include "stdio.h"
int main() {
    char input[50];
    printf("Enter your Phrase:\n");
    scanf("%49[^\n]", input);

    for (int i = 0; input[i] != '\0'; i++) {
        if (input[i] == 'A') {
            input[i] = 'Z';
        } else if (input[i] == 'B') {
            input[i] = 'Y';
        } else if (input[i] == 'C') {
            input[i] = 'X';
        } else if (input[i] == 'D') {
            input[i] = 'W';
        } else if (input[i] == 'E') {
            input[i] = 'V';
        } else if (input[i] == 'F') {
            input[i] = 'U';
        } else if (input[i] == 'G') {
            input[i] = 'T';
        } else if (input[i] == 'H') {
            input[i] = 'S';
        } else if (input[i] == 'I') {
            input[i] = 'R';
        } else if (input[i] == 'J') {
            input[i] = 'Q';
        } else if (input[i] == 'K') {
            input[i] = 'P';
        } else if (input[i] == 'L') {
            input[i] = 'O';
        } else if (input[i] == 'M') {
            input[i] = 'N';
        } else if (input[i] == 'N') {
            input[i] = 'M';
        } else if (input[i] == 'O') {
            input[i] = 'L';
        } else if (input[i] == 'P') {
            input[i] = 'K';
        } else if (input[i] == 'Q') {
            input[i] = 'J';
        } else if (input[i] == 'R') {
            input[i] = 'I';
        } else if (input[i] == 'S') {
            input[i] = 'H';
        } else if (input[i] == 'T') {
            input[i] = 'G';
        } else if (input[i] == 'U') {
            input[i] = 'F';
        } else if (input[i] == 'V') {
            input[i] = 'E';
        } else if (input[i] == 'W') {
            input[i] = 'D';
        } else if (input[i] == 'X') {
            input[i] = 'C';
        } else if (input[i] == 'Y') {
            input[i] = 'B';
        } else if (input[i] == 'Z') {
            input[i] = 'A';
        } else if (input[i] == ' ') {
            input[i] = '1';
        }

    }
    printf("%s\n", input);
}