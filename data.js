// ===================================================================
// 全站内容都在这个文件里。改这里就行，不用碰 index.html。
// 唯一例外：index.html 里的 <title> 和 og: 系列 meta 是静态的
// （抓取器和分享卡片不跑 JS），改了下面的 site 字段记得同步过去。
// ===================================================================
window.RESUME = {
  // ---------- 站点元信息（SEO / 分享卡片）----------
  site: {
    url: "https://dddivano.github.io/",
    repo: "https://github.com/DDDivano/DDDivano.github.io",
    // 浏览器标签页和搜索结果里的标题
    pageTitle: "郑天宇 Divano Zheng · AI Infra 质量工程",
    // 搜索摘要 / 微信、Slack、LinkedIn 分享卡片的描述
    description:
      "百度 AI Infra 质量工程师。飞桨 PaddlePaddle 框架级质量体系负责人，FastDeploy / SGLang 推理引擎 CI-CE 从 0 到 1，现在做 SWE 数据质量与大模型评测。",
  },

  // ---------- 顶部 ----------
  profile: {
    name: "Divano Zheng",
    nameZh: "郑天宇",
    handle: "Divano",
    tagline: "AI 质量工程 · 深度学习框架 · 大模型推理 · 数据质量",
    // 支持两种轻标记：**加粗**、段首 "> " 渲染成引用块
    intro: [
      "2018 年燕山大学计算机硕士毕业后加入百度，至今一直在做 AI Infra 的质量工程。",
      "主线是飞桨 PaddlePaddle：从写测试用例，到自动化框架、测试平台和 CI / CE 体系，逐步从「写测试」走向「设计质量系统」。七年多持续深耕飞桨，也让我有机会把质量当成一个长期演进的工程系统来做，而不是一次性交付。",
      "我习惯从 0 到 1 搭体系：用 YAML 描述 API 的测试意图，自动生成和执行大规模用例；通过非侵入式执行器完成模型测试，不要求业务代码为了测试而修改；围绕 CI、模型、算子和基础设施建立自动化质量保障，让测试尽可能摆脱对人的依赖。",
      "近两年这套方法在往大模型场景迁移，关注两类问题：",
      "**AI Infra Quality** — FastDeploy、SGLang 等推理引擎的质量保障，大模型推理场景下的测试与 CI / CE 体系。",
      "**AI / SWE Data Quality** — 研究什么样的数据才是「好数据」，如何定义难度与质量标准，以及如何通过自动化审核和修复构建可持续的数据质量体系。",
      "> 好的质量工程，不是写更多测试，而是把质量问题变成可以被系统发现、度量和持续解决的问题。",
    ],
    location: "北京",
    // 头像：放一张图在仓库根目录，或者留空用首字母占位
    avatar: "avatar.jpeg",
    avatarAlt: "郑天宇的头像",
    links: [
      { label: "GitHub", url: "https://github.com/DDDivano" },
      { label: "邮箱", url: "mailto:DDDivano@outlook.com" },
    ],
  },

  // ---------- 数字亮点（2 行 × 3 列）----------
  highlights: [
    { value: "8 年+", label: "AI Infra 质量工程" },
    { value: "10 万+", label: "算子 / 接口 / 子图测试用例" },
    { value: "800+", label: "覆盖的开源模型" },
    { value: "60+", label: "自动化交付的框架版本" },
    { value: "31 万+", label: "拦截的异常用例" },
    { value: "10+", label: "国家级项目验收测试" },
  ],

  // ---------- 这些年做了什么 ----------
  timeline: [
    {
      period: "2026.06 — 现在",
      title: "SWE 数据质量与评测",
      org: "LLM / SWE Benchmark",
      points: [
        "延续框架时代的思路：把「先定义判定标准、再让判定可自动执行」这套方法从代码测试迁移到数据质量上。",
        "从 issue、patch、test 三者的一致性出发，建立可解释的数据质量判定体系，而不是靠人逐条拍板。",
        "机评与人评双轨并行，分析分歧来源，把判定结论沉淀成可复用的规则与难度分级口径。",
        "对低质量数据做定位、修复与回归验证，而不是简单丢弃。",
      ],
      tags: ["Data Quality", "SWE", "Evaluation", "LLM"],
    },
    {
      period: "2025.06 — 2026.05",
      title: "大模型推理引擎质量保障",
      org: "FastDeploy / SGLang",
      points: [
        "从 0 到 1 建设 FastDeploy 的 CI / CE 体系，覆盖功能、性能、稳定性、精度、效果评估五个方向。",
        "把框架时代的做法迁移到推理场景：配置驱动的用例生成、非侵入式的服务化测试、可对比的性能与精度基线，同一套方法换了被测对象继续用。",
        "围绕推理服务建立质量保障手段：logprob 精度基线、服务化压测、权重热更新长稳，以及 MTP、Prefix Cache 等核心能力验证。",
        "调研并落地大模型推理的评测体系：Benchmark、Agent Evaluation、推理服务稳定性与性能评测。",
      ],
      tags: ["LLM Serving", "Benchmark", "Stress Test", "CI/CE"],
    },
    {
      period: "2022.04 — 2025.05",
      title: "飞桨质量保障体系与测试平台",
      org: "PaddlePaddle · 主要负责人",
      points: [
        "设计框架级自动化测试体系：用 YAML 描述 API 测试语义（更接近一个小型 DSL），解析后自动生成标准化用例，一份配置统一驱动精度、性能、稳定性、编译器和子图等多类测试，覆盖 90%+ 模块、5 万+ 用例。",
        "做训推一体的模型测试框架：非侵入式执行器，子进程拉起模型 + 非阻塞日志捕获，对模型代码零改动即可跑通训练 → 导出 → 推理闭环；兼容 Linux / Mac / Windows 与 XPU / NPU / DCU / MLU 等芯片。",
        "主导测试平台（Jelly / WeakTrans）架构演进：Web 一键触发、编译产物集中管理、Benchmark 可视化与 GSB 对比、日志落盘与告警闭环，让非专业同学也能自助跑测试。",
        "治理 CI，优化大规模测试场景下的 GPU 执行效率与资源利用率。",
        "推动测试能力平台化、服务化：一套基础设施同时支撑框架、模型套件、推理三条业务线的测试需求，跨团队统一了质量标准与问题定位口径，研发可自助发起测试，人工介入与沟通成本大幅下降。",
        "结果：框架训练与模型测试周期从 7 天压缩到 3 天，全流程零人工介入；平台累计执行 200 万+ 用例、拦截 31 万+ 异常用例，日均 PV 1500+，成为团队同步测试结果与复现问题的主要入口。",
      ],
      tags: ["Test Architecture", "DSL / Codegen", "Platform", "Go", "Vue"],
    },
    {
      period: "2018.05 — 2022.03",
      title: "深度学习框架测试开发",
      org: "PaddlePaddle",
      points: [
        "算子与 API 的精度对齐测试，随机化用例生成与差异定位。",
        "Benchmark 平台建设，验证算子，推理，模型的性能和分布式策略。",
        "参与 PaddleTest 等测试基建，覆盖 CV / NLP / 语音 / OCR / GAN 等方向的训推链路。",
      ],
      tags: ["Operator Accuracy", "Automation", "Python"],
    },
    {
      period: "2015.09 — 2018.06",
      title: "燕山大学 · 计算机科学与技术",
      org: "硕士",
      points: [],
      tags: [],
    },
  ],

  // ---------- 横向经历 / Selected Contributions ----------
  // 跨越多个阶段、不适合塞进时间轴的经历放这里
  featured: [
    {
      title: "国家项目与标准化支撑",
      meta: "科技部 / 信通院 / 电子四院 · 2021 — 2025",
      points: [
        "作为飞桨测试代表参与国家级单位的验收测试，累计 10+ 项，覆盖训练、推理、分布式核心模块。",
        "主导对外测试方案设计、用例验证与验收材料编写，输出可信质量评估方法论，作为飞桨对外交付标准。",
        "参与多项国家 / 行业 / 团体标准的编写与制定，推动框架质量能力纳入行业规范。",
      ],
      tags: ["Compliance", "Standards", "Benchmarking"],
    },
  ],

  // ---------- 项目 / 开源 ----------
  projects: [
    {
      name: "PaddlePaddle",
      role: "框架级测试体系负责人",
      desc: "国产深度学习框架。负责框架级质量体系：Yaml 驱动的用例生成，覆盖 API 精度 / 性能 / 稳定性、执行器、编译器与子图测试，全面接入主干 CI。",
      url: "https://github.com/PaddlePaddle/Paddle",
      tags: ["Python", "Deep Learning", "CUDA", "AI Infra"],
    },
    {
      name: "FastDeploy",
      role: "质量体系建设 · 从 0 到 1",
      desc: "大模型推理部署框架。从 0 建设 CI / CE 体系，覆盖功能、性能、稳定性、精度与效果评估五个方向。",
      url: "https://github.com/PaddlePaddle/FastDeploy",
      tags: ["Python", "LLM Serving", "AI Infra"],
    },
    {
      name: "PaddleTest",
      role: "Author · 主要维护者",
      desc: "飞桨全量测试代码仓库，前面那套框架级与模型级测试体系的落地载体，也是团队协同的测试资产库。",
      url: "https://github.com/PaddlePaddle/PaddleTest",
      tags: ["Python", "Testing", "Quality Architecture", "CI"],
    },
    {
      name: "PaddleOCR",
      role: "模型套件测试支撑",
      desc: "OCR 模型套件。训推一体的端到端测试，以及多系统、多硬件后端的适配验证。",
      url: "https://github.com/PaddlePaddle/PaddleOCR",
      tags: ["Python", "OCR", "CV"],
    },
    {
      name: "Jelly",
      role: "Author · 独立开发",
      desc: "自研 Web 工具台，Go + Vue。索引全部测试任务，做结果汇总、Benchmark 对比与失败定位，日均 PV 1500+。",
      url: "https://github.com/DDDivano/r",
      tags: ["Go", "Vue", "Web Infra"],
    },
  ],

  // ---------- 技能 ----------
  skills: [
    { group: "语言", items: ["Python", "Go", "Shell", "JavaScript"] },
    { group: "方向", items: ["质量工程架构", "深度学习", "测试平台建设", "LLM 推理引擎", "性能 Benchmark", "精度对齐", "数据质量与评测", "CI/CD"] },
    { group: "生态", items: ["PaddlePaddle", "FastDeploy", "SGLang", "PyTorch", "Docker", "Git"] },
  ],

  // ---------- 页脚 ----------
  footer: {
    note: "这个页面本身也是开源的。",
    // 想在页脚放一个指向仓库的链接，就把 repoLabel 填上（如 "查看源码"）
    repoLabel: "",
    updated: "2026-09",
  },
};
