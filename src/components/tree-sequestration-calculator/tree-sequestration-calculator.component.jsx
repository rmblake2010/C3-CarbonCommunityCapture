const TreeSequestrationCalculator = () => {
  return (
    <div className="m-auto">
      <form className="flex flex-col">
        <label>Tree Species</label>
        <select name="species">
          <option>Oak</option>
          <option>Maple</option>
          <option>Birch</option>
          <option>Malus</option>
          <option>Gymnocladus</option>
          <option>Linden</option>
          <option>Gleditsia</option>
        </select>

        <label>Diameter (in)</label>
        <input className="bg-gray-200 rounded-sm" name="diameter"></input>

        <label>Height (ft)</label>
        <input className="bg-gray-200 rounded-sm" name="height"></input>
      </form>
    </div>
  );
};

export default TreeSequestrationCalculator;
