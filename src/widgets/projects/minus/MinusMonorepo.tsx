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
            <p className="font-semibold">자체 Story 제공</p>
            <p className="mt-1 text-xs flex items-center justify-between">
              <span className="inline-block mr-1 w-1.5 h-1.5 rounded-2xl bg-[rgba(255,255,255,0.6)]" />
              <span className="w-[94%]">
                Story Book을 없이 자체적으로 개발한 Component Story 제공
              </span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 items-center p-8 w-full h-full bg-[#e8faec] overflow-hidden">
          <div className=" text-slate-900">
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
                              # @minus-ui/component (UI Components)
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
        </div>
      </div>
    </ProjectWrapper>
  );
}
