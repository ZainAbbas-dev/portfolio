"use client";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

// The page is prerendered at build time, so read the year again in the browser
export function CurrentYear() {
  return <>{useSyncExternalStore(subscribe, getYear, getYear)}</>;
}
