# React Counter Application

This is a simple React application that demonstrates state management using the `useState` hook. The application includes two buttons to increment and decrement a counter, with boundaries to prevent the counter from going below 0 or above 20.

## Features

- **Increment Button**: Increases the counter value by 1 until it reaches a maximum of 20. If the counter is at 20, an alert will be shown, and the button will be disabled.
- **Decrement Button**: Decreases the counter value by 1 until it reaches a minimum of 0. If the counter is at 0, an alert will be shown, and the button will be disabled.
- **State Management**: The application utilizes the `useState` hook to manage the state of the counter.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/asimniazi/react-state-ui-sync.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-counter-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

- Click the **Increment** button to increase the counter.
- Click the **Decrement** button to decrease the counter.
- The counter will be disabled if it reaches the boundaries (0 or 20), and an alert will notify you.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool and dev server.
- **CSS**: For styling the application.

## Project Structure

src/
│
├── assets/ # Contains static assets like images
├── App.css # Main CSS file for styling
├── App.jsx # Main React component
├── index.css # Global styles
└── main.jsx # Entry point for the React application


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
