const { buildSchema } = require("graphql");

module.exports=buildSchema(` 
    type Task{
    id:ID!
    title:String!
    description:String!
    completed:Boolean
    }
    type Query{
    tasks:[Task!]
    task(id:ID!):Task
    }
    
    `);