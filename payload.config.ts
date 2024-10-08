// DONE REVIEWING: GITHUB COMMIT - 01
import {viteBundler} from "@payloadcms/bundler-vite"
import {mongooseAdapter} from "@payloadcms/db-mongodb"
import {lexicalEditor} from "@payloadcms/richtext-lexical"
import dotenv from "dotenv"
import path from "path"
import {buildConfig} from "payload/config"
import Users from "./server/collections/users"

dotenv.config({path: path.resolve(__dirname, ".env")})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  admin: {bundler: viteBundler(), user: "users"},
  db: mongooseAdapter({url: process.env.DATABASE_URL || ""}),
  typescript: {outputFile: path.resolve(__dirname, "payload-types.ts")},
  editor: lexicalEditor({}),
  routes: {admin: "/dashboard"},
  collections: [Users]
})
