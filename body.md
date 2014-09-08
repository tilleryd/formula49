---
layout: page
title: Body
id: body
permalink: /body/
---

<ul class="posts">
  {% for post in site.categories.body %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>