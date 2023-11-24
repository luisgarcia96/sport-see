import { useEffect, useState } from "react";

const useWindowSizeMultiplier = () => {
	const [multiplier, setMultiplier] = useState(1);

	useEffect(() => {

		const handleResize = () => {
			setMultiplier(window.innerWidth <= 1024 ? 0.70 : 1);
		};

		window.addEventListener("resize", handleResize);

		// Call the function to set the initial state
		handleResize();

		// Clean up event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return multiplier;
};

export default useWindowSizeMultiplier;
