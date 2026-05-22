import styled from "styled-components";

const Container = styled.div`
  border: 2px solid var(--Black, #1a1a1a);
  display: flex;
  width: 236px;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageBox = styled.div`
  width: 236px;
  height: 216px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 180px;
  height: 150px;
`;

const Info = styled.div`
  background: #f8fbe7;
  width: 232px;
  min-height: 88px;
  display: flex;
  padding: 18px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  align-self: stretch;
  border-top: 2px solid var(--Black, #1a1a1a);
`;

const Name = styled.p`
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Major = styled.p`
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function InfoBox({ image, name, department, studentId}) {
  return (
    <Container>
      <ImageBox>
        <Image src={image} />
      </ImageBox>
      <Info>
        <Name>{name}</Name>
        <Major>
          {department}
          <br/>
          {studentId}
        </Major>
      </Info>
    </Container>
  );
}
