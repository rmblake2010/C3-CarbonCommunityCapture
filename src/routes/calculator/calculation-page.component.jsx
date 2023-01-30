import { useState } from "react";

import CarbonFootprintCalculator from "../../components/carbon-footprint-calculator/carbon-footprint-calculator.component";
import TreeSequestrationCalculator from "../../components/tree-sequestration-calculator/tree-sequestration-calculator.component";

/*
Calculations through :
https://www.ecomatcher.com/how-to-calculate-co2-sequestration/
cycle through routes, asking new questions
Carbon Foodprint Questions:
Calculating carbon footprint :
Electric costs in Kwh
Heating costs in CCF
Vehicle AVG MPG, Miles/year

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

const carbonFootprintTemplate = {
  electricCost: 0,
  heatingCost: 0,
  vehicleMPG: 0,
  milesTraveledPerYear: 0,
  result: null,
};

const treeSequestrationTemplate = [{
    species: '',
    diameter: 0,
    height: 0,
    weightAboveGround: 0,
    totalGreenWeight: 0,
    dryWeight: 0,
    carbonWeight: 0,
    co2Sequestered: 0,
}]


// Set up a state to handle switching forms on this page


const CalculationPage = () => {
  let [carbonFootprint, setCarbonFootprint] = useState(carbonFootprintTemplate);
  let [treeSequestration, setTreeSequestration] = useState(treeSequestrationTemplate)

  const handleTreeAmount = () => {
    console.log('hello')
  }

  return (
    <div className="flex justify-around">
      <div className="container max-w-md border-2 border-red-400">
        <CarbonFootprintCalculator
          carbonFootprint={carbonFootprint}
          setCarbonFootprint={setCarbonFootprint}
        />
      </div>


    </div>
  );
};

export default CalculationPage;
