// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const Users: CollectionConfig = {
  slug: "users",
  admin: {useAsTitle: "email"},
  access: {create: () => true, read: () => true},
  auth: {
    verify: {
      generateEmailHTML({token}) {
        return `Verify your email: <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/email-verification/${token}">Click here</a>`
      }
    }
  },
  labels: {singular: "User", plural: "Users"},
  fields: [
    {
      label: "First Name",
      name: "first_name",
      type: "text",
      required: true
    },
    {
      label: "Last Name",
      name: "last_name",
      type: "text",
      required: true
    },
    {
      label: "Date of Birth",
      name: "date_of_birth",
      type: "date",
      required: true
    },
    {
      label: "Nationality",
      name: "nationality",
      type: "text",
      required: true
    },
    {
      label: "Passport Number",
      name: "passport_number",
      type: "number",
      required: true
    },
    {
      label: "Role",
      name: "role",
      type: "select",
      defaultValue: "user",
      required: true,
      options: [
        {value: "admin", label: "Admin"},
        {value: "user", label: "User"}
      ]
    }
  ]
}

export default Users
