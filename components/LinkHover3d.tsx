import { TperspectiveTextProps } from "@/types";

export default function LinkHover3d({ children }: TperspectiveTextProps) {
	return (
		<div className="slider">
			<div className="el">
				<div className="perspectiveText">
					<p>{children}</p>
					<p>{children}</p>
				</div>
			</div>
		</div>
	);
}
