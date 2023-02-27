import React from "react";

function About() {
  return (
    <div>
      <div className="ml-8 text-white">
        <h1 className="text-6xl mb-4">Github Finder</h1> <br />
        <p className="text-2xl">
          A React app to search Github profiles and see profile details. This
          project is devloped by{" "}
          <span className=" font-bold"> UDAY CHAVDA</span>.
        </p>
      </div>
      <div className="ml-8">
        <p className="mt-3 text-lg">
          Version:<span className=" text-white">1.0.0</span>
        </p>
      </div>
    </div>
  );
}

export default About;
