import React from "react";

import { useProps } from "../contexts";
import { DateRange, Modifiers, PropsRange } from "../types";
import { addToRange } from "../utils";
import { isDateInRange } from "../utils/isDateInRange";

export type RangeContextValue<T> = {
  setSelected: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => DateRange | undefined;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: DateRange;
    }
  : {
      selected: DateRange | undefined;
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RangeContext = React.createContext<RangeContextValue<any> | undefined>(
  undefined
);

function useRangeContextValue<T extends PropsRange>({
  required,
  min,
  max,
  selected,
  onSelect
}: T): RangeContextValue<T> {
  const { dateLib, mode } = useProps();
  const { differenceInCalendarDays } = dateLib;
  const [range, setRange] = React.useState<DateRange | undefined>(selected);

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && range === undefined)
      setRange({ from: undefined, to: undefined });
  }, [required, range]);

  // Update the selected date if the selected changes.
  React.useEffect(() => {
    mode === "range" && setRange(selected);
  }, [mode, selected]);

  const isSelected = required
    ? (date: Date) => isDateInRange(date, range as DateRange, dateLib)
    : (date: Date) => range && isDateInRange(date, range, dateLib);

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    const newRange = triggerDate
      ? addToRange(triggerDate, range, dateLib)
      : undefined;

    if (min) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) < min - 1
      ) {
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    if (max) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) >= max
      ) {
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    setRange(newRange);
    onSelect?.(newRange, triggerDate, modifiers, e);

    return newRange;
  };

  return {
    selected: range,
    setSelected,
    isSelected
  } as RangeContextValue<T>;
}

/** @private */
export function RangeProvider(props: React.PropsWithChildren<PropsRange>) {
  const value = useRangeContextValue(props);
  return (
    <RangeContext.Provider value={value}>
      {props.children}
    </RangeContext.Provider>
  );
}

/**
 * Access to the range context to get the selected range or update it.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function useRange<T extends { required: boolean }>() {
  const context = React.useContext(RangeContext);
  if (!context) {
    throw new Error("useRange() must be used within a RangeContextProvider.");
  }
  return context as RangeContextValue<T>;
}