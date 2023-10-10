type FeatureCardProps = {
  title: string;
  desc: string;
  iconName: any;
};

type ProjectCardProps = {
  title: string;
  desc: string;
  imgSrc: any;
  imgAlt: string;
  projUrl: string;
};

type ExperienceProp = {
  title: string;
  url?: string | undefined;
  time: string;
  desc: string;
  isLink?: boolean;
};

type EducationProp = {
  title: string;
  time: string;
  desc: string;
};
