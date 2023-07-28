import express from "express";
import mysqli from "mysql2";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

let data = null;
const connection = mysqli.createConnection({
  host: "localhost",
  user: "root",
  password: "21022003ducanh",
  database: "foodorder",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected to database ");
});
export const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM  foodorder.orders", (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log(results);
        resolve(results); // Pass the results to resolve
      }
    });
  });
};

export const fetchMenu = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM foodorder.fooditems ", (err, results) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(results);
        resolve(results); // Pass the results to resolve
      }
    });
  });
};

app.get("/orders", async (req, res) => {
  try {
    data = await fetchOrders();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/menu", async (req, res) => {
  try {
    const data = await fetchMenu();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
