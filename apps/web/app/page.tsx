"use client";

import { useState } from "react";
import { Button } from "@ff-design/react/components/button";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button variant="tertiary" loading={isLoading} loadingText="처리 중..." onClick={handleClick}>
          버튼
        </Button>
        <div className="h-10 px-4 bg-primary-normal flex items-center justify-center">TailwindCSS 사용 예시</div>
      </div>
    </div>
  );
}
