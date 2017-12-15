# daneel-cli [![Build Status](https://img.shields.io/circleci/project/vuejs/vue-cli/master.svg)](https://circleci.com/gh/vuejs/vue-cli) [![npm package](https://img.shields.io/npm/v/vue-cli.svg)](https://www.npmjs.com/package/vue-cli)

A simple CLI for scaffolding code fragment.

一个代码片段生成工具。

### Who need this ?
1. A lazzy guy
2. Who usually write the same code (e.g CURD)
3. It's better if you use vue
4. Who can write a custom template by himself

### Installation
Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g daneel
```

### Usage

After you've created a project, you need lots of the same code for business modules
``` bash
$ cd <Your business directory>
$ daneel <github-name>/<template-project-name>[#<branch-name>]
$ Input your property pairs (label and variable)
```
>More usage: [download-git-repo](https://github.com/flipxfx/download-git-repo)

### Example:

``` bash
$ cd ./src/view/TestDaneel
$ daneel zhouytforever/daneel-template#iview
$ Input my property pairs (label and variable)
```

### Why is the util named as daneel
It's a util created to help code like a robot

A robot should like :
- [R. Daneel Olivaw](https://en.wikipedia.org/wiki/R._Daneel_Olivaw)
- [(中文)机·丹尼尔·奥利瓦](https://baike.baidu.com/item/%E6%9C%BA%C2%B7%E4%B8%B9%E5%B0%BC%E5%B0%94%C2%B7%E5%A5%A5%E5%88%A9%E7%93%A6/6871736?fr=aladdin)

### License

[MIT](http://opensource.org/licenses/MIT)
