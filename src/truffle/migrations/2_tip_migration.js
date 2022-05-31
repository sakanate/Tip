const Migrations = artifacts.require("Tip");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
