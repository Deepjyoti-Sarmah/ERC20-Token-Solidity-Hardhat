require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  gasReporter:{
    enabled:true,
    currency:"INR",
    noColors:false,
    outputFile:"gasReport.txt",
    coinmarketcap:"<add your own api key>",
    token: "matic"
  }
};
