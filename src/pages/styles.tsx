import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f7f6;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 1px auto;
  font-family: "Arial", sans-serif;
  min-height: 80vh;
  background-color: gra;
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 35px;
  font-size: 2.8em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 4px solid #3498db;
  margin-top: 55px;
`;

export const GenerateItemButton = styled.button`
  position: absolute;
  background: linear-gradient(145deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 14px 17px;
  border-radius: 20px;
  font-size: 0.85em;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
    background: linear-gradient(145deg, #2980b9, #3498db);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:empty:after {
    content: "Atualizar";
  }
`;
