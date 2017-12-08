There is no code in this example, but you can use something like [../deployed/](this) as an example, or just use the Truffle boxes in Truffle website to setup your project

The main lesson of this example is how to load pre-deployed contracts, depoyed using say Truffle into your Mist browser

The trick is to locate what is called the 'abi' of your copmiled contracts

Truffle compiles your contracts to json format under build/ folder when you run ```truffle compile``` or ```truffle migrate```

The json is what is actually gets deployed to Ethereum.

The JSON contains a section called 'abi'. all you need to load this contract in Mist browser is as follows

* Open Mist browser
* Go to Contracts tab
* Click ```Watch Contract```
* Enter these
   ** Contract Name: Anything but ideally should match name of actual contract
   ** Contract Address: Address t which contrat was deployed by Truffle migrate. This information is printed when you run migrate.
   ** JSON Interface: Here just paste the array value of the ```abi``` key in the build/[YourContract].json file


That's it! Now you can watch your pre-deployed contract in Mist!

I wish there was some doc that told me this, I had to figure this out myself after reading lots of online material and using some instincts.


