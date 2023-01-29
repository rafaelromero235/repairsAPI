const User = require('../models/users.model');

const findusers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });
    return res.status(200).json({
      status: 'succes',
      message: 'users found ',
      users,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const finduser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id: id,
        status: 'available',
      },
    });
    if (user === null) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found',
      });
    }
    return res.status(200).json({
      status: 'sucess',
      mesage: 'user found',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const usercreated = await User.create({
      name,
      email,
      password,
      role,
    });
    return res.status(201).json({
      status: 'sucess',
      message: 'user created',
      usercreated,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    const user = await User.findOne({
      where: {
        id: id,
        status: 'available',
      },
    });
    if (user === null) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found',
      });
    }
    const userUpdated = await user.update({
      name,
      email,
      password,
      role,
    });

    return res.status(200).json({
      status: 'sucess',
      message: 'user update sucessfully',
      userUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id: id,
        status: 'available',
      },
    });

    if (user === null) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found',
      });
    }

    const userDeleted = await user.update({
      status: 'not available',
    });
    return res.status(200).json({
      status: 'sucess',
      message: 'user deleted',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

module.exports = { findusers, finduser, createUser, updateUser, deleteUser };
