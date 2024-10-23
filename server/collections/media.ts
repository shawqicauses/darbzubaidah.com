// DONE REVIEWING: GITHUB COMMIT - 01
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
        name: "thumbnail_mobile",
        width: 320,
        height: undefined,
        position: "centre"
      },
      {
        name: "thumbnail",
        width: 768,
        height: undefined,
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
