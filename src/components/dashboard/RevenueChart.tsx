"use client";

import { useRef, useEffect, useCallback } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

type RevenueChartProps = {
  isDark: boolean;
};

const LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const VALUES = [15, 22, 12, 32, 40, 36, 45];

export default function RevenueChart({ isDark }: RevenueChartProps) {
  const chartRef = useRef<ChartJS<"line">>(null);

  const createGradient = useCallback(
    (ctx: CanvasRenderingContext2D, chartArea: { top: number; bottom: number }) => {
      const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      gradient.addColorStop(0, "rgba(74, 112, 67, 0.25)");
      gradient.addColorStop(1, "rgba(74, 112, 67, 0)");
      return gradient;
    },
    []
  );

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    chart.update();
  }, [isDark]);

  return (
    <Line
      ref={chartRef}
      data={{
        labels: LABELS,
        datasets: [
          {
            data: VALUES,
            borderColor: "#4A7043",
            borderWidth: 3,
            pointBackgroundColor: "#4A7043",
            pointBorderColor: isDark ? "#262626" : "#ffffff",
            pointBorderWidth: 2.5,
            pointRadius: 5,
            pointHoverRadius: 8,
            pointHitRadius: 20,
            tension: 0.4,
            fill: true,
            backgroundColor: (context) => {
              const { chart } = context;
              const { ctx, chartArea } = chart;
              if (!chartArea) return "transparent";
              return createGradient(ctx, chartArea);
            },
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          tooltip: {
            backgroundColor: isDark
              ? "rgba(38,38,38,0.95)"
              : "rgba(255,255,255,0.95)",
            titleColor: isDark ? "#e5e7eb" : "#1f2937",
            bodyColor: isDark ? "#d1d5db" : "#374151",
            borderColor: isDark
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
            borderWidth: 1,
            padding: 10,
            cornerRadius: 10,
            titleFont: { size: 12, weight: "bold" },
            bodyFont: { size: 12 },
            displayColors: false,
            callbacks: {
              label: (ctx) => `Rp ${ctx.parsed.y}M`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: isDark ? "#6b7280" : "#9ca3af",
              font: { size: 12 },
            },
          },
          y: {
            min: 0,
            max: 50,
            grid: {
              color: isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
            },
            border: { display: false, dash: [6, 4] },
            ticks: {
              color: isDark ? "#6b7280" : "#9ca3af",
              font: { size: 11 },
              stepSize: 10,
              callback: (value) => `${value}M`,
            },
          },
        },
      }}
    />
  );
}
