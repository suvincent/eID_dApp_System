pragma solidity ^0.6.6;
import "https://github.com/witnet/elliptic-curve-solidity/blob/master/contracts/EllipticCurve.sol";

contract D {
  uint public n;
  address public sender;

  uint256 public constant GX = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;
  uint256 public constant GY = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;
  uint256 public constant AA = 0;
  uint256 public constant BB = 7;
  uint256 public constant PP = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;
/*

    function test()public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
        uint sum = 3;
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(sum,GX,GY,AA,PP);   
        
    }
    function test2()public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
        uint sum = 5;
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(sum,GX,GY,AA,PP);   
        
    }
    function test3()public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
        uint sum = 8;
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(sum,GX,GY,AA,PP);   
        
    }
    function test4()public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
        uint a;
        uint b;
        uint c;
        uint d;
        (a,b) = EllipticCurve.ecMul(3,GX,GY,AA,PP);  
        (c,d) = EllipticCurve.ecMul(5,GX,GY,AA,PP);

        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecAdd(a,b,c,d,AA,PP);  
        
    }
    */
    function Add(uint a,uint b,uint c,uint d)public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
       (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecAdd(a,b,c,d,AA,PP);
    }
    function Mul(uint sum)public pure returns(uint256 ECC_checked_x,uint256 ECC_checked_y){
        (ECC_checked_x,ECC_checked_y) = EllipticCurve.ecMul(sum,GX,GY,AA,PP);   
    }

}


