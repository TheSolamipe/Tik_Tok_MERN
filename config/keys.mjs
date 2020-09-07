//Using dotenv to manage ENV variables
import dotenv from "dotenv";
dotenv.config();

//assigning the MONGOURI for connecting mongoDB to a variable.
const mongo = process.env.MONGOURI;

const keys = {
  mongoURI: mongo,
  secretOrKey: "secret",
};

export default keys;
