require('dotenv').config();
var hre = require('hardhat');

const {
  getRole,
  verify,
  ex,
  printAddress,
  deploySC,
  deploySCNoUp,
} = require('../utils');

async function deployDarkRallySale() {
  // Upgradeable SC
  
  // var darkRallySCnftAddress = "0x7Eb878f9c5AEbe42a4728e2F82eAC6388A583241";
  // var darkRallySCnftAddress = "0x9f07fFA9dADc176835912F31AF0494993dabbafF";
  var darkRallySCnftAddress = "0xe25814F33dDc9712C433ab8c5aCcDC2634a47205";  //Sepolia

  // var usdcSCaddress = "0x643864518D0A8ca16EeF1c827E5E370ed51721FB";
  // var usdcSCaddress = "0x1cE80899871196a65FC9a5aC10A92c5fDE8B7f8c";
  var usdcSCaddress = "0x883d79a054fC82C7eB2e73Bc794eBD6992f0449C";  //Sepolia

  var companyWalletAddr = "0xDEC0eE6F68f0CC0F5E9baE7a9219E1B3e7390e17";
  var feeWalletAddr = "0x7A30a1401a37FBAFbb7db0207a1658511096B861";

  var saleContract = await deploySC('DarkRallySale', [usdcSCaddress, darkRallySCnftAddress, companyWalletAddr, feeWalletAddr]);
  var implementation = await printAddress('DarkRallySale', saleContract.address);

  await verify(implementation, 'DarkRallySale', []);
}


deployDarkRallySale() //
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1; // exitcode - error
  });

