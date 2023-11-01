
const Card = ({ info, setFilterTags, filterTags }) => {
  const tags = [info.role, info.level, ...info.languages, ...info.tools];
  const img = (imgName) => {
    return require(`../assets${imgName}`);
  };

  const handleFilter = (newTag) => {
    setFilterTags((prev) => {
      if (!prev.includes(newTag)) {
        return [...prev, newTag];
      }
      return prev;
    });
  };
  const filtersPresent = filterTags.every(item => tags.includes(item));


  return (
    <>
    {filtersPresent===true&&(
    <div className="p-6 m-5 mt-12 bg-white flex flex-col rounded-lg gap-2 md:flex-row md:justify-between md:items-center">
      <div id="jobInfo" className="space-y-3 md:flex md:flex-row gap-7">
        <img
          src={img(info.logo)}
          alt="Profile"
          className="w-16 -mt-14 md:mt-0 md:w-24"
        />

        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-3">
            <h2 className="text-lg font-bold text-desaturatedDarkCyan">
              {info.company}
            </h2>
            {info.new === true && (
              <span className=" rounded-full w-fit p-1 pr-3 pl-3 bg-desaturatedDarkCyan text-white text-sm font-bold">
                NEW!
              </span>
            )}
            {info.featured === true && (
              <span className=" rounded-full w-fit p-1 pr-3 pl-3 bg-veryDarkGreyishCyan text-white text-sm font-bold">
                FEATURED
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold">{info.position}</h3>
          <div>
            <ul className="flex flex-row list-disc space-x-5 text-darkGrayishCyan">
              <li className="list-none">{info.postedAt}</li>
              <li>{info.contract}</li>
              <li>{info.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t-1 border-gray-500 my-4 md:hidden" />
      {/* tags */}
      <div className="flex flex-row flex-wrap gap-6">
        {tags.map((tag) => (
          <span
            className="max-w-fit h-10 p-2 bg-lightGrayishCyan2 text-desaturatedDarkCyan font-bold text-lg text-center cursor-pointer hover:bg-desaturatedDarkCyan hover:text-white"
            onClick={() => {
              handleFilter(tag);
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div> )}</> 
  );
};

export default Card;
