# Drum Kit

A simple drum kit web application that allows users to play sounds by clicking on drum pads or pressing corresponding keys on the keyboard.

## Features

- Play different drum sounds by clicking on the drum pads.
- Play sounds by pressing the corresponding keys on the keyboard (e.g., 'Q', 'W', 'E', etc.).
- Visual feedback (the drum pads light up when active).
- WebP support check for optimal performance.

## Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone [https://github.com/your-username/drum-kit.git](https://github.com/yanaesher/Drum-Kit)
   ```

2. **Navigate to the project folder**:
   ```bash
   cd drum-kit
   ```

3. **Open the project** in your browser:
   - Simply open the `index.html` file in your preferred browser.

## Usage

- **Click on the drum pads** to play sounds.
- **Press the corresponding keyboard keys** (e.g., 'Q', 'W', 'E', etc.) to trigger the sounds.
- The drum pads will highlight briefly when clicked or triggered by the keyboard.
- The application checks if your browser supports WebP format and adjusts accordingly for optimal performance.

## Dependencies

- No external dependencies, just basic HTML, CSS, and JavaScript.

## Code Explanation

1. **HTML Structure**: 
   - The drum pads are represented as buttons with data attributes corresponding to specific keys on the keyboard.
   - Audio elements are used for each drum sound, with a `data-key` attribute to match the key pressed.
   
2. **JavaScript**:
   - The `playPads` function is responsible for playing the sound when a key is pressed or a pad is clicked.
   - The `removeTransition` function removes the 'playing' class from the pads once the animation is finished.
   - The `isWebp` function checks if the browser supports WebP format for images and adds the appropriate class to the HTML element.

3. **CSS Transitions**:
   - A CSS transition is applied to the drum pads, which triggers when they are clicked or activated, giving a visual indication to the user.

## License

This project is open source and available under the [MIT License](LICENSE).

---

### Customization

You can modify the sounds, pad colors, or key mappings in the `index.html` and `script.js` files as per your needs.
