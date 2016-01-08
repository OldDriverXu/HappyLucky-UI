---
layout: page
title: List-Group
---

List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.

{% example html %}
<ul class="hl-list-group">
  <li class="hl-list-group-item">Cras justo odio</li>
  <li class="hl-list-group-item">Dapibus ac facilisis in</li>
  <li class="hl-list-group-item">Morbi leo risus</li>
  <li class="hl-list-group-item">Porta ac consectetur ac</li>
  <li class="hl-list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

{% example html %}
<ul class="hl-list-group">
  <li class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-lg">0:35-08:40</div>
        <div class="hl-text-md">南航CZ6412</div>
        <div class="hl-text-xs hl-text-green"> 773(大)</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-text-lg hl-text-orange">$860</div>
        <div class="hl-text-md">超值公务舱 全价</div>
        <div class="hl-text-xs">仅剩4张</div>
      </div>
    </div>
  </li>
  <li class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-lg">3:35-11:21</div>
        <div class="hl-text-md">南航CZ6002</div>
        <div class="hl-text-xs hl-text-green"> 787(大)</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-text-lg hl-text-orange">$2480</div>
        <div class="hl-text-md">超值公务舱 全价</div>
        <div class="hl-text-xs hl-text-bluelight">惠享头等舱$1360</div>
      </div>
    </div>
  </li>
</ul>
{% endexample %}

## Padding with list item

### Padding Left

`.hl-list-group-pl` stands for 'padding left'

{% example html %}
<div class="hl-list-group hl-list-group-pl">
  <div class="hl-list-group-item">账户余额</div>
  <div class="hl-list-group-item">建设银行(尾号1234)</div>
  <div class="hl-list-group-item">招商银行(尾号8888)</div>
  <div class="hl-list-group-item hl-disabled-text">工商银行(尾号6666) 外币卡</div>
</div>
{% endexample %}

### Padding Right

`.hl-list-group-pr` stands for 'padding right'

{% example html %}
<div class="hl-list-group hl-list-group-pr">
  <div class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-md">经济舱 <span class="hl-text-green">4.8折</span></div>
        <div class="hl-text-xs hl-text-graylight">仅剩3张</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-inline-block hl-text-xl hl-text-orange">$2480</div>
        <button class="hl-btn hl-btn-primary">预订</button>
      </div>
    </div>
  </div>
  <div class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-md">经济舱 <span class="hl-text-green">4.2折</span></div>
        <div class="hl-text-xs hl-text-graylight">仅剩3张</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-inline-block hl-text-xl hl-text-orange">$2580</div>
        <button class="hl-btn hl-btn-primary">预订</button>
      </div>
    </div>
  </div>
  <div class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-md">经济舱 <span class="hl-text-green">6.8折</span></div>
        <div class="hl-text-xs hl-text-graylight">仅剩1张</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-inline-block hl-text-xl hl-text-orange">$2880</div>
        <button class="hl-btn hl-btn-primary">预订</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Padding Both

`.hl-list-group-pb` stands for 'padding both'

{% example html %}
<div class="hl-list-group hl-list-group-pb">
  <div class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-gray"><span class="hl-icon-flight-takeoff"></span> 出发地</div>
        <div class="hl-text-xl">北京</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-text-gray">到达地 <span class="hl-icon-flight-land"></span></div>
        <div class="hl-text-xl">上海</div>
      </div>
    </div>
  </div>
  <div class="hl-list-group-item">
    <div class="hl-row">
      <div class="hl-col-6 hl-text-left">
        <div class="hl-text-gray"><span class="hl-icon-calendar"></span> 出发日期</div>
        <div class="hl-text-xl">10-20</div>
      </div>
      <div class="hl-col-6 hl-text-right">
        <div class="hl-text-gray">返回日期 <span class="hl-icon-calendar"></span></div>
        <div class="hl-text-xl">10-30</div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Indent for Spacing

Add `.hl-list-group-indent` to the list group element.

{% example html %}
<div class="hl-list-group hl-list-group-indent">
  <div class="hl-list-group-item">
    <span class="hl-indent-icon hl-icon-airplane"></span>
    <span>机票订单</span>
    <span class="hl-icon-arrow-right hl-right"></span>
  </div>
  <div class="hl-list-group-item">
    <span class="hl-indent-icon hl-icon-coupon"></span>
    <span>优惠券</span>
    <span class="hl-icon-arrow-right hl-right"></span>
  </div>
  <div class="hl-list-group-item">
    <span class="hl-indent-icon hl-icon-mail"></span>
    <span>邮寄订单</span>
    <span class="hl-icon-arrow-right hl-right"></span>
  </div>
  <div class="hl-list-group-item">
    <span class="hl-indent-icon hl-icon-payment"></span>
    <span>其他订单</span>
    <span class="hl-icon-arrow-right hl-right"></span>
  </div>
</div>
{% endexample %}

## States

An list-group-item element has three states: **active**, **disabled**, **disabled-text**, and the corresponding css class names are `hl-active`, `hl-disabled`, `hl-disabled-text`.

{% example html %}
<ul class="hl-list-group">
  <li class="hl-list-group-item hl-active">账户余额</li>
  <li class="hl-list-group-item">建设银行(尾号1234)</li>
  <li class="hl-list-group-item hl-disabled-text">招商银行(尾号8888)</li>
  <li class="hl-list-group-item hl-disabled">工商银行(尾号6666) 外币卡</li>
</ul>
{% endexample %}

## With Iconfonts

{% example html %}
<div class="hl-list-group hl-list-group-pl">
  <div class="hl-list-group-item">
    <span class="hl-icon-person-outline hl-text-gray"></span>
    <span> 联系人姓名</span>
  </div>
  <div class="hl-list-group-item">
    <span class="hl-icon-phone hl-text-gray"></span>
    <span> 联系人电话</span>
  </div>
  <div class="hl-list-group-item">
    <span class="hl-icon-email hl-text-gray"></span>
    <span> 添加邮寄地址</span>
    <span class="hl-icon-angle-right hl-right hl-text-gray"></span>
  </div>
  <div class="hl-list-group-item">
    <span class="hl-icon-location hl-text-gray"></span>
    <span> 行程单自取点</span>
    <span class="hl-icon-angle-right hl-right hl-text-gray"></span>
  </div>
</div>
<div class="hl-tips">
  <span class="hl-tips-icon hl-icon-asterisk"></span>
  <span>您可以前往机场指定地点领取行程单</span>
</div>
<div class="hl-list-group hl-list-group-pl">
  <div class="hl-list-group-item">
    <span class="hl-icon-payment hl-text-gray"></span>
    <span>邮寄报销凭证</span>
  </div>
  <div class="hl-list-group-item">行程单</div>
  <div class="hl-list-group-item">航意险发票</div>
  <div class="hl-list-group-item">人保延误险发票</div>
  <div class="hl-list-group-item">配送方式</div>
</div>
{% endexample %}
