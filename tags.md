---
title: Tags
subtitle: Tags for this site
description: Tags for this site 
layout: article
published: true
date: 2015-08-29
comments: false
permalink: /tags/
insearch: false
---

{% assign sorted_tags = site.collections.articles.tags %}
{% for tag in sorted_tags %}
<p>{{tag.name}}</p>
{% endfor %}
