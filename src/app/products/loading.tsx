import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>
        <Skeleton width={200} />
      </h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <Skeleton height={300} />
          <Skeleton count={5} style={{ marginTop: "10px" }} />
        </div>
        <div style={{ flex: 2 }}>
          <Skeleton height={300} />
          <Skeleton count={5} style={{ marginTop: "10px" }} />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Skeleton width={300} height={40} />
      </div>
    </div>
  );
}
