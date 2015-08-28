---
layout: default
---

{% for job in site.data.jobs %}
<section>
    <h1>{{job.employer}}</h1>
    <div>{{job.started}}</div>
    <div>{{job.ended}}</div>
    <p>{{job.description}}</p>
</section>
{% endfor %}