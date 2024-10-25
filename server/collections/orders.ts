// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const Orders: CollectionConfig = {
  slug: "orders",
  labels: {singular: "Order", plural: "Orders"},
  fields: [
    {
      label: "User",
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true
    },
    {
      label: "Package",
      name: "package",
      type: "relationship",
      relationTo: "packages",
      hasMany: false,
      required: false
    },
    {
      label: "Type",
      name: "type",
      type: "select",
      required: true,
      options: [
        {value: "existing", label: "Existing Package"},
        {value: "custom", label: "Custom Package"}
      ]
    },
    {
      label: "Number of Passengers",
      name: "passengers_number",
      type: "number",
      min: 1,
      required: true
    },
    {
      label: "Airline",
      name: "airline",
      type: "relationship",
      relationTo: "airlines",
      hasMany: false,
      required: true
    },
    {
      label: "Makkah Hotel",
      name: "makkah_hotel",
      type: "relationship",
      relationTo: "hotels",
      hasMany: false,
      required: true,
      filterOptions: {
        city: {
          equals: "makkah"
        }
      }
    },
    {
      label: "Medina Hotel",
      name: "medina_hotel",
      type: "relationship",
      relationTo: "hotels",
      hasMany: false,
      required: true,
      filterOptions: {
        city: {
          equals: "medina"
        }
      }
    }
  ]
}

export default Orders
