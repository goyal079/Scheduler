import jwt from "jsonwebtoken";
import config from "config";
import AES from "crypto-js/aes.js";
function generateToken(id) {
  let token = jwt.sign(
    {
      _id: id,
    },
    config.get("jwtkey"),
    { expiresIn: "1h" }
  );
  return AES.encrypt(token, config.get("aeskey")).toString();
}
export default generateToken;
