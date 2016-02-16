---
layout: page
title: Loading
---

I know you know it.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Use `.hl-active` to activate it.

{% example html %}
<div id="loading-wrap1" class="hl-mask hl-mask-transparent">
  <div class="hl-loading">
    <div class="hl-loading-icon hl-text-blue">
      <div class="hl-spinner">
        <span class="hl-icon hl-icon-spinner-curve"></span>
      </div>
    </div>
  </div>
</div>
<button id="loading1" class="hl-btn hl-btn-primary-outline">Show Loading</button>
{% endexample %}

## With mask and text

Use `.hl-active` to activate it.

{% example html %}
<div id="loading-wrap2" class="hl-mask">
  <div class="hl-loading">
    <div class="hl-loading-icon hl-text-orange">
      <div class="hl-spinner">
        <span class="hl-icon hl-icon-spinner-sun"></span>
      </div>
    </div>
    <div class="hl-loading-content">数据正在加载中，请耐心等待</div>
  </div>
</div>
<button id="loading2" class="hl-btn hl-btn-primary-outline">Show Loading</button>
{% endexample %}

{% example html %}
<div>Javascript code for the click event of the buttons, please ignore it</div>
<script>
  document.getElementById('loading1').addEventListener('click', function() {
    var target = document.getElementById('loading-wrap1');
    toggle(target);
  }, false);

  document.getElementById('loading2').addEventListener('click', function() {
    var target = document.getElementById('loading-wrap2');
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