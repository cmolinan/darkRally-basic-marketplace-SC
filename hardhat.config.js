require("dotenv").config();

// -->Para poder verificar en CELO hubo problemas. Se resolvieron instalando hardhat-celo
// npm i hardhat-celo --save-dev
// -import the plugin in your hardhat.config.js:
//  require("hardhat-celo");

// -Remove / Comment: require("@nomicfoundation/hardhat-toolbox");
// -Remove / Comment: require('solidity-coverage');

// require("hardhat-celo");   
require("@nomicfoundation/hardhat-toolbox");
require('solidity-coverage');
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  plugins: ['hardhat-hardhat-coverage'],
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },  

  networks: {    
    amoy: {
      url: process.env.AMOY_TESNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",      
    },
    sepolia: {
      url: process.env.SEPOLIA_TESNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },
    mumbai: {
      url: process.env.MUMBAI_TESNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },
    goerli: {
      url: process.env.GOERLI_TESNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },
    polygon: {
      url: process.env.POLYGON_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },
    celo: {
      url: process.env.CELO_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 0,
      gas: "auto",
      gasPrice: "auto",
    },    
  },
  etherscan: {
    apiKey: {      
      goerli: process.env.API_KEY_ETHERSCAN,        
      polygonMumbai: process.env.API_KEY_POLYGONSCAN,
      polygon: process.env.API_KEY_POLYGONSCAN,
      celo: process.env.API_KEY_CELOSCAN,
      polygonAmoy: process.env.API_KEY_OKLINK_AMOY,
      sepolia:  process.env.API_KEY_ETHERSCAN,
    },
    customChains: [
      {
        network: "celo",
        chainId: 42220,
        urls: {
          apiURL: "https://explorer.celo.org/mainnet/api",
          browserURL: "https://celoscan.io/"
        }
      },
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL:
            "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/polygonAmoy",
        }
      },
    ]
  },
};
