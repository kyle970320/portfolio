import { Github } from "lucide-react";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function DsketLibrary() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #fff3d6 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#342F2D]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 3
          </p>
          <div className="text-xl text-white">
            <p>내부 로직 라이브러리화</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>GitLab Package Registry 활용</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                공용 모듈을 내부 라이브러리로 배포, 팀 내 재사용 가능하게 설계
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">배포 파이프라인 자동화 경험</span>
            </p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p>아키텍처 선택</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                서브모듈: 커밋 기록 관리 복잡 → 제외
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                모노레포: 프로젝트 볼륨 커짐, 관리 비용 증가 → 제외
              </span>
            </p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                패키지 레지스트리: 독립적 관리 + 확장성 → 최종 선택
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex items-stretch justify-between p-10 w-7/10 h-full bg-[#F7F2EA] overflow-hidden">
          <div className="flex flex-col items-center py-4 w-[30%] bg-white rounded-2xl">
            <div className="font-semibold">서브모듈</div>
            <div className="flex justify-center items-center w-20 h-20 bg-[#BBAE9C] rounded-[50%]">
              <Github size={48} />
            </div>
          </div>
          <div className="flex flex-col items-center py-4 w-[30%] bg-white rounded-2xl">
            <div className="font-semibold">모노레포</div>
            <div className="flex justify-center items-center w-20 h-20 bg-[#BBAE9C] rounded-[50%]">
              <Github size={48} />
            </div>
          </div>
          <div className="flex flex-col items-center py-4 w-[30%] bg-white rounded-2xl">
            <div className="font-semibold">패키지</div>
            <div className="flex justify-center items-center w-20 h-20 bg-[#BBAE9C] rounded-[50%]">
              <Github size={48} />
            </div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
