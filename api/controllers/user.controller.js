const User = require('../models/user.model');


async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getAllUsers(req, res) {

  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.deleteOne({_id: req.params.id})
    if (user) {
      return res.status(200).send("User removed successfully");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function updateUser(req, res) {
  try {


    const { nModified } = await User.updateOne({_id: req.params.id}, req.body);

    if (nModified !== 0) {
      const user = await User.findById(req.params.id);
      return res
        .status(200)
        .json({ message: "User updated successfully", user: user });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function selfDelete(req, res) {
  try {
    const userLogged = res.locals.user;
    if (!userLogged) {
      return res.status(500).send("User does not exist");
    }
    await User.deleteOne({ _id: userLogged.id,});
    res.send(200).send("Your account has been deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function selfUpdate(req, res) {
  try {
    const userLogged = res.locals.user;
    await User.updateUser.updateOne({ _id: userLogged }, req.body);
    res.status(200).send("User succesfully updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getUserLogged(req, res) {
  try {
    const userLogged = res.locals.user;
    res.status(200).json(userLogged);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  getOneUser,
  deleteUser,
  selfDelete,
  selfUpdate,
  getUserLogged,
};