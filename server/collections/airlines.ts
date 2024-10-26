// DONE REVIEWING: GITHUB COMMIT - 01
import {CollectionConfig} from "payload/types"
import {isAdmin, isAnyone} from "../../lib/payload/access"
import {isHidden} from "../../lib/payload/admin"

const Airlines: CollectionConfig = {
  slug: "airlines",
  admin: {hidden: isHidden, useAsTitle: "name"},
  access: {read: isAnyone, create: isAdmin, update: isAdmin, delete: isAdmin},
  labels: {singular: "Airline", plural: "Airlines"},
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true
    }
  ]
}

export default Airlines
