---
layout: page
title: Layout
---

HappyLucky's layout includes basic page row and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it's just row and columns.

You can find all the below styles in `_layout.scss`.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Grid

### How it works

The grid is pretty standard: 1 row has 12 columns.

you create rows with `.row` and individual columns with a column class and fraction class. Here's how it works:

- Add a `.row` to encapsulate everything and provide ample horizontal gutter space.
- Add your fractional width classes to set the width of the columns `<div class="hl-col-x">` (e.g., `.hl-col-6`).

### Demo

In practice, your columns will look like the example below.

{% example html %}
<div class="container grid-color">
  <div class="hl-row">
    <div class="hl-col-6">
      .hl-col-6
    </div>
    <div class="hl-col-6">
      .hl-col-6
    </div>
  </div>

  <div class="hl-row">
    <div class="hl-col-4">
      .hl-col-4
    </div>
    <div class="hl-col-4">
      .hl-col-4
    </div>
    <div class="hl-col-4">
      .hl-col-4
    </div>
  </div>

  <div class="hl-row">
    <div class="hl-col-6">
      .hl-col-6
    </div>
    <div class="hl-col-3">
      .hl-col-3
    </div>
    <div class="hl-col-3">
      .hl-col-3
    </div>
  </div>
</div>
{% endexample %}

### Centered

Columns can be [centered](/utilities/#centering-content) by adding `.hl-centered` to the `.hl-col-x` class.

{% example html %}
<div class="hl-row">
  <div class="hl-col-6 hl-centered">
    .hl-centered
  </div>
</div>
{% endexample %}