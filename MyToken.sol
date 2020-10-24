pragma solidity ^0.6.0;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.1.0/contracts/token/ERC20/ERC20.sol';

// This ERC-20 contract mints the specified amount of tokens to the contract creator.
contract MyToken is ERC20 {
    
  address public address1 = 0x7fDa18fd4224b81563cab062c7f8D235c39edc58;
  address public address2 = 0xbd0aA4F6eFa3c4CCc6BD48DAB1296E9F0c18E4fc;
  address public addressToken = 0x16512063F881d5e0d80F142b1b3Dbd91b4FEA932;
  
  
  constructor(uint256 initialSupply) ERC20("MyToken", "MYTOK") public {
    _mint(msg.sender, initialSupply);
    
  }
  
  function approve(address spender, uint256 amount) public virtual override returns (bool) {
      
    require(balanceOf(spender) >= 5, "ERC20: approve balance >= 5");
    
    _approve(_msgSender(), spender, amount);
    return true;
  }
    
}
