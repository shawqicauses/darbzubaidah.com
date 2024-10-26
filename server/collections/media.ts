// DONE REVIEWING: GITHUB COMMIT - 02
import {CollectionConfig} from "payload/types"
import {isAdmin, isAnyone} from "../../lib/payload/access"
import {isHidden} from "../../lib/payload/admin"

const Media: CollectionConfig = {
  slug: "media",
  admin: {hidden: isHidden},
  access: {read: isAnyone, create: isAdmin, update: isAdmin, delete: isAdmin},
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
