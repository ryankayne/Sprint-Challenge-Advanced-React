- [ ] Why would you use class component over function components (removing hooks from the question)?

    If you need to hold something in state, or multiple things in state you would use class components. But, since the updates, aren't they kind of the same in terms of what you can do? So I guess you would want to know how to use them if you're updating old code, but I don't know what answer you're looking for specifically.

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount
    This is invoked right after a component is mounted. If you need to load data from somewhere else, you instantiate the network request here.

    componentDidUpdate
    This is invoked after updating occurs. This happens after a full render happens at least once. Used to compare data that has changed since the first render to see if it needs updating. 

    componentWillUnmount
    This is invoked right before a component is unmounted. This is where you tie up loose ends by canceling network requests and other things you created in componentDidMount.

- [ ] What is the purpose of a custom hook?

    A custom hook allows you to use other hooks inside it while retaining stateful logic that can be used throughout. 

- [ ] Why is it important to test our apps?

    So we know they work in the real world. You never want to deploy an app that has bugs in it. Plus, there are edge cases that may be more rare that would not be caught if you just tried normal interactions with your app. 