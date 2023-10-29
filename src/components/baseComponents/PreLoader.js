import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({height = 20 ,width = 20}) => {
    return (
        <div className="loader d-flex align-items-center justify-content-center">
            <Oval height={height} width={width} color="white" ariaLabel="loading" />
        </div>
    );
};

export default Loader;
