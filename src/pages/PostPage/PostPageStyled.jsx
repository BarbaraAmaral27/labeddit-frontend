import styled from "styled-components";

export const Styled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .container-post {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .post {
    background: #e0e0e0;
    border-radius: 12px;
    width: 364px;
    height: 131px;
  }

  input {
    border: none;
    background-color: #e0e0e0;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 18px;
  }
  input:focus {
    outline: none;
  } 

  .btn-postar {
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 12px;
    border: none;
    width: 365px;
    height: 51px;
    margin-top: 15px;
    color: #ffff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }

  hr {
    width: 363.01px;
    height: 0px;
    margin-top: 30px;
    gap: 10px;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );
  }
`;
