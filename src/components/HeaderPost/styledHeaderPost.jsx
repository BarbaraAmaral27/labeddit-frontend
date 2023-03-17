import styled from "styled-components";

export const Styled = styled.header`
  display: flex;
  align-items: center;

  .container-logo {    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: #ededed;
    background: rgba(237, 237, 237, 1);
  }

  img{
    position: fixed;
    transform: translateX(-50%);
    width: 28.02px;
    left: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }

  a{
    /* font-family: "Noto Sans"; */
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #4088cb;
    cursor: pointer;
    margin-right: 29px;
  }
`;
