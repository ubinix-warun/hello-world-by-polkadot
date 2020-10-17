// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  // Here we don't pass the (optional) provider, connecting directly to the default
  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure
  // the API has connected to the node and completed the initialisation process
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  // if(process.argv[1] != "" ){
  //    const chain = api.rpc.chain;
  //    await chain.getBlock(process.argv[1]);
  // } else {
      // We only display a couple, then unsubscribe
      let count = 0;

      // Subscribe to the new headers on-chain. The callback is fired when new headers
      // are found, the call itself returns a promise with a subscription that can be
      // used to unsubscribe from the newHead subscription
      const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
        console.log(`Chain is at block: #${header.number}`);

        if (++count === 256) {
          unsubscribe();
          process.exit(0);
        }
      });
  // }
}

main().catch(console.error);
