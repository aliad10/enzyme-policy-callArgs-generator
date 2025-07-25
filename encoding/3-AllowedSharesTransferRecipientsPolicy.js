const { ethers } = require("ethers");
const { config, sampleWallet } = require("../consts");

const restrictAllAllowedSharesTransferRecipientsPolicy = false; //Disallow all transfers
const restrictedWalletsPermittedToReceiveShareTransfer = [sampleWallet]; //Restrict Wallets Permitted To Receive A Share Transfer

const encodeAllowedSharesTransferRecipientsPolicy = () => {
  const firstencoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint8", "address[]"],
    [
      config.update_type_3,
      restrictAllAllowedSharesTransferRecipientsPolicy
        ? []
        : restrictedWalletsPermittedToReceiveShareTransfer,
    ]
  );

  const secondEncoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint256[]", "bytes[]"],
    [[], [firstencoding]]
  );

  return secondEncoding;
};

module.exports = {
  encodeAllowedSharesTransferRecipientsPolicy,
};
