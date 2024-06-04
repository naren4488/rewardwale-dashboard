import CircularProgressBar from "@/components/CircularProgressBar";
import ProgressBar from "@/components/ProgressBar";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return <CircularProgressBar value={80} />;
}
