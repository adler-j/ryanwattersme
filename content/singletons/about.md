---
title: About
subtitle:
description: An overview of the reasoning behind the site, as well as the development and design specifications for ryanwatters.io.
date: 2016-03-20
publishdate: 2016-03-20
updated: 2016-03-20
type: singletons
layout: about
tags: [about,info]
categories: []
comments: First attempt at creating the About page for ryanwatters.io
---

## Me

My name is Ryan. I am a content strategist, editor, writer, and web publisher in Chicago, IL.

For the record, this site is classier and cleaner than my apartment.

A friend implored me to write a blog in 2007. It's 2016. Thank you for your patience.

## The Site

### Content

All content for the site is written in [GitHub Flavored][] [markdown](https://daringfireball.net/projects/markdown/) that observes the latest [commonmark spec][] whenever possible. As a publisher, I want CMS-independent content that can be easily ported to any [static site generator]() with built-in support for `.md` files with embedded `yaml` front matter.

Where markdown falls short, extensions to the syntax are rendered on the client via a handful of [JavaScript functions][] on the client and [Hugo Shortcodes][].

### Development

All code used for this site is open source and [hosted on GitHub][].

Here is the shortlist of build tools:

* [Babel][] for ES6 transpilation
* [Gulp][] for asset management and compiling static assets
* [Hugo][] as a static site generator

There are many moving parts in the development of this site. Suffice it to say that I built this site with [performance][] and [simplicity][] in mind.

[Babel]:https://babeljs.io/
[commonmark spec]:http://spec.commonmark.org/
[GitHub Flavored]:https://help.github.com/articles/basic-writing-and-formatting-syntax/
[Gulp]:http://gulpjs.com/
[hosted on GitHub]:https://www.github.com/rdwatters/ryanwattersme
[Hugo]:http://gohugo.io/
[Hugo Shortcodes]:http://gohugo.io/extras/shortcodes/
[JavaScript Functions]:https://github.com/rdwatters/ryanwattersme/tree/master/assets/js/modules
[performance]:https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fryanwatters.io
[simplicity]:/colophon/
[static site generator]:https://www.staticgen.com/



