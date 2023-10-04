import WorkProjectShowcase from "./work-project-showcase";
import s from "./work.module.scss";
import BgDecal from "@/public/background-decals/bg-decal-1.svg";
import images from "./work-project-imgs";

const Work = () => {
  return (
    <div className={s.main}>
      <WorkProjectShowcase
        title="PHERRA"
        subtitle="2023 - Desgined & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="https://pherra.vercel.app/"
        githubLink="https://github.com/Dremiq/PHERRA"
        images={images.pherra}
        reverse={true}
      />
      <WorkProjectShowcase
        title="PORTFOLIO"
        subtitle="2022 - Designed & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="/"
        githubLink="https://github.com/Dremiq/portfolio"
        images={images.portfolio}
        reverse={false}
      />
      <WorkProjectShowcase
        title="MASHDAPP"
        subtitle="2023 - Partially Designed & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="https://www.mashd.app/"
        githubLink={null}
        images={images.mashdapp}
        reverse={true}
      />
      <WorkProjectShowcase
        title="KEEPTRACK"
        subtitle="2021 - Designed & Coded"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus velit justo, quis vestibulum enim facilisis in. Donec efficitur pretium tortor sit amet tincidunt. Mauris laoreet dictum mollis. Etiam sollicitudin tortor quam, a dictum felis interdum a. Donec facilisis consequat enim ac consequat."
        liveLink="https://keep-track.netlify.app/"
        githubLink="https://github.com/Dremiq/KeepTrack"
        images={images.keep_track}
        reverse={false}
      />
      <BgDecal className={`bgDecal ${s.bgDecal}`} />
    </div>
  );
};

export default Work;
