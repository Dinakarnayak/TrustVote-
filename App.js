import React, { useState } from 'react';
import Web3 from 'web3';
import VotingContract from './contracts/Voting.json';

const App = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [verified, setVerified] = useState(false);

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = VotingContract.networks[networkId];
    if (networkData) {
      const contractInstance = new web3.eth.Contract(VotingContract.abi, networkData.address);
      setContract(contractInstance);

      const candidateCount = await contractInstance.methods.candidatesCount().call();
      const candidatesList = [];
      for (let i = 0; i < candidateCount; i++) {
        const candidate = await contractInstance.methods.candidates(i).call();
        candidatesList.push(candidate);
      }
      setCandidates(candidatesList);
    }
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const verifyIdentity = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('http://localhost:5000/verify', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setVerified(data.verified);
  };

  const vote = async (candidateId) => {
    if (!verified) {
      alert('Please verify your identity first!');
      return;
    }

    await contract.methods.vote(candidateId).send({ from: account });
    alert('Vote cast successfully!');
  };

  return (
    <div>
      <h1>TrustVote: Decentralized E-Voting</h1>
      <div>
        <input type="file" onChange={handleFileUpload} />
        <button onClick={verifyIdentity}>Verify Identity</button>
        {verified && <p>Identity Verified! You can now vote.</p>}
      </div>

      <div>
        <h2>Vote for a Candidate</h2>
        {candidates.map((candidate, index) => (
          <button key={index} onClick={() => vote(candidate.id)}>
            {candidate.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
