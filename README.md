# Take a Break app

The purpose of the app is to provide a simple, focused break timer that encourages users to take short pauses throughout their day. It helps promote mindfulness, productivity, and well-being by reminding users to step away from their tasks periodically.

URL : takeapauseforaminute.netlify.app/


![pause](https://github.com/user-attachments/assets/7550ca2d-853a-4d97-ab98-70b4b993746e)


---

## Features

- **Countdown Timer**: Displays a countdown from 60 seconds.
- **Completion Message**: Shows a completion message when the timer reaches 0.
- **Reset Button**: Allows the user to reset the timer and start over.

---

## How It Works

1. The app starts with a 60-second countdown.
2. As the timer ticks down, the remaining time is displayed in `MM:SS` format.
3. When the timer reaches 0:
   - A completion message is shown.
   - A "Take a Pause Again?" button appears to reset the timer.
4. Clicking the reset button restarts the timer from 60 seconds.

---

## Installation

1. Clone the repository or copy the code into your project.
2. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
3. Run the following commands in your terminal:

   ```bash
   # Install dependencies
   npm install

   # Start the development server
   npm run dev
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the app.

---

## Code Explanation

### Key Components

- **State Management**:

  - `timeLeft`: Tracks the remaining time in seconds.
  - `isComplete`: Indicates whether the timer has finished.

- **Hooks**:

  - `useState`: Manages the state of `timeLeft` and `isComplete`.
  - `useEffect`: Sets up the countdown timer using `setInterval`.

- **Functions**:
  - `formatTime`: Converts seconds into a `MM:SS` format.
  - `resetTimer`: Resets the timer to 60 seconds and clears the completion state.

### Main Logic

1. The `useEffect` hook sets up a timer that decrements `timeLeft` every second.
2. When `timeLeft` reaches 0, the `isComplete` state is set to `true`, and the timer stops.
3. The `resetTimer` function restores the timer to its initial state.
