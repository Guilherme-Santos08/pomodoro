import { useContext } from "react";
import { TickContext } from "../Context/context";

export function useTick() {
  const value = useContext(TickContext)

  return value
}