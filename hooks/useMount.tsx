import { useEffect, useState } from "react";

function useMount() {
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  }, []);

  return { mounted };
}

export default useMount;
