import { HTMLAttributes } from "react";
import ClassHelper from "../../helper/ClassHelper";

interface Props extends HTMLAttributes<HTMLDivElement> {
  quarters?: number;
}

const LoadingIndicator = ({
  quarters = 1,
  className,
  ...defaultProps
}: Props) => {
  const quarter1 = quarters >= 1 ? "quarter-1" : undefined;
  const quarter2 = quarters >= 2 ? "quarter-2" : undefined;
  const quarter3 = quarters >= 3 ? "quarter-3" : undefined;
  const quarter4 = quarters >= 4 ? "quarter-4" : undefined;

  return (
    <div
      className={ClassHelper.Join(
        className,
        "loading-indicator",
        quarter1,
        quarter2,
        quarter3,
        quarter4
      )}
      {...defaultProps}
    />
  );
};

export default LoadingIndicator;
