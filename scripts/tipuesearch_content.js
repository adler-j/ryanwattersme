---
---

var tipuesearch = {"pages": [
		{% for article in site.collections.articles.docs %}
		{"title": "{{article.title}}", "text": {{article.content | jsonify }}, "tags": "{% if article.tags %}{% for tag in article.tags %}{{tag}}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}{% endif %}", "url": "{{article.url}}"}{% if forloop.rindex0 > 0 %},{% endif %}{% endfor %}    
]};