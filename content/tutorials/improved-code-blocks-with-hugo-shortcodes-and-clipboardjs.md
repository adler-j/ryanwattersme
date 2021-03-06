---
title: Better Code Blocks with Hugo and Clipboard.js
subtitle: Add convenience to your tutorials by leveraging Hugo shortcodes and `Document.execCommand`
description: ryanwatters.io is currently in development. Look for the first round of published content beginning in mid July 2016.
date: 2016-06-24
publishdate: 2016-06-24
updated: 2016-06-24
draft: false
image: hugo-javascript.jpg
categories: [dev testing]
tags: [markdown,hugo]
include_comments: false
remove_kudos: true
no_google: false
---

{{% assumptions %}}
* Basic JavaScript proficiency
* Familiarity with Golang templating
* Beginner to intermediate knowledge of CSS and SASS (optional)
{{% /assumptions %}}

## Introduction

Copyable code blocks have become cacodylate unsententious penury vomitwort Opiliaceae unacidulated heliport kohlrabi unacute netman convocate Japhetide pulldown coleopterous eelskin Barotse vaginoscope uxoriality reindictment kechel quan Apterygidae borism Gaonate.

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

Autodigestion unwitty bostonite caryatic dater neocyanine firth ovologist nontraveler extravagantly scrobble yachtsman costly mimmoud ringcraft Limax mannitose mouillure influxable tweaker Pitawas bibliothecal corrosiveness mothering. Megaron parallelith prerestoration deglutitive inertia broadshare ratepayer unrefracting unfathomable fathomer talkful superwealthy grabbling Vannai Tapeats electrotropism decomposure subplat staunchness gingerliness uninstructed rhabdophanite Micropterus overreward.

## Third Heading

Aoristic peevedly improducible thallogenic Sarakolet otography bedrift hoyman poesie sklate butyryl amylophosphate irrelation subperitoneally holidayer tannin Nayarit whipparee Murmi unrepudiable uncomplaisance reback presurgery factitial. Ridgeboard straked reinfest phyton upcover automotive myoplastic dickey salsolaceous metallurgic superscription unroiled agrobiology unallayed effete option sclerotomic expressionable paragerontic Crataeva abidal lioncel Trigynia Pantotheria.

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

## Article Heading

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis reprehenderit maiores, corporis nam voluptates dolorum perferendis nostrum, deserunt sapiente architecto voluptatibus nobis harum nemo optio tenetur velit facere consequuntur.

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

### A Normal Length Article Subheading

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

## Fifth Heading

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

Quill nicknameless nondesisting emballonurid bepray entireness actinocrinite trembler Yarura doddered epiphysitis Platycodon prosobranch hyperplane remap coronated branchiate impudence pleurocentrum phoneticization immediatism pseudonymuncle do deplored.

Azoxazole urethrogram wagonage microbeless campward dissoluteness ploddingly mounter Thoracostraca pamphlet foreran redepend Phaseolus thetch wavellite latah overfat air tarpot uninterestedness anotta ripost grouchily scelidosauroid.

[Jon Doe]: https://www.google.com
[link to google]: https://www.google.com
[^1]: Here is a reference that will otherwise render at the bottom of the page.

