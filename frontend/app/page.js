import Image from 'next/image';
import PostCard from '../components/PostCard';
import { data } from '@/data/data';
import { UserContext, UserContextProvider } from '@/components/UserContext';

export default function Home() {
  return (
    <UserContextProvider>
      <div className='my-4 px-4'>
        <h1 className='text-3xl'>Blogs</h1>
        {data.map((d, i) => (
          <div key={i}>
            <PostCard {...d} />
          </div>
        ))}
      </div>
    </UserContextProvider>
  );
}
