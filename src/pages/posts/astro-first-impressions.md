---
layout: ../../layouts/PostLayout.astro
title: Astro Framework
description: First impressions using Astro framework.
author: Reinaldo Henrique
date: 2023-12-01
image:
  url: https://astro.build/assets/press/astro-icon-dark.svg
  alt: astro-logo
tags:
  - Astro
  - JavaScript
  - Framework
---

> Hey, this is **still** a draft, one that I hope I'll finish writing some day. I encourage you to read one of the other posts I have that are already completed [here](https://astro-pilot.netlify.app/) but, if you want to read it anyway, feel free to do so.

---

#### Just so you know

I will start off by saying that that's **my first time doing** this review sort of thing and it might not end up being as a good reading as you may be thinking but, if I were a more advanced programmer I would be totally interested to look at some more beginner perspective on new things in this field so, _I hope that's you_.

#### What's Astro?

> "Astro is an **all-in-one** **web framework** for building **fast,** **content-focused** websites."

On point as it is, a easy, **yet** complex for those who likes to cherry-pick their project, framework for building mainly **static websites**, but with still some room for client-side JavaScript if needed.

Although I would still recommend Astro for people that are **searching for their first JavaScript framework** due to its little learning curve, I think that the learning process is **way more satisfying** for those who have already worked using other frameworks like **React** or have already seen concepts like **components**.

Astro is not built on top of any particular framework but its syntax can still **resemble the way we code** in many of them but, without some painful decisions like have to choose between using an arrow function or function declaration for a **React components** (if you still work with class components I feel sorry for you soldier).

Without further ado, that's an Astro code:

```astro
---
const { label, to } = Astro.props;
---

<a href={to} target="_blank">
	{label}
</a>
```

> Wait, you said no JavaScript!

Wait little fellow, this code **will not** be sent to your timeless user, it will actually be executed once at build time and will generate the static HTML for you, isn't that aweasome?
