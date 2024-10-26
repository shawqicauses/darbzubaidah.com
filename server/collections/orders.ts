// DONE REVIEWING: GITHUB COMMIT - 02
import {CollectionConfig} from "payload/types"
import {
  isAdmin,
  isAdminOrSignedIn,
  isAdminOrUser,
  isAdminOrUserField,
  isUserField,
  isWebsiteOnly
} from "../../lib/payload/access"

const Orders: CollectionConfig = {
  slug: "orders",
  labels: {singular: "Order", plural: "Orders"},
  access: {
    read: isAdminOrUser,
    create: ({req}) => isWebsiteOnly(isAdminOrSignedIn)({req}),
    update: isAdmin,
    delete: isAdmin
  },
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
    },
    {
      label: "Quote",
      name: "quote",
      type: "array",
      maxRows: 1,
      fields: [
        {
          label: "Costs",
          labels: {singular: "Cost", plural: "Costs"},
          name: "costs",
          type: "array",
          required: true,
          fields: [
            {
              label: "Description",
              name: "cost_description",
              type: "text",
              required: true
            },
            {
              label: "Amount",
              name: "cost_amount",
              type: "number",
              required: true
            },
            {
              label: "Per Passenger",
              name: "cost_per_passenger",
              type: "checkbox",
              defaultValue: false,
              required: true
            }
          ],
          access: {
            update: isAdmin
          }
        },
        {
          label: "Response",
          name: "response",
          type: "select",
          defaultValue: "accepted",
          required: true,
          options: [
            {value: "accepted", label: "Accepted"},
            {value: "rejected", label: "Rejected"}
          ],
          access: {
            update: isUserField
          }
        }
      ],
      access: {
        create: isAdmin,
        update: isAdminOrUserField
      }
    }
  ]
}

export default Orders
