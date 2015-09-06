From Bud Parr for Next/Previous
https://gist.github.com/budparr/3e637e575471401d01ec

{% capture the_collection %}{{page.collection}}{% endcapture %}
  {% if page.collection %}
    {% assign  document = site[the_collection]  %}
  {% endif %}
<h1>TITLE: {{ page.title }}</h1>
{% for links in document  %}
  {% if links.title == page.title %}
    {% unless forloop.first %}
      {% assign prevurl = prev.url %}
    {% endunless %}
    {% unless forloop.last %}
      {% assign next = document[forloop.index] %}
      {% assign nexturl = next.url %}
    {% endunless %}
  {% endif %}
  {% assign prev = links %}
{% endfor %}

<script>
document.body.onkeyup = function(e){
if (e.keyCode == '37') { window.location = '{{prevurl}}'; }
if (e.keyCode == '39') { window.location = '{{nexturl}}'; }
};
</script>

{% if prevurl %}<a href="{{prevurl}}" class="prev">PREV {{prevurl}}</a>{% endif %}<br />

{% if nexturl %}<a href="{{nexturl}}" class="nxt">Next {{nexturl}}</a>{% endif %}



// {% for page in site.pages %}
//      {% if page.insearch != false or page.insearch == nil %}
//      {"title": "{{page.title}}","text": {{page.content | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{tag}}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{page.url}}"},
//      {% endif %}
//    {% endfor %}
//    {% for article in site.collections.articles.docs %}
//    {% if article.insearch != false or page.insearch == nil %}
//    {"title": "{{article.title}}", "text": {{article.content | jsonify | strip_html }}, "tags": "{% if article.tags %}{% for tag in article.tags %}{{tag}}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}", "url": "{{article.url}}"}{% if forloop.rindex0 > 0 %},{% endif %}
//    {% endif %}
//    {% endfor %}

Sticky scroll for global navigation

// $(window).scroll(function() {
//     var headerHeight = $('.site-title-container').height(),
//         scrollLength = $(window).scrollTop(),
//         mobileToggle = $('#mobile-toggle'),
//         globalNav = $('.global-navigation');
//     if (scrollLength >= headerHeight && window.outerWidth > 640) {
//         globalNav.addClass('sticky-nav');
//     } else if (scrollLength < headerHeight && window.outerWidth > 640) {
//         globalNav.removeClass('sticky-nav');
//     }
// });

OLD H1 Sass for Articles

>header {
     @include display(flex);
     @include flex-direction(column);
     @include justify-content(center);
     margin-bottom: $base-font-size;
     padding-top: 0px;
     background-color: $accent-color;
     padding: 5%;
     color: white;
     @include MQ(M) {
         @include flex-direction(row);
         @include justify-content(space-between);
         @include align-items(center);
         width: 110%;
         margin-left: -5%;
         padding-left: 5%;
         padding-right: 5%;
         padding-top: 0;
         padding-bottom: 0;
     }
     h1 {
         @include display(flex);
         @include justify-content(center);
         font-family: $article-heading-font-family;
         text-align: center;
         font-size: $h1-font-size * .75;
         color: $article-headline-font-color;
         @include MQ(M) {
             text-align: left;
             width: auto;
             font-size: $h1-font-size;
         }
     }
     section.publishing-metadata {
         @include display(flex);
         @include flex-direction(column);
         @include justify-content(center);
         time {
             font-weight: bold;
             width: 100%;
             text-align: center;
         }
         ul {
             @include display(flex);
             @include justify-content(space-around);
             @include align-items(center);
             width: 100%;
             li {
                 font-size: $base-font-size * .75;
                 a {
                     color: inherit;
                 }
             }
         }
         @include MQ(M) {
             @include flex-direction(row);
             @include flex-wrap(wrap);
         }
     }
 }
