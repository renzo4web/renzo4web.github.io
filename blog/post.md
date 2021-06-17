---
pagination:
    data: posts.posts
    size: 1
    alias: post

permalink: "projects/{{ post.path | slug }}/"
layout: post.11ty.js
---

{{post.body}}