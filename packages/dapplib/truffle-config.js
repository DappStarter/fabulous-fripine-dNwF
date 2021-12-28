require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain soft harvest local fortune skin'; 
let testAccounts = [
"0x196ad541b3532e852bcc79b705550036dc97e11517b9fb0a7c31948232c0ae93",
"0x0a1416ddc9543177bc88dcd1ee55ebb974218d4a6ab6863bc930c10d9a209313",
"0x4954c4402d78f44eacff5312dab73b6033fef9d8f29f2a580cb053ce2812dff8",
"0x1f369a6900875274059f5d869aa53b11215d6835b7c53aa586551eba56f69724",
"0xdade88ed5905cc3239566f6e7f2abfdc3a1e7a39578166b5d30871cb24e9594e",
"0x2bddf1442a8c7282ab2c7f9eca83890727f9e1a2af47d875227f204d9dbe592d",
"0xb722e0696f5a65d068eab9e89639b4bb3aa22019956fcf5d03eb52c9c2b76609",
"0x50d125125c6068870251d3b983dea76daceaff791781fca1c375f1db78df1487",
"0x6f6d2735ff6251d0dcb2ec6c872d2a36c20bbfa4916447e230b3d70cff4b576a",
"0xcf2f03f8b527aa4e23d0d948450152626e1d3a60af8d67b16e65c3b6d7d3336b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

