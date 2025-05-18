import Crowd from "../classes/Crowd";
import PersonData from "../classes/PersonData";
import TutorialStage from "../enum/TutorialStage";
import ArrayHelper from "../helper/ArrayHelper";
import ColourPresets from "../helper/ColourPresets";
import MathHelper from "../helper/MathHelper";
import TutorialState from "../types/TutorialState";
import ColourService from "./ColourService";
import LogService from "./LogService";
import ModalService from "./ModalService";
import PersonService from "./PersonService";

const LOG_SUBJECT = "TutorialService";

const modalContentType: "tutorial" = "tutorial";

const showModal = (stage: TutorialStage) => {
  ModalService.ShowModal({
    reference: { type: modalContentType, index: Number(stage) },
  });
};

const generateCrowd = (state: TutorialState): Crowd => {
  let people: PersonData[];

  const base16ColourConstruction = () =>
    ColourService.GenerateColour(
      (MathHelper.GetRandomNumber(16) - 1) * 17,
      (MathHelper.GetRandomNumber(16) - 1) * 17,
      (MathHelper.GetRandomNumber(16) - 1) * 17
    );
  const base16Crowd = PersonService.GenerateCrowd(
    () =>
      new PersonData(
        base16ColourConstruction(),
        base16ColourConstruction(),
        base16ColourConstruction(),
        ColourPresets.Tutorial.Base16Grey
      ),
    12
  );

  switch (state.stage) {
    case TutorialStage.Basics_Scoring:
      people = [
        new PersonData(
          ColourPresets.Red,
          ColourPresets.Grey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Green,
          ColourPresets.Grey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Blue,
          ColourPresets.Grey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(people, people[state.round - 1].id);
    case TutorialStage.Basics_SelectionMode:
      const baseColours = [
        ColourPresets.Red,
        ColourPresets.Green,
        ColourPresets.Blue,
      ];
      return PersonService.GenerateCrowd(
        () =>
          new PersonData(
            ArrayHelper.RandomElement(baseColours),
            ArrayHelper.RandomElement(baseColours),
            ArrayHelper.RandomElement(baseColours),
            ColourPresets.Grey
          ),
        5 + 5 * state.round
      );
    case TutorialStage.Colours_Brightness:
      if (state.round === 1) {
        people = [
          new PersonData(
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc50,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc100
          ),
        ];
      } else if (state.round === 2) {
        people = [
          new PersonData(
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc50,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc100
          ),
        ];
      } else {
        people = [
          new PersonData(
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc50,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc100
          ),
        ];
      }
      return new Crowd(people, ArrayHelper.RandomElement(people).id);
    case TutorialStage.Colours_Complementary:
      people = [
        new PersonData(
          ColourPresets.Tutorial.RedAndGreen,
          ColourPresets.Tutorial.RedAndGreen,
          ColourPresets.Tutorial.RedAndGreen,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.GreenAndBlue,
          ColourPresets.Tutorial.GreenAndBlue,
          ColourPresets.Tutorial.GreenAndBlue,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.BlueAndRed,
          ColourPresets.Tutorial.BlueAndRed,
          ColourPresets.Tutorial.BlueAndRed,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Red,
          ColourPresets.Red,
          ColourPresets.Red,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Green,
          ColourPresets.Green,
          ColourPresets.Green,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Blue,
          ColourPresets.Blue,
          ColourPresets.Blue,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(ArrayHelper.Shuffle(people), people[state.round - 1].id);
    case TutorialStage.Colours_PercNotation:
      people = [
        new PersonData(
          ColourPresets.Tutorial.YellowPerc50,
          ColourPresets.Tutorial.YellowPerc50,
          ColourPresets.Tutorial.YellowPerc50,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.CyanPerc50,
          ColourPresets.Tutorial.CyanPerc50,
          ColourPresets.Tutorial.CyanPerc50,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.MagentaPerc50,
          ColourPresets.Tutorial.MagentaPerc50,
          ColourPresets.Tutorial.MagentaPerc50,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.RedPerc50,
          ColourPresets.Tutorial.RedPerc50,
          ColourPresets.Tutorial.RedPerc50,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.GreenPerc50,
          ColourPresets.Tutorial.GreenPerc50,
          ColourPresets.Tutorial.GreenPerc50,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.BluePerc50,
          ColourPresets.Tutorial.BluePerc50,
          ColourPresets.Tutorial.BluePerc50,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(
        ArrayHelper.Shuffle(people),
        ArrayHelper.RandomElement(people).id
      );
    case TutorialStage.Colours_Imbalance:
      people = [
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.SkyBlue,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.OceanGreen,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Purple,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.SpringGreen,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Crimson,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Orange,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Red,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Green,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Blue,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
      ];
      return new Crowd(
        ArrayHelper.Shuffle(people),
        ArrayHelper.RandomElement(people.slice(0, 6)).id
      );
    case TutorialStage.Colours_Saturation:
      people = [
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.BrighterGrey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.BrightGrey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.DarkGrey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.Tutorial.LowSatRed,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.Tutorial.LowSatGreen,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.Tutorial.LowSatBlue,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.Tutorial.HighSatRed,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.Tutorial.HighSatGreen,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Grey,
          ColourPresets.Tutorial.HighSatBlue,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(
        ArrayHelper.Shuffle(people),
        ArrayHelper.RandomElement(
          people.slice(state.round * 3 - 3, state.round * 3)
        ).id
      );
    case TutorialStage.Colours_Exam:
      const examColourConstruction = () => {
        return Math.round(MathHelper.GetRandomNumberSliced(0, 255, 11));
      };
      const examPersonConstruction = () => {
        return new PersonData(
          ColourService.GenerateColour(examColourConstruction),
          ColourService.GenerateColour(examColourConstruction),
          ColourService.GenerateColour(examColourConstruction)
        );
      };
      return PersonService.GenerateCrowd(
        examPersonConstruction,
        5 + state.round * 5
      );
    case TutorialStage.Hex_ChangingScale:
      switch (state.round) {
        case 1:
          people = [
            new PersonData(
              ColourPresets.Tutorial.RedAndGreen,
              ColourPresets.Tutorial.RedAndGreen,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.GreenAndBlue,
              ColourPresets.Tutorial.GreenAndBlue,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.BlueAndRed,
              ColourPresets.Tutorial.BlueAndRed,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Red,
              ColourPresets.Red,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Green,
              ColourPresets.Green,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Blue,
              ColourPresets.Blue,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.Base16LowSatRed,
              ColourPresets.Tutorial.Base16LowSatRed,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.Base16LowSatGreen,
              ColourPresets.Tutorial.Base16LowSatGreen,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.Base16LowSatBlue,
              ColourPresets.Tutorial.Base16LowSatBlue,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.Base16LowSatYellow,
              ColourPresets.Tutorial.Base16LowSatYellow,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.Base16LowSatCyan,
              ColourPresets.Tutorial.Base16LowSatCyan,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
            new PersonData(
              ColourPresets.Tutorial.Base16LowSatMagenta,
              ColourPresets.Tutorial.Base16LowSatMagenta,
              ColourPresets.Tutorial.Base16Grey,
              ColourPresets.Grey
            ),
          ];
          return new Crowd(
            ArrayHelper.Shuffle(people),
            ArrayHelper.RandomElement(people).id
          );
        case 2:
        case 3:
          return base16Crowd;
      }
      break;
    case TutorialStage.Hex_Letters:
      return base16Crowd;
    case TutorialStage.Hex_DoubleDigits:
      return PersonService.RandomCrowd(3);
    case TutorialStage.Hex_Exam:
      return PersonService.RandomCrowd(5 * state.round);
  }
  throw LogService.Error(
    LOG_SUBJECT,
    `NOT IMPLEMENTED: Person generation for tutorial stage ${state.stage}.${state.round}`
  );
};

const TutorialService = {
  ShowModal: showModal,
  GeneratePeople: generateCrowd,
};

export default TutorialService;
