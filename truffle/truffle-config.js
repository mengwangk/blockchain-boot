module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 500000,
      gasPrice: 100000000
    },
    ourTestNet: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 100000,
      gasPrice: 100
    }
  }
};
