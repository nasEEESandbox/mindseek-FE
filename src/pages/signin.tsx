import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import BG2 from "../assets/BG2.png";

const formSchema = z.object({
  nip: z.string().length(18, { message: "NIP must have 18 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters" }),
});

export default function Signin() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nip: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <div
        className="w-[100vw] h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${BG2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-zinc-50 p-6 rounded-xl w-sm text-left drop-shadow-lg">
          <h1 className="text-3xl font-bold mb-8">Welcome Back</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NIP</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-4">
                <hr className="flex-1 border-t border-gray-300" />
                <p className="text-center text-gray-600">or</p>
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <div className="w-full mb-12">
                <Button
                  size="long"
                  variant="secondary"
                  onClick={() => navigate("/home")}
                >
                  Sign in with SSO
                </Button>
              </div>
              <Button type="submit" size="long">
                Sign in
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
