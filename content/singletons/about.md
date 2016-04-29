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

## The Site

### Content

All content is written in [GitHub Flavored][] [markdown](https://daringfireball.net/projects/markdown/) in observation of the latest [commonmark spec][] whenever possible. The aim of the content is to remain CMS independent so as to be easily ported to any [static site generator][] with built-in support for `.md` files with embedded `yaml` front matter.

Where markdown falls short, the syntax is extended via a handful of [JavaScript functions][] on the client and [Hugo Shortcodes][] at build time.

### Development

All code used for this site is open source and [available on GitHub][].

Here is my shortlist of developer tools:

* [Gulp][]: compiling, concatenating, uglifying, and optimizing static assets; this includes [Babel][] for ES6 transpilation
* [GitHub][]: version/source control
* [Hugo][]: static site generation
* [Wercker][]: automated deployments
* [Amazon Simple Storage Service (S3)][]: hosting (static bucket)
* [CloudFlare][]: content delivery (CDN), SSL, and reverse proxy
* [Parse][]: NOSQL backend (article Kudos)
* [Disqus][]: commenting
* [Formspree][]: forms solution

There are many moving parts in the development of this site. Suffice it to say that I built this site with [performance][] and [simplicity][] in mind.

[Amazon Simple Storage Service (S3)]:https://aws.amazon.com/s3/
[Babel]:https://babeljs.io/
[CloudFlare]:https://www.cloudflare.com
[commonmark spec]:http://spec.commonmark.org/
[Disqus]:https://disqus.com/
[Formspree]:http://formspree.io/
[GitHub]:https://github.com
[GitHub Flavored]:https://help.github.com/articles/basic-writing-and-formatting-syntax/
[Gulp]:http://gulpjs.com/
[available on GitHub]:https://www.github.com/rdwatters/ryanwattersme
[Hugo]:http://gohugo.io/
[Hugo Shortcodes]:http://gohugo.io/extras/shortcodes/
[JavaScript Functions]:https://github.com/rdwatters/ryanwattersme/tree/master/assets/js/modules
[parse]:https://www.parse.com
[performance]:https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fryanwatters.io
[simplicity]:/colophon/
[static site generator]:https://www.staticgen.com/
[wercker]:http://wercker.com/



