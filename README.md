# jobify

A job tracking MERN application.

- Where user can register, login, and update account
- Then user can create job applications, and keep track of them, and only that user who can see, or modify the job using JWT

#### Technologies and packages I used

- Node.js, Express.js
- MongoDB, Mongoose
- React.js
- styled-components
- jsonwebtoken (JWT)
- validator, to validate inputs like email
- bcryptjs, for hashing passwords
- express-async-errors, for errors handling
- concurrently, to run multiple commands concurrently
- Connect client and server using Proxy - solves CORS problem -
- axios
- morgan

<!-- #### To setup the project locally

- Run -->

##### Takeaways and useful resources

- [favicon generator](https://favicon.io/)
- [illustration images](https://undraw.co/)
- [hipster ipsum](https://hipsum.co/)
- [keys generator](https://www.allkeysgenerator.com/)
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
- In mongoose, when using the pre hook for saving user for example; be aware when updating the user as using findOneAndUpdate will NOT trigger that hook, instead use user.save() for updating to trigger it.
