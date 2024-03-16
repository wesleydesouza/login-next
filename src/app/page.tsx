import Image from "next/image";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="bg-[url('/bgmain.png')] flex items-center justify-center min-h-screen min-w-full">
      <div className="flex items-center justify-center w-[690px] h-[690px] bg-[#5882c180] border-2 border-[#5882C1] rounded-3xl backdrop-blur">
        <form className="flex flex-col items-start gap-7 w-[503px] h-[595px] ">
          <h1 className="text-4xl font-bold">Login</h1>
          <Input type="email" label="Email" placeholder="username@gmail.com" />

          <div className="flex flex-col items-start gap-4 w-full">
            <Input type="password" label="Password" placeholder="Password" />
            <a href="#" className="text-xs">
              Forgot Password?
            </a>
          </div>

          <Button bgColor="primary">
            <span className="font-bold text-xl">Sign in</span>
          </Button>
          <div className="flex  justify-center w-full">
            <p className="text-sm">or continue with</p>
          </div>

          <div className="flex  justify-between w-full">
            <div className="w-full max-w-36">
              <Button bgColor="white">
                <Image
                  className="m-auto "
                  src="/icons-google.svg"
                  width={24}
                  height={24}
                  alt="icon google"
                />
              </Button>
            </div>
            <div className="w-full max-w-36">
              <Button bgColor="white">
                <Image
                  className="m-auto "
                  src="/icons-github.svg"
                  width={24}
                  height={24}
                  alt="icon github"
                />
              </Button>
            </div>

            <div className="w-full max-w-36">
              <Button bgColor="white">
                <Image
                  className="m-auto "
                  src="/icons-facebook.svg"
                  width={24}
                  height={24}
                  alt="icon facebook"
                />
              </Button>
            </div>
          </div>
          <div className="flex  justify-center w-full">
            <p className="text-sm font-light">
              Don´t have an account yet?
              <a href="#" className="text-sm font-semibold">
                {" "}
                Register for free
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
