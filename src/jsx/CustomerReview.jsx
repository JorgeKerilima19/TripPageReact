const reviews = [
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit magna sed tortor lacinia semper. Etiam ante metus, volutpat eu dapibus rhoncus, placerat in lacus. Proin consequat dui ac ultrices.",
    userName: "Lamont Sandine",
    userProfile: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
  },
  {
    comment:
      "Vivamus ut velit velit. Mauris eget eleifend elit. Nulla quis magna nunc. Curabitur vestibulum semper ante, non ultrices ligula facilisis non. Proin cursus maximus congue. Donec egestas, sapien sed suscipit.",
    userName: "Conrad Postmus",
    userProfile: "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
  },
  {
    comment:
      "Aliquam faucibus tincidunt justo sit amet maximus. Morbi vitae nisi et dui faucibus mollis. Etiam nibh nibh, sodales at metus eu, varius suscipit dui. Suspendisse dapibus pulvinar tortor, sed rutrum.",
    userName: "Mirta Fogle",
    userProfile: "https://xsgames.co/randomusers/assets/avatars/female/71.jpg",
  },
];

const CustomerReview = () => {
  return (
    <div className="homepage__review-container flex flex__item-center flex__sp-center flex__wrap flex__gap-bg pd-bg width__full">
      {reviews.map((el) => (
        <article
          key={el.userName}
          className="homepage__review-item__container flex flex__column flex__item-center flex__gap-bg"
        >
          <p className="text-alg__center ps__relative text__italic review__comment">
            {el.comment}
          </p>
          <div className="flex flex__column flex__item-center flex__gap-md">
            <img className="tour__user-photo" src={el.userProfile} alt="" />
            <h4 className="review__user-name">{el.userName}</h4>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CustomerReview;
