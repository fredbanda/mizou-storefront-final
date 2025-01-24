"use client";


import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const TickerBanner = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const messages = ["15% OFF ALL PURCHASES FOR MORE THAN R1500", "Surprise shopper rewards now on!", "Free shipping on all orders over R1000!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % messages.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [messages.length]);

  return (
    <div className="w-full bg-black text-white text-center py-2 text-sm">
      {messages[currentFrame]}
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  const cart = useCart()

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* Add the ticker banner here */}
      <TickerBanner />
      <div className="w-full sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-mizou shadow-xl max-sm:px-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={150} />
        </Link>

        <div className="flex gap-4 text-base-bold max-lg:hidden">
          <Link
            href="/"
            className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`hover:text-red-1 ${
              pathname === "/products" && "text-red-1"
            }`}
          >
            Collections
          </Link>
          <Link
            href="/contact"
            className={`hover:text-red-1 ${
              pathname === "/contact" && "text-red-1"
            }`}
          >
            Contact Us
          </Link>
        </div>

        <div className="flex gap-3 border border-grey-2 px-3 py-4 items-center rounded-lg">
          <input
            className="outline-none max-sm:max-w-[120px] bg-slate-300 rounded-md py-2"
            placeholder="Search product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            disabled={query === ""}
            onClick={() => router.push(`/search/${query}`)}
          >
            <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
          </button>
        </div>

        <div className="relative flex gap-3 items-center">
          <Link
            href="/cart"
            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
          >
            <ShoppingCart />
            <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
          </Link>

          <Link
            href={user ? "/wishlist" : "/sign-in"}
            className={`hover:text-red-1 ${
              pathname === "/wishlist" && "text-red-1"
            }`}
          >
            Wishlist
          </Link>

          {user && (
            <Link
              href="/orders"
              className={`hover:text-red-1 ${
                pathname === "/orders" && "text-red-1"
              }`}
            >
              Orders
            </Link>
          )}

          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />

          {dropdownMenu && (
            <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-mizou text-base-bold lg:hidden">
              <Link
                href="/"
                className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`hover:text-red-1 ${
                  pathname === "/products" && "text-red-1"
                }`}
              >
                Our Collections
              </Link>
              <Link
                href="/contact"
                className={`hover:text-red-1 ${
                  pathname === "/contact" && "text-red-1"
                }`}
              >
                Contact Us
              </Link>
              <Link
                href={user ? "/wishlist" : "/sign-in"}
                className={`hover:text-red-1 ${
                  pathname === "/wishlist" && "text-red-1"
                }`}
              >
                Wishlist
              </Link>
              {user && (
                <Link
                  href="/orders"
                  className={`hover:text-red-1 ${
                    pathname === "/orders" && "text-red-1"
                  }`}
                >
                  Orders
                </Link>
              )}
              <Link
                href="/cart"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              >
                <ShoppingCart />
                <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
              </Link>
            </div>
          )}

          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link href="/sign-in">
              <CircleUserRound />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

