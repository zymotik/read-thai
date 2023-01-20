<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center fill-height">
      <v-card>
        <template v-slot:title>Classification</template>
        <template v-slot:subtitle>Learn the class of a letter</template>
        <template v-slot:text>
          <div class="text-center letter">{{ currentLetter.letter }}</div>
        </template>
        <template v-slot:actions>
          <v-btn
            variant="text"
            :color="highlightButtonColour(LetterClass.High)"
            @click="guessLetter(LetterClass.High)"
            >High</v-btn
          >
          <v-btn
            variant="text"
            :color="highlightButtonColour(LetterClass.Middle)"
            @click="guessLetter(LetterClass.Middle)"
            >Middle</v-btn
          >
          <v-btn
            variant="text"
            :color="highlightButtonColour(LetterClass.Low)"
            @click="guessLetter(LetterClass.Low)"
            >Low</v-btn
          >
          <v-btn variant="text" v-if="reveal" @click="nextLetter">Next</v-btn>
        </template>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dictionary, { LetterClass } from "@/dictionary";

const reveal = ref(false);
const guess = ref<null | LetterClass>(null);
const letters = dictionary.filter((l) => l.isConsonant && !l.rare);
const currentLetter = ref(getRandomLetter());

function getRandomLetter() {
  const randomLetterIndex = Math.round(Math.random() * letters.length);
  return letters[randomLetterIndex];
}

function guessLetter(letterClass: LetterClass) {
  guess.value = letterClass;
  reveal.value = true;
}

function nextLetter() {
  reveal.value = false;
  currentLetter.value = getRandomLetter();
}

function highlightButtonColour(letterClass: LetterClass) {
  if (!reveal.value) return;

  const isCorrectGuess = currentLetter.value.class === guess.value;

  if (letterClass === currentLetter.value.class) {
    return "green";
  }

  if (!isCorrectGuess && letterClass !== guess.value) {
    return;
  }

  if (!isCorrectGuess && letterClass !== currentLetter.value.class) {
    return "red";
  }
}
</script>

<style>
.v-card-text .letter {
  line-height: 33vw;
  font-size: 33vw;
}
</style>
