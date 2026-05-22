import styled from "styled-components";

const Button = styled.button`
  display: flex;
  height: 44px;
  min-width: 92px;
  padding: 9px 23px;
  justify-content: center;
  align-items: center;
  color: var(--Black, #1a1a1a);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: ${({ $isActive }) =>
    $isActive
      ? "2px solid var(--Black, #1A1A1A)"
      : "1px solid var(--Black, #1a1a1a)"};
  background-color: ${({ $isActive }) => ($isActive ? "#c6e400" : "white")};
`;

export default Button;
