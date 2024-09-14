// DONE REVIEWING: GITHUB COMMIT
import dotenv from "dotenv"
import path from "path"
import {buildConfig} from "payload/config"
import {viteBundler} from "@payloadcms/bundler-vite"
import {mongooseAdapter} from "@payloadcms/db-mongodb"
import {lexicalEditor} from "@payloadcms/richtext-lexical"

dotenv.config({path: path.resolve(__dirname, ".env")})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  admin: {bundler: viteBundler()},
  db: mongooseAdapter({url: process.env.DATABASE_URL || ""}),
  typescript: {outputFile: path.resolve(__dirname, "payload-types.ts")},
  editor: lexicalEditor({}),
  routes: {admin: "/dashboard"},
  collections: []
})
