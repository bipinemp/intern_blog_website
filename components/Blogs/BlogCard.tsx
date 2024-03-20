import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
  blogDetails: boolean;
}

const BlogCard = ({ blog, blogDetails }: BlogCardProps) => {
  const { id, title, body } = blog;
  const truncatedBody =
    body.length > 100 && !blogDetails
      ? body.substring(0, 100) + " . . ."
      : body + ".";

  const updatedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div
      className={cn(
        "transition min-h-[140px] bg-zinc-50 dark:bg-transparent flex flex-col gap-3 py-4 px-5 border-[2px] border-input rounded-lg shadow-md",
        {
          "hover:bg-zinc-100 hover:border-primary cursor-pointer": !blogDetails,
        }
      )}
    >
      {blogDetails ? (
        <h1 className="font-bold text-gray-600 dark:text-zinc-300">
          {updatedTitle}
        </h1>
      ) : (
        <Link href={`/blog/${id}`} scroll={false}>
          <h1 className="hover:underline font-bold text-gray-600 dark:text-zinc-300">
            {updatedTitle}
          </h1>
        </Link>
      )}
      <p className="text-[0.9rem] sm:text-[1.1rem] flex items-start gap-2 text-gray-500">
        <ChevronRight className="w-7 h-7 hidden sm:block" strokeWidth={3} />
        {truncatedBody}
      </p>
    </div>
  );
};

export default BlogCard;
