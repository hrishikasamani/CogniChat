'use client'
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';

const SearchInput = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
      <Image 
        src='/icons/search.svg' 
        alt='seach' 
        width={15} 
        height={15}
      />
    </div>
  )
}

export default SearchInput
