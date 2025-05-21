import { HTMLAttributes, useEffect, useRef, useState } from "react";
import ClassHelper from "../../helper/ClassHelper";
import LoadingIndicator from "./LoadingIndicator";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  autoClickMs?: number;
  onClick: () => void;
}

/**A regular button that can be set to auto-click itself after a time. This disables manual clicking.*/
const AutoButton = ({
  disabled,
  autoClickMs,
  children,
  onClick,
  className,
  ...defaultprops
}: Props) => {
  const timerRef = useRef<number>(null);
  const intervalRef = useRef<number>(null);
  const [quarters, setQuarters] = useState(0);

  useEffect(() => {
    if (autoClickMs && !disabled) {
      timerRef.current = setTimeout(() => {
        if (onClick) onClick();
      }, autoClickMs);

      intervalRef.current = setInterval(() => {
        setQuarters((prev) => prev + 1);
      }, autoClickMs / 5);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setQuarters(0);
    };
  }, [autoClickMs, disabled]);

  return (
    <button
      disabled={disabled || !!autoClickMs}
      onClick={onClick}
      className={ClassHelper.Join(
        className,
        "auto-button",
        !!autoClickMs ? "auto-click" : undefined
      )}
      {...defaultprops}
    >
      {children}
      <div className="loading-indicator-container">
        {!!autoClickMs && <LoadingIndicator quarters={quarters} />}
      </div>
    </button>
  );
};

export default AutoButton;
