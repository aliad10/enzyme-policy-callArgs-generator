const config = {
  update_type_3: 3,
  update_type_1: 1,
  update_type_2: 2,
  arb_token: "0x912ce59144191c1204e64559fe8253a0e49e6548",
  dai_token: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
};

/*
- allowedAdaptersPolicyChoice = 1 is Use council-maintained list - Sulu: adapters
- allowedAdaptersPolicyChoice = 2 is Use council-maintained list - Sulu: no-slippage adapters
- allowedAdaptersPolicyChoice = 3 is Specify your own adapter list
- allowedAdaptersPolicyChoice = 4 is Specify your own adapter list ID (advanced)
- allowedAdaptersPolicyChoice = 5 is Disallow all adapters
*/
const allowedAdaptersChoice = {
  sulu_adapters: 1,
  sulu_no_slippage_adapters: 2,
  specify_your_own_adapter_list: 3,
  specify_your_own_adapter_list_id: 4,
  disallow_all_adapters: 5,
};

const protocolAdapterList = {
  balancer_v2: "0xb3ea1f2f3d2cdbd81a3de91fdf9a2f3e3acd66c1",
  one_inch_v5: "0xc2f737aeece89d8db98a7d82bfed40d09e381ed5",
  three_one_third: "0x5a1c0e89133c4cd844a8b345370565f1368a79a8",
  aave_v3: "0xd0c6b9801fc1e70945f11b3f93340dcc7507fd7c",
};

/* 
- 0 is Aave V3 Borrow
- 3 is The Graph Delegation
- 1 is Uniswap V3 Provide Liquidity
- 2 is GMX V2 Leverage Trading
 */
const externalPositionIds = {
  aave_v3_borrow: 0,
  the_graph_delegation: 3,
  uniswap_v3_provide_liquidity: 1,
  gmx_v2_leverage_trading: 2,
};

// deplyed enzyme contracts on arbitrum
// check them here https://docs.enzyme.finance/general-info/codebase/contracts/arbitrum
const deployedContracts = {
  AllowedDepositRecipientsPolicy: "0xde0c43b8cb1cacdec773ef55fcbfbcbe009891f1",
};

module.exports = {
  config,
  allowedAdaptersChoice,
  protocolAdapterList,
  externalPositionIds,
  deployedContracts,
};
