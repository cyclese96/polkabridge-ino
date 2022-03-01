// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

abstract contract PolkaBridgeNFT is ERC1155 {

    function mintNFT(address recipient_, uint256 id_, uint256 amount_)
        public
    {
        _mint(recipient_, id_, amount_, '');
    }

    function multiMintNFT(address recipient_, uint256[] memory ids_, uint256[] memory amounts_)
        public
    {
        _mintBatch(recipient_, ids_, amounts_, '');
    }
}
