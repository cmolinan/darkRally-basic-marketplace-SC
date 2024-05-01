# Project: Dark Rally Blockchain
This project has the purpose to integrate the vehicular racing game "Dark Rally" into Blockchain technology, for which three Smart Contracts (SC). were developed:
1) DarkRallyNFT, for the minting and transfer of NFT tokens and other related transactions.
2) DarkRallySale, which handles the management of purchases of the mentioned NFTs by users.
3) DarkRallyMktPlace, which manages the Dark Rally MarketPlace where NFT owners can trade their NFT tokens.
4) An auxiliar USDCoin, which is an ERC-20 smart contract that is responsible for the generation of cryptocurrency tokens, that  are used for the main Smart Contracts.

In addition, Open Zeppelin Defender was used to automate the minting of trophies, for which the corresponding Autotask script has been developed.

For this purpose, a Next JS front-end was developed to demonstrate the functionalities of the mentioned Smart Contracts, that includes a Shop of NFT and Administration pages.  

In addition, there is another simple interface to test the following functionalities of a MarketPlace:
1) Allows NFT owners to offer their assets at any price they want (in USDCoin)
2) That any person who own a wallet and a balance in USDCoin can buy NFT assets offered by others.

## Built With
- Solidity for Ethereum Smart Contracts
- JavaScript / Webpack for simple MarketPlace's front-end
- GitFlow
- Testing with Hardhat

## Live Demo
[Link to main front-end live Demo](https://dark-rally-blockchain-main-frontend.vercel.app/)

[Link to simple MarketPlace's front-end live Demo](https://cmolinan.github.io/DarkRallyMarketPlace/)

- Both front-end uses Testnet Sepolia and  tokens from our own USDC Smart Contract.
- If you wish to test these developments, you must mint coins from the USDC Contract that is also included in this repository.
- If you only want to test using the front-ends, write to this email to mint coins for you: cmolinan@gmail.com

## DOCUMENTATION

- The file 'Project Dark Rally Blockchain v1.02.pdf' contains a summary of the three main Smart Contracts developed, including description, basic technical info and the main functions available for each one. 

- The file 'readme-published contracts.txt' contains the addresses of deployed Smart Contracts on Sepolia chain

- The file 'readme-data for NFT assets.txt' contains the data of all NFT assets that are included in DarkRallyNFT Smart Contract

## Getting Started

SMART CONTRACTS:

-> Not all details will be provided here because it's assumed that you know about Blockchain programming with Solidity, Hardhat and Open Zeppelin Defender

- Create a .env file based on the .env file-example
- Generate the values ​​indicated there (a wallet private key, an url for sepolia testnet and a api-key for etherscan)
- Check hardhat.config.js configuration
- Don't forget to get Sepolia tokens from some faucet
- Generate the smart contracts using this command for example: 
```bash
npx hardhat --network sepolia run .\scripts\deployUSDC.js
```

MAIN FRONTEND:
- To get a local copy of a fork of the Jorge Rojas's main Front-End, go to this repository:
  https://github.com/cmolinan/DarkRally-BlockChain-Main-Frontend

  More details about this fork are found there.

SIMPLE MARKETPLACE FRONTEND:
- To get a local copy up, clone the repo like this:  
  git clone https://github.com/cmolinan/DarkRally-BlockChain-integration-project.git
​
- Install the dependencies using `npm install`

- Change to src folder and run `npm run build`. This will generate the distribution files (./dist folder).
  To run the webapp locally in Visual Code, go to ./dist folder, select index.html and click the right button selecting "Open with Live Server".

------


## Authors
👤 **Carlos Molina**: 
Blockchain Smart Contracts and simple Market Place front-end:

- GitHub: https://github.com/cmolinan
- LinkedIn: [Carlos Molina](https://www.linkedin.com/in/carlosmolinan/)

👤 **Jorge Rojas**:
Main frontend to demonstrate the functionalities of Smart Contracts
- GitHub: https://github.com/JorgeRojas827
- e-mail: jorgerojaspoma09@gmail.com

👤 **Josue Lopez Chacon**: Tests for the Blockchain Smart Contracts
- e-mail: josue.12lch@gmail.com

👤 **Wilfedo Alexander De la Cruz Merello**: Documentation and presentation
- e-mail: alexanderdlcmerello@gmail.com


## �� Contributing
Contributions, issues, and feature requests are welcome!
​
## Show your support
Give a ⭐️ if you like this project!

## �� License
This project is [MIT](./MIT.md) licensed.

