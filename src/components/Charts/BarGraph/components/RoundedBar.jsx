import React from "react";
import PropTypes from "prop-types";

const RoundedBar = (props) => {
	const { fill, x, y, width, height } = props;
	const radius = 4; // adjust this to change the roundness

	const d = `
        M ${x} ${y + radius}
        a ${radius} ${radius} 0 0 1 ${radius} -${radius}
        h ${width - 2 * radius}
        a ${radius} ${radius} 0 0 1 ${radius} ${radius}
        v ${height - radius}
        h -${width}
        z
    `;

	return (
		<g>
			<path d={d} fill={fill} />
		</g>
	);
};

export default RoundedBar;

RoundedBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};