'use client'
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const SearchInput = () => {
  const pathname = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if(searchQuery) {
      router.push('/currentRoute?topic=${searchQuery}');
    }
  }, [searchQuery, router, searchParams, pathname]);

  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
      <Image 
        src='/icons/search.svg' 
        alt='seach' 
        width={15} 
        height={15}
      />
      <input
        placeholder='Search companions ...'
        className='outline-none'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
