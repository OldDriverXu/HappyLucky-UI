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
  <p>这个是占位文字,图片文字可以放这里里面,哈哈哈哈</p>
  <p>这个是占位文字,图片文字可以放这里里面,哈哈哈哈</p>
  <p>这个是占位文字,图片文字可以放这里里面,哈哈哈哈</p>
  <p>这个是占位文字,图片文字可以放这里里面,哈哈哈哈</p>
  <p>这个是占位文字,图片文字可以放这里里面,哈哈哈哈</p>
  <p>这个是占位文字,图片文字可以放这里里面,哈哈哈哈</p>
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
