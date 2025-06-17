import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="lg:min-h-[40vh] flex items-center justify-center">
      <div className="w-full max-w-lg flex items-center justify-center pt-12">
        <SignUp />
      </div>
    </section>
  );
}
