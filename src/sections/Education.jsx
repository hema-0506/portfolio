import { Timeline } from "../components/Timeline";
import { educations } from "../constants";
const Education = () => {
  return (
    <div className="w-full">
      <Timeline data={educations} />
    </div>
  );
};

export default Education;