---
layout: ../../layouts/MdPostLayout.astro
title: Strings In Python
description: The way Strings are seen in Python.
author: Reinaldo Henrique
pubDate: 2023-11-29
image:
  url: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png
  alt: Python Logo
tags:
  - astro
  - blogging
  - learning
---

## Strings

We have in Python not only top-level functions to help us manipulate strings, but also methods from the **string class** that are also inherited by any other string inside the code as well as **string slicing** and other features.

Also important to keep in mind is that **none** of the methods used to manipulate _strings_ will **essentially mutate** the original value; instead, they will return us a new value that can be used further in the code.

> Strings in Python are **immutable** and will **always** return a **new value** rather than mutating the original value.

### String features

> Before diving into string methods and its properties is worth taking a look at what is possible to do with strings other than manipulate it with functions.

#### String Slicing

It's possible to pass a index inside brackets after strings, just like in lists, to return a substrings that represents the respective character of the string at that index.

```python
name = 'Reinaldo'

print(name[0]) # 'R' will be shown on the terminal.
```

If you run the code above you will see at the terminal the string `R`, which is a substring from the string `name` that we set before.

This feature will follow the same rules as for lists; it means that each character inside the string is represented by an index that starts at zero, i.e., the first character has index zero and so on.

---

If you want, you can also pass another index after a _colon_ to return a substring that goes from the left side index to the character that is _just before_ the right side index within the string, e.g.

```python
string[inclusive:exclusive]
```

```python
city = 'California'

print(city[1:5]) # 'alif' will be shown on the terminal.
```

The intuitive outcome from that code would be the substring `alifo` as the index `1` corresponds to `a` inside the string and `5` corresponds to `o`.
However, the right side of the brackets will actually say where the **slicing** have to stop rather than where does the substring, resulting in the substring `alif` as shows the illustration below.

![Python String Example](/assets/strings-asset-1.svg "Python")

##### What if we put _negative numbers_ inside the brackets?

If _just_ one negative number is passed inside the brackets the slicing will then start **backwards**, towards the start of the string where `-1` represents the **last character**, `-2` the **next-to-last** and so on.

### find()

The method `find()` allows us to find the index of a matched substring inside strings that we pass as a parameter inside the function.

```python
title = 'Welcome to our website!'

has_welcome = title.find('Welcome')
```

The variable `has_welcome` will receive _zero_ as it's value because `find()` will either return the index of the _first character of our substring_ parameter within the string if it occurs or -1 if the former case were not satisfied.

### replace()

This method will replace matched occurrences (if there are any) within strings and return a new value containing the original string and the replacements were made.

```python
title = 'Welcome to our website!'

replace_welcome = title.replace('Welcome', 'Be welcome')
```

Our variable `replace_welcome` will receive the value `Be welcome to our website!` as `replace()` found a match for the substring we passed as argument; The outcome would have been the original string if our substring had not matched any part of the string.

> Notice that `replace()` is also case sensitive and will produce different outcomes based on minimal details within the string.

### len()

Will return the total **length** of the string as a _integer_ and the integer 0 if the string is empty.

```python
store = "Walmart"

print(len(store))
```

The terminal will print `7` which is the total length of our string `store`.

This method, as for many other **built-in functions** that work in strings, works for lists as well returning the **total number of elements** within the list and **0** if there are **none**.
