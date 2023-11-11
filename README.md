# jobify

A job tracking MERN application.

- Where user can register, login, and update account
- Then user can create job applications, and keep track of them, and only that user who can see, or modify the job using JWT

### Getting Started

1. **Clone the Repository:**

   - Clone the Jobify repository to your local machine using the following command:
     ```bash
     git clone https://github.com/edriso/jobify.git
     ```

2. **Configure Environment Variables:**

   - Rename the `.env.example` file to `.env` and fill in the required variables according to your configuration.

3. **Setup the Application:**

   - **Development Mode:**
     - Navigate to the project directory and set up the application dependencies using the provided setup script:
       ```bash
       cd jobify
       npm run setup-app
       ```
   - **Production Mode:**
     - Set up and build the application for production by running:
     ```bash
     npm run build-app-production
     ```

4. **Start the Application:**
   - **Development Mode:**
     - Launch the application in development mode:
       ```bash
       npm run dev
       ```
   - **Production Mode:**
     - To start the application in production, run:
       ```bash
       npm start
       ```

Now, Jobify is up and running on your local machine! Visit the specified localhost address in your browser to access the application.

#### Technologies and Packages Used

- Node.js, Express.js
- MongoDB, Mongoose
- React.js
- styled-components
- react-toastify
- recharts
- axios
- react-query (v4)
- jsonwebtoken (JWT)
- cookie-parser, to access cookies
- express-validator, to make validation layers
- bcryptjs, for hashing passwords
- express-async-errors, for async errors handling
- concurrently, to run multiple commands concurrently
- Connect client and server using Proxy - solves CORS problem -
- multer, for image uploads
- datauri
- cloudinary
- dayjs
- morgan
- security packages (helmet, express-mongo-sanitize, express-rate-limit)

#### Takeaways and Useful Resources

- [favicon generator](https://favicon.io/)
- [illustration images](https://undraw.co/)
- [hipster ipsum](https://hipsum.co/)
- [keys generator](https://randomkeygen.com/)
- [react icons package](https://react-icons.github.io/react-icons/)
- In mongoose, when using the pre hook for saving user for example; be aware when updating the user as using findOneAndUpdate will NOT trigger that hook, instead use user.save() for updating to trigger it.
- <details>
    <summary>In react, Why styledWrappers folder is not containing index.js that exports its files like in components or pages folders?
    </summary>

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

    </details>

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

  - <details>
      <summary>Proxy?</summary>

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
    </details>

  - <details>
      <summary>inputs in react: value vs defaultValue?</summary>

    In React, `value` and `defaultValue` are two different props used in form elements like input fields.

    - **`value`**: The `value` prop is used for controlled components. A controlled component is a component that maintains its own state in React state and is updated via props. When you use the `value` prop, the input field's value is controlled by React state. Changes to the input field are handled through state and React re-renders the component whenever the state changes. You use an `onChange` event handler to update the state when the input value changes.

      Example of a controlled component:

      ```jsx
      const [inputValue, setInputValue] = useState('');

      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      return (
        <input type="text" value={inputValue} onChange={handleInputChange} />
      );
      ```

    - **`defaultValue`**: The `defaultValue` prop is used for uncontrolled components. An uncontrolled component does not store its state in React state. Instead, the DOM itself keeps track of the input field's value. You use the `defaultValue` prop to set the initial value of the input field. After the initial render, React does not control the input field, and any changes made directly to the DOM (e.g., by user input) will not trigger a re-render of the component.

      Example of an uncontrolled component:

      ```jsx
      return <input type="text" defaultValue="Initial Value" />;
      ```

    In summary, use `value` for controlled components where React manages the input state, and use `defaultValue` for uncontrolled components where the DOM handles the input state. Choose the appropriate one based on your specific use case and whether you need to handle the input state through React or directly manipulate the DOM.
    </details>

  - When sending a file to your server, such as when uploading a user avatar, ensure to include the `encType="multipart/form-data"` property in your form element. This is crucial for allowing the correct transmission of files from the client to the server. It indicates that the form will be used to upload binary data, such as files. Keep in mind that files are not sent as JSON data but as binary data, and `multipart/form-data` is the appropriate content type for handling file uploads.

  - When using platforms like Heroku or other cloud hosting services, files stored in the server's local filesystem might be deleted when the server restarts or goes to sleep due to the stateless nature of these platforms. It's always recommended to use cloud storage solutions like Amazon S3, Google Cloud Storage, or similar services to store files persistently, especially if you are hosting your application on platforms like Heroku or Render. These cloud storage solutions provide reliable and persistent storage for files, ensuring they are not lost even if the server restarts or goes to sleep.

  - [React Query](https://tanstack.com/query/v4/docs/react/overview) is a powerful library that simplifies data fetching, caching, and synchronization in React applications. It provides a declarative and intuitive way to manage remote data by abstracting away the complex logic of fetching and caching data from APIs. React Query offers features like automatic background data refetching, optimistic updates, pagination support, and more, making it easier to build performant and responsive applications that rely on fetching and manipulating data.

  - We primarily employed react-query for query caching. However, we identified an issue when logging out and then logging in with a different user—the data from the previous user was cached. The same problem occurred when updating user information in the profile page. To address this, we implemented query invalidation in three key locations: the Login page, when logging out in the DashboardLayout, and in the Profile when updating information before displaying the success toast.
    Additionally, it's important to note that `queryClient.invalidateQueries()` invalidates all queries, while `queryClient.invalidateQueries(['user'])` specifically invalidates the 'user' query.

  - Pay attention to how Axios interceptors are implemented in the DashboardLayout page, providing an automatic logout mechanism in case of errors (such as attempting a request after the expiration of cookies).

  - Package **helmet**: It's a security package for Express.js applications that helps protect them by setting various HTTP headers to enhance security, prevent common web vulnerabilities, and improve overall application security posture. Need: The package is needed to safeguard web applications from potential security threats, such as cross-site scripting (XSS) attacks, clickjacking, and other security exploits.

  - Package **express-mongo-sanitize**: It's a middleware for Express.js that sanitizes user-supplied data coming from request parameters, body, and query strings to prevent potential NoSQL injection attacks on MongoDB databases. Need: The package addresses the need to protect MongoDB databases from malicious attempts to manipulate data and helps ensure the integrity of data storage and retrieval.

  - Package **express-rate-limit**: It's an Express.js middleware that helps control and limit the rate of incoming requests from a specific IP address or a set of IP addresses to protect the server from abuse, brute-force attacks, and potential denial-of-service (DoS) attacks. Need: This package is necessary to manage and regulate the number of requests made to the server within a given time frame, preventing excessive usage and improving the overall stability and performance of the application.
    - The rate limiter starts its time limit window from the time of the first request. Each subsequent request within that 15-minute period contributes to the count. If the number of requests exceeds the specified limit (15 in your case) within that window, any additional requests will be blocked until the start of the next 15-minute window. Once the 15-minute window elapses, the count is reset, and the process starts again with the next incoming request.
    - It's stored in the memory of your Node.js process. Each time your server restarts, the memory is cleared, and the rate limiter starts fresh.
    - If you need to persist the rate limiting information across server restarts or if you have multiple server instances (for example, in a clustered environment), you would typically use an external storage mechanism, such as a database or a distributed cache, to store and share the rate-limiting information across all instances of your server. This ensures that the rate limiting is consistent and shared among all server instances. However, keep in mind that using an external storage mechanism introduces additional complexity and potential latency.
