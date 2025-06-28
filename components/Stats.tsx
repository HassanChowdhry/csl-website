import { Trophy, Code, Star, Flame } from "lucide-react";

const achievements = [
  {
    id: 1,
    name: "Problems Solved",
    value: "2500+",
    description: "LeetCode problems solved by our members",
    icon: Code,
    color: "text-blue-400",
  },
  {
    id: 2,
    name: "LeetCode Knights",
    value: "2",
    description: "Top 5% performers on LeetCode",
    icon: Star,
    color: "text-yellow-400",
  },
  {
    id: 3,
    name: "LeetCode Guardian",
    value: "1",
    description: "Top 1% performer on LeetCode",
    icon: Flame,
    color: "text-red-400",
  },
  {
    id: 4,
    name: "ICPC Champions",
    value: "2x",
    description: "Atlantic ICPC Regional Champions",
    icon: Trophy,
    color: "text-purple-400",
  },
];

export default function Stats() {
  return (
    <div className="bg-white/10 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Our Achievements</h3>
      <div className="grid grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex items-center gap-x-4 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
            <achievement.icon className={`h-6 w-6 ${achievement.color} flex-shrink-0`} aria-hidden="true" />
            <div>
              <div className="text-lg font-bold text-white">{achievement.value}</div>
              <div className="text-sm text-indigo-200 font-medium">{achievement.name}</div>
              <div className="text-xs text-indigo-300 mt-1">{achievement.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
