const { ethers } = require("ethers");
const { config } = require("../consts");

const onlyInKindRedemptionAllowedAssetsForRedemptionPolicy = false; // Only allow in-kind redemption
const restrictedAssetsForRedemption = [
  config.arb_token, //arbToken
  config.dai_token, //daiToken
]; //restrict Assets For Redemption

const encodeAllowedAssetsForRedemptionPolicy = () => {
  const firstencoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint8", "address[]"],
    [
      config.update_type_3,
      onlyInKindRedemptionAllowedAssetsForRedemptionPolicy
        ? []
        : restrictedAssetsForRedemption,
    ]
  );

  const secondEncoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint256[]", "bytes[]"],
    [[], [firstencoding]]
  );

  return secondEncoding;
};

module.exports = {
  encodeAllowedAssetsForRedemptionPolicy,
};
