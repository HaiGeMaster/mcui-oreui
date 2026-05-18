# 设计 Token

提炼自 Minecraft 基岩版 Ore UI 的真实色值，以 CSS 变量提供（`src/styles/tokens.css`）。
组件本体样式仍由原始 `oreui-base.css` 驱动，这些 token 作为定制与参考层。

## 配色

| Token | 值 | 用途 |
|---|---|---|
| `--ore-bg` | `#48494A` | 页面背景（深灰） |
| `--ore-bg-header` | `#E6E8EB` | 顶栏背景 |
| `--ore-bg-panel` | `#58585A` | 面板/卡片 |
| `--ore-green` | `#3C8527` | 主操作按钮 |
| `--ore-green-hover` | `#2A641C` | 主操作 hover |
| `--ore-green-active` | `#1D4D13` | 主操作 active |
| `--ore-normal` | `#D0D1D4` | 次要按钮 |
| `--ore-red` | `#C33636` | 危险按钮 |
| `--ore-border-dark` | `#1E1E1F` | 描边深色 |
| `--ore-text-light` | `#D0D1D4` | 浅色文字 |

## 字体

| Token | 字体 | 用途 |
|---|---|---|
| `--ore-font-title` | Minecraft Ten | 大标题 |
| `--ore-font-ui` | Minecraft Seven | UI 文字 |
| `--ore-font-body` | NotoSans Bold | 中文正文 |

## 像素立体质感

按钮的块状立体感由三层叠加（非贴图）：

- 深色描边 `border: 2px solid #1E1E1F`
- 底面厚度 `box-shadow: inset 0 -4px <暗色>`
- 高光 `inset 3px 3px rgba(255,255,255,.x)`
- 按下时高度收缩并下沉，模拟物理按压

## 缺失图标说明

原仓库未提供 `check_white.png` / `arrow-down` / `switch_on/off` 等图标文件。
本库以**像素风 SVG** 重绘补齐（`src/assets/images/*.svg`），矢量、可着色、零缺失资源。
