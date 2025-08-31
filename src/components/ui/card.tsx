"use client";
import * as React from "react";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-gray-200 shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
}
