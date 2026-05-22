import styled from "styled-components";
import Button from "../common/button/Button.jsx";
import TopUrl from "../../assets/images/top_section_image.svg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 57px;
  margin-right: 57px;
  margin-top: 56px;
  padding-bottom: 45px;
  border-bottom: 1px solid var(--Black, #1a1a1a);
`;

const Image = styled.img`
  margin: 0 28px;
  width: 132px;
  height: 64px;
`;

const TextBox = styled.p`
  color: var(--Black, #1a1a1a);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 17px 28px 59px 28px;
`;

const ButtonGroup = styled.div`
  height: 44px;
  display: flex;
  padding-left: 28px;
  padding-right: 28px;
  align-items: flex-start;
  gap: 18px;
`;

export default function TopSection({ activeGeneration, setActiveGeneration }) {
  return (
    <Container>
      <Image src={TopUrl} />
      <TextBox>서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.</TextBox>

      <ButtonGroup>
        <Button
          $isActive={activeGeneration === "14"}
          onClick={() => setActiveGeneration("14")}
        >
          14기
        </Button>

        <Button
          $isActive={activeGeneration === "13"}
          onClick={() => setActiveGeneration("13")}
        >
          13기
        </Button>

        <Button
          $isActive={activeGeneration === "12"}
          onClick={() => setActiveGeneration("12")}
        >
          12기
        </Button>

        <Button
          $isActive={activeGeneration === "11"}
          onClick={() => setActiveGeneration("11")}
        >
          11기
        </Button>
      </ButtonGroup>
    </Container>
  );
}