// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.5.0;

/// @title Events emitted by Tip
/// @notice Contains all events emitted by Tip
interface ITipEvents {
    /// @notice Emitted by #start when game begins
    /// @dev Paricipate/IncreaseTime/GetReward cannot be emitted before game starts
    event Start();

    /// @notice Emitted when user joins the game
    event Participate();

    /// @notice Emitted when user tries to get his share
    event GetReward();

    /// @notice Emitted when contract owner withdraws the benefits
    event Withdraw();
}