import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/background-cropped.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border: 1px solid #3498db;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #3498db; 
  border-bottom: 2px solid #3498db; 
  background-color: #ecf0f1;
  box-sizing: border-box;
  height: 100%;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  color: #3498db;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: #2c3e50;
`;

export const Input = styled.input`
  padding: 12px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #2ecc71;
  }
`;

export const Select = styled.select`
  padding: 12px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #2ecc71;
  }
`;

export const Button = styled.button`
  padding: 14px;
  background-color: ${(props) => (props.disabled ? '#95a5a6' : '#3498db')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 18px;
  transition: background-color 0.3s ease-in-out;

  &:hover:enabled {
    background-color: #2980b9;
  }
`;

export const SuccessMessage = styled.p`
  color: #2ecc71;
  font-weight: bold;
  margin-top: 16px;
  font-size: 18px;
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-weight: bold;
  margin-top: 16px;
  font-size: 18px;
`;

export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 16px; /* Reset font size */
  }

  /* Add a CSS reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
