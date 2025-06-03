// alx-project-0x02/interfaces/index.ts

export interface CardProps {
	title: string;
	content: string;
}

export interface ButtonProps {
	children: React.ReactNode;
	size: "small" | "medium" | "large";
	shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
	id: number;
	title: string;
	body: string;
	userId: number;
}

export interface UserProps {
	id: number;
	user: string;
	name: string;
	email: string;
	address: {
		street: string;
		city: string;
	};
}
