const Shipment = require("../models/shipment.model");
const User = require("../models/user.model");

async function createShipment(req, res) {
  try {
    const shipment = await Shipment.create(req.body);
    return res.status(200).json(shipment);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getAllShipments(req, res) {
  try {
    const shipment = await Shipment.find();
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneShipment(req, res) {
  try {
    const shipment = await Shipment.findById(req.params.id);
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteShipment(req, res) {
  try {
    const userLogged = res.locals.user;

    if (shipment) {
      return res.status(200).send("Shipment removed successfully");
    } else {
      return res.status(404).send("Shipment not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function updateShipment(req, res) {
  try {
    const { nModified } = await Shipment.updateOne(
      { _id: req.params.id },
      req.body
    );

    if (nModified !== 0) {
      const userLogged = await User.findById(req.params.id);
      return res
        .status(200)
        .json({ message: "Shipment updated successfully", shipment: shipment });
    } else {
      return res.status(404).send("Shipment not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function selfDelete(req, res) {
  try {
    const shipmentLogged = res.locals.shipment;
    if (!shipmentLogged) {
      return res.status(500).send("Shipment does not exist");
    }
    await Shipment.deleteOne({ _id: shipmentLogged.id });
    res.send(200).send("Your account has been deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function selfUpdate(req, res) {
  try {
    const shipmentLogged = res.locals.shipment;
    await Shipment.updateShipment.updateOne({ _id: shipmentLogged }, req.body);
    res.status(200).send("Shipment succesfully updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

//funcional

async function userDeleteShipment(req, res) {
  try {
    const userLogged = res.locals.user;
    const shipment = await Shipment.findById({ _id: req.params.id })
      .populate("user_id")
      .populate("carried_id")
      .populate("category_id");
      console.log(shipment.user_id._id.toString());
    if (userLogged.id === shipment.user_id._id.toString()) {
     await Shipment.deleteOne({ _id: req.params.id });
      if (shipment) {
        return res.status(200).send("Shipment removed successfully");
      } else {
        return res.status(404).send("Shipment not found");
      }
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function UserUpdateShipment(req, res) {
  try {
    const userLogged = res.locals.user;
    const shipment = await Shipment.findById({ _id: req.params.id })
      .populate("user_id")
      .populate("carried_id")
      .populate("category_id");
   
    if (userLogged.id === shipment.user_id._id.toString()) {
      const { nModified } = await Shipment.updateOne(
        { _id: req.params.id },
        req.body
      );
      const result = await Shipment.findById({ _id: req.params.id });
      if (nModified !== 0) {
        return res.status(200).json({
          message: "Shipment updated successfully",
          shipment: result,
        });
      } else {
        return res.status(404).send("Shipment not found");
      }
    } else return res.status(404).send("Shipment not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function userAddShipment(req, res) {
  try {
    req.body.user_id = res.locals.user;
    const shipment = await Shipment.create(req.body);
    res
      .status(200)
      .json({ message: "Shipment updated successfully", shipment: shipment });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getAllShipmentsByUserLogged(req, res) {
  try {
    const userLogged = res.locals.user;
    const shipment = await Shipment.find({ user_id: userLogged._id })
      .populate("user_id")
      .populate("carried_id")
      .populate("category_id");
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  createShipment,
  getAllShipments,
  updateShipment,
  getOneShipment,
  deleteShipment,
  selfDelete,
  selfUpdate,
  userAddShipment,
  getAllShipmentsByUserLogged,
  UserUpdateShipment,
  userDeleteShipment,
};
