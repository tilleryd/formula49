---
layout: page
title: Performance
id: performance
permalink: /performance/
---

<ul class="posts">
  {% for post in site.categories.performance %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
