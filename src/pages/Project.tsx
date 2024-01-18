import PageIntro from "../components/PageHero";
import ProjectView from "../components/ProjectView";
import withLayout from "../hooks/withLayout";

const Project = () => {
  const desc = `In this section of my portfolio, I present my proficiency in Full Stack Web Development, Artificial Intelligence, and Machine Learning. I emphasize projects that demonstrate the application of these skills, showcasing my ability to deliver high-quality solutions.`;
  const next = {
    title: "Contact",
    link: "/contact",
  };

  return (
    <>
      <PageIntro title="Project" desc={desc} next={next} ThreeModel="Laptop" />
      <ProjectView />
    </>
  );
};

export default withLayout(Project);
