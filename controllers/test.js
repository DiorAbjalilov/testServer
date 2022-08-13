const consoleLog = async (req, res) => {
  try {
    console.log(req.query);
    res.status(200).json({
      message: "success",
      data: "test",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  consoleLog,
};
