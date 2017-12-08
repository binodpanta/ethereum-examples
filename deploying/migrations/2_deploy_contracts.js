var AssetToken = artifacts.require("AssetToken");
var CrowdSaleContract = artifacts.require("CrowdSale");

module.exports = function(deployer, networks, accounts) {

// todo: use https://blog.zeppelin.solutions/how-to-create-token-and-initial-coin-offering-contracts-using-truffle-openzeppelin-1b7a5dae99b6
// Create assetToken with initialsupply, and assign to accounts[0] as owner account
deployer.deploy(AssetToken, accounts[0]).then(function() {
    return deployer.deploy(CrowdSaleContract, AssetToken.address);

})


};
