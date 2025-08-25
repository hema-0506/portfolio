import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// The secret word the user needs to guess.
const TARGET_WORD = "coffee";

const WordleHint = ({ onWin }) => {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // This effect handles all keyboard input for the game.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isGameOver) return;

      const key = e.key.toLowerCase();

      if (key === 'enter') {
        if (currentGuess.length !== 6) {
          showToast("Not enough letters");
          return;
        }
        // Submit the guess
        const newGuesses = [...guesses];
        newGuesses[currentRow] = currentGuess;
        setGuesses(newGuesses);
        setCurrentRow(currentRow + 1);
        setCurrentGuess("");

        if (currentGuess === TARGET_WORD) {
          setIsGameOver(true);
          showToast("You got it!", 3000);
          // Tell the parent component the game is won!
          setTimeout(() => onWin(), 1500);
        } else if (currentRow >= 5) {
          setIsGameOver(true);
          showToast(`The word was: ${TARGET_WORD}`, 4000);
        }
      }

      if (key === 'backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
      }

      if (key.match(/^[a-z]$/) && currentGuess.length < 6) {
        setCurrentGuess(currentGuess + key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, currentRow, guesses, isGameOver, onWin]);

  // Function to show a temporary message.
  const showToast = (message, duration = 1000) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), duration);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
      {toastMessage && (
        <div className="absolute top-4 bg-white text-black px-4 py-2 rounded-md shadow-lg z-20">
          {toastMessage}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-200 mb-3">Guess the 6-letter secret key</h3>
      {/* The Game Grid */}
      <div className="grid grid-rows-6 gap-1.5">
        {guesses.map((guess, i) => {
          const isCurrentRow = i === currentRow;
          return (
            <Row
              key={i}
              guess={isCurrentRow ? currentGuess : guess ?? ""}
              targetWord={TARGET_WORD}
              isSubmitted={!isCurrentRow && guess != null}
            />
          );
        })}
      </div>
    </div>
  );
};

// Sub-component for a single row in the grid.
const Row = ({ guess, targetWord, isSubmitted }) => {
  const tiles = [];
  for (let i = 0; i < 6; i++) {
    const char = guess[i];
    let bgColor = "bg-transparent";

    if (isSubmitted) {
      if (targetWord[i] === char) {
        bgColor = "bg-[#ba74a6]"; // Correct letter, correct position
      } else if (targetWord.includes(char)) {
        bgColor = "bg-yellow-500"; // Correct letter, wrong position
      } else {
        bgColor = "bg-gray-700"; // Incorrect letter
      }
    }

    tiles.push(
      <motion.div
        key={i}
        animate={{ scale: char ? 1.05 : 1 }}
        transition={{ duration: 0.1 }}
        className={`w-10 h-10 md:w-12 md:h-12 border-2 border-gray-600 rounded-md flex items-center justify-center text-2xl font-bold uppercase text-white ${bgColor}`}
      >
        {char}
      </motion.div>
    );
  }
  return <div className="grid grid-cols-6 gap-1.5">{tiles}</div>;
};

export default WordleHint;
