---
layout: ../../layouts/PostLayout.astro
title: Lists In Python
description: Python List.
author: Reinaldo Henrique
date: 2023-11-29
image:
  url: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png
  alt: Python Logo
tags:
  - vector
  - list
  - array
---

#### Lists In Python

Lists are just the Python's implementation of what you might know as an **Array** or **Vector**.

Lists are sequential data structures based on a zero index, just like arrays work in JavaScript.

```python
numbers = [1, 0, 3]
```

Just like in JavaScript, lists will be declared with \[\] passing the elements within.
Further we will see another ways to declare arrays with features like list comprehensions and etc.

#### Lists Methods

First of all, the `len()` function mentioned in <a href="/posts/strings">strings</a> also works for lists returning the total length of the list.

```python
names = ["Junior", "Reinaldo", "Ana"]

print(len(names))
```

The above output will be the integer `3` since it represents the total length of our list `names`.
