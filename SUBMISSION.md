# TODO (5/18) 

- [x] [BEGINNER CHALLENGES] Back-End Javascript
- [x] [BEGINNER CHALLENGE] Launch a local Substrate development chain
- [x] [BEGINNER CHALLENGES] Play with Westend
- [ ] [BEGINNER CHALLENGES] Front-End Javascript https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/14/100023940
- [ ] [BEGINNER CHALLENGE] Run a Kusama or Polkadot node and add it to Telemetry https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/12/100023938
- [ ] [INTERMEDIATE CHALLENGE] Smart Contracts - Write An ERC-20 Smart Contract With Ink! https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/9/100023935
- [ ] [INTERMEDIATE CHALLENGE] Forkless Upgrades https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/6/100023932
- [x] [BEGINNER CHALLENGE] Set An Identity On Kusama Or Polkadot's Development Version
- [ ] [INTERMEDIATE CHALLENGE] FRAME Development https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/7/100023933
- [ ] [INTERMEDIATE CHALLENGE] FRAME Identity: Set an identity on a local --dev chain https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/10/100023936
- [x] [BEGINNER CHALLENGE] Deploying Solidity Contract on Plasm Network V1

# INCOMPLETE!!!

- [ ] [BEGINNER CHALLENGE] Run a private Substrate network



# 6. [BEGINNER CHALLENGE] Run a Kusama or Polkadot node and add it to Telemetry

```
aria2c -x 16 https://ipfs.io/ipfs/QmeKCZmWfB6691DqE3Wqt3zyBE5wn8N42kgqKqKEozECYv
7z x QmeKCZmWfB6691DqE3Wqt3zyBE5wn8N42kgqKqKEozECYv

docker run -v`pwd`/paritydb:/polkadot/.local/share/polkadot/chains/polkadot/paritydb -p 9944:9944 parity/polkadot:v0.8.24 --name "ubinix-warun" --rpc-external --ws-external --pruning=archive --db=paritydb --chain=kusama --wasm-execution=compiled

/polkadot/.local/share/polkadot/chains/polkadot/db

docker run -p 9944:9944 -v`pwd`/paritydb:/polkadot/.local/share/polkadot/chains/polkadot/paritydb parity/polkadot:v0.8.24 --name "ubinix-warun" --rpc-external --ws-external --wasm-execution=compiled

docker run -p 9944:9944 parity/polkadot:v0.8.24 --name "ubinix-warun" --rpc-external --ws-external --wasm-execution=compiled
```

## Result
![Image of My Node.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_068.png)



----------


# 1. [BEGINNER CHALLENGE] Set An Identity On Kusama Or Polkadot's Development Version

```
docker run -p 9944:9944 parity/polkadot:v0.8.24 --name "pikaju66" --rpc-external --ws-external --dev
```

## Result
![Image of My Iden.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_067_A.png)



# 2. [BEGINNER CHALLENGE] Deploying Solidity Contract on Plasm Network V1

```
docker run --rm -it -v /local/path:/sources hyperledgerlabs/solang -o /sources /sources/flipper.sol
```

## Result
![Image of WASM.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_067_B.png)



# 3. [BEGINNER CHALLENGES] Back-End Javascript

```
node index.js
```

## Result
https://github.com/ubinix-warun/hello-world-by-polkadot/blob/main/index.js


# 4. [BEGINNER CHALLENGES] Play with Westend

## Result SubScan with Remark!
https://westend.subscan.io/extrinsic/2663817-2


# 5. [BEGINNER CHALLENGE] Launch a local Substrate development chain

```
./node-template --dev --tmp
./yarn

ubinix-warun => 0x7562696E69782D776172756E

```

## Result 
![Image of REMARK.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_065.png)

