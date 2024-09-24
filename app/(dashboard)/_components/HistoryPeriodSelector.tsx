"use client";

import { Period, Timeframe } from "@/lib/types";

interface Props {
  period: Period;
  setPeriod: (period: Period) => void;
  timeframe: Timeframe;
  setTimeframe: (timeframe: Timeframe) => void;
}

const HistoryPeriodSelector = ({
  period,
  setPeriod,
  timeframe,
  setTimeframe,
}: Props) => {
  return <div>HistoryPeriodSelector</div>;
};

export default HistoryPeriodSelector;
