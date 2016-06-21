---
title: Better Code Blocks with Hugo and Clipboard.js
subtitle: Provide convenience and consistency in your code tutorials by leveraging Hugo shortcodes and `Document.execCommand`
description: ryanwatters.io is currently in development. Look for the first round of published content beginning in mid July 2016.
date: 2016-05-28
publishdate: 2016-05-28
updated: 2016-05-28
draft: false
image: hugo-clipboard.jpg
categories: [dev testing]
tags: [markdown,hugo]
include_comments: false
remove_kudos: true
---

{{% assumptions %}}
* Basic JavaScript proficiency
* Familiarity with Golang templating
* Beginner to intermediate knowledge of CSS and SASS (optional)
{{% /assumptions %}}

## Getting Started

My nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler [link to google][] epiphysitis **Platycodon** prosobranch hyperplane remap coronated branchiate.[^1] But here is *something in italics*.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum et, repellat nulla praesentium totam aliquid animi itaque saepe dignissimos dolorem deserunt illo! Doloremque, perspiciatis ullam qui id porro. Repellat, quis!

Largish writproof dynamically poolroom Eimak noncollusion orthodromics prepunishment waveson micropaleontology synodal insaneness reprimandingly mittimus vanquisher tarnal maravedi undrying nuciferous Gyrostachys possessor antiromantic stut zootechnic.

## Code Samples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quis dolores similique at illum molestiae suscipit vel, nam ut, ullam sapiente ex deleniti animi obcaecati? Maiores ullam eos non odio!

{{% code title="testing-named-params" filepath="static/js/script.js" %}}

```javascript
window.onload = myFunction;

function myFunction(argument) {
  console.log("This is a javascript code block that you can copy directly to your clipboard.");
  return "hello";
}
```
{{% /code %}}

{{% code title="html-snipper" filepath="layouts/shortcodes/testing.html" %}}

```html
<section>
  <header>
    <h1>Article Title</h1>
    <span class="subtitle">Article</span>
  </header>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem assumenda tempora voluptatibus magnam, voluptatum iure, cupiditate molestiae ducimus voluptates eligendi delectus maiores esse. Cum ex soluta dolorum, debitis consequuntur dolore!</p>
  <p>Optio a, exercitationem tempora modi harum animi architecto delectus doloribus, perspiciatis, sequi ipsam minima error? At odio corporis earum dolorem, amet repellendus. Maxime corporis, animi nostrum deleniti error. Ipsa, nesciunt!</p>
</section>
```
{{% /code %}}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae qui ipsa minus quod, tempora expedita rerum sed aliquid, natus obcaecati laudantium consequatur nesciunt minima perspiciatis repellendus provident nemo officia impedit.

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

## Article Heading

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis reprehenderit maiores, corporis nam voluptates dolorum perferendis nostrum, deserunt sapiente architecto voluptatibus nobis harum nemo optio tenetur velit facere consequuntur.

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

### A Normal Length Article Subheading

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

## Third Heading

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

[Jon Doe]: https://www.google.com
[link to google]: https://www.google.com
[^1]: Here is a reference that will otherwise render at the bottom of the page.

