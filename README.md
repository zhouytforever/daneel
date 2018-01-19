# daneel-cli [![Build Status](https://img.shields.io/circleci/project/vuejs/vue-cli/master.svg)](https://circleci.com/gh/vuejs/vue-cli) [![npm package](https://img.shields.io/npm/v/vue-cli.svg)](https://www.npmjs.com/package/vue-cli)

A simple CLI for scaffolding code fragment.(A code generator from your custom template)

一个代码片段生成工具。

### Who need this ?
1. A lazzy guy
2. Who usually write the same code (e.g CURD)
3. Who can write a custom template by himself

### Installation
Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g daneel
```

### Usage

After you've created a project, you need lots of the same code for business modules
- From official template repository
``` bash
$ cd <Your business directory>
$ daneel daneel-template[#<branch-name>]
$ Input your property pairs (label and variable)
```

- From other template repository
``` bash
$ cd <Your business directory>
$ daneel <github-name>/<template-project-name>[#<branch-name>]
$ Input your property pairs (label and variable)
```

- From local template
``` bash
$ cd <Your business directory>
$ daneel <Your template directory (absolute path or relative path)>
$ Input your property pairs (label and variable)
```
>More usage: [download-git-repo](https://github.com/flipxfx/download-git-repo)

### Example:

``` bash
$ cd ./src/view/TestDaneel
$ daneel zhouytforever/daneel-template#iview
$ Input my property pairs (label and variable)
```
### How to custom your own template

1. Your template repository or directory is all you'll get.
2. All you need to care about is several tags below:
    - `{{label}}` : A label inputed in daneel-cli.
    - `{{variable}}` : A variable inputed in daneel-cli.
    - `{{#pairs}}` : An array contains `{{label}}` and `{{variable}}` just like `[{label: Name, variable: name}]`.
    - `{{pairs}}` : The end tag of `{{#pairs}}`.
3. You can write all the tags as a group wherever in your template.

### Example

Template you defined :
```bash
<Form inline :label-width="100">
  {{#pairs}}
  <FormItem label="{{label}}" prop="{{variable}}">
    <Input v-model="searchCondition.{{variable}}" />
  </FormItem>
  {{/pairs}}
  <FormItem>
    <Button type="primary" @click="onSearch">查询</Button>
    <Button @click="() => { this.onSearch(true) }">重置</Button>
  </FormItem>
</Form>
```

Command you inputed :
```bash
$ daneel daneel-template
? Please input your property label.(e.g 名字): $ 名字
? Please input your property variable.(e.g name): $ name
? Need next pair ? $ y
? Please input your property label.(e.g 名字): $ 性别
? Please input your property variable.(e.g name): $ sex
? Need next pair ? $ n
```

Code daneel generated :
```bash
<Form inline :label-width="100">
  <FormItem label="名字" prop="name">
    <Input v-model="searchCondition.name" />
  </FormItem>
  <FormItem label="性别" prop="sex">
    <Input v-model="searchCondition.sex" />
  </FormItem>
  <FormItem>
    <Button type="primary" @click="onSearch">查询</Button>
    <Button @click="() => { this.onSearch(true) }">重置</Button>
  </FormItem>
</Form>
```
### F.A.Q.
Q1. What about `{{label}}` without replacement
> Just write `\{{label}}` wherever you want in your template

Q2. Why is the util named as daneel
> It's a util created to help code like a robot
>
> A robot should like :
> - [R. Daneel Olivaw](https://en.wikipedia.org/wiki/R._Daneel_Olivaw)
> - [(中文)机·丹尼尔·奥利瓦](https://baike.baidu.com/item/%E6%9C%BA%C2%B7%E4%B8%B9%E5%B0%BC%E5%B0%94%C2%B7%E5%A5%A5%E5%88%A9%E7%93%A6/6871736?fr=aladdin)

### License

[MIT](http://opensource.org/licenses/MIT)
