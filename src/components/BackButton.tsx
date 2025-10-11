'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = "" }: BackButtonProps) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Vérifier s'il y a un historique de navigation
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center text-[#FFC300] hover:text-[#FFD700] transition-colors ${className}`}
    >
      ← Retour
    </button>
  );
}