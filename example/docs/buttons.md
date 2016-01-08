---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default buttons

Use the standard—yet classy—`.hl-btn` for form actions and primary page actions. These are used extensively around the site.

<!-- When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**. -->

{% example html %}
<button class="hl-btn">Button button</button>
<div class="hl-btn">DIV button</div>
<a class="hl-btn" href="#">Link button</a>
{% endexample %}

**Heads up!** Always use `<button>` element for button.

### Primary / Plain / Success / Info / Warning / Danger buttons

Primary buttons are blue and are used to indicate the *primary* action on a page. When you need your buttons to stand out, use `.hl-btn.hl-btn-primary`.

Similarly, use `.hl-btn-plain` for plain button, use `.hl-btn-success` for success button, use `.hl-btn-info` for info button, use `.hl-btn-warning` for warning button, use `.hl-btn-danger` for danger button.

{% example html %}
<button class="hl-btn hl-btn-primary">Primary button</button>
<button class="hl-btn hl-btn-plain">Plain button</button>
<button class="hl-btn hl-btn-success">Success button</button>
<button class="hl-btn hl-btn-info">Info button</button>
<button class="hl-btn hl-btn-warning">Warning button</button>
<button class="hl-btn hl-btn-danger">Danger button</button>
{% endexample %}

### Outline buttons

Outline buttons downplay an action as they appear like boxy links. Just add `.hl-btn-xxx-outline` and go.

{% example html %}
<button class="hl-btn hl-btn-primary-outline">primary</button>
<button class="hl-btn hl-btn-plain-outline">plain</button>
<button class="hl-btn hl-btn-success-outline">success</button>
<button class="hl-btn hl-btn-info-outline">info</button>
<button class="hl-btn hl-btn-warning-outline">warning</button>
<button class="hl-btn hl-btn-danger-outline">danger</button>
{% endexample %}


## Button Size

### Large / Normal / Small buttons

Use `.hl-btn-lg` for large buttons, use `.hl-btn-sm` for small buttons

{% example html %}
<button class="hl-btn hl-btn-primary hl-btn-lg">Large Button</button>
<button class="hl-btn hl-btn-primary">Button</button>
<button class="hl-btn hl-btn-primary hl-btn-sm">Small Button</button>
{% endexample %}

### Block buttons

Make any button full-width by adding `.hl-btn-block`. It adds `width: 100%;`, changes the `display` from `inline-block` to `block`.

{% example html %}
<button class="hl-btn hl-btn-block hl-btn-primary">Block button</button>
<button class="hl-btn hl-btn-block hl-btn-primary-outline">Block button</button>
{% endexample %}

### Submit buttons

Make a submit button by adding `.hl-btn-submit`. It adds 'margin', changes the `display` from `inline-block` to `block`, and `font-size`.

<div class="flash flash-error">
  <strong>Heads up!</strong> Use <strong>&#60;div&#62;</strong> tag for submit button, do not use <strong>&#60;button&#62;</strong> tag
</div>

Here the reason goes:

[why does displayblock not stretch buttons or input elements](http://stackoverflow.com/questions/16584890/why-does-displayblock-not-stretch-buttons-or-input-elements?rq=1)

[input with displayblock is not a block](http://stackoverflow.com/questions/1030793/input-with-displayblock-is-not-a-block-why-not?lq=1)

{% example html %}
<div class="hl-btn hl-btn-submit hl-btn-primary">Submit button</div>
{% endexample %}

If you want use `<button>` tag, please do add a `<div>` wrapper.

{% example html %}
<div class="hl-btn-submit">
  <button class="hl-btn hl-btn-block hl-btn-primary">Submit button</button>
</div>
{% endexample %}


## Button states

Buttons has three states: normal, `.hl-active` , `.hl-disabled`.

{% example html %}
<button class="hl-btn hl-btn-primary">button</button>
<button class="hl-btn hl-btn-primary hl-active">active button</button>
<button class="hl-btn hl-btn-primary hl-disabled">disabled button</button>
{% endexample %}

Similar styles are applied to plain, success, danger, and outline buttons:

{% example html %}
<button class="hl-btn hl-btn-success">button</button>
<button class="hl-btn hl-btn-success hl-active">active button</button>
<button class="hl-btn hl-btn-success hl-disabled">disabled button</button>
{% endexample %}

{% example html %}
<button class="hl-btn hl-btn-danger-outline">button</button>
<button class="hl-btn hl-btn-danger-outline hl-active">active button</button>
<button class="hl-btn hl-btn-danger-outline hl-disabled">disabled button</button>
{% endexample %}

## Button groups

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.hl-btn-group` and the buttons will be rounded and spaced automatically.

{% example html %}
<div class="hl-btn-group">
  <button class="hl-btn hl-btn-plain">Button</button>
  <button class="hl-btn hl-btn-plain">Button</button>
  <button class="hl-btn hl-btn-plain">Button</button>
</div>

<div class="hl-btn-group">
  <button class="hl-btn hl-btn-primary-outline">Button</button>
  <button class="hl-btn hl-btn-primary-outline">Button</button>
  <button class="hl-btn hl-btn-primary-outline">Button</button>
</div>

<div class="hl-btn-group">
  <button class="hl-btn hl-btn-sm hl-btn-info-outline">Button</button>
  <button class="hl-btn hl-btn-sm hl-btn-info-outline">Button</button>
  <button class="hl-btn hl-btn-sm hl-btn-info-outline">Button</button>
</div>
{% endexample %}

## Toggle button

Use `.hl-btn-toggle` for toggle button, and `.hl-active` for its ative state.

{% example html %}
<button class="hl-btn hl-btn-toggle"></button>
<button class="hl-btn hl-btn-toggle hl-active"></button>
{% endexample %}
