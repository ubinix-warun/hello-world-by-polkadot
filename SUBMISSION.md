# DONE (8/18) 

- [x] [BEGINNER CHALLENGE] Set An Identity On Kusama Or Polkadot's Development Version
- [x] [BEGINNER CHALLENGE] Deploying Solidity Contract on Plasm Network V1
- [x] [BEGINNER CHALLENGES] Back-End Javascript
- [x] [BEGINNER CHALLENGES] Play with Westend
- [x] [BEGINNER CHALLENGE] Launch a local Substrate development chain
- [x] [BEGINNER CHALLENGE] Run a Kusama or Polkadot node and add it to Telemetry
- [x] [INTERMEDIATE CHALLENGE] FRAME Identity: Set an identity on a local --dev chain 
- [x] [BEGINNER CHALLENGES] Front-End Javascript

# TODO
- [ ] [INTERMEDIATE CHALLENGE] Smart Contracts - Write An ERC-20 Smart Contract With Ink! https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/9/100023935
- [ ] [INTERMEDIATE CHALLENGE] Forkless Upgrades https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/6/100023932
- [ ] [INTERMEDIATE CHALLENGE] FRAME Development https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/7/100023933
- [ ] [INTERMEDIATE CHALLENGE] FRAME Multisig https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/8/100023934 
- [ ] [ECOSYSTEM CHALLENGE] (Beginner) Build And Run A Local Phala Network https://gitcoin.co/issue/Phala-Network/hello-world-by-polkadot/1/100023945
- [ ] [ECOSYSTEM CHALLENGE] (Advanced) Build The First Confidential Contract https://gitcoin.co/issue/Phala-Network/hello-world-by-polkadot/2/100023947
- [ ] [ECOSYSTEM CHALLENGE] Using Remix And MetaMask On Moonbeam https://gitcoin.co/issue/PureStake/gitcoin-hello-world-by-moonbeam/3/100023962
- [ ] [ECOSYSTEM CHALLENGE] Deploy On Moonbase Alpha Using Truffle https://gitcoin.co/issue/PureStake/gitcoin-hello-world-by-moonbeam/1/100023953
- [ ] [ECOSYSTEM CHALLENGE] Enable Multi-Currency Support https://gitcoin.co/issue/AcalaNetwork/polakdot-hello-world-acala/2/100023952
- [ ] [ECOSYSTEM CHALLENGE] Enable NFT Support https://gitcoin.co/issue/AcalaNetwork/polakdot-hello-world-acala/1/100023951
- [ ] [INTERMEDIATE CHALLENGE] Deploying An Auction Solidity Contract On Plasm Network https://gitcoin.co/issue/staketechnologies/hello-world-by-polkadot/5/100023959

# BIG-CARD
- [ ] [ADVANCED CHALLENGE] REST APIs - Build A Transaction Fee Estimator https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/4/100023930
- [ ] [ADVANCED CHALLENGE] REST APIs - Read an account's pending payouts https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/5/100023931
- [ ] [ADVANCED CHALLENGE] Smart Contracts - Build A Charity Raffle https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/3/100023929
- [ ] [ADVANCED CHALLENGE] Build A DApp https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/2/100023928


# INCOMPLETE!!!

- [ ] [BEGINNER CHALLENGE] Run a private Substrate network


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


# 6. [BEGINNER CHALLENGE] Run a Kusama or Polkadot node and add it to Telemetry (1Hr)

```
aria2c -x 16 https://ipfs.io/ipfs/QmeKCZmWfB6691DqE3Wqt3zyBE5wn8N42kgqKqKEozECYv

mkdir chains
mkdir chains/ksmcc3
7z x QmeKCZmWfB6691DqE3Wqt3zyBE5wn8N42kgqKqKEozECYv -o./chains/ksmcc3


./polkadot --base-path=`pwd` --name "ubinix-warun" --rpc-external --ws-external --pruning=archive --db=paritydb --chain=kusama --wasm-execution=compiled


docker run -p 9944:9944 parity/polkadot:v0.8.24 --name "ubinix-warun" --rpc-external --ws-external --wasm-execution=compiled

```

## Result
![Image of My Node.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_068.png)



# 7. [INTERMEDIATE CHALLENGE] FRAME Identity: Set an identity on a local --dev chain

```
./polkadot --base-path=`pwd` --name "fushigidane66" --rpc-external --ws-external --dev
```

## Result
![Image of My Iden.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_069.png)


# 8. [BEGINNER CHALLENGES] Front-End Javascript

```
yarn add @polkadot/api
yarn add @polkadot/util

yarn && yarn serve --port 8081
```

Ref:https://github.com/ubinix-warun/polkadash/tree/pages

## Result
![Image of My LastBlock.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_070.png)


