# DONE (15/19) 

- [x] [BEGINNER CHALLENGE] Set An Identity On Kusama Or Polkadot's Development Version
- [x] [BEGINNER CHALLENGE] Deploying Solidity Contract on Plasm Network V1
- [x] [BEGINNER CHALLENGES] Back-End Javascript
- [x] [BEGINNER CHALLENGES] Play with Westend
- [x] [BEGINNER CHALLENGE] Launch a local Substrate development chain
- [x] [BEGINNER CHALLENGE] Run a Kusama or Polkadot node and add it to Telemetry
- [x] [INTERMEDIATE CHALLENGE] FRAME Identity: Set an identity on a local --dev chain 
- [x] [BEGINNER CHALLENGES] Front-End Javascript
- [x] [ECOSYSTEM CHALLENGE] Using Remix And MetaMask On Moonbeam 
- [x] [ECOSYSTEM CHALLENGE] (Beginner) Build And Run A Local Phala Network 
- [x] [INTERMEDIATE CHALLENGE] Forkless Upgrades 
- [x] [ECOSYSTEM CHALLENGE] Deploy On Moonbase Alpha Using Truffle (Second Submit)
- [x] [ECOSYSTEM CHALLENGE] Enable Multi-Currency Support 
- [ ] [ECOSYSTEM CHALLENGE] Enable NFT Support 
- [ ] [ECOSYSTEM CHALLENGE] (Advanced) Build The First Confidential Contract 

# TODO
- [x] [INTERMEDIATE CHALLENGE] Deploying An Auction Solidity Contract On Plasm Network 
- [x] [INTERMEDIATE CHALLENGE] Smart Contracts - Write An ERC-20 Smart Contract With Ink!
- [ ] [INTERMEDIATE CHALLENGE] FRAME Development 
- [ ] [INTERMEDIATE CHALLENGE] FRAME Multisig


# BIG-CARD
- [ ] [ADVANCED CHALLENGE] REST APIs - Build A Transaction Fee Estimator https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/4/100023930
- [ ] [ADVANCED CHALLENGE] REST APIs - Read an account's pending payouts https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/5/100023931
- [ ] [ADVANCED CHALLENGE] Smart Contracts - Build A Charity Raffle https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/3/100023929
- [ ] [ADVANCED CHALLENGE] Build A DApp https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/2/100023928


# BYE!

- x [BEGINNER CHALLENGE] Run a private Substrate network

# SKETCH!!!


# 1x. [INTERMEDIATE CHALLENGE] Enable NFT Support 

https://gitcoin.co/issue/AcalaNetwork/polakdot-hello-world-acala/1/100023951

```

```

# 14. [ECOSYSTEM CHALLENGE] (Advanced) Build The First Confidential Contract 


```


```


# 15. [INTERMEDIATE CHALLENGE] Smart Contracts - Write An ERC-20 Smart Contract With Ink! 


```
cargo contract new tuna20

cargo +nightly test
cargo +nightly contract build
cargo +nightly contract generate-metadata

```
## Result
![Image of WASM.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_075.png)

Source WASM: https://github.com/ubinix-warun/hello-world-by-polkadot/tree/main/smart-contract-with-ink
Canvas UI:


# 1x. [INTERMEDIATE CHALLENGE] Deploying An Auction Solidity Contract On Plasm Network 

https://gitcoin.co/issue/staketechnologies/hello-world-by-polkadot/5/100023959

```

```

Source: https://github.com/ubinix-warun/hello-world-by-polkadot/blob/main/auction.sol



# 1x. [INTERMEDIATE CHALLENGE] FRAME Multisig 

https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/8/100023934 

```

```

# 1x. [INTERMEDIATE CHALLENGE] FRAME Development 

https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/7/100023933

```

```

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

* Web:https://ubinix-warun.github.io/polkadash/
* Ref:https://github.com/ubinix-warun/polkadash/tree/pages

## Result
![Image of My LastBlock.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_070.png)



# 9. [ECOSYSTEM CHALLENGE] Using Remix And MetaMask On Moonbeam 

```

Moonbeam Alpha (Testnet) 
!faucet send 0x7fDa18fd4224b81563cab062c7f8D235c39edc58

Deploy an ERC20 token onto Moonbase Alpha

```

## Result

