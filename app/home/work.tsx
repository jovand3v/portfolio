import WorkProjectShowcase from "./work-project-showcase";
import s from "./work.module.scss";
import test from "@/public/work/portfolio-1.png";
import test2 from "@/public/work/portfolio-2.png";
import BgDecal from "@/public/background-decals/bg-decal-1.svg";

const Work = () => {
  return (
    <div className={s.main}>
      <WorkProjectShowcase
        title="KeepTrack"
        subtitle="2021 - Designed & Coded (Personal Project)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat. Nunc quis dolor volutpat, vehicula nisi vel, mollis sem. Cras nec nibh quis turpis varius vestibulum eget a elit."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={true}
      />
      <WorkProjectShowcase
        title="KeepTrack"
        subtitle="2021 - Designed & Coded (Personal Project)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat. Nunc quis dolor volutpat, vehicula nisi vel, mollis sem. Cras nec nibh quis turpis varius vestibulum eget a elit."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={false}
      />
      <WorkProjectShowcase
        title="KeepTrack"
        subtitle="2021 - Designed & Coded (Personal Project)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat. Nunc quis dolor volutpat, vehicula nisi vel, mollis sem. Cras nec nibh quis turpis varius vestibulum eget a elit."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={true}
      />
      <WorkProjectShowcase
        title="KeepTrack"
        subtitle="2021 - Designed & Coded (Personal Project)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat. Nunc quis dolor volutpat, vehicula nisi vel, mollis sem. Cras nec nibh quis turpis varius vestibulum eget a elit."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={false}
      />
      <BgDecal className={`bgDecal ${s.bgDecal}`} />
    </div>
  );
};

export default Work;
