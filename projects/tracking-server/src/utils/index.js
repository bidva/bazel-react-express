/* eslint-disable import/prefer-default-export */

export function unless(paths, middleware) {
  return (req, res, next) => {
    if (paths.includes(req.originalUrl)) {
      return next();
    }
    return middleware(req, res, next);
  };
}
