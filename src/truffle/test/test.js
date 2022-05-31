const Tip = artifacts.require('Tip');

contract('Tip', async accounts => {
    it('should owner is account[0]', async () => {
        const instance = await Tip.deployed();
        const owner = await instance.owner.call();
        assert.equal(owner.valueOf(), accounts[0]);
    });

    it('should the game state is in-active', async () => {
        const instance = await Tip.deployed();
        const stat = await instance.stat.call();
        assert.equal(stat.isActive.valueOf(), false);
    });
})

contract('Tip', async accounts => {
    const instance = await Tip.deployed();
    await instance.start();

    it('should the game is active after start()', async () => {
        const stat = await instance.stat.call();
        assert.equal(stat.isActive.valueOf(), true);
    });

    
    await instance.participate({value: web3.utils.toWei(0.1, 'ether')});

    it('should stakes[accounts[0]] is registered', async () => {
        const stake = await instance.stakes.call(accounts[0]);
        assert.equal(stake.valueOf(), web3.utils.toWei(0.1, 'ether'));
    });
})