'use client'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';

const SearchInput = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      
    </div>
  )
}

export default SearchInput
