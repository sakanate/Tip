import { ethers } from 'ethers';

import tip from '../contracts/ITip.json';

export function getContract(provider) {
    const tipAddress = '0x8C68682D10aACbe016E54b428452E08262a855c9';
    const tipAbi = tip.abi;
    const tipContract = new ethers.Contract(tipAddress, tipAbi, provider);

    return tipContract;
}