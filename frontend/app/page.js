import { UserProvider } from "@/context/UserContext";
import Image from "next/image";

export default function Home() {
  return <UserProvider>Main Page</UserProvider>;
}
