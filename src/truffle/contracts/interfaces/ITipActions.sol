// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.5.0;

/// @title Permissionless actions for Tip
/// @notice Contains methods that can be called by anyone
interface ITipActions {
    /// @notice Joins shuffle event
    /// @dev 
    function participate() external payable;

    /// @notice Gets reward allocated as your share after game done
    /// @dev 
    function getReward() external;

    /// @notice Lets a game begin
    /// @dev 
    function start() external payable;
}