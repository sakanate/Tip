// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.13;

import './interfaces/ITip.sol';

contract Tip is ITip {
    /// @inheritdoc ITipImmutables
    address public immutable override owner;
    /// @inheritdoc ITipImmutables
    uint256 public immutable override goal;
    /// @inheritdoc ITipImmutables
    uint public immutable override defaultTimeLimit;
    /// @inheritdoc ITipImmutables
    uint public immutable override defaultDuration;

    struct Stat {
        // the game state
        bool isActive;
        // the balance of this game
        uint256 balance;
        // the loser address
        address loser;
        // the winner address
        address winner;
        // the win types
        bool isWinnerTakesAll;
        // largest stake so far
        uint256 largestStake;
        // time limit of this game
        uint timeLimit;
        // cool down time after the game ends
        uint downTime;
    }
    /// @inheritdoc ITipState
    Stat public override stat;

    struct Data {
        string foo;
        address[] bar;
        address ctrt;
    }
    Data public d;

    /// @inheritdoc ITipState
    mapping(address => uint256) public override stakes;

    /// @inheritdoc ITipOwnerActions
    uint256 public override donation;

    // a list of participants that is used to delete the stake datas
    address[] participants;

    constructor() {
        // initializes immutable variables
        owner = msg.sender;
        
        goal = 1 ether;
        defaultTimeLimit = 1 minutes; //1 hours;
        defaultDuration = 1 minutes; //10 minutes;

        // initializes state variables
        initializeStat();
        stat.isActive = false;
        stat.downTime = block.timestamp;

        // initializes owner variables
        donation = 0;

        d.foo = "HELLO WORLD";
        d.bar.push(msg.sender);
        d.ctrt = address(this);
    }

    /// @inheritdoc ITipActions
    function participate() external override payable {
        require(msg.value > 0, "Participation fee is not enough.");
        require(stat.isActive, "Start the game before you join.");
        require(block.timestamp < stat.timeLimit, "Looks like game is already over now.");
        require(stat.balance < goal, "balance has already reached the goal.");

        // the staker for first time is pushed to list.
        if (stakes[msg.sender] == 0) {
            participants.push(msg.sender);
        }

        stakes[msg.sender] += msg.value;
        stat.balance += msg.value;
        if (stakes[msg.sender] > stat.largestStake) {
            stat.winner = msg.sender;
            stat.largestStake = msg.value;
        }

        // end game when balance reaches goal.
        if (stat.balance >= goal) {
            stat.loser = msg.sender;
            stat.isActive = false;
            stat.downTime = block.timestamp + defaultDuration;
        }

        emit Participate();
    }

    /// @inheritdoc ITipActions
    function getReward() external override {
        if (stat.isActive) endGameForTimeout();

        require(!stat.isActive, "Game is still going.");
        require(block.timestamp < stat.downTime, "You can get reward while showing result.");
        require(stakes[msg.sender] > 0, "You have to stake if you wanna get loot.");

        uint256 loot = 0;
        if (stat.isWinnerTakesAll) {
            // Win-Type: The winner takes all.
            require(msg.sender == stat.winner, "The winner only receive loot.");

            initializeStakes(true);
            loot = stat.balance;
            stat.balance = 0;
            stat.winner = address(0);
        } else {
            // Win-Type: The loser out.
            require(msg.sender != stat.loser, "Loser cannot receive loot.");
    
            loot = stakes[msg.sender] + stakes[stat.loser] * (stakes[msg.sender] / stat.balance);
        }
        delete stakes[msg.sender];
        payable(msg.sender).transfer(loot);

        emit GetReward();
    }

    function endGameForTimeout() private {
        require(stat.isActive, "Game is not active.");
        require(block.timestamp > stat.timeLimit, "Game is not over yet.");
        require(stat.balance < goal, "Game should be end as loser out. Call the developer to fix this problem.");
        
        stat.isActive = false;
        stat.isWinnerTakesAll = true;
        stat.downTime = block.timestamp + defaultDuration;
    }

    /// @inheritdoc ITipActions
    function start() external override payable {
        require(!stat.isActive, "You have to wait until this game ends.");
        require(block.timestamp > stat.downTime, "You have to wait couple of minutes to start game.");

        // initialize stakes and participants list.
        initializeStakes(false);

        // reset state and ready to start a game.
        initializeStat();
        stat.isActive = true;
        stat.timeLimit = block.timestamp + defaultTimeLimit;

        donation += msg.value;

        emit Start();
    }

    /// @inheritdoc ITipOwnerActions
    function withdraw() external override {
        require(msg.sender == owner, "You are not my Gosyujin-sama.");

        uint256 benefits = donation;
        donation = 0;
        payable(msg.sender).transfer(benefits);
        
        emit Withdraw();
    }

    /// @notice Initialize stat
    function initializeStat() private {
        stat.balance = 0;
        stat.loser = address(0);
        stat.winner = address(0);
        stat.isWinnerTakesAll = false;
        stat.largestStake = 0;
    }

    /// @notice Initalize stake and participants list.
    /// Add donation if calcDonation is true.
    /// @param calcDonation Add free eth as donation.
    function initializeStakes(bool calcDonation) private {
        for (uint256 i = 0; i < participants.length; i++) {
            if (calcDonation && stakes[participants[i]] > 0) donation += stakes[participants[i]]; 

            delete stakes[participants[i]];
        }
        delete participants;
    }
}