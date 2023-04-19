# jobify

A job tracking MERN application.

#### Technologies and packages I used

- Node.js, Express.js
- MongoDB, Mongoose
- React.js
- styled-components
- JWT
- validator, to validate inputs like email
- bcryptjs, for hashing passwords
- express-async-errors, for errors handling

<!-- #### To setup the project locally

- Run -->

##### Takeaways and useful resources

- [favicon generator](https://favicon.io/)
- [illustration images](https://undraw.co/)
- [hipster ipsum](https://hipsum.co/)
- In client(frontend folder), Why styledWrappers folder is not containing index.js that exports its files like in components or pages folders?
  - Because a component or a page might import only 1 styledWrapper, while it usually imports many components. So, a better approach to not having many lines of import components, is to have an index.js file that imports all the other components.
  - So, instead of writing:
    ```javascript
    import component1 from './components/component1';
    import component2 from './components/component2';
    import component3 from './components/component3';
    ```
    we simply write:
    ```javascript
    import { component1, component2, component3 } from './components';
    ```
