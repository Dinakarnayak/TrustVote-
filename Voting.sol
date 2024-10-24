// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Voter {
        bool hasVoted;
        uint voteIndex;
    }

    address public admin;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    event VoteCast(address indexed voter, uint candidateId);

    constructor(string[] memory candidateNames) {
        admin = msg.sender;
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate({
                id: i,
                name: candidateNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint candidateId) external {
        require(!voters[msg.sender].hasVoted, "Already voted");
        require(candidateId < candidates.length, "Invalid candidate");

        voters[msg.sender] = Voter({
            hasVoted: true,
            voteIndex: candidateId
        });

        candidates[candidateId].voteCount++;

        emit VoteCast(msg.sender, candidateId);
    }

    function getCandidate(uint candidateId) external view returns (string memory name, uint voteCount) {
        Candidate storage candidate = candidates[candidateId];
        return (candidate.name, candidate.voteCount);
    }

    function getResults() external view returns (Candidate[] memory) {
        return candidates;
    }
}
