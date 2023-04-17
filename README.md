# jobify

A job tracking MERN stack application, and using styled-components for CSS.

#### Useful Resources

[favicon generator](https://favicon.io/)
[illustrations](https://undraw.co/)
[hipster ipsum](https://hipsum.co/)

#### Notes

- Why styledWrappers folder not containing index.js that exports its files? Because a component or a page might import only 1 styledWrapper. And it usually imports many components so a better approach to not having many components imports is to have an index.js file that imports all the other components.
