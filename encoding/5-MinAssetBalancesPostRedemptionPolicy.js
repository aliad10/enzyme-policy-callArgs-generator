const { ethers } = require("ethers");
const { config } = require("../consts");
// when new token added with its value appends to the arrays
const minAssetBalancesPostRedemptionPolicyAssetList = [
  config.arb_token, //arbToken
]; //Specific Asset Redemption Threshold (token address list)

const minAssetBalancesPostRedemptionPolicyAmount = [ethers.parseEther("1")]; // token values

const encodeMinAssetBalancesPostRedemptionPolicy = () => {
  const firstencoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["address[]", "uint256[]"],
    [
      minAssetBalancesPostRedemptionPolicyAssetList,
      minAssetBalancesPostRedemptionPolicyAmount,
    ]
  );

  return firstencoding;
};
module.exports = {
  encodeMinAssetBalancesPostRedemptionPolicy,
};
