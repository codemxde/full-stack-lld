import { useState } from "react";

export default function useVisibilty(isVisible = false) {
  const [visibility, setVisibilty] = useState(isVisible);

  const show = () => setVisibilty(true);
  const hide = () => setVisibilty(false);
  const toggle = () => setVisibilty((prev) => !prev);

  return Object.freeze({ visibility, show, hide, toggle });
}
