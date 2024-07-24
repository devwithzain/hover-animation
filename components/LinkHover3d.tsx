import { TperspectiveTextProps } from "@/types";

export default function LinkHover3d({ children }: TperspectiveTextProps) {
	return (
		<div className="slider">
			<div className="el">
				<div className="perspectiveText">
					<p className="text-5xl font-serif font-bold tracking-tighter text-blue-500">
						{children}
					</p>
					<p className="text-5xl font-serif font-bold tracking-tighter text-blue-500">
						{children}
					</p>
				</div>
			</div>
		</div>
	);
}
