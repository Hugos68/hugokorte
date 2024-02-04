---
title: Using Pagefind with Vite
description: An article about setting up Pagefind with Vite.
date: 2024-2-5
published: true
---

In this article I will talk about my experience with integrationg Pagefind into a Vite based project, I will talk about why I wanted Pagefind, what the problem was and how I ended up solving it.

## What is pagefind?

Pagefind is a library used to add search to a website, quote from the creators of Pagefind:

> Pagefind is a fully static search library that aims to perform well on large sites, while using as little of your users’ bandwidth as possible, and without hosting any infrastructure.

Like it states above, Pagefind is a "static" search library, this means it can analyse static content and create a searchable index from that content. This content can be any form of text: HTML, JSON, plaintext, etc.
