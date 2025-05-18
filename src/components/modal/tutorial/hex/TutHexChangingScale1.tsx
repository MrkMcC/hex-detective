interface Props {}

const TutHexChangingScale1 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>So far, we've been describing RGB values on a scale from 0 to 100.</p>
      <p>But there's no reason why it has to be 100.</p>
      <p>
        We could use a larger number, dividing our RGB scale into more steps. Or
        maybe...
      </p>
      <p>
        Yes, that's it! We'll use a smaller scale. That'll make things much
        easier!
      </p>
      <p>Let's take a scale from 0 to...</p>
    </div>
  );
};

export default TutHexChangingScale1;
