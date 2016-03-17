---
layout: page
title: Utilities
---

There are a handful of utilities for quick behaviors, display, floats, position, full height, fix, separator and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Display

- `.hl-show`: display block
- `.hl-hide`: display none
- `.hl-inline-block`: display inline-block

{% example html %}
<div class="hl-show">抬头见明月</div>
<div class="hl-hide">下句呢？</div>
<div class="hl-inline-block hl-separator">低头思故乡</div>
{% endexample %}

## Float

- `.hl-left`: float left
- `.hl-right`: float right
- `.hl-clearfix`: clear float

{% example html %}
<div class="hl-left">Float left</div>
<div class="hl-clearfix"></div>
<div class="hl-right">Float right</div>
{% endexample %}

## Position

- `.hl-relative`: Sets position relative.
- `.hl-center`: Centers content **horizontally**. Can be used inside or outside the grid.
- `.hl-middle`: Centers content **vertically**. Must have a relative parent.
- `.hl-middle-R`: Centers content **vertically** and to the parent's right.

**Hands up!** `.hl-text-center｀ is for text alignment.

{% example html %}
<div class="hl-box-border">
  <div class="hl-row hl-relative">
    <div class="hl-col-6 hl-center" style="background: #2190e7">明日复明日</div>
    <div>明日何其多</div>
    <div class="hl-middle-R">我生待明日，万事成蹉跎。</div>
  </div>
</div>
{% endexample %}

## Margin/Padding

It is recommended to use margin/padding utils styles along with text styles.

{% example html %}
<p>
  <span class="hl-icon hl-icon-edit hl-margin-right"></span>
  <span class="hl-text-lg hl-margin-left-lg">古诗词赏析</span>
</p>
<p>
  <span class="hl-margin-left">君不见</span>
  <span class="hl-margin-left">黄河之水天上来</span>
  <span class="hl-margin-left">奔流到海不复回</span>
</p>
<p>
  <span class="hl-text-sm hl-margin-right-sm">君不见</span>
  <span class="hl-text-lg hl-margin-right-lg">高堂明镜悲白发</span>
  <span class="hl-text-xl hl-margin-right-xl">朝如青丝暮成雪</span>
</p>
<p>
  <span class="hl-text-xs hl-padding-right-xs">五花马</span>
  <span class="hl-text-sm hl-padding-right-sm">千金裘</span>
  <span class="hl-text-lg hl-padding-right-lg">呼儿将出换美酒</span>
  <span class="hl-text-xl hl-padding-right-xl">与尔同销万古愁</span>
</p>

{% endexample %}

## Full height

- `.hl-full-height`: A container has a full height.
- `.hl-full-height-R`: A container has a full height and to the parent's right.

## Fix

- `.hl-fix-top`: Fix to the top of screen.
- `.hl-fix-bottom`: Fix to the bottom of screen.

{% example html %}
<div class="hl-text-green">请看屏幕最上面和最下面</div>
<div class="hl-fix-top">青青子衿，悠悠我心。</div>
<div class="hl-fix-bottom">长亭外，古道边，芳草碧连天。</div>
{% endexample %}

## Separator

- `hl-separator`: separates conponents with min-height.
- `hl-separator-blank`: has no background color and default font color.

{% example html %}
<div class="hl-box-border">我愿顺流而下，找寻她的踪迹。</div>
<div class="hl-separator"></div>
<div class="hl-box-border">却见仿佛依稀，她在水中伫立。</div>
<div class="hl-separator-blank"></div>
<div class="hl-box-border">有位佳人，在水一方</div>
{% endexample %}
