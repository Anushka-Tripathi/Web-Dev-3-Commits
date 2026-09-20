const isAuthorized = (req, res, next) => {
  let token = req.headers.cookie;
  if ((!token) || (token != 123987)) {  
    return res.status(401).send("Unauthorized");
  }
  next();
};

const isLoggedIn = (req, res, next) => {
    let login = true; // This is just a placeholder. In a real application, you would check the user's session or authentication status.
    if (!login) {
        return res.status(401).send("Unauthorized");
    }
    next();
};

module.exports = { isAuthorized, isLoggedIn };