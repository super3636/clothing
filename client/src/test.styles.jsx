import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Card = styled.div`
  background-color: rgba(0, 20, 100, 0.5);
  border: none;
  border-radius: 10px;
  width: 30%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 20px;
    width: 60%;
    border: 1px solid purple;
    border-radius: 5%;
  }
`;
