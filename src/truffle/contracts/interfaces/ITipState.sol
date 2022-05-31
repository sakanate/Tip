// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.5.0;

/// @title Tip state that can read
/// @notice These methods compose Tip's state to read
interface ITipState {
    /// @notice Returns game stat
    /// @return isActive true means game is active. false means in-active.
    /// balance The balance of this game.
    /// loser The loser address.
    /// winner The winner address.
    /// isWinnerTakesAll The win types.
    /// largestStake The lagest stake in this game.
    /// timeLimit Time Limit of this game.
    /// downTime Cool down time after game ends.
    function stat()
        external
        view
        returns (
            bool isActive,
            uint256 balance,
            address loser,
            address winner,
            bool isWinnerTakesAll,
            uint256 largestStake,
            uint timeLimit,
            uint downTime
        );

    /// @notice Returns the stake of the participant
    /// @param participant The address of participant
    function stakes(address participant) external view returns (uint256);
}