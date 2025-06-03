// alx-project-0x02/pages/about.tsx

import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function About() {
	return (
		<>
			<Header />
			<div className="p-4 space-x-4">
				<Button
					size="small"
					shape="rounded-sm">
					Small
				</Button>
				<Button
					size="medium"
					shape="rounded-md">
					Medium
				</Button>
				<Button
					size="large"
					shape="rounded-full">
					Large
				</Button>
			</div>
		</>
	);
}
