import { ArrowBigDown } from "lucide-react";
import SpeechBubble from "../../../shared/SpeechBubble";
import ProjectWrapper from "../ui/ProjectWrapper";

export default function MinusMonorepo() {
  return (
    <ProjectWrapper
      className="mb-10"
      style={{
        background: "linear-gradient(180deg, #e8faec 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex h-full">
        <div className="flex flex-col gap-4 items-start p-8 w-3/10 h-full bg-[#354137]">
          <p className="inline-block py-1 px-2 rounded-[4px] text-white bg-[#818181]">
            Point 1
          </p>
          <div className="text-xl text-white font-bold">
            <p>Monorepo 구조의 라이브러리</p>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">일관된 rule 적용</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                Root에서 포멧팅, 커밋룰 등 관리 하여 패지키
                <span className="text-green-300"> 일관성 향상</span>
              </p>
            </div>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">한번에 publish</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">
                build, clean, install, publish 등 한꺼번에 진행 가능
              </p>
            </div>
          </div>
          <div className="text-sm text-[rgba(255,255,255,0.8)]">
            <p className="font-semibold">분리된 라이브러리</p>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">필요한 패키지만 분리해서 사용</p>
            </div>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%]">모든 패키지를 묶은 core 제공</p>
            </div>
            <div className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <p className="w-[94%] text-green-300">개발자 편의성 향상</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-between gap-3 p-8 w-full h-full bg-[#eef8ef] overflow-hidden">
          <div className="w-[70%] text-slate-900">
            <div className="mx-auto max-w-4xl p-6">
              <h1 className="text-xl font-bold mb-4">minus-ui 구조</h1>

              <ul className="pl-2">
                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                  <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                    <span className="mr-2">📁</span>
                    <span className="font-medium">minus-ui</span>/
                  </div>

                  <ul className="mt-1 ml-4">
                    <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                      <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                        <span className="mr-2">📁</span>
                        <span className="font-medium">packages</span>/
                      </div>

                      <ul className="mt-1 ml-4">
                        <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                          <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                            <span className="mr-2">📁</span>
                            <span className="font-medium">component</span>/
                            <span className="ml-2 text-xs text-slate-500">
                              # @minus-ui/component (UI)
                            </span>
                          </div>

                          <ul className="mt-1 ml-4">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📁</span>
                                <span className="font-medium">src</span>/
                              </div>
                              <ul className="mt-1 ml-4">
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📁</span>
                                    <span className="font-medium">
                                      snackbar
                                    </span>
                                    /
                                  </div>
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📁</span>
                                    <span className="font-medium">tooltip</span>
                                    /
                                  </div>
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>
                                    <span>index.ts</span>
                                    <span className="ml-2 text-xs text-slate-500">
                                      # components entry
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>package.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>tsconfig.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>vite.config.ts
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                          <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                            <span className="mr-2">📁</span>
                            <span className="font-medium">styles</span>/
                            <span className="ml-2 text-xs text-slate-500">
                              # @minus-ui/styles (CSS, 디자인 관련)
                            </span>
                          </div>
                          {/* <ul className="mt-1 ml-4">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📁</span>
                                <span className="font-medium">src</span>/
                              </div>
                              <ul className="mt-1 ml-4">
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>snackbar.css
                                  </div>
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>tooltip.css
                                  </div>
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>index.ts{" "}
                                    <span className="ml-2 text-xs text-slate-500">
                                      # styles entry
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>package.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>tsconfig.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>vite.config.ts
                              </div>
                            </li>
                          </ul> */}
                        </li>

                        <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                          <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                            <span className="mr-2">📁</span>
                            <span className="font-medium">type</span>/
                            <span className="ml-2 text-xs text-slate-500">
                              # @minus-ui/type (TypeScript 타입)
                            </span>
                          </div>
                          {/* <ul className="mt-1 ml-4">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📁</span>
                                <span className="font-medium">src</span>/
                              </div>
                              <ul className="mt-1 ml-4">
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>
                                    snackbarType.ts
                                  </div>
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>
                                    tooltipType.ts
                                  </div>
                                </li>
                                <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                                  <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                    <span className="mr-2">📄</span>index.ts{" "}
                                    <span className="ml-2 text-xs text-slate-500">
                                      # types entry
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>package.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>tsconfig.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>vite.config.ts
                              </div>
                            </li>
                          </ul> */}
                        </li>

                        <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                          <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                            <span className="mr-2">📁</span>
                            <span className="font-medium">core</span>/
                            <span className="ml-2 text-xs text-slate-500">
                              # @minus-ui/core (통합 export)
                            </span>
                          </div>
                          {/* <ul className="mt-1 ml-4">
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📁</span>
                                <span className="font-medium">src</span>/
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>src/index.ts{" "}
                                <span className="ml-2 text-xs text-slate-500">
                                  # core entry
                                </span>
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>package.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>tsconfig.json
                              </div>
                            </li>
                            <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                              <div className="relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                                <span className="mr-2">📄</span>vite.config.ts
                              </div>
                            </li>
                          </ul> */}
                        </li>
                      </ul>
                    </li>

                    <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                      <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                        <span className="mr-2">📄</span>package.json{" "}
                        <span className="ml-2 text-xs text-slate-500">
                          # workspace 설정
                        </span>
                      </div>
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                      <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                        <span className="mr-2">📄</span>pnpm-workspace.yaml{" "}
                        <span className="ml-2 text-xs text-slate-500">
                          # pnpm workspace 관리
                        </span>
                      </div>
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-slate-300 last:before:h-4">
                      <div className="relative before:content-[''] before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-4 before:border-t before:border-slate-300">
                        <span className="mr-2">📄</span>tsconfig.base.json{" "}
                        <span className="ml-2 text-xs text-slate-500">
                          # 공통 TypeScript 설정
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[30%]">
            <SpeechBubble className="flex-col items-start w-full h-38 text-white bg-[#397e49] after:border-t-[#397e49] bubble-tail-none">
              <p>Monorepo 구조로 관리</p>
              <br />
              <p>
                - 공통 설정은 root package에서 일괄적용으로 공통된 컨벤션,
                스타일 적용이 용이함!
              </p>
              <br />
              <p>
                - 한번에 publish, build를 실행할 수 있어서, 배포나 테스트가
                빠름!
              </p>
            </SpeechBubble>
            <ArrowBigDown size={50} />
            <SpeechBubble className="flex-col items-center w-full h-38 text-white bg-[#397e49] after:border-t-[#397e49] bubble-tail-none">
              <p className="text-lg">Monorepo 구조로</p>
              <p className="text-lg text-green-300">전체 관리비용 감소!</p>
            </SpeechBubble>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
