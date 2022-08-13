const consoleLog = async (req, res) => {
  try {
    console.log(req.query);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  consoleLog,
};
