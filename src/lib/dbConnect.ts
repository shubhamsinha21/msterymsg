import mongoose from "mongoose";

// database connection ke baad value aa raha uska, data type kya h -> lets use typescript

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

// database connection
// dusre jgah hai or fail v ho skta -> use async

//  we dont care data kis trah ka hai
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  // here the case of not connected + using await as database in another continent
  //   case - connection
  // case -2 - no connnection denoted by a empty string
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || " ", {});
    // console.log(db);
    // db.connection provides an array by default
    // ready state
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected Success");
  } catch (error) {
    console.log("Database Connection failed", error);
    // exit the process
    process.exit(1);
  }
}

export default dbConnect;
