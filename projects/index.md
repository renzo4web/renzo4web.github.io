---
layout: layout.11ty.js
title: Projects
headline : dnasnkldkl
---

# These are some of my projects


{% for post in posts.posts %}
- {{post.title}} | [Read more &rarr;](/projects/{{post.path}})
{% endfor %}

<a href="https://github.com/renzo4web" target="_blank">More projects in Github</a>