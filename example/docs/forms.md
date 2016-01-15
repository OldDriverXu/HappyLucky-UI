---
layout: page
title: Forms
---

Style individual form controls and utilize common layouts. We reset several elements' default styles for cross browser consistency and easier manipulation later.

<div class="flash">
  <strong>Heads up!</strong> We focus on mobile device, so the 'width' of `input` and `select` tags are set to '100%' and 'div'.
</div>

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Input

{% example html %}
<form>
  <p>请输入您的手机号，我们会通过短信向您发送验证码来确认您的身份。</p>
  <input placeholder="您的手机号码" type="tel">
  <div class="hl-separator-blank"></div>
  <input placeholder="输入验证码" type="tel">
  <div class="hl-btn hl-btn-submit hl-btn-primary hl-disabled">验证</div>
</form>
{% endexample %}

### Sizing

Make inputs smaller, larger, or inline-block with an additional class.

- Large `.hl-input-lg`
- Small `.hl-input-sm`

{% example html %}
<form>
  <input class="hl-input-lg" type="text" placeholder="Large Input">
</form>

<form>
  <input class="hl-input-sm" type="text" placeholder="Small Input">
</form>
{% endexample %}

- Inline `.hl-input-line`

Use `.hl-input-line` for normal inline input style.

{% example html %}
<form>
  <input class="hl-input-inline" type="text" placeholder="Inline input">
</form>
{% endexample %}

### States

- Disabled `.hl-input-disabled`

Use `.hl-input-disabled` for disabled input style. Do remember to add `disabled` to the input element.

{% example html %}
<form>
  <input class="hl-input-disabled" type="text" placeholder="Disabled input" disabled>
</form>
{% endexample %}

- No border `.hl-input-noborder`
- No padding `.hl-input-nopadding`

{% example html %}
<form>
  <input class="hl-input-noborder hl-input-nopadding" type="text" placeholder="No Border input">
</form>
{% endexample %}

## Select

{% example html %}
<form>
  <select>
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
  </select>
</form>
{% endexample %}

### Sizing

Use the `.hl-select-sm`, `.hl-select-lg` class to resize select element.

- Large `.hl-select-lg`
- Small `.hl-select-sm`

{% example html %}
<select class="hl-select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
</select>

<select class="hl-select-lg">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
</select>
{% endexample %}

### States

- Select icon `.hl-select-icon`

Custom `<select>`s are also available—just add `.hl-select-icon` to its parent element.

{% example html %}
<form class="hl-select-icon">
  <select>
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
  </select>
</form>
{% endexample %}

- No border `.hl-select-noborder`
- No padding `.hl-select-nopadding`

{% example html %}
<form class="hl-select-icon">
  <select class="hl-select-noborder hl-select-nopadding">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
  </select>
</form>
{% endexample %}

## Usage of input and select

{% example html %}
<div class="hl-tips">
  <span class="hl-tips-icon hl-icon-dot"></span> 选择银行卡类型
</div>
<div class="hl-list-group hl-list-group-pb">
  <div class="hl-list-group-item">
    <div class="hl-select-icon">
      <select class="hl-select-nopadding hl-select-noborder">
        <option>招商银行</option>
        <option>工商银行</option>
        <option>农业银行</option>
        <option>建设银行</option>
        <option>交通银行</option>
        <option>中国银行</option>
      </select>
    </div>
  </div>
  <div class="hl-list-group-item">
    <div class="hl-select-icon">
      <select class="hl-select-nopadding hl-select-noborder">
        <option>储蓄卡</option>
        <option>信用卡</option>
      </select>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="hl-tips">
  <span class="hl-tips-icon hl-icon-dot"></span> 填写银行卡预留的身份信息
</div>
<div class="hl-list-group hl-list-group-pb">
  <div class="hl-list-group-item hl-row">
    <div class="hl-col-4">手机号</div>
    <div class="hl-col-8">
      <input class="hl-input-noborder hl-input-nopadding" type="tel" placeholder="请输入留存银行的手机号码">
    </div>
  </div>
  <div class="hl-list-group-item hl-row">
    <div class="hl-col-4">姓名</div>
    <div class="hl-col-8">
      <input class="hl-input-noborder hl-input-nopadding" type="text" placeholder="请输入持卡人姓名">
    </div>
  </div>
  <div class="hl-list-group-item hl-row">
    <div class="hl-col-4">证件</div>
    <div class="hl-col-8 hl-select-icon">
      <select class="hl-select-noborder hl-select-nopadding">
        <option>身份证</option>
        <option>护照</option>
        <option>军官证</option>
        <option>警官证</option>
        <option>港澳通行证</option>
        <option>其他</option>
      </select>
    </div>
  </div>
  <div class="hl-list-group-item hl-row">
    <div class="hl-col-4">证件号</div>
    <div class="hl-col-8">
      <input class="hl-input-noborder hl-input-nopadding" type="text" placeholder="请输入证件号码">
    </div>
  </div>
  <div class="hl-list-group-item hl-row">
    <div class="hl-col-4">手机号</div>
    <div class="hl-col-8">
      <input class="hl-input-noborder hl-input-nopadding" type="tel" placeholder="请输入留存银行的手机号码">
    </div>
  </div>
</div>
{% endexample %}

## Checkboxes and radios

Utilities to spice up the alignment and styling of checkbox and radio controls.

This part is just a usage of other components' styles.

{% example html %}
<div class="hl-tips">
  <span class="hl-tips-icon hl-icon-dot"></span> 请选择群支付类型
</div>
<div class="hl-list-group hl-list-group-pl">
  <div class="hl-list-group-item">
    <span class="hl-icon-checkbox-circle hl-text-green"></span> 机票
  </div>
  <div class="hl-list-group-item">
    <span class="hl-icon-checkbox-circle-outline hl-text-green"></span> 火车票
  </div>
  <div class="hl-list-group-item hl-disabled-text">
    <span class="hl-icon-checkbox-circle-outline"></span> 专车
  </div>
</div>
{% endexample %}

{% example html %}
 <div class="hl-tips">
  <span class="hl-tips-icon hl-icon-dot"></span> 请选择群支付类型
</div>
<div class="hl-list-group hl-list-group-pl">
  <div class="hl-list-group-item">
    机票 <span class="hl-icon-checkbox-circle hl-text-blue hl-right"></span>
  </div>
  <div class="hl-list-group-item">
    火车票 <span class="hl-icon-checkbox-circle-outline hl-text-blue hl-right"></span>
  </div>
  <div class="hl-list-group-item hl-disabled-text">
    专车 <span class="hl-icon-checkbox-circle-outline hl-right"></span>
  </div>
</div>
{% endexample %}

## Input search box

Input element with a search icon

{% example html %}
<div class="hl-input-search">
  <span class="hl-input-search-icon hl-icon hl-icon-search"></span>
  <input>
</div>
{% endexample %}


## Input group

Attached an input and button to one another.

{% example html %}
<div class="hl-input-group">
  <input type="text" placeholder="Username">
  <span class="hl-input-group-button">
    <button class="hl-btn hl-btn-primary">Confirm</button>
  </span>
</div>
{% endexample %}
