import styled from "styled-components";

export const Header1 = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #b7c0cbad;
  display: flex;
  align-items: center;
    // position: fixed;
  justify-content: flex-start;
  /* opacity: 0.5; */
   @media(min-width:769px) and (max-width:1085px){
    height: 10vh;
  }
   @media(min-width:590px) and (max-width:768px){
    height: 8vh;
  }
  @media(max-width:589px){
    height: 6vh;
  }
   
`;

export const HeaderContact = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 25px;

  span {
    width: 27;
    height: 39;
    top: 24px;
    left: 257px;
    opacity: 1;
  }
@media(min-width:769px) and (max-width:1085px){
   width: 70%;
      padding-left: 23px;
  }
  

   @media(min-width:590px) and (max-width:768px){
    width: 60%;
      padding-left: 18px;
  }
     @media(max-width:589px){
    width: 72%;
      padding-left: 15px;
    
  }
      @media(max-width:360px){
    width: 73%;
      padding-left: 10px;
    
  }
      
`;
export const HeaderText = styled.p`
  margin: 0 15px 0 5px;
  font-size: 16px;
  font: Inter;



  @media(min-width:769px) and (max-width:1085px){
   font-size: 15px;
    margin: 0 5px 0px 0px;
  }
   @media(min-width:590px) and (max-width:768px){
   font-size: 10px;
    margin: 0 3px 0px 0px;
  }
   @media(max-width:589px){
   font-size: 8px;
    margin: 0 3px 0px 0px;
  }
    @media(max-width:360px){
   font-size: 6px;
    margin: 0 3px 0px 0px;
    
  }
    
`;

export const HeaderSocial = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;

  span {
    width: 36.824249267578125px;
    height: 36.999996185302734;
    color: #313d4a;
    top: 22px;
    left: 1098px;
    opacity: 1;
  }
      


  @media(min-width:769px) and (max-width:1085px){
    width: 30%;
      padding-right: 70px;
      svg {
      width: 22px;
      height: 22px;
    }
  }

       @media(min-width:590px) and (max-width:768px){
    width: 40%;
      padding-right: 1px;
      svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width:589px){
    width: 28%;
      padding-right: 15px;
      svg {
      width: 20px;
      height: 20px;
    }
  }
     @media(max-width:360px){
   width: 25%;
      padding-right: 15px;
      svg {
      width: 12px;
      height: 12px;
    }
    
  }
    
`;