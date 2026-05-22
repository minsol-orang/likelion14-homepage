import styled from "styled-components";
import skonUrl from "../../assets/images/skon_image.svg";
import textboxUrl from "../../assets/images/textbox_image.svg";

const FooterContainer = styled.div`
  display: flex;
  height: 160px;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
`;

const LeftImage = styled.img`
  width : 636px;
  height : 84px;
`;

const RightImage = styled.img`
  width : 58px;
  height : 58px;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <LeftImage src={textboxUrl} />
      <RightImage src={skonUrl} />
    </FooterContainer>
  );
}
