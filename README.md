# Global listener patterns in React

This is a demonstration repo for a blog post: [https://advancedweb.hu/2016/01/05/global-listener-patterns-in-react/](https://advancedweb.hu/2016/01/05/global-listener-patterns-in-react/)

There are a few patterns you can use when managing listeners outside the component's scope. In this post and repository,
I'll introduce three of them.

### Errors

[Live demo](http://sashee.github.io/global-listener-patterns-react/dist/errors.html)

This demonstrates what happens when you fail to remove a global listener:

* It could leak both memory and cpu. This can easily happen if you add a guard expression that evaluates to false. Then it's quite hard to spot it.
* It can call _setState_, which is a no-op for an unmounted component. Luckily React emits a warning in this case, so it's easy to spot.
* It can call methods that were previously passed to the component. This easily manifests as bugs and somewhat hard to spot.

### DidMount/WillUnmount

[Live demo](http://sashee.github.io/global-listener-patterns-react/dist/didmount.html)

This demonstrates the usage of DidMount/WillUnmount lifecycle callback to properly attach/remove the listener.

### DidUpdate

[Live demo](http://sashee.github.io/global-listener-patterns-react/dist/didupdate.html)

This demonstrates the usage of the component state and the DidUpdate lifecycle callback to manage multiple listeners.

### Element

[Live demo](http://sashee.github.io/global-listener-patterns-react/dist/element.html)

This demonstrates the usage of a specialized React element that handles the registration/removal of the listener.
