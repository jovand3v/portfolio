import WorkProjectShowcase from "./work-project-showcase";
import s from "./work.module.scss";
import test from "@/public/work/portfolio-1.png";
import test2 from "@/public/work/portfolio-2.png";
import BgDecal from "@/public/background-decals/bg-decal-1.svg";

const Work = () => {
  return (
    <div className={s.main}>
      <WorkProjectShowcase
        title="PHERRA"
        subtitle="2023 - Desgined & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={true}
      />
      <WorkProjectShowcase
        title="PORTFOLIO"
        subtitle="2022 - Designed & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={false}
      />
      <WorkProjectShowcase
        title="MASHDAPP"
        subtitle="2023 - Partially Designed & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={[test, test2, test, test2, test, test2]}
        reverse={true}
      />
      <WorkProjectShowcase
        title="KEEPTRACK"
        subtitle="2021 - Designed & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
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
