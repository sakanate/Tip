// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.5.0;

/// @title Permissioned Tip Actions
/// @notice Contains Tip methods that may only be called by the contract owner
interface ITipOwnerActions {
    /// @notice Only contract owner can call this to get benefits
    function withdraw() external;

    /// @notice Returns benefit of tip contract
    function donation() external view returns (uint256);
}