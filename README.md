# Throttle and Debounce Visualization

This project demonstrates the behavior of throttle, debounce, and a combined throttle-with-debounce function using a React input component. The logs of each function's invocations are displayed for comparison.

## Demo

![Throttle and Debounce Demo](https://github.com/anduscheung/my-icon-host/blob/main/throttle-and-Debounce-demo.gif)

Live version:
https://throttle-and-debounce-visualization.netlify.app/

## Functions

### Debounce

The debounce function delays the execution of the callback until after a specified period of inactivity. It waits for the user to stop performing an action (like typing) before executing the callback, which is useful for scenarios like sending search requests only after the user has finished typing.

### Throttle

The throttle function ensures that the callback is executed at most once every specified time period. It limits the rate of executions, which is useful for scenarios where you want to prevent a function from being called too frequently, such as during window resizing or scrolling events.

### ThrottleWithDebounce

The throttleWithDebounce function is an upgrade of the throttle function. It ensures that the last user action is always captured, making it particularly useful in scenarios where you want regular updates but also need to process the final action. For example, in window resizing or scrolling events, throttleWithDebounce will be more accurate update because it ensures the final size or position is captured.

## Start Project locally

To get the project up and running on your local machine, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   ```
2. **Navigate into the project directory**:
   ```sh
   cd throttle_and_debounce_visualization
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Start the development server**:
   ```sh
   npm start
   ```

After running these commands, the application should be available at `http://localhost:3000`
