import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import ContentTeams from "@/components/layout/ContentTeams/ContentTeams";
const OurTeam = () => {
  return (
    <div className="Ourteam w-full bg-[#fff] mt-24 mb-24">
      <div className="container">
        <div className="title_ourteam flex flex-col justify-center items-center">
          <h1>
            <SparklesText text="تیم ما" className="text-[#252525]" />
          </h1>
          <p className="text-[#252525] mt-8 text-[22px]">با متخصصان ما آشنا شوید </p>
        </div>
        {/* content teams */}
        <ContentTeams/>
      </div>
    </div>
  );
};

export default OurTeam;
