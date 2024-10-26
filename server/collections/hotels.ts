// DONE REVIEWING: GITHUB COMMIT - 05
import {CollectionConfig} from "payload/types"
import {isAdmin, isAnyone} from "../../lib/payload/access"
import {isHidden} from "../../lib/payload/admin"

const Hotels: CollectionConfig = {
  slug: "hotels",
  admin: {hidden: isHidden, useAsTitle: "name"},
  access: {read: isAnyone, create: isAdmin, update: isAdmin, delete: isAdmin},
  labels: {singular: "Hotel", plural: "Hotels"},
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
      required: true
    },
    {
      label: "City",
      name: "city",
      type: "select",
      required: true,
      options: [
        {value: "makkah", label: "Makkah"},
        {value: "medina", label: "Medina"}
      ]
    },
    {
      label: "Price",
      name: "price",
      type: "group",
      fields: [
        {
          label: "From",
          name: "price_from",
          type: "number",
          min: 1,
          required: true
        },
        {
          label: "To",
          name: "price_to",
          type: "number",
          min: 1,
          required: true
        }
      ]
    },
    {
      label: "Availability",
      name: "availability",
      type: "radio",
      defaultValue: "available",
      required: true,
      options: [
        {value: "not-available", label: "Not Available"},
        {value: "available", label: "Available"}
      ]
    },
    {
      label: "Images",
      name: "images",
      type: "array",
      required: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true
        }
      ]
    }
  ]
}

export default Hotels
