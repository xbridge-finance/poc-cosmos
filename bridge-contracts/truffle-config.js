const HDWalletProvider = require('@truffle/hdwallet-provider');
const secret = require("./.secret.json")

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6000000,
      gasPrice: 200000000000
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(secret.privateKeys, "https://goerli.infura.io/v3/ffad90b356e74149a9bebcd05f055593", 0, 1);
      },
      network_id: 5,
      gas: 6721975,
      gasPrice: 10000000000,//(10 Gwei)
      timeout: 2000000,
      skipDryRun: true
    },
    ropsten:  {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 6000000,
      solc: { optimizer: { enabled: true, runs: 200 } }
   }
  },
  rpc: {
    host: 'localhost',
    post:8080
  },
  mocha: {
    useColors: true
  },
  compilers: {
    solc: {
      version: "0.8.19+commit.7dd6d404",
      settings: {
        optimizer: {
          enabled: true,
          runs: 20   // Optimize for how many times you intend to run the code
        },
      },
    },
  },
};
