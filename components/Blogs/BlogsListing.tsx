import Container from "../Container";
import BlogCard from "./BlogCard";

const BlogsListing = async () => {
  // Implementing ISR Building SSG after every 1000 seconds
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/posts`, {
    next: { revalidate: 1000 },
  });

  if (!response.ok) {
    return (
      <h1 className="text-destructive text-center mt-20 font-semibold">
        Something went wrong, Try Again Later
      </h1>
    );
  }

  const blogs: Blog[] = await response.json();

  return (
    <Container>
      <div className="mt-10 mb-20 flex flex-col gap-4">
        {blogs &&
          blogs?.map((blog) => (
            <BlogCard blog={blog} blogDetails={false} key={blog.id} />
          ))}
      </div>
    </Container>
  );
};

export default BlogsListing;
