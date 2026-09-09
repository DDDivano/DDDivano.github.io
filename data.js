// ===================================================================
// 全站内容都在这个文件里。改这里就行，不用碰 index.html。
// TODO 标记的地方是需要你确认/补充的。
// ===================================================================
window.RESUME = {
  // ---------- 顶部 ----------
  profile: {
    name: "郑天宇",
    handle: "DDDivano",
    // 一句话说清你是谁、在做什么
    tagline: "大模型推理引擎质量保障 · 让推理框架跑得又快又对",
    // 2~4 句自我介绍，口语一点也没关系
    intro: [
      "在做大模型推理方向的质量保障，主要围绕 FastDeploy / SGLang 这类推理引擎：搭测试框架、做精度与性能基线、压测和长稳，也写一些自动化工具链。", // TODO
      "习惯把重复的事做成工具，做过的东西大部分是开源的，或者能开源的都放出来了。", // TODO
    ],
    location: "北京", // TODO
    // 头像：放一张图到 assets/avatar.jpg，或者删掉这行用首字母占位
    avatar: "",
    links: [
      { label: "GitHub", url: "https://github.com/DDDivano" },
      { label: "邮箱", url: "mailto:you@example.com" }, // TODO
      // { label: "博客", url: "" },
      // { label: "知乎", url: "" },
    ],
  },

  // ---------- 数字亮点，删掉整段也可以 ----------
  highlights: [
    { value: "6+", label: "年测试开发经验" }, // TODO
    { value: "10+", label: "开源仓库 / 工具" }, // TODO
    { value: "2", label: "主力推理引擎项目" }, // TODO
  ],

  // ---------- 这些年做了什么（时间线） ----------
  timeline: [
    {
      period: "2024 — 现在", // TODO
      title: "大模型推理引擎质量保障",
      org: "FastDeploy / SGLang 方向",
      points: [
        "搭建推理引擎的端到端测试体系：功能、精度（logprob 基线）、性能压测、权重热更新长稳。",
        "维护 upstream 每日合入的风险检测流程，冲突文件定位到函数级并给出 review 建议。",
        "把重复的排查动作沉淀成 CLI / Skill，团队里其他人也能直接用。",
      ],
      tags: ["推理引擎", "测试框架", "压测", "CI"],
    },
    {
      period: "2020 — 2024", // TODO
      title: "深度学习框架测试开发",
      org: "Paddle 生态",
      points: [
        "框架 API / 算子精度对齐测试，随机化用例生成与差异定位。",
        "参与 PaddleTest、PaddleAPITest 等测试基建，覆盖训练与推理链路。",
      ],
      tags: ["深度学习框架", "算子精度", "自动化"],
    },
  ],

  // ---------- 项目 / 开源 ----------
  projects: [
    {
      name: "FastDeploy",
      role: "Contributor · 质量保障",
      desc: "推理部署框架，负责测试体系与线上问题定位。",
      url: "https://github.com/PaddlePaddle/FastDeploy",
      tags: ["Python", "LLM Serving"],
    },
    {
      name: "PaddleAPITest",
      role: "Contributor",
      desc: "框架 API 精度与行为一致性测试。",
      url: "https://github.com/DDDivano/PaddleAPITest", // TODO 确认地址
      tags: ["Python", "Testing"],
    },
    {
      name: "jelly / r",
      role: "Author",
      desc: "自用的 Web 工具台，Go + Vue，做推理任务和评测结果的可视化。", // TODO
      url: "https://github.com/DDDivano/r",
      tags: ["Go", "Vue"],
    },
    // 继续往下加就行，卡片会自动排版
  ],

  // ---------- 技能 ----------
  skills: [
    { group: "语言", items: ["Python", "Go", "Shell", "JavaScript"] },
    { group: "方向", items: ["LLM 推理引擎", "性能压测", "精度对齐", "测试基建", "CI/CD"] },
    { group: "工具", items: ["PyTorch", "SGLang", "FastDeploy", "Docker", "Git"] },
  ],

  // ---------- 页脚 ----------
  footer: {
    note: "这个页面本身也是开源的，源码在 GitHub 上。",
    updated: "2026-09",
  },
};
