---
title: Pagefind with Vite
description: And the struggle to make them work together.
date: 2024-2-5
published: true
layout: article
---

In this article I will talk about my experience with integrating [Pagefind](https://pagefind.app/) into a Vite based project. I will talk about why I needed Pagefind, why it was difficult to implement with Vite and how I ended up solving it.
(Spoiler alert: I built a plugin)

## What is Pagefind?

Pagefind is a library used to add search to a website, quote from the creators of Pagefind:

> Pagefind is a fully static search library that aims to perform well on large sites, while using as little of your users’ bandwidth as possible, and without hosting any infrastructure.

Like it states above, Pagefind is a "static" search library, this means it can analyse static content and create a searchable index from that content. This content can be any form of text: HTML, JSON, plaintext, etc.

## Why Pagefind?

Unlike [Algolia](https://www.algolia.com/), [Elastic](https://www.elastic.co/) or other server side search solutions, Pagefind requires zero server side communication and is completely static meaning all the "hard work" is done during build time instead of runtime like it's competitors, this makes it an excellent choice for a performant documentation search solution for static websites.

Here are some examples of large scale websites that have been indexed by Pagefind:

- [MDN Web Docs](https://mdn.pagefind.app/)
- [Godot Docs](https://godot.pagefind.app/)

## So, what's the problem?

Up until now everything sounds pretty much ideal, you have a client side search solution that doesn't hog up your bandwidth and is performant on large scale, what's there to complain about?

Enter [Vite](https://vitejs.dev/).

Vite is in general an awesome and widely loved (including me) tool to develop and bundle your apps with, it's extremely peformant and optimized compared to it's competitors.

It's also great at detecting what code should be bundled, what code won't work and what code should be purged, here is where the problems (Yes there are multiple) begin.
