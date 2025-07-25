const { ethers } = require("ethers");
const { config, sampleWallet } = require("../consts");

const restrictAllAllowedDepositRecipientsPolicy = false; //Disallow all depositor addresses
const limittedWalletsPermittedToDeposit = [sampleWallet]; //Limit Wallets Permitted To Deposit

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
