import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const people = [
  {
    name: "Sebastian Dionicio",
    role: "President",
    imageUrl: "/assets/team/seb.jpeg",
  },
  {
    name: "Anas Malvat",
    role: "Vice-president",
    imageUrl: "/assets/team/anas.jpeg",
  },
  {
    name: "Anaam Chodhury",
    role: "Treasurer",
    imageUrl: "/assets/team/anam.jpeg",
  },
  {
    name: "Nathanael Bowley",
    role: "Events co-ordinator",
    imageUrl: "/assets/team/nat.jpeg",
  },
  {
    name: "Vansh Sood",
    role: "Lead web manager",
    imageUrl: "/assets/team/vansh.jpeg",
  },
  {
    name: "Nupur Gaikwad",
    role: "Primary consultant",
    imageUrl: "/assets/team/nupur.jpeg",
  },
  {
    name: "Falilou",
    role: "Graphic designer",
    imageUrl: "/assets/team/moh.jpeg",
  },
  {
    name: "Khushi Singh",
    role: "Social Media manager and Marketing coordinator",
    imageUrl: "/assets/team/khushi.jpeg",
  },
  {
    name: "Dhruvi Shah",
    role: "Social media manager and Marketing coordinator",
    imageUrl: "/assets/team/dhruvi.jpeg",
  },
];

export default function Team() {
  return (
    <div className="flex flex-col mt-8 items-center" id="team">
      <div className="container max-w-7xl px-4">
        <div className="flex flex-wrap justify-center text-center mb-12">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-gray-900 text-4xl font-bold mb-4">
              Meet the Team
            </h1>

            <p className="text-gray-700 text-lg font-light">
              With over 100 years of combined experience, we've got a
              well-seasoned team at the helm.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {people.map((person) => (
            <div
              key={person.name}
              className="w-full md:w-6/12 lg:w-4/12 mb-6 px-8 sm:px-6 lg:px-4 py-8"
            >
              <div className="group relative flex flex-col items-center">
                <img
                  className="rounded-md w-full h-72 object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <h3 className="text-white text-lg font-bold">{person.name}</h3>
                  <p className="text-white text-sm">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
