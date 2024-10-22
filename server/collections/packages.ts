// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const Packages: CollectionConfig = {
  slug: "packages",
  admin: {useAsTitle: "title"},
  labels: {singular: "Package", plural: "Packages"},
  fields: [
    {
      label: "Title",
      name: "title",
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
      label: "Airline",
      name: "airline",
      type: "relationship",
      relationTo: "airlines",
      required: true
    },
    {
      label: "Departing From",
      name: "departing_from",
      type: "select",
      required: true,
      options: [
        {value: "cape_town", label: "Cape Town"},
        {value: "johannesburg", label: "Johannesburg"}
      ]
    },
    {
      label: "Departing Dates",
      labels: {singular: "Departing Date", plural: "Departing Dates"},
      name: "departing_dates",
      type: "array",
      required: true,
      fields: [
        {
          label: "From",
          name: "departing_dates_from",
          type: "date",
          required: true
        },
        {
          label: "To",
          name: "departing_dates_to",
          type: "date",
          required: true
        }
      ]
    },
    {
      label: "Makkah Accommodation",
      name: "makkah_accommodation",
      type: "group",
      fields: [
        {
          label: "Hotel",
          name: "makkah_accommodation_hotel",
          type: "relationship",
          relationTo: "hotels",
          required: true,
          filterOptions: {
            city: {
              equals: "makkah"
            }
          }
        },
        {
          label: "Duration (Nights)",
          name: "makkah_accommodation_duration",
          type: "number",
          required: true
        }
      ]
    },
    {
      label: "Medina Accommodation",
      name: "medina_accommodation",
      type: "group",
      fields: [
        {
          label: "Hotel",
          name: "median_accommodation_hotel",
          type: "relationship",
          relationTo: "hotels",
          required: true,
          filterOptions: {
            city: {
              equals: "medina"
            }
          }
        },
        {
          label: "Duration (Nights)",
          name: "median_accommodation_duration",
          type: "number",
          required: true
        }
      ]
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      required: true
    },
    {
      label: "Including VISA",
      name: "including_visa",
      type: "checkbox",
      defaultValue: true,
      required: true
    }
  ]
}

export default Packages
