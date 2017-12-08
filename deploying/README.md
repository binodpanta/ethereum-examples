This example is based on a react truffle box obtained frmo the Truffle website

It's not a complete project but shows just how to setup your truffle.js config to deploy to more than one network

usually the 'development' network is a testrpc server

in this example, two servers are setup in the config. 

Contract deployment script examples are in contracts/ and migrations/ folder. Check migrations on how to setup migration. That migration 2_*.js was created using ```truffle create migration``` command. Check Truffle doc for full ref.

To deploy to development network just run

    truffle migrate --network development

To deploy to the 'shareddev' network, run

    truffle migrate --network shareddev


Basically that's all you need to do during development phase. Once ready to migrate contracts to real networks, of course you need to update truffle config file for those networks


