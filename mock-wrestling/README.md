# geth --datadir=./chaindata/ init ./genesis.json
# geth --datadir=./chaindata/ --rpc

/Applications/Mist.app/Contents/MacOS/Mist --rpc http://127.0.0.1:8545 --swarmurl="http://swarm-gateways.net"

open -a /Applications/Mist.app --args --rpc http://127.0.0.1:8545

# open -a /Applications/Ethereum\ Wallet.app --args --rpc http://127.0.0.1:8545

# geth account new

# geth --datadir chaindata/ --ipcpath ./chaindata/geth.ipc attach

> personal.newAccount("1234567890")
> miner.start()
> miner.stop()

> personal.unlockAccount("0x34be042391cd521be5e67d4ee2da4a102db53706", "1234567890")


# truffle migrate --network ourTestNet

https://github.com/ethereum/go-ethereum/issues/15983