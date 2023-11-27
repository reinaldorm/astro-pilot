---
title: "Strings In Python"
pubDate: 2023-27-11
description: "The way Strings are seen in Python."
author: "Reinaldo Henrique"
image:
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
  alt: "Python Logo"
tags: ["astro", "blogging", "learning in public"]
---

# Strings in Python

Like in many other languages, strings in Python are declared by enclosing generic text or simple single characters inside double ("") or single quotes ('').
Strings are also immutable and will always return a new value upon using it in functions or using built-in methods.

## String Slicing

> Before diving into strings methods or built-in functions, it is totally worth taking a look at what is possible to do with strings other besides that.

_String slicing_ lets you return a substring within strings based on the index passed inside brackets ([]).

```python
state = "Washington"

print(state[1])
```
