import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Education = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Education;