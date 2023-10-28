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

   Launch Jobify application on development by running the following command:

   ```bash
   npm run dev
   ```

Now, you have Jobify up and running on your local machine! Visit the specified localhost address in your browser to access the application.

#### Technologies and Packages Used

- Node.js, Express.js
- MongoDB, Mongoose
- React.js
- styled-components
- react-toastify
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
- **Proxy Configuration in `vite.config.js` File:**

  ```javascript
  export default defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: `http://localhost:${process.env.PORT || 5000}/api/v1`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
  ```

  A **proxy** acts as an intermediary between a client (e.g., a frontend application) and a server (e.g., a backend API). In this configuration, we are using a proxy in the `vite.config.js` file to reroute requests made to paths starting with `/api` to a different server address. Specifically:

  - **`'/api'`**: Any request path starting with `/api` will be intercepted.

  - **`target`**: Requests matching the `/api` prefix are sent to `http://localhost:${process.env.PORT || 5000}/api/v1`, which is the target server's address.

  - **`changeOrigin: true`**: This property modifies the request's `Origin` header, ensuring the target server recognizes the request's origin correctly.

  - **`rewrite: (path) => path.replace(/^\/api/, '')`**: Rewrites the request path, removing the `/api` prefix before forwarding the request to the target server.

  **Why Use a Proxy:**

  Proxies are useful for several reasons:

  1. **CORS (Cross-Origin Resource Sharing) Issues**: Proxies can resolve CORS problems by allowing requests from different origins to access resources on the server.

  2. **Security**: Proxies can protect sensitive backend APIs by hiding their direct URLs from the client-side code, adding an extra layer of security.

  3. **Simplifying Development**: During development, frontend and backend might run on different ports or domains. A proxy allows developers to work seamlessly without worrying about CORS restrictions.

  4. **URL Rewriting and Routing**: Proxies can rewrite request URLs, enabling clean and organized routing on the frontend while handling complex backend routes behind the scenes.

  **Development vs. Production:**

  It's important to note that this proxy configuration is primarily used during development. In a production environment, the frontend and backend are typically hosted on the same server, and the need for a proxy is usually eliminated. The proxy helps simplify development, making it easier to work with different ports or domains, while in production, the frontend and backend can coexist on the same server.
