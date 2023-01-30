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
    co2Sequestered: null,
}]




// Set up a state to handle switching forms on this page


const CalculationPage = () => {
  let [carbonFootprint, setCarbonFootprint] = useState(carbonFootprintTemplate);
  let [treeSequestration, setTreeSequestration] = useState([])
    // Indexing calculator components
  const [calcIndex, setCalcIndex] = useState(0)

  const incrementCalcIndex = () => {
    setCalcIndex(calcIndex+1)
  }

  const decrementCalcIndex = () => {
    setCalcIndex(calcIndex-1)
  }
  
  
  
  const calcComponents = [
    <CarbonFootprintCalculator carbonFootprint={carbonFootprint} setCarbonFootprint={setCarbonFootprint} incrementCalcIndex={incrementCalcIndex}/>,
    <TreeSequestrationCalculator treeSequestration={treeSequestration} setTreeSequestration={setTreeSequestration} incrementCalcIndex={incrementCalcIndex}/>
    ]
  
  const renderCarbonNeutral = (carbonFootprint, treeSpecs) => {
    const carbonNeutrality = carbonFootprint - treeSpecs

    if(carbonFootprint <= treeSpecs){
      return(
        <p>{` You are carbon neutral!~ You offset ${Math.abs(carbonNeutrality)} lbs of CO2 annually. Good Job!`}</p>
        
      )
    } else{
      return(
        <p>{`you are not carbon neutral, your net release of CO2 is ${carbonNeutrality} lbs annually`}</p>
      )
    }
  }



  const handleTreeAmount = () => {
    console.log('hello')
  }

  return (
    <div className="flex justify-around min-h-screen">
      <div className="container m-auto max-w-md border-2 border-red-400">
          {calcComponents[calcIndex]}
          <div className="flex justify-around">
            <button onClick={decrementCalcIndex}>Back</button>
            <button onClick={incrementCalcIndex}>Next</button>
          </div>
      </div>
      <div className="container m-auto max-w-md border-2 border-red-400">
        <h1>Results:</h1>
        <hr></hr>
        {carbonFootprint.result ? 
        `Carbon Footprint: ${carbonFootprint.result} lbs of CO2 per year`
      : <></>}
      <hr></hr>
      {treeSequestration.co2Sequestered ?
      `Your ${treeSequestration.species} has sequestered ${treeSequestration.co2Sequestered} lbs of CO2!`
        :
        <></>}
        <hr></hr>
      {treeSequestration.co2Sequestered && carbonFootprint.result ? 
        renderCarbonNeutral(carbonFootprint.result, treeSequestration.co2Sequestered)
     : <></>
    }
    

      </div>


    </div>
  );
};

export default CalculationPage;
