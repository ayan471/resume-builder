import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./editor/forms/GeneralInfoForm";
import PersonalInfoForm from "./editor/forms/PersonalInfoForm";
import WorkExperienceForm from "./editor/forms/WorkExperienceForm";
import EducationForm from "./editor/forms/EducationForm";
import SkillsForm from "./editor/forms/SkillsForm";
import SummaryForm from "./editor/forms/SummaryForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Education",
    component: EducationForm,
    key: "education",
  },
  {
    title: "Skills",
    component: SkillsForm,
    key: "skills",
  },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];
