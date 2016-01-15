---
layout: page
title: Popup
---

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Alert

Alert dialog, has one button.

Use `.hl-active` to activate popup.

{% example html %}
<div id="popup-alert" class="hl-overlay">
  <div class="hl-popup">
    <div class="hl-popup-header">管家提示</div>
    <div class="hl-popup-body">网络超时，请稍后重试</div>
    <div class="hl-popup-footer">
      <a id="alert-btn" class="hl-popup-alert">确定</a>
    </div>
  </div>
</div>
<button id="alert-trigger" class="hl-btn hl-btn-primary">Alert Dialog</button>
{% endexample %}

## Confirm

Confirm dialog, has two button.

Use `.hl-active` to activate popup.

{% example html %}
<div id="popup-confirm" class="hl-overlay">
  <div class="hl-popup">
    <div class="hl-popup-header">管家提示</div>
    <div class="hl-popup-body">确定要删除联系人吗?</div>
    <div class="hl-popup-footer">
      <a id="confirm-btn-yes" class="hl-popup-cancel">取消</a>
      <a id="confirm-btn-no" class="hl-popup-confirm">确定</a>
    </div>
  </div>
</div>
<button id="confirm-trigger" class="hl-btn hl-btn-danger">Confirm Dialog</button>
{% endexample %}

{% example html %}
<div>Javascript code for the click event of the buttons, please ignore it</div>
<script>
  document.getElementById('alert-trigger').addEventListener('click', function() {
    var target = document.getElementById('popup-alert');
    toggle(target);
  }, false);

  document.getElementById('alert-btn').addEventListener('click', function() {
    var target = document.getElementById('popup-alert');
    toggle(target);
  }, false);

  document.getElementById('confirm-trigger').addEventListener('click', function() {
    var target = document.getElementById('popup-confirm');
    toggle(target);
  }, false);

  document.getElementById('confirm-btn-yes').addEventListener('click', function() {
    var target = document.getElementById('popup-confirm');
    toggle(target);
  }, false);

  document.getElementById('confirm-btn-no').addEventListener('click', function() {
    var target = document.getElementById('popup-confirm');
    toggle(target);
  }, false);

  function toggle(target) {
    var className = target.className;

    if (className.search(/hl-active/i) < 0) {
      className = className + ' hl-active';
    } else {
      className = className.replace(/hl-active/i, '');
      className = trim(className);
    }

    target.className = className;
  }

  function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
</script>
{% endexample %}
