'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface SearchParamsWrapperProps {
  children: React.ReactNode;
}

function SearchParamsContent({ children }: SearchParamsWrapperProps) {
  const searchParams = useSearchParams();
  return <>{children}</>;
}

export default function SearchParamsWrapper({ children }: SearchParamsWrapperProps) {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <SearchParamsContent>{children}</SearchParamsContent>
    </Suspense>
  );
} 