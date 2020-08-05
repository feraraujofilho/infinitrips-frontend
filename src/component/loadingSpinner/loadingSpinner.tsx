import React, { FC, ReactChild, ReactElement } from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 15px;
  border-color: red;
`;

interface LoadingSpinnerProps {
    loading: boolean
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ loading }) => {
    if (loading) {
        return (
            <div className="sweet-loading">
                <PulseLoader
                    css={override}
                    size={10}
                    color={"#4BA0B4"}
                    loading={loading}
                />
            </div>
        );

    }
    return null
}

export default LoadingSpinner;