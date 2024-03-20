import BlogCard from "@/components/Blogs/BlogCard";
import Container from "@/components/Container";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: {
    id: number;
  };
}) {
  try {
    const res = await axios.get(
      `${process.env.BACKEND_BASE_URL}/posts/${params.id}`
    );
    const blog: Blog = res.data;

    if (!blog) {
      return {
        title: "Not Found",
        description: "No Blog found of this ID",
      };
    }

    return {
      title: blog.title,
      description: blog.body,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "Something went wrong",
    };
  }
}

interface PageParams {
  params: {
    id: string;
  };
}

const Page = async ({ params: { id } }: PageParams) => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/posts/${id}`, {
    next: { revalidate: 1000 },
  });

  if (!response.ok) {
    return (
      <h1 className="text-destructive text-center mt-20 font-semibold">
        Something went wrong, Try Again Later
      </h1>
    );
  }

  const BlogDetails: Blog = await response.json();

  return (
    <Container>
      <div className="mt-10 flex flex-col gap-3">
        <Link
          href={"/"}
          scroll={false}
          className="flex items-center justify-center gap-2 py-2 px-4 border border-primary w-fit rounded-lg transition hover:bg-primary hover:text-background"
        >
          <ChevronLeft className="w-5 h-5" />
          Go Back
        </Link>
        <BlogCard blog={BlogDetails} blogDetails={true} />
      </div>
    </Container>
  );
};

export default Page;

export async function generateStaticParams() {
  const res = await axios.get(`${process.env.BACKEND_BASE_URL}/posts`);

  const blogs: Blog[] = res.data;

  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}
