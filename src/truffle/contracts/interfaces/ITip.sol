// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.5.0;

import './ITipActions.sol';
import './ITipEvents.sol';
import './ITipState.sol';
import './ITipOwnerActions.sol';
import './ITipImmutables.sol';

/// @title Permissionless actions for Tip
/// @notice Contains methods that can be called by anyone
interface ITip is
    ITipActions,
    ITipOwnerActions,
    ITipEvents,
    ITipState,
    ITipImmutables
{

}