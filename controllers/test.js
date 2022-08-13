const consoleLog = async (req, res) => {
  try {
    // console.log(req.query);
    res.status(200).json({
      message: "success",
      data: "test",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error" });
  }
};

module.exports = {
  consoleLog,
};
