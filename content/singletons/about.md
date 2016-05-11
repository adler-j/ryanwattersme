---
title: About
subtitle:
description: Here is some information about me, Ryan Watters, the sole developer, publisher, writer, and editor for ryanwatters.io.
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

My name is Ryan. I am a content strategist, editor, writer, web publisher, nerd, Japanophile, inchoate front-end developer, and (arguably) the worst guitarist in Chicago, IL.

I decided to build this blog 10 years after a friend implored me to do so. Thank you for your patience.

For the record, this site is classier and cleaner than my apartment.

## Site Content

All content is written in [GitHub Flavored][] [markdown](https://daringfireball.net/projects/markdown/) in observation of the latest [commonmark spec][] whenever possible. The aim of the content is to remain CMS independent so as to be easily ported to any [static site generator][] with built-in support for `.md` files with embedded `yaml` front matter.

Where markdown falls short, the syntax is extended via a handful of [JavaScript functions][] on the client and [Hugo Shortcodes][] at build time.

All content is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" class="creative-commons"><img src="/assets/images/icons/cc-by.svg" class="cc-license-icon" alt="Creative Commons Attribution 4.0 License icon"></a>

## Site Development

Here is a shortlist of tools used in the development of this site:

* [Gulp][]: compiling, concatenating, uglifying, and optimizing static assets; this includes [Babel][] for ES6 transpilation
* [GitHub][]: version/source control
* [Hugo][]: static site generation
* [Wercker][]: automated deployments
* [Amazon Simple Storage Service (S3)][]: hosting (static bucket)
* [CloudFlare][]: content delivery (CDN), SSL, and reverse proxy
* [Parse][]: NOSQL backend (article Kudos)
* [Disqus][]: commenting
* [Jotform][]: forms solution

Suffice it to say that I built this site with [performance][] and [simplicity][] in mind.

All source code is available under [MIT license][]. You are free to shamelessly steal my design, layout, type treatment, templating, etc. I might add you have *excellent* taste.

[Amazon Simple Storage Service (S3)]:https://aws.amazon.com/s3/
[Babel]:https://babeljs.io/
[CloudFlare]:https://www.cloudflare.com
[commonmark spec]:http://spec.commonmark.org/
[Disqus]:https://disqus.com/
[Jotform]:http://www.jotform.com/
[GitHub]:https://github.com/rdwatters/ryanwattersme
[GitHub Flavored]:https://help.github.com/articles/basic-writing-and-formatting-syntax/
[Gulp]:http://gulpjs.com/
[available on GitHub]:https://www.github.com/rdwatters/ryanwattersme
[Hugo]:http://gohugo.io/
[Hugo Shortcodes]:http://gohugo.io/extras/shortcodes/
[JavaScript Functions]:https://github.com/rdwatters/ryanwattersme/tree/master/assets/js/modules
[MIT License]:https://opensource.org/licenses/MIT
[parse]:https://www.parse.com
[performance]:https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fryanwatters.io
[simplicity]:/colophon/
[static site generator]:https://www.staticgen.com/
[wercker]:http://wercker.com/



