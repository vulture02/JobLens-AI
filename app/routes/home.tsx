import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "resumemind" },
    { name: "description", content: "smart feedback for your dream job" },
  ];
}

export default function Home() {
   const { auth } = usePuterStore();
    const navigate=useNavigate();
    useEffect(()=>{
      if(!auth.isAuthenticated) navigate('/auth?next=/');
  
    },[auth.isAuthenticated]);
  
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center">
      <Navbar />
    
      <section className="flex flex-col items-center gap-8 pt-12 max-sm:mx-2 mx-15 pb-5 py-16">
        <div className="flex flex-col items-center gap-8 max-w-4xl text-center max-sm:gap-4">
          <h1>Track your Application & Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>
      
      {resumes.length > 0 && (
        <div className="flex flex-wrap max-md:flex-col max-md:gap-4 gap-6 items-start max-md:items-center w-full max-w-[1850px] justify-evenly">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
      </section>
    </main>
  );
}
