import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UploadImage = (props) => (
  <Svg
    className="feather feather-upload"
    fill="none"
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </Svg>
);

export default UploadImage;
