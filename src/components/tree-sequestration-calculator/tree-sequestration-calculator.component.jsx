import { useContext } from "react";
import { TreeSequestrationContext } from "../../context/tree-sequestration.context";
import { CalculatorComponentContext } from "../../context/calculator-index.context";
/*
Tree Questions
How many trees?
Forms built based on how many trees
Type of tree
Specs of tree:
Weight Above ground (lbs) = .25(Diameter^2 * Height)
Total Green Weight(lbs) = 1.2 * Weight above Ground
Dry weight(lbs) = .725 * total green weight = 
Carbon Weight(lbs) = .05 * dry weight = .5 * 343
CO2 Sequestered = 3.67 * Carbon Weight
*/

const TreeSequestrationCalculator = ({
  incrementCalcIndex,
}) => {
  const {treeSequestration, setTreeSequestration} = useContext(TreeSequestrationContext)
  const {treeCount} = useContext(CalculatorComponentContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTreeSequestration({ ...treeSequestration, [name]: value });
  };

  const calcTreeSequestration = async (e) => {
    e.preventDefault();
    const { diameter, height } = treeSequestration;

    const weightAboveGround = 0.25 * (Math.pow(diameter, 2) * height);
    const totalGreenWeight = 1.2 * weightAboveGround;
    const dryWeight = 0.725 * totalGreenWeight;
    const carbonWeight = 0.725 * totalGreenWeight;
    const carbonDioxideSequestered = Math.ceil(3.67 * carbonWeight);

    setTimeout(() => {
      setTreeSequestration({
        ...treeSequestration,
        weightAboveGround: weightAboveGround,
        totalGreenWeight: totalGreenWeight,
        dryWeight: dryWeight,
        carbonWeight: carbonWeight,
        co2Sequestered: carbonDioxideSequestered,
      });
    }, 500);

    // incrementCalcIndex()
  };



  return (
    <div className="m-auto">
      <form className="flex flex-col">
        <label>Tree Species</label>
        <select
          onChange={handleChange}
          name="species"
          className="bg-gray-200 rounded-sm"
        >
          <option>---Select a tree---</option>
          <option>Oak</option>
          <option>Maple</option>
          <option>Birch</option>
          <option>Malus</option>
          <option>Gymnocladus</option>
          <option>Linden</option>
          <option>Gleditsia</option>
        </select>

        <label>Diameter (in)</label>
        <input
          onChange={handleChange}
          className="bg-gray-200 rounded-sm"
          name="diameter"
        ></input>

        <label>Height (ft)</label>
        <input
          onChange={handleChange}
          className="bg-gray-200 rounded-sm"
          name="height"
        ></input>
        <button onClick={calcTreeSequestration}>Submit</button>
      </form>
    </div>
  );
};

export default TreeSequestrationCalculator;
