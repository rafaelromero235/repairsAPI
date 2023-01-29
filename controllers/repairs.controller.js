const Repairs = require('../models/reapairs.model');

const findDates = async (req, res) => {
  try {
    const date = await Repairs.findAll({
      where: {
        status: 'pending',
      },
    });
    return res.status(200).json({
      status: 'sucess',
      message: 'dates found',
      date,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const findate = async (req, res) => {
  try {
    const { id } = req.params;
    const date = await Repairs.findOne({
      where: {
        id: id,
        status: 'pending',
      },
    });
    if (date === null) {
      return res.status(404).json({
        status: 'error',
        message: 'not found',
      });
    }
    return res.status(200).json({
      status: 'sucess',
      message: 'found',
      date,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const createDate = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const createdDate = await Repairs.create({
      date,
      userId,
    });
    return res.status(200).json({
      status: 'sucess',
      message: 'date created sucessfully',
      createdDate,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const updateDate = async (req, res) => {
  try {
    const { id } = req.params;
    const date = await Repairs.findOne({
      where: {
        id: id,
        status: 'pending',
      },
    });
    if (date === null) {
      return res.status(404).json({
        status: 'error',
        message: 'not found',
      });
    }
    const dateUpdated = await date.update({
      status: 'completed',
    });

    return res.status(200).json({
      status: 'sucess',
      message: 'date updated',
      dateUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

const deleteDate = async (req, res) => {
  try {
    const { id } = req.params;
    const date = await Repairs.findOne({
      where: {
        id: id,
        status: 'pending',
      },
    });
    if (date === null) {
      return res.status(200).json({
        status: 'error',
        message: 'not found',
      });
    }
    const dateCanceled = await date.update({
      status: 'canceled',
    });
    return res.status(200).json({
      status: 'sucees',
      message: 'date canceled',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
};

module.exports = { findDates, findate, createDate, updateDate, deleteDate };
