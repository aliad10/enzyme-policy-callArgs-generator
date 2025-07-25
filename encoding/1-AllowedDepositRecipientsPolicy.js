const { ethers } = require("ethers");
const { config } = require("../config");

const restrictAllAllowedDepositRecipientsPolicy = false; //Disallow all depositor addresses
const limittedWalletsPermittedToDeposit = [
  "0x2089035369B33403DdcaBa6258c34e0B3FfbbBd9", //satoshi.eth :)
]; //Limit Wallets Permitted To Deposit

const encodeAllowedDepositRecipientsPolicy = () => {
  const firstencoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint8", "address[]"],
    [
      config.update_type_3,
      restrictAllAllowedDepositRecipientsPolicy
        ? []
        : limittedWalletsPermittedToDeposit,
    ]
  );

  const secondEncoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint256[]", "bytes[]"],
    [[], [firstencoding]]
  );

  return secondEncoding;
};
module.exports = {
  encodeAllowedDepositRecipientsPolicy,
};
