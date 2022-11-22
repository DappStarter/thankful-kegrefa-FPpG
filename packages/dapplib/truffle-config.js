require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember hole guess nasty flower seek'; 
let testAccounts = [
"0xe85897836433e197b1113519681c96ccdf51266cfe58dc360d46fda186cde128",
"0x945ac583e02acb334016ff6ebd7c639f7bb0c01e36307dfb4ca4cb201ca220ad",
"0x8ba2b087805e09cb88ab6f96348e547363dfda1103b041db87f7be2ae77d9e1b",
"0xbe83c64b60d033ba33612e31c071e575ea5bec0e9504e25c1b1b95a8f010e584",
"0xa46e84f43d2aad950ae0455c4f37bff4546a2d04ba29c73763070995ae590da3",
"0x6eb2b42f1de6e9c4da1b67fb4494a31735137552092646347ad2ea01819566f2",
"0x0db6b25445fb257aba56bdeae67e2e8b4856f12484375bd8f6e3097024c94582",
"0x68efc4a60fb3dda14f8fb4c6f51ac066b2ce0570e22a9868773124e6cf53482f",
"0x7abbabb4bfbe68c83ce6ce4e67ae7689d7e1af6c5ca8b5c371954a9480f32ba6",
"0x71c162a39ca0771ceff9fd24f159fb7efb1ad56eb00334f678e9d7296d43b1eb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