* checkContract: 0xd5b832aC7e357770272e319C52A26CBfA4D6C50a
* sol. https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/MyToken.sol


# 10. [ECOSYSTEM CHALLENGE] (Beginner) Build And Run A Local Phala Network

```
./target/release/phala-node --dev
cd pruntime/bin
./app
./target/release/phost --dev

yarn
yarn dev
```

## Result

![Image of My Server.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_72.jpeg)
![Image of My Server.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_73.png)
![Image of My Server.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_74.png)



# 11. [INTERMEDIATE CHALLENGE] Forkless Upgrades 

```
target/release/wbuild/node-template-runtime/node_template_runtime.compact.wasm

SpecName: ubinit-warun
SpecVersion: 2

```

## Result
![Image of My Forkless.](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_075.png)


# 12. [ECOSYSTEM CHALLENGE] Deploy On Moonbase Alpha Using Truffle

```
node_modules/.bin/truffle compile

Compiling your contracts...
===========================
> Compiling ./contracts/MyToken.sol
> Compiling @openzeppelin/contracts/GSN/Context.sol
> Compiling @openzeppelin/contracts/math/SafeMath.sol
> Compiling @openzeppelin/contracts/token/ERC20/ERC20.sol
> Compiling @openzeppelin/contracts/token/ERC20/ERC20Detailed.sol
> Compiling @openzeppelin/contracts/token/ERC20/IERC20.sol
> Artifacts written to /home/warun/WorkspaceX/ubinix-webs/Gitcoin/truffle/moonbeam/tools/truffle/build/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang
   
node_modules/.bin/truffle migrate --network testnet


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'testnet'
> Network id:      43
> Block gas limit: 0 (0x0)

1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x16f50f93102f4d6fead239ce1e40d391bc3b093f5afc9b3a47aca2da62402f28
   > Blocks: 1            Seconds: 8
   > contract address:    0xFcd2D31067B780137Fd0cF6341A62457839e47Ff
   > block number:        191102
   > block timestamp:     1603901250
   > account:             0xbd0aA4F6eFa3c4CCc6BD48DAB1296E9F0c18E4fc
   > balance:             9.89274364
   > gas used:            191943 (0x2edc7)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00383886 ETH


2_deploy_contracts.js
=====================

   Replacing 'MyToken'
   -------------------
   > transaction hash:    0x565f04a08666906c053178abdd621afa6abb57f4c40ddf3491073c11506e85d8
   > Blocks: 1            Seconds: 12
   > contract address:    0xb8543E0Cc29C4f44f2b4627320F34100C25bf0A2
   > block number:        191160
   > block timestamp:     1603901682
   > account:             0xbd0aA4F6eFa3c4CCc6BD48DAB1296E9F0c18E4fc
   > balance:             9.86976354
   > gas used:            1106667 (0x10e2eb)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02213334 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02213334 ETH



Summary
=======
> Total deployments:   1
> Final cost:          0.02213334 ETH

```

## Result
* Submit Result: https://gist.githubusercontent.com/ubinix-warun/b30a12084c5802013eb1c58cc575d680/raw/9b1910fea5efa5468ee40fbc48a717e55d9fab14/hackathon-deploy-on-moonbase-alpha-using-truffle-fixed.txt
* migration address, 0xFcd2D31067B780137Fd0cF6341A62457839e47Ff
* token contract address: 0xb8543E0Cc29C4f44f2b4627320F34100C25bf0A2


# 13. [ECOSYSTEM CHALLENGE] Enable Multi-Currency Support https://gitcoin.co/issue/AcalaNetwork/polakdot-hello-world-acala/2/100023952


```
./node-template --dev --tmp

add types.json on polkadot.js/apps

```
## Result
![Server](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_076.png)
![Server](https://raw.githubusercontent.com/ubinix-warun/hello-world-by-polkadot/main/Selection_077.png)

* My Code on Branch https://github.com/ubinix-warun/substrate-node-template/commits/add-orml-token-currency-pallet
   * ADD: Token/Currency => Exchange! https://github.com/ubinix-warun/substrate-node-template/commit/e3fe5788a3640af794c5ad92bdcc1ecd5aa11627
   * ADD TYPE => https://github.com/ubinix-warun/substrate-node-template/commit/81bc88df62a3f4c114c36e3422a1740b384107f8


