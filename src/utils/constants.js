export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN:"project_admin",
    MEMBER:"member"
}
export const AvailableUserRoles = Object.values(UserRolesEnum)


export const TackStatusEnum = {
    TODO: "todo",
    IN_PROGRESS:"in_progress",
    DONE:"done"
}
export const AvailableTaskStatus= Object.values(TackStatusEnum)