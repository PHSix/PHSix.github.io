---
title: 从react到vue3，react和reactive之间的思考🤔
create-time: 2025-01-02
tags:
  - vue3
  - react
---

# 前言
最近加入了一个写vue的前端团队，在此之前笔者一直是一个react开发者，初到vue3的开发领域，
发现vue3的思考模式和我预期的并不完全一致，于是想写一篇文章来记录一下这些思考的过程。

在开始之前，作为一个react开发者，当在有人问我，前端开发应该选择react还是vue的时候，我通常会回答他，
如果你想要减少麻烦，不想深入前端的话，vue3是一个很好的选择，而且就算是你想要深入了解前端的话，vue3也会是一个很好的选择。

# 对react的失望

在以前react的开发工作中，我遇到过很多的一些坑，其中一些是因为我的理解和认知有误，
有一些则是因为react的自由度导致的。总所周至，react 是一个非常自由的前端框架，因为他有jsx 语法，你可以用javascript来描述所有的视图行为，
这使得开发者可以很容易的实现各种复杂的视图和各种复杂逻辑的抽象组建，这也是为什么react在前端开发中有如此广泛的使用。

但是在实际开发中，你会发现，作为 react 框架的使用者，你常常会想去使用一些高阶函数或是一些高级抽象去实现一个逻辑，
因为你总会觉得这样很酷，在第一次写出来的时候，你会感觉充满成就感，这会带给你极大的成就感，
但是当后面再回过头在来看这部分的代码的时候，你又会发现，这样并不是一个很好的方式，因为它会导致你的代码变得很复杂，
可能你那天就会开始看不懂自己写的代码。当然更多的时候是你发现后续的业务内容开始变化了，你发现你需要花费很大的时间来改进这些代码，
而且它的性能也不如你一开始抽象的那么好了，react 这个框架的核心本身的性能就不是很好（它只是在大部分时候够用，但远远不是最佳），
加上你其他业务带来的 rerender，这个时候你需要用上很多的`useMemo`、`useCallback`和`memo`等手段去不停的优化你的代码。
然后你就开始不停的去探究，用什么样的方式可以去减少render，减少这个`f(x)`求值的过程，然后你就会得到`immutable`、`dispatch`、`reducer`、`computed`等等概念，
还会用上`mobx`、`redux`、`recoil`、`zustand`和`jotai`等等东西，然后你的脑子开始越来越复杂，
从一个每天crud的web dev变成了一个天天研究各种最佳实践的“魔怔人”，而且到头来你还会发现，
你写的所谓的“高性能”代码可能在真“reactive”的场景下是很轻松实现的，而且它实现的速度比你更快，性能更好，而且可拓展性也比你强。

就笔者的经历来说，笔者使用的状态管理工具从`context`/`mobx` -> `redux` -> `recoil` -> `jotai`，
也是不知不觉的从react到reactive模型的转变，在写了越来越多的前端代码之后，我发现了一件事———— reactive 天生就非常适用于处理需要与用户交互的场景，
而且reactive框架也不会说因为你项目业务内容的持续变更而导致你的视图代码变得非常难以维护，所以渐渐的，我对 reactive 有了好感，也渐渐的，成为了一个“reactive 魔怔人”

# 从react的api到vue3的api转变

## useState -> ref/reactive

## useMemo -> computed

## useEffect -> watch/watchEffect

## useRef -> useTemplateRef

## props -> defineProps & defineEmits

## useImperativeHandle -> defineExpose

## vue3 additional reactive utils

# 对vue3的思考

## 大部分刻板印象中的vue开发者常见的误区

## 一些个人认为比较好的编码实践

# 总结
