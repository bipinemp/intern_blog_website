"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentDate } from "@/lib/getCurrentDate";
import { TConatactSchema, conatactSchema } from "@/zodSchemas/ContactType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TConatactSchema>({
    resolver: zodResolver(conatactSchema),
  });

  function onSubmit(data: TConatactSchema, e?: React.BaseSyntheticEvent) {
    e?.preventDefault();
    if (data) {
      toast(`${data.name} your message is have been sent successfully`, {
        description: getCurrentDate(),
        style: {
          fontSize: "1.2rem",
        },
      });
      reset();
    }
  }

  return (
    <Container>
      <div className="mt-14 relative sm:w-[500px] mx-auto flex flex-col gap-10 ">
        <h1 className="font-bold text-gray-600 text-center underline underline-offset-4 dark:text-zinc-300">
          Contact.
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-gray-500">
              Name
            </label>
            <Input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Enter your name..."
            />
            {errors.name && (
              <span className="pl-3 text-sm font-semibold text-destructive">
                ** {errors?.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-500">
              Email
            </label>
            <Input
              {...register("email")}
              id="email"
              type="text"
              placeholder="Enter your email..."
            />
            {errors.email && (
              <span className="pl-3 text-sm font-semibold text-destructive">
                ** {errors?.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-semibold text-gray-500">
              Message
            </label>
            <Textarea
              {...register("message")}
              rows={4}
              id="message"
              placeholder="Write a Message ..."
            />
            {errors.message && (
              <span className="pl-3 text-sm font-semibold text-destructive">
                ** {errors?.message.message}
              </span>
            )}
          </div>

          <Button className="py-6 text-lg">Send</Button>
        </form>
      </div>
    </Container>
  );
};

export default Page;
