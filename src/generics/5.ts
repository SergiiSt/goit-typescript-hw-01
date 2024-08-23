export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type userRoleDescription = Record<UserRole, string>;
const RoleDescription: userRoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
