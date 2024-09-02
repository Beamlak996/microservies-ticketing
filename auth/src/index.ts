import express, { NextFunction, Request, Response } from "express"
import { router } from "./routes/routes"
import { ErrorMiddleware } from "./middleware/error-middleware"
import { connect } from "./utils/connect"

const app = express()

app.use(express.json())


const startServer = async () => {
  try {
    await connect();
    app.listen(3000, () => {
      console.log("Listening to port 3000!!!!!!");
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();

app.use("/api/users", router)


// unknown routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} not found`) as any;
  error.statusCode = 404;
  next(error);
});

app.use(ErrorMiddleware);



