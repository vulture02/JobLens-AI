import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000 flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-md">
      <div className="resume-card-header flex justify-between items-start">
        <div className="flex flex-col gap-1">
          {companyName && <h2 className="text-black font-bold break-words">{companyName}</h2>}
          {jobTitle && <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>}
          {!companyName && !jobTitle && <h2 className="text-black font-bold">Resume</h2>}
        </div>
        <ScoreCircle score={feedback.overallScore} />
      </div>

      <div className="gradient-border rounded-xl overflow-hidden">
        <img
          src={imagePath}
          alt="resume"
          className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
        />
      </div>
    </Link>
  );
};

export default ResumeCard;
