import styled from "styled-components";
import logoUrl from "../../assets/images/logo_image.svg";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--Black, #1a1a1a);
`;

const HeaderLeft = styled.div`
  width: 408px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-right: 1px solid var(--Black, #1a1a1a);
`;

const HeaderRight = styled.div`
  width: 616px;
  height: 76px;
  display: flex;
`;

const LogoImage = styled.img`
  width: 46px;
  height: 46px;
`;

const LogoTitle = styled.p`
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonGroup = styled.div`
  width: 412px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-left: 1px solid var(--Black, #1a1a1a);
`;

const LoginButton = styled.div`
  width: 204px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--Black, #1a1a1a);
`;

const Button = styled.button`
  all: unset;
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.88px;
  cursor: pointer;
`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderLeft onClick={() => navigate("/")}>
        <LogoImage src={logoUrl} />
        <LogoTitle>멋쟁이사자처럼 서경대학교</LogoTitle>
      </HeaderLeft>

      <HeaderRight>
        <ButtonGroup>
          <Button onClick={() => navigate("/recruit")}>지원하기</Button>
          <Button onClick={() => navigate("/project")}>프로젝트</Button>
          <Button onClick={() => navigate("/members")}>구성원</Button>
        </ButtonGroup>

        <LoginButton>
          <Button onClick={() => navigate("/login")}>로그인/회원가입</Button>
        </LoginButton>
      </HeaderRight>
    </HeaderContainer>
  );
}
