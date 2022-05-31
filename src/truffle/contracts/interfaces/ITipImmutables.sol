// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.5.0;

/// @title Tip state that never changes
/// @notice These parameters are fixed forever
interface ITipImmutables {
    /// @notice The address who deployed this contract
    function owner() external view returns (address);

    /// @notice Default loot size
    function goal() external view returns (uint256);

    /// @notice Default time limit
    function defaultTimeLimit() external view returns (uint);

    /// @notice Default duration for next game kicks
    function defaultDuration() external view returns(uint);
}