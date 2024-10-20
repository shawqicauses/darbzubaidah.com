// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const Airlines: CollectionConfig = {
  slug: "airlines",
  admin: {useAsTitle: "name"},
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
