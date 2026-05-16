const Project     = require("../models/Project");
const ApiResponse = require("../utils/ApiResponse");
const ApiError    = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const paginate    = require("../utils/paginate");
const uploadToCloud = require("../utils/uploadToCloud");

// GET /projects
exports.getProjects = asyncHandler(async (req, res) => {
  const { page, limit, skip } = paginate(req.query);
  const filter = { isPublished: true };
  if (req.query.status) filter.status = req.query.status;
  if (req.query.tag)    filter.tags   = req.query.tag;

  const [projects, total] = await Promise.all([
    Project.find(filter).populate("client","name email").sort("-createdAt").skip(skip).limit(limit),
    Project.countDocuments(filter),
  ]);
  ApiResponse.paginated(res, projects, { total, page, limit, pages: Math.ceil(total / limit) });
});

// GET /projects/:id
exports.getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id).populate("client","name email");
  if (!project) throw new ApiError("Project not found.", 404);
  ApiResponse.success(res, project);
});

// POST /projects  (admin)
exports.createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  ApiResponse.created(res, project, "Project created.");
});

// PATCH /projects/:id  (admin)
exports.updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!project) throw new ApiError("Project not found.", 404);
  ApiResponse.success(res, project, "Project updated.");
});

// POST /projects/:id/cover  (admin)
exports.uploadCover = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError("No file uploaded.", 400);
  const result  = await uploadToCloud(req.file.buffer, "ejicode/projects");
  const project = await Project.findByIdAndUpdate(req.params.id, { coverImage: result.secure_url }, { new: true });
  ApiResponse.success(res, { coverImage: project.coverImage }, "Cover uploaded.");
});

// DELETE /projects/:id  (admin)
exports.deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) throw new ApiError("Project not found.", 404);
  ApiResponse.success(res, {}, "Project deleted.");
});
