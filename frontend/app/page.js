import Image from "next/image";
import { UserProvider } from "./../context/UserContext";

import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <UserProvider>
      <BlogCard />
    </UserProvider>
  );
}
