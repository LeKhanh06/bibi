import { LandscapeScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <LandscapeScene variant="snow" />
    </div>
  );
}
