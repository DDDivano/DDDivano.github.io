# DDDivano.github.io

个人主页 / Web 版简历。纯静态，零构建。

## 结构

- `data.js` — 所有内容都在这儿，改这个文件即可
- `index.html` — 页面骨架
- `render.js` — 渲染逻辑，一般不用动

## 本地预览

直接双击 `index.html`（Tailwind 走 CDN，需要联网）。

## 部署

1. 在 GitHub 新建仓库，名字必须是 `DDDivano.github.io`
2. 推上去：

```bash
git init && git add . && git commit -m "init personal page"
git branch -M main
git remote add origin git@github.com:DDDivano/DDDivano.github.io.git
git push -u origin main
```

3. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支 `main` / 根目录 `/`
4. 一两分钟后访问 https://dddivano.github.io

## 存 PDF

页面右上角打印按钮，或 Cmd+P，已做打印样式（隐藏导航、去背景）。
