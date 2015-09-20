From Bud Parr for Next/Previous
[https://gist.github.com/budparr/3e637e575471401d01ec](https://gist.github.com/budparr/3e637e575471401d01ec)

<script>
document.body.onkeyup = function(e){
if (e.keyCode == '37') { window.location = '{{prevurl}}'; }
if (e.keyCode == '39') { window.location = '{{nexturl}}'; }
};
</script>

{% if prevurl %}<a href="{{prevurl}}" class="prev">PREV {{prevurl}}</a>{% endif %}<br />

{% if nexturl %}<a href="{{nexturl}}" class="nxt">Next {{nexturl}}</a>{% endif %}



{% for page in site.pages %}
     {% if page.insearch != false or page.insearch == nil %}
     {"title": "{{page.title}}","text": {{page.content | jsonify | strip_html }}, "tags": "{% if page.tags %}{% for tag in page.tags %}{{tag}}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}","url":"{{page.}}"},
     {% endif %}
   {% endfor %}
   {% for article in site.collections.articles.docs %}
   {% if article.insearch != false or page.insearch == nil %}
    {"title": "{{article.title}}", "text": {{article.content | jsonify | strip_html }}, "tags": "{% if article.tags %}{% for tag in article.tags %}{{tag}}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}", l": "{{article.url}}"}{% if forloop.rindex0 > 0 %},{% endif %}
   {% endif %}
   {% endfor %}

STICKY SCROLL FOR GLOBAL NAVIGATION

$(window).scroll(function() {
    var headerHeight = $('.site-title-container').height(),
        scrollLength = $(window).scrollTop(),
        mobileToggle = $('#mobile-toggle'),
        globalNav = $('.global-navigation');
    if (scrollLength >= headerHeight && window.outerWidth > 640) {
        globalNav.addClass('sticky-nav');
    } else if (scrollLength < headerHeight && window.outerWidth > 640) {
        globalNav.removeClass('sticky-nav');
    }
});

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

 //OLD TAG STYLES
 
a.tag {
    transition:none;
    background: $base-font-color;
    color: $article-sticky-footer-background;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    font-weight: 600;
    &::before {
        background: $article-sticky-footer-background;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }
    &::after {
        background: white;
        border-bottom: 13px solid transparent;
        border-left: 10px solid $base-font-color;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }
    &:hover {
        background-color: $article-tag-hover-color;
        color: white;
        text-decoration: none;
    }
    &:hover::after {
        border-left-color: $article-tag-hover-color;
    }
}
