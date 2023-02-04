---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Test Post'
pubDate: 2023-04-02
description: 'Test Post'
author: 'Arjun'
image:
    url: 'https://i.imgur.com/tqE7wq4.jpeg' 
    alt: 'Cat.'
tags: ["cat", "blogging", "test"]
---

# HEADING
## SUBHEADING
### FOCUSED HEADING
#### TINY HEADING

Hello~! How are you!
*counting stars*
**Magic!**

> What

1. Tricks
2. Treats
3. Etc.

- Hey!
- How are you!

`hello();`
```js
const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();
      
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
```

|syntax|desc   |hello        |
|------|-------|-------------|
|dwdw  |wdwdw  |dwdwdw       |
|faefae|wefefaf|awefaefWSFAEF|
|DAFCGE|AEWAFVD|WDqwfwf      |

  something [^1]
  
### lol

~~afenawevkenj~~

- [ ] Todo 1
- [ ] todo 2
- [x] done 

😂
🚋 :train:	🚉 :station:	🚆 :train2:
🚅 :bullettrain_front:	🚄 :bullettrain_side:	🚈 :light_rail:
🚝 :monorail:	🚃 :railway_car:	🚎 :trolleybus:
🎫 :ticket:	⛽ :fuelpump:	🚦 :vertical_traffic_light:
🚥 :traffic_light:	⚠️ :warning:	🚧 :construction:
🔰 :beginner:	🏧 :atm:	🎰 :slot_machine:
🚏 :busstop:	💈 :barber:	♨️ :hotsprings:

Highlighted <mark>abfvaejkzdvl</mark>

H<sub>2</sub>0

x<sup>2</sup>

https://example.com
`https://example.com`
  [example.com](https://example.com)
  
![alt text](https://i.imgur.com/tqE7wq4.jpeg)
[^1]: Wrong
  
