import { LinkHover3d, LinkUnderline } from "@/components";

export default function App() {
	return (
		<>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<h1>Hover Effect 01</h1>
					<LinkHover3d>Hover me</LinkHover3d>
				</div>
			</div>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<h1>Hover Effect 02</h1>
					<LinkUnderline
						title="Hover Me"
						href="/"
						className="before:h-[2px] after:h-[2px] w-fit text-[50px] text-black capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
					/>
				</div>
			</div>
		</>
	);
}
