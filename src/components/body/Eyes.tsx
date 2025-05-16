import { useEffect } from "react";
import PersonData from "../../classes/PersonData";
import Eye from "./Eye";

interface Props {
  person: PersonData;
}

const Eyes = ({ person }: Props) => {
  const handleMouseMove = (e: MouseEvent) => {
    var eyeL = document.querySelector<HTMLElement>(
      `#person_${person.id} .eye.left .pupil-container`
    )!;
    var eyeR = document.querySelector<HTMLElement>(
      `#person_${person.id} .eye.right .pupil-container`
    )!;
    const rect = eyeL.getBoundingClientRect();
    const x = rect.left + (rect.right - rect.left) / 2;
    const y = rect.top + (rect.bottom - rect.top) / 2;

    var radL = Math.atan2(e.clientX - x, e.clientY - y);
    var rotL = radL * (180 / Math.PI) * -1 + 180;
    var radR = Math.atan2(e.clientX - x - 25, e.clientY - y);
    var rotR = radR * (180 / Math.PI) * -1 + 180;
    eyeL.style.transform = "rotate(" + rotL + "deg)";
    eyeR.style.transform = "rotate(" + rotR + "deg)";
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log("called");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes-container">
      <Eye person={person} side="right" />
      <Eye person={person} side="left" />
    </div>
  );
};

export default Eyes;
