// DONE REVIEWING: GITHUB COMMIT
import {FieldHook} from "payload/types"
import {Order} from "../../payload-types"

export const populateOrderedBy: FieldHook<Order> = function populateOrderedBy({
  operation,
  req,
  value
}) {
  if ((operation === "create" || operation === "update") && !value) return req.user.id

  return value
}

export default {populateOrderedBy}
