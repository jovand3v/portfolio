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
        description="PHERRA is a personal full-stack, e-commerce project with a custom built cms that can be accessed via the /admin route. PHERRA is hosted on Vercel and was built using: Next.js, TypeScript, SCSS, JWT, Prisma, Vercel Postgres Database, AWS S3 Bucket, and Figma."
        liveLink="https://pherra.vercel.app/"
        githubLink="https://github.com/Dremiq/PHERRA"
        images={images.pherra}
        reverse={true}
      />
      <WorkProjectShowcase
        title="PORTFOLIO"
        subtitle="2023 - Designed & Coded"
        description="My portfolio is a personal project used for representation of my work, skills and experiences. It's hosted on Vercel and was built using: Next.js, TypeScript, SCSS and Figma."
        liveLink="/"
        githubLink="https://github.com/Dremiq/portfolio"
        images={images.portfolio}
        reverse={false}
      />
      <WorkProjectShowcase
        title="MASHDAPP"
        subtitle="2022 - Partially Designed & Coded"
        description={`MASHDAPP is a work full-stack project made for customizing/combining NFTs. It was built by a team of 3. I've handled all of the front-end, hosting, some design tweaks, and some back-end such as the contact us form. MASHDAPP is hosted on Heroku and built(my side) using: React, Express, SCSS, Mailgun, Blockfrost, and Figma. On the last few images a MASHDAPP Editor can be seen that got discontinued and therefore never made it to production.`}
        liveLink="https://www.mashd.app/"
        githubLink={null}
        images={images.mashdapp}
        reverse={true}
      />
      <WorkProjectShowcase
        title="KEEPTRACK"
        subtitle="2021 - Designed & Coded"
        description="KEEPTRACK is a personal front-end, nutrition tracking project. It's hosted on Netlify and was built using: React, Redux, SCSS, chart.js, and Figma. This project was initially built for personal use only but later I've decided to re-design it, brand it, and put it as one of my projects even if it was built in 2021."
        liveLink="https://keep-track.netlify.app/"
        githubLink=""
        images={images.keep_track}
        reverse={false}
      />
      <BgDecal className={`bgDecal ${s.bgDecal}`} />
    </div>
  );
};

export default Work;
