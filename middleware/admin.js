export const admin = (req, res, next) => {
    //check JWT in header
    //check if user is admin -> next()
    //else -> return 401 Unauthorized
    if (req.headers.authorization === "admin-token") {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};