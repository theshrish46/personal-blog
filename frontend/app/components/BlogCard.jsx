import Image from "next/image";
import React from "react";

const BlogPostCard = ({ post }) => {
  return (
    <div className="w-8/12 my-4 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <Image src="" alt="asdf" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Title</h2>
        <p className="text-gray-500 text-sm mb-2">Author: Shrish Kerur</p>
        <p className="text-gray-500 text-sm">Date: {Date.now()}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
