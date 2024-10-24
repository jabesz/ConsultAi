import { styled } from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  width: 90%;
  max-width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;
  transition: all 0.3s ease;
  gap: 1.2em;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default Container;