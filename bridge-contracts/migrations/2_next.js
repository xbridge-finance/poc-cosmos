var CashPool = artifacts.require("CashPool")

module.exports = function(deployer, network, accounts) {
  // Use deployer to state migration tasks.
  var valset
  switch (network) {
    case "ganache":
    default:
      valset = [[accounts[0]], [100]]
      break
  }
  deployer.deploy(CashPool)
}
