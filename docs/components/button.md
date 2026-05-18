# Button 按钮

Minecraft 风格立体按钮：深色描边 + inset 高光厚度，按下整体下沉。

## 三种语义

<div class="ore-demo">
  <OreButton variant="green">主操作</OreButton>
  <OreButton variant="normal">次要</OreButton>
  <OreButton variant="red">危险</OreButton>
  <OreButton variant="normal" disabled>禁用</OreButton>
</div>

```vue
<OreButton variant="green" @click="onStart">主操作</OreButton>
<OreButton variant="normal">次要</OreButton>
<OreButton variant="red">危险</OreButton>
<OreButton variant="normal" disabled>禁用</OreButton>
```

## 尺寸

<div class="ore-demo">
  <OreButton size="extra_small">特小</OreButton>
  <OreButton size="small">小</OreButton>
  <OreButton size="middle">中</OreButton>
  <OreButton size="large">大</OreButton>
</div>

## 带 Tooltip

<div class="ore-demo">
  <OreButton variant="green" tip="这是提示文本">悬停查看</OreButton>
</div>

```vue
<OreButton variant="green" tip="这是提示文本">悬停查看</OreButton>
```

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| `variant` | `'normal' \| 'green' \| 'red'` | `normal` | 颜色/语义 |
| `size` | `'extra_small' \| 'small' \| 'middle' \| 'large'` | `middle` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用（禁用时不触发 click、不播音效） |
| `tip` | `string` | `''` | 非空则显示 Tooltip |

## Events

| 事件 | 参数 | 说明 |
|---|---|---|
| `click` | `MouseEvent` | 点击（禁用时不触发）；绿色按钮播 `button` 音，其余播 `click` 音 |

按钮文字通过默认插槽传入。
