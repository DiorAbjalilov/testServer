const consoleLog = async (req, res) => {
  try {
    console.log(req.query);
    res.status(200).json({
      message: "success",
      data: req.query,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  consoleLog,
};
