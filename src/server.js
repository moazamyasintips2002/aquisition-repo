import app from './app.js';

// Fixed: changed 'Process' to lowercase 'process'
const port = process.env.PORT || 3000;

// Fixed: added '});' at the end to properly close the function
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
