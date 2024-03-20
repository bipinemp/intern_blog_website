"use client";

import { getSearchResults } from "@/actions/getSearchResults";
import BlogCard from "@/components/Blogs/BlogCard";
import Container from "@/components/Container";
import { LoadingDetails } from "@/components/LoadingDetails";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await getSearchResults(query || "");
        setBlogs(response);
      } catch (error) {
        toast.error("Something went wrong, Try Again Later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [query]);

  if (loading) {
    return <LoadingDetails />;
  }

  return (
    <Suspense fallback={<LoadingDetails />}>
      <Container>
        <div className="mt-10 mb-20 flex flex-col gap-10">
          {blogs?.length > 0 && (
            <h2 className="text-center">
              Search Reuslts for
              <span className="text-destructive font-semibold">
                &quot;{query}&quot;
              </span>
            </h2>
          )}
          <div className="flex flex-col gap-4">
            {!loading && blogs?.length === 0 ? (
              <h1 className="text-center font-semibold text-destructive">
                Not Found :(
              </h1>
            ) : (
              blogs?.map((blog) => (
                <BlogCard blog={blog} blogDetails={false} key={blog.id} />
              ))
            )}
          </div>
        </div>
      </Container>
    </Suspense>
  );
};

export default Page;
