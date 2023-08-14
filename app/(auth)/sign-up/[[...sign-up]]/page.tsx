import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex flex-col mx-auto items-center max-w-4xl h-screen justify-center'>
      <SignUp />
    </div>
  );
}