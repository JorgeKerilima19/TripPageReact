const features = [
  {
    img: "",
    name: "memories that will last forever",
    description:
      "We will make your trips special with unique photos to bring back home",
  },
  {
    img: "",
    name: "guidance support 24/7",
    description:
      "Our expertise, experience and support will be at your service any time you want it",
  },
  {
    img: "",
    name: "high end services",
    description:
      "We work with the best providers available and select carefully your services to match your preferences",
  },
];

const Features = () => {
  return (
    <div>
      {features.map((el) => (
        <div>{el.name}</div>
      ))}
    </div>
  );
};

export default Features;
