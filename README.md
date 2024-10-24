
# TrustVote: Decentralized E-Voting System with Deep Learning 🗳️🤖

Welcome to **TrustVote**! In an era where the integrity of elections is paramount, **TrustVote** offers a secure and decentralized solution for online voting. By leveraging blockchain for transparency and deep learning for identity verification, TrustVote ensures a fraud-proof and trustworthy voting process.

![Project Screenshot](path_to_your_screenshot_image) <!-- Replace with your actual screenshot path -->

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Decentralized Voting** 🗳️: Conduct tamper-proof elections using blockchain technology.
- **Identity Verification** 👤: Ensure voter identity using deep learning models (CNN for face verification).
- **Fraud Detection** 🛡️: Anomaly detection using deep learning (Autoencoder) to identify potential fraud in voting patterns.
- **User-Friendly Interface** 💻: Provides a clean and intuitive voting experience for users.
- **Real-Time Voting Results** 📊: Display real-time results securely on the blockchain.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Web3.js**: A library to interact with Ethereum blockchain from the frontend.

### Backend
- **Flask**: A lightweight Python web framework for handling backend logic.
- **Solidity**: A language for writing smart contracts on Ethereum.
- **TensorFlow/Keras**: For building deep learning models (identity verification and fraud detection).
- **Web3.py**: Python library for interacting with Ethereum blockchain.

## Project Structure
```
.
├── client
│   ├── public
│   └── src
│       ├── components
│       ├── App.js
│       └── index.js
│
├── server
│   ├── models
│   │   ├── identity_verification.py
│   │   └── fraud_detection.py
│   ├── routes
│   │   ├── voting.py
│   ├── app.py
│
├── contracts
│   └── Voting.sol
├── migrations
├── requirements.txt
└── README.md
```

## Installation

### Prerequisites
- **Python 3.x**: Ensure Python is installed.
- **Node.js**: Required for frontend and blockchain development.
- **Ganache/Remix**: For local Ethereum blockchain testing.
- **MetaMask**: Browser extension for interacting with Ethereum blockchain.

### Running the Application

#### Backend (Flask)
1. Clone the repository:
   ```bash
   git clone https://github.com/Dinakarnayak/TrustVote.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TrustVote/server
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```
   
#### Frontend (React)
1. Navigate to the `client` folder:
   ```bash
   cd TrustVote/client
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

#### Blockchain
1. Compile and deploy the smart contract:
   ```bash
   truffle migrate --network development
   ```
2. Ensure MetaMask is connected to the local Ethereum network.

## Usage
- **Voter Registration**: Users register by providing valid credentials and verifying their identity via facial recognition.
- **Casting Vote**: After verification, users can cast their vote using a decentralized interface.
- **Real-Time Results**: View voting results updated in real time, securely stored on the blockchain.
- **Fraud Detection**: The system automatically monitors and flags any suspicious voting patterns.

## Configuration

### Environment Variables
Add any necessary environment variables such as API keys for blockchain networks or other configurations.

### CORS Configuration
Ensure CORS settings in `app.py` are configured for your deployment environment.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
Developed by Dinakar Nayak N. For inquiries, please contact me via [dinakarnayak4248@gmail.com](mailto:dinakarnayak4248@gmail.com).

[LinkedIn: Dinakar Nayak N](https://www.linkedin.com/in/dinakar-nayak-n-125762232/)

Thank you for using **TrustVote**! We hope it contributes to a fair and transparent voting process.
