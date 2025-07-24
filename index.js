const { ethers } = require("ethers");

const {
  encodeAllowedDepositRecipientsPolicy,
} = require("./1-AllowedDepositRecipientsPolicy");
const { deployedContracts } = require("./config");

let finalEncoding = [];
let finalPolicyList = [];

const encodingList = [
  {
    enable: true,
    function: encodeAllowedDepositRecipientsPolicy,
    address: deployedContracts.AllowedDepositRecipientsPolicy, // AllowedDepositRecipientsPolicy - 1
  },
];

encodingList.forEach((item) => {
  if (item.enable) {
    const encodedArgs = item.function();
    finalEncoding.push(encodedArgs);
    finalPolicyList.push(item.address);
  }
});

const calArgs = ethers.AbiCoder.defaultAbiCoder().encode(
  ["address[]", "bytes[]"],
  [finalPolicyList, finalEncoding]
);

console.log("calArgs", calArgs);
