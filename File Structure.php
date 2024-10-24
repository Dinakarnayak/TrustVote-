TrustVote/
│
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── App.js       # Main React file
│       ├── index.js     # Entry point for React
│       └── contracts/
│           └── Voting.json  # ABI file
│
├── server/              # Flask backend
│   ├── app.py           # Flask app
│   └── models/
│       └── face_verification.h5  # Deep learning model
│
└── contracts/           # Solidity smart contract
    └── Voting.sol       # Solidity smart contract file
