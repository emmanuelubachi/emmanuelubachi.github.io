type FeatureCardProps = {
  title: string;
  desc: string;
  iconName: any;
};

type BadgeProps = {
  label: string;
};

type ProjectCardProps = {
  title: string;
  desc: string;
  imgSrc: any;
  imgAlt: string;
  projUrl: string;
  badge: BadgeProps | BadgeProps[];
  inverse: boolean;
  isLink: boolean;
};

type ExperienceProp = {
  title: string;
  url: string;
  time: string;
  desc: string;
  isLink?: boolean;
};

type EducationProp = {
  title: string;
  time: string;
  desc: string;
};
