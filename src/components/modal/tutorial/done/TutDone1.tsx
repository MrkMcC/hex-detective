interface Props {}

const TutDone1 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>You did it. Good work!</p>
      <p>Thank you for taking the time to learn about hex codes.</p>
      <br />
      <p>There's always more to learn.</p>
      <p>
        Are there any colours our screens can't show? Is blue darker than green?
        Why base-16?
      </p>
      <p>But you've learned so much already. This is as far as we'll go.</p>
      <br />
      <p>Have fun!</p>
      {/* <br />
      <p>If you want, leave me some feedback on my website.</p>
      <p>
        Was it fun? Confusing? Did you learn something you can use in your own
        work?
      </p>
      <p>
        I'm looking forward to hear from you, even if you're just saying hello.
      </p>
      <p>-Mark</p> */}
    </div>
  );
};

export default TutDone1;
