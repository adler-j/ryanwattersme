---
title: Arbitrarily Adding Articles
subtitle: Subtitle for this particular piece
description: "This is a description for this piece title \"Arbitrarily Adding Articles,\" which is an attempt to add more content for the sake of testing the Tipue search recently added to the site."
layout: article
insearch: true
published: true
<<<<<<< HEAD
publish_date:
tags: [food,travel,japan]
=======
date: 2015-09-01T00:00:00.000Z
tags: 
  - food
  - travel
  - japan
>>>>>>> origin/master
---



One Flew Over the Cuckoo's Nest. Man, when you lose your laugh you lose your footing. All I know is this: nobody's very big in the first place, and it looks to me like everybody spends their whole life tearing everybody else down. But it's the truth even if it didn't happen. He knows that you have to laugh at the things that hurt you just to keep yourself in balance, just to keep the world from running you plumb crazy. If you don't watch it people will force you one way or the other, into doing what they think you should do, or into just being mule-stubborn and doing the opposite out of spite. What do you think you are, for Chrissake, crazy or somethin'? Well you're not! You're not! You're no crazier than the average asshole out walkin' around on the streets and that's it. Here is [a link to Google](https://www.google.com). Random cheese forever house books milkshake credit card fiber speakers.

```javascript
// Require Gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var critical = require('critical');

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('_sass/**/*.scss')    
    .pipe(sourcemaps.init()) // Initializes sourcemaps
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: "compressed"
      }))
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sourcemaps.write('./')) // Writes sourcemaps into the CSS file
    .pipe(gulp.dest('css'));
})

$(document).ready(function(){
	$('h1').on('click',function(){
    $('body').css('background-color','#01589B');
    });
});
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sed autem obcaecati magnam deserunt. Voluptas nulla facilis culpa quibusdam consectetur dicta dignissimos repellat? Excepturi voluptas magni nobis debitis voluptate maiores.

![A picture of a shiba inu puppy taken from a Google Images search](http://images.shibashake.com/wp-content/blogs.dir/7/files/2012/03/375757_10150889470687524_800937523_12981704_1473609087_n-520x346.jpg)

<iframe width="420" height="315" src="https://www.youtube.com/embed/bCEMBvdgWGM" frameborder="0" allowfullscreen></iframe>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error, pariatur. Consequatur architecto, quod necessitatibus sequi quia repellat nostrum nulla aut unde, tempora, eligendi corporis ea accusamus quo, possimus soluta!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sit, dolorem officiis iusto esse nostrum veniam sed distinctio ullam vel dignissimos rerum a. Labore, sint commodi numquam inventore, facere dolor.

One Flew Over the Cuckoo's Nest. Man, when you lose your laugh you lose your footing. All I know is this: nobody's very big in the first place, and it looks to me like everybody spends their whole life tearing everybody else down. But it's the truth even if it didn't happen. He knows that you have to laugh at the things that hurt you just to keep yourself in balance, just to keep the world from running you plumb crazy.

If you don't watch it people will force you one way or the other, into doing what they think you should do, or into just being mule-stubborn and doing the opposite out of spite. What do you think you are, for Chrissake, crazy or somethin'? Well you're not! You're not! You're no crazier than the average asshole out walkin' around on the streets and that's it.
