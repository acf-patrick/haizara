import ICategoryCard from "../../../Interfaces/ICategoryCard";
import {ReactComponent as art} from "../../../Assets/Images/art.svg";
import {ReactComponent as code} from "../../../Assets/Images/code.svg";
import {ReactComponent as card} from "../../../Assets/Images/card.svg";
import {ReactComponent as design} from "../../../Assets/Images/design.svg";
import {ReactComponent as camera} from "../../../Assets/Images/camera.svg";
import {ReactComponent as computer} from "../../../Assets/Images/computer.svg";
import {ReactComponent as science} from "../../../Assets/Images/science.svg";
import {ReactComponent as megaphone} from "../../../Assets/Images/megaphone.svg";

const categories: ICategoryCard[] = [
  {
    image: megaphone,
    title: "digital marketing",
    courses: 573,
  },
  {
    image: code,
    title: "web development",
    courses: 573,
  },
  {
    image: design,
    title: "graphic design",
    courses: 573,
  },
  {
    image: camera,
    title: "photography",
    courses: 573,
  },
  {
    image: science,
    title: "social sciences",
    courses: 573,
  },
  {
    image: art,
    title: "art & humanities",
    courses: 573,
  },
  {
    image: card,
    title: "personal development",
    courses: 573,
  },
  {
    image: computer,
    title: "IT and software",
    courses: 573,
  },
];

export default categories;
