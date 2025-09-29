const SkillsCard = ({ category, skills, icon }) => {
  return (
    <div className="card p-6 text-center group">
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Category Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {category}
      </h3>

      {/* Skills List */}
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
