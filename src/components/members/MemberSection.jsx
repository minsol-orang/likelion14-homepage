import styled from "styled-components";
import InfoBox from "./InfoBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  align-self: stretch;
`;

const SectionTitle = styled.p`
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MemberGroup = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 22px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export default function MemberSection({ sectionTitle, members }) {
  return (
    <Container>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <MemberGroup>
        {members.map((member) => (
          <InfoBox
            key={member.id}
            name={member.name}
            department={member.department}
            studentId={member.studentId}
            image={member.image}
          />
        ))}
      </MemberGroup>
    </Container>
  );
}
