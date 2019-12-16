## 变量
```css
/* 定义变量 */
:root{
    --button-height: 32px;
    --font-size: 14px;
}
/* 使用变量 */
.lea-button{
    font-size: var(--font-size);
    height: var(--button-height);
}
```
```css
/* 解决多个元素border重叠问题 */
margin-left: -1px;
```


## button
```js
// icon  图标名称 symbol   iconposition 图标位置 默认 "left"  "right"
<lea-button>按钮</lea-button>
<lea-button icon="shezhi">按钮</lea-button>
<lea-button icon="arrow-right" iconposition="right">按钮</lea-button>
<lea-button icon="arrow-left">按钮</lea-button>
<lea-button icon="zan" iconposition="left">按钮</lea-button>
<lea-button icon="arrow-down" iconposition="left">按钮</lea-button>
<lea-button icon="xiazai" iconposition="left">按钮</lea-button>
```