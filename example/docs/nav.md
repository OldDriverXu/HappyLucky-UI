---
layout: page
title: Navigation
---

HappyLucky UI comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Nav-Underline

The nav-underline is a list of navigational links. The active item has an underline.

{% example html %}
<nav class="hl-nav hl-nav-underline hl-row">
  <a class="hl-nav-item hl-col-3 hl-active" href="#">Account</a>
  <a class="hl-nav-item hl-col-3" href="#">Profile</a>
  <a class="hl-nav-item hl-col-3" href="#">Emails</a>
  <a class="hl-nav-item hl-col-3" href="#">Notifications</a>
</nav>
{% endexample %}

## Nav-Pointer

The active item has a pointer.

{% example html %}
<nav class="hl-nav hl-nav-pointer hl-row">
  <a class="hl-nav-item hl-col-3 hl-active" href="#">Account</a>
  <a class="hl-nav-item hl-col-3" href="#">Profile</a>
  <a class="hl-nav-item hl-col-3" href="#">Emails</a>
  <a class="hl-nav-item hl-col-3" href="#">Notifications</a>
</nav>
{% endexample %}

## Nav-Tabs

When you need to toggle between different views, consider using a nav-tab.

{% example html %}
<nav class="hl-nav hl-nav-tabs hl-row">
  <a class="hl-nav-item hl-col-3">经济型</a>
  <a class="hl-nav-item hl-col-3 hl-active">舒适型</a>
  <a class="hl-nav-item hl-col-3">商务型</a>
  <a class="hl-nav-item hl-col-3 nav-item-last">豪华型</a>
</nav>
<div>
  <p>君不见黄河之水天上来⑵，奔流到海不复回。</p>
  <p>君不见高堂明镜悲白发，朝如青丝暮成雪⑶。</p>
  <p>人生得意须尽欢⑷，莫使金樽空对月。</p>
  <p>天生我材必有用，千金散尽还复来。</p>
  <p>烹羊宰牛且为乐，会须一饮三百杯⑸。</p>
  <p>岑夫子，丹丘生⑹，将进酒，杯莫停⑺。</p>
  <p>与君歌一曲⑻，请君为我倾耳听。</p>
  <p>钟鼓馔玉不足贵⑽，但愿长醉不复醒⒄。</p>
  <p>古来圣贤皆寂寞，惟有饮者留其名。</p>
  <p>陈王昔时宴平乐，斗酒十千恣欢谑⑿。</p>
  <p>主人何为言少钱⒀，径须沽取对君酌⒁。</p>
  <p>五花马⒂，千金裘，呼儿将出换美酒，与尔同销万古愁⒃。</p>
</div>
{% endexample %}

## Pagination

{% example html %}
<nav class="hl-nav hl-nav-pagination">
  <div class="hl-row">
    <div class="hl-col-4 hl-text-left">
      <a class="hl-nav-item">
        <span class="hl-inline-block hl-icon-arrow-left"></span>
        <span class="hl-inline-block">
          <div class="hl-text-sm">前一天</div>
          <div class="hl-text-sm">$250</div>
        </span>
      </a>
    </div>
    <div class="hl-col-4 hl-text-center">
      <a class="hl-nav-item hl-text-normal">
        <div class="hl-text-sm">10-09 星期五</div>
        <div class="hl-text-sm">
          <span class="hl-inline-block">$200</span>
          <span class="hl-inline-block hl-icon-arrow-dropdown hl-text-blue"></span>
        </div>
      </a>
    </div>
    <div class="hl-col-4 hl-text-right">
      <a class="hl-nav-item">
        <span class="hl-inline-block">
          <div class="hl-text-sm">后一天</div>
          <div class="hl-text-sm">$250</div>
        </span>
        <span class="hl-inline-block hl-icon-arrow-right"></span>
      </a>
    </div>
  </div>
</nav>
{% endexample %}


## Breadcrumb

*Coming soon...*
