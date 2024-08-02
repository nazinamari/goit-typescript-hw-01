export enum UserRole {
	admin = 'admin',
	editor = 'editor',
	guest = 'guest',
}

// Використовуємо Record для створення об'єкта RoleDescription
export const RoleDescription: Record<UserRole, string> = {
	[UserRole.admin]: 'Admin User',
	[UserRole.editor]: 'Editor User',
	[UserRole.guest]: 'Guest User',
};

console.log(RoleDescription);
