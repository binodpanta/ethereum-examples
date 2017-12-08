This example is based on a react truffle box obtained frmo the Truffle website

It's not a complete project but shows just how to setup your truffle.js config to deploy to more than one network
For example, there are no contracts under contracts/ here but I assume you have contracts names AssetToken.sol and Crowdsale.sol respectively

usually the 'development' network is a testrpc server
in this example, two servers are setup in the config. 

In my case, I used a geth localnet as the 'shareddev' server to use during shared development with other devs
Testrpc started to break down when I started to use it with the Mist browser, so I switched to geth

I will post another example on how to run a geth localnet of your own

Contract deployment script examples are in contracts/ and migrations/ folder. Check migrations on how to setup migration. That migration 2_*.js was created using ```truffle create migration``` command. Check Truffle doc for full ref.

To deploy to development network just run

    truffle migrate --network development

To deploy to the 'shareddev' network, run

    truffle migrate --network shareddev


Basically that's all you need to do during development phase. Once ready to migrate contracts to real networks, of course you need to update truffle config file for those networks


