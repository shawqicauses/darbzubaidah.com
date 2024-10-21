// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const Media: CollectionConfig = {
  slug: "media",
  labels: {singular: "Media", plural: "Media"},
  upload: {
    staticURL: "/media",
    staticDir: "public/media",
    mimeTypes: ["image/png", "image/jpg", "image/jpeg"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 768,
        height: 1024,
        position: "centre"
      },
      {
        name: "thumbnail_tablet",
        width: 1024,
        height: undefined,
        position: "centre"
      }
    ]
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true
    }
  ]
}

export default Media
