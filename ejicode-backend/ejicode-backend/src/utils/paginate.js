/**
 * Build Mongoose pagination options from query params.
 * Usage: const { skip, limit, page } = paginate(req.query);
 */
const paginate = ({ page = 1, limit = 10 }) => {
  const p = Math.max(1, Number(page));
  const l = Math.min(100, Math.max(1, Number(limit)));
  return { page: p, limit: l, skip: (p - 1) * l };
};

module.exports = paginate;
