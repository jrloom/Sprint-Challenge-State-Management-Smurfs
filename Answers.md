1. What problem does the context API help solve?
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
5. What is your favorite state management system you've learned and this sprint? Please explain why!

1. The Context API allows us to share values across many components without prop drilling.

2. Actions are objects that send data from the application to the store, describing what happened.
Reducers are pure functions that determine updates to state based on the actions sent to the store.
The store is an object that stores the state of the entire application. It is read only, and only an action can update it.

3. Application state is accessed by the entire application. Component state is accessed by a single component within the application.
Use component state if only that component needs access to it. Use application state if the entire application needs access to it.

4. Redux is synchronous, but `redux-thunk` allows Redux to operate asynchronously. Action creators can be written to return a thunk - a function returned by another function. That allows, for instance, our application to continue to work while waiting on a response from an API call.

5. So far, I like Redux because it seems more explicit in what it's doing. I can see all of the parts, piece them together, trace along the data flow to find where a problem happened. Little objects updating a single, giant object via pure functions is a bit more...grasp-able. On the other hand, I don't mind the useReducer hook, or the context API. Similar to classes vs. hooks - I think I like classes better because they're more explicit, but I'll use hooks as well.
