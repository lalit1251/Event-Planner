export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) {
      const error = new Error("User Not Found !! Login Again");
      error.statusCode = 401;
      return next(error);
    }

    res
      .status(200)
      .json({
        message: `Welcome back ${currentUser.fullName}`,
        data: currentUser,
      });
  } catch (error) {
    next(error);
  }
};