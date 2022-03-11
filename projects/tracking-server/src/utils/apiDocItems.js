/**
 * @apiDefine ValidationError
 *
 * @apiError {Number} code error code.
 * @apiError {String} message message.
 * @apiError {Object[]} errors list of errors.
 * @apiError {string} errors.field field name.
 * @apiError {string} errors.location location.
 * @apiError {String[]} errors.messages location.
 * @apiError {String[]} errors.types types.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "code": 400,
 *       "message": "ValidationError: \"field name\" is required.,
 *       errors": [
 *        {
 *           "message": "\"field name\" is required",
 *           "path": [
 *               "field name"
 *           ],
 *           "type": "any.required",
 *           "context": {
 *               "label": "name",
 *               "key": "name"
 *           }
 *        }
 *       ]
 *     }
 *
 */

/**
 * @apiDefine NotFoundError
 *
 * @apiError {Number} code status code.
 * @apiError {string} message message.
 * @apiError {string} stack stack trace.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code": 400,
 *       "message": "Item does not exist",
 *       "stack": "error stack"
 *     }
*/

/**
  * @apiDefine meta
  * @apiSuccess (200) {Object}  meta                Event Meta data
  * @apiSuccess (200) {String}  meta.id             Event Meta data Id
  * @apiSuccess (200) {String}  meta.type           Event Meta data type
  * @apiSuccess (200) {String}  meta.aggregate      Event Meta data aggregate
  * @apiSuccess (200) {Number}  meta.timestamp      Event Meta data timestamp
*/
