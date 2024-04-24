import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F2F2F2;
  padding: 19px;
  height: 100%;
  gap: 16px;
`;

export const Title = styled.text`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins';
`;

export const Card = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: fit-content;
  border-radius: 12px;
  gap: 8px;
`;

export const Message = styled.text`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins';
  color: #4D4D4D;
`;

export const DateTime = styled.text`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Poppins';
  color: #999999;
`;