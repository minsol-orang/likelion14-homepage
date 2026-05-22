import { useState } from "react";
import styled from "styled-components";
import TopSection from "../../components/members/TopSection.jsx";
import MemberSection from "../../components/members/MemberSection.jsx";
import { membersData } from "./membersData.js";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 92px;
  margin: 76px 57px 120px;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const GroupTitle = styled.h2`
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.88px;
`;

const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 102px;
`;

const LeaderRow = styled.div`
  display: flex;
  gap: 22px;
  align-items: flex-start;
`;

export default function Members() {
  const [activeGeneration, setActiveGeneration] = useState("14");

  const currentData = membersData[activeGeneration];

  const leaderSections = currentData.staff.slice(0, 2);
  const otherStaffSections = currentData.staff.slice(2);

  return (
    <Container>
      <TopSection
        activeGeneration={activeGeneration}
        setActiveGeneration={setActiveGeneration}
      />

      <Content>
        <GroupContainer>
          <GroupTitle>운영진</GroupTitle>

          <SectionList>
            <LeaderRow>
              {leaderSections.map((section) => (
                <MemberSection
                  key={section.sectionTitle}
                  sectionTitle={section.sectionTitle}
                  members={section.members}
                />
              ))}
            </LeaderRow>

            {otherStaffSections.map((section) => (
              <MemberSection
                key={section.sectionTitle}
                sectionTitle={section.sectionTitle}
                members={section.members}
              />
            ))}
          </SectionList>
        </GroupContainer>

        <GroupContainer>
          <GroupTitle>아기사자</GroupTitle>

          <SectionList>
            {currentData.babyLion.map((section) => (
              <MemberSection
                key={section.sectionTitle}
                sectionTitle={section.sectionTitle}
                members={section.members}
              />
            ))}
          </SectionList>
        </GroupContainer>
      </Content>
    </Container>
  );
}
