# jobify

A job tracking MERN application.

- Where user can register, login, and update account
- Then user can create job applications, and keep track of them, and only that user who can see, or modify the job using JWT

### Getting Started with Jobify

1. **Clone the Repository:**

   Clone the Jobify repository to your local machine using the following command:

   ```bash
   git clone https://github.com/edriso/jobify.git
   ```

2. **Setup the Application:**

   Navigate to the project directory and set up the application dependencies using the provided setup script:

   ```bash
   cd jobify
   npm run setup
   ```

3. **Configure Environment Variables:**

   Rename the `.env.example` file to `.env` and fill in the required variables according to your configuration.

4. **Start the Application:**

   Launch Jobify application by running the following command:

   ```bash
   npm start
   ```

Now, you have Jobify up and running on your local machine! Visit the specified localhost address in your browser to access the application.

#### Technologies and Packages Used

- Node.js, Express.js
- MongoDB, Mongoose
- React.js
- styled-components
- jsonwebtoken (JWT)
- cookie-parser, to access cookies
- express-validator, to make validation layers
- bcryptjs, for hashing passwords
- express-async-errors, for async errors handling
- concurrently, to run multiple commands concurrently
- Connect client and server using Proxy - solves CORS problem -
- axios
- morgan

#### Takeaways and Useful Resources

- [favicon generator](https://favicon.io/)
- [illustration images](https://undraw.co/)
- [hipster ipsum](https://hipsum.co/)
- [keys generator](https://randomkeygen.com/)
- [react icons package](https://react-icons.github.io/react-icons/)
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
