import jwt from "jsonwebtoken";
import "dotenv/config";
const authenticateJWT = (role) => {
  return (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
      return res.sendStatus(401);
    }

    try {
      const decodedToken = jwt.verify(
        token,
        role === "Employee"
          ? process.env.JWT_SECRET_E
          : process.env.JWT_SECRET_C
      );

      if (decodedToken.role !== role) {
        return res.sendStatus(403);
      }

      req.user = decodedToken;
      next();
    } catch (err) {
      return res.sendStatus(403);
    }
  };
};

export { authenticateJWT };
