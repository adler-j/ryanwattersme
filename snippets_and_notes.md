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