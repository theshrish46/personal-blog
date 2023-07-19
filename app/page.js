import Image from 'next/image';
import PostCard from './components/PostCard';

export const data = [
  {
    title: 'Title 1',
    slug: 'slug',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam architecto. Error eum ipsam recusandae, rem est commodi numquam itaque provident atque. Id autem sit ipsam accusamus optio perferendis perspiciatis.'
  },
  {
    title: 'Title 2',
    slug: 'slug',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam architecto. Error eum ipsam recusandae, rem est commodi numquam itaque provident atque. Id autem sit ipsam accusamus optio perferendis perspiciatis.'
  },
  {
    title: 'Title 3',
    slug: 'slug',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam architecto. Error eum ipsam recusandae, rem est commodi numquam itaque provident atque. Id autem sit ipsam accusamus optio perferendis perspiciatis.'
  },
  {
    title: 'Title 4',
    slug: 'slug',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam architecto. Error eum ipsam recusandae, rem est commodi numquam itaque provident atque. Id autem sit ipsam accusamus optio perferendis perspiciatis.'
  },
  {
    title: 'Title 5',
    slug: 'slug',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam architecto. Error eum ipsam recusandae, rem est commodi numquam itaque provident atque. Id autem sit ipsam accusamus optio perferendis perspiciatis.'
  },
  {
    title: 'Title 6',
    slug: 'slug',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam architecto. Error eum ipsam recusandae, rem est commodi numquam itaque provident atque. Id autem sit ipsam accusamus optio perferendis perspiciatis.'
  },
]


export default function Home() {
  return (
    <>
      <div className='my-4 px-4'>
        <h1 className='text-3xl'>Blogs</h1>
        {
          data.map((d, i) => (
            <div key={i}>
            <PostCard />
            </div>
          ))
        }
      </div>
    </>
  );
}
