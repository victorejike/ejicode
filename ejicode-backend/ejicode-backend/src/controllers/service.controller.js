const Service     = require("../models/Service");
const ApiResponse = require("../utils/ApiResponse");
const ApiError    = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

exports.getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ isActive: true }).sort("order");
  ApiResponse.success(res, services);
});

exports.createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  ApiResponse.created(res, service);
});

exports.updateService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!service) throw new ApiError("Service not found.", 404);
  ApiResponse.success(res, service, "Service updated.");
});

exports.deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) throw new ApiError("Service not found.", 404);
  ApiResponse.success(res, {}, "Service deleted.");
});
