// DONE REVIEWING: GITHUB COMMIT - 02
import {CollectionConfig} from "payload/types"
import {isAdmin, isAdminOrUser, isAnyone} from "../../lib/payload/access"
import {isHidden} from "../../lib/payload/admin"

const Users: CollectionConfig = {
  slug: "users",
  admin: {hidden: isHidden, useAsTitle: "email"},
  auth: {
    verify: {
      generateEmailHTML({token}) {
        return `Verify your email: <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/email-verification/${token}">Click here</a>`
      }
    }
  },
  access: {
    read: isAdminOrUser,
    create: isAnyone,
    update: isAdminOrUser,
    delete: isAdmin
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
      required: true,
      access: {update: isAdmin}
    },
    {
      label: "Nationality",
      name: "nationality",
      type: "text",
      required: true,
      access: {update: isAdmin}
    },
    {
      label: "Passport Number",
      name: "passport_number",
      type: "number",
      required: true,
      access: {update: isAdmin}
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
      ],
      access: {
        read: isAdmin,
        create: isAdmin,
        update: isAdmin
      }
    }
  ]
}

export default Users
