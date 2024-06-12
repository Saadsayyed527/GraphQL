const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const taskSchema = require('./schemas/taskSchema');
const taskResolver = require('./resolvers/taskResolver');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api', taskRoutes);

app.use('/graphql', graphqlHTTP({
  schema: taskSchema,
  rootValue: taskResolver,
  graphiql: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
