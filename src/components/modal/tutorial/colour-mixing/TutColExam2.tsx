import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutColExam2 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif">
      <p className="text-center">
        ...let's put everything we've learned to the test.
      </p>
      <p className="text-center">
        This will be the most difficult one yet. You can do it, though.
      </p>
      <div className="flex-row wrap gap-1 justify-center ">
        <SimulationFrame>
          <div className="flex-col justify-center align-center">
            <p className="m-0">Some advice:</p>
            <ul className="gap-1">
              <li>
                When reading a colour description, try to figure out the hue
                first.
              </li>
              <li>
                Since that includes looking at the highest values, you should
                already have an idea of the brightness as well.
              </li>
              <li>Try to figure out the saturation last.</li>
              <li>Make use the 'Rule out' function.</li>
              <li>
                If you're unsure about a colour, move on to another article of
                clothing.
              </li>
              <li>
                If you're left with two similar looking people, pay attention to
                how the colour descriptions compare to each other.
                <br />
                Maybe their hat is brighter, greyer or greener than their shirt.
              </li>
            </ul>
          </div>
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutColExam2;
