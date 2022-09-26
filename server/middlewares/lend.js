const LendModel = require("../models/LendModel");

const lendGetItems = async (req, res) => {
  const queryObj = { ...req.query };

  const excludedFields = ["_sort", "_order"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let data;
  if (req.query._sort != undefined && req.query._order != undefined) {
    if (req.query._order == "asc") {
      data = await LendModel.find(queryObj).sort(req.query._sort);
      res.send(data);
    } else {
      data = await LendModel.find(queryObj).sort(`-${req.query._sort}`);
      res.send(data);
    }
    return;
  } else {
    data = await LendModel.find(queryObj);
    res.send(data);
    return;
  }
};
module.exports = { lendGetItems };
