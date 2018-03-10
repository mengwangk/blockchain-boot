
geth --datadir net3 init genesis/genesis03102018.json

geth --datadir net3 --networkid 3 console

> persona.newAccount() # testing
> eth.accounts
> eth.blockNumber
> miner.start()
> miner.stop()
> eth.blockNumber()
> eth.getBalance("0x8c96a50d8fe39cf6ff8c5f37109472ccf3e52801")
> exit