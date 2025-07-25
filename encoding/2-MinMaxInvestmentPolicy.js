const { ethers } = require("ethers");

//first index is min and second index is max
//if one of them is disabled parse 0 instead of it.
//if both of them is disabled parse 0 in that index // [ethers.parseEther("0"), ethers.parseEther("0")]

const minmaxValues = [ethers.parseEther("1"), ethers.parseEther("2")];

const encodeMinMaxInvestmentPolicy = () => {
  const firstencoding = ethers.AbiCoder.defaultAbiCoder().encode(
    ["uint256", "uint256"],
    minmaxValues
  );

  return firstencoding;
};

module.exports = {
  encodeMinMaxInvestmentPolicy,
};
