// DONE REVIEWING: GITHUB COMMIT - 01
import {CollectionConfig} from "payload/types"

const Hotels: CollectionConfig = {
  slug: "hotels",
  admin: {useAsTitle: "name"},
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
        {value: "medina", label: "Medina"},
        {value: "makkah", label: "Makkah"}
      ]
    },
    {
      label: "Price: From",
      name: "price_from",
      type: "number",
      required: true
    },
    {
      label: "Price: To",
      name: "price_to",
      type: "number",
      required: true
    },
    {
      label: "Availability",
      name: "availability",
      type: "radio",
      defaultValue: "true",
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
