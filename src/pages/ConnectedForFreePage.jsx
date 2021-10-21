import React from "react";
import CaptiveLayout from "../components/layouts/CaptiveLayout";

export default function ConnectedForFreePage() {
  return (
    <CaptiveLayout>
      <div class="free">
        <h3>Connected For Free (6pm to 9pm)</h3>
        <div className="connectedIcon">
          <i class="fa fa-wifi"></i>
        </div>
      </div>
    </CaptiveLayout>
  );
}
