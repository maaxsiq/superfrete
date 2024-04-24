import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 19px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.text`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins';
  margin-top: 31px;
`;

export const Input = styled.input`
  min-height: 56px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins';
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  padding: 16px;
`;

export const Button = styled.button<{disabled: boolean}>`
  height: 56px;
  margin-top: 16px;
  background-color: ${(props) => props.disabled ? '#CCCCCC' : '#0FAE79'};
  border: ${(props) => props.disabled ? `1px solid #CCCCCC` : `1px solid #0FAE79`};
  border-radius: 12px;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};;
  &:hover{
    background-color: ${(props) => props.disabled ? '#CCCCCC' : '#2FBE79'};
    border: ${(props) => props.disabled ? '#CCCCCC' : '1px solid #2FBE79'};
  }
`;

export const TextButton = styled.text`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins';
  color: #fff;
`;
