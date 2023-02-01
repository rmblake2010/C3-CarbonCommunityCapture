import { useState, useContext, useEffect } from "react";
import { CarbonFootprintContext } from "../../context/carbon-footprint.context";
import { TreeSequestrationContext } from "../../context/tree-sequestration.context";
import { CalculatorComponentContext } from "../../context/calculator-index.context";
import CarbonFootprintCalculator from "../../components/carbon-footprint-calculator/carbon-footprint-calculator.component";
import TreeSequestrationCalculator from "../../components/tree-sequestration-calculator/tree-sequestration-calculator.component";
import TreeQuantityForm from "../../components/tree-quantity-form/treeQuantityForm.component";

/*
Calculations through :
https://www.ecomatcher.com/how-to-calculate-co2-sequestration/
cycle through routes, asking new questions
Carbon Foodprint Questions:
Calculating carbon footprint :
Electric costs in Kwh
Heating costs in CCF
Vehicle AVG MPG, Miles/year
*/


const CalculationPage = () => {
  const {carbonFootprint } = useContext(CarbonFootprintContext)
  const {treeSequestration} = useContext(TreeSequestrationContext)
  const { calculatorComponents } = useContext(CalculatorComponentContext)
  let [treeQuantity, setTreeQuantity] = useState(0)
  let treeQuantityForms = []



  const incrementCalcIndex = () => { 
    setCalcIndex(calcIndex + 1);
  };

  const decrementCalcIndex = () => {
    setCalcIndex(calcIndex - 1);
  };

/*
  const calcComponents = [
    <CarbonFootprintCalculator
      incrementCalcIndex={incrementCalcIndex}
    />,
    <TreeQuantityForm treeQuantity={treeQuantity} setTreeQuantity={setTreeQuantity}/>,
  ];
*/

  // Indexing calculator components
  const [calcIndex, setCalcIndex] = useState(0);



  const renderCarbonNeutral = (carbonFootprint, treeSpecs) => {
    const carbonNeutrality = carbonFootprint - treeSpecs;

    if (carbonFootprint <= treeSpecs) {
      return (
        <p>{` You are carbon neutral!~ You offset ${Math.abs(
          carbonNeutrality
        )} lbs of CO2 annually. Good Job!`}</p>
      );
    } else {
      return (
        <p>{`you are not carbon neutral, your net release of CO2 is ${carbonNeutrality} lbs annually`}</p>
      );
    }
  };

  const handleTreeAmount = () => {
    console.log("hello");
  };

  return (
    <div className="flex justify-around min-h-screen">
      <div className="container m-auto max-w-md border-2 border-red-400">
        {calculatorComponents[calcIndex]}
        <div className="flex justify-around">
          <button onClick={decrementCalcIndex}>Back</button>
          <button onClick={incrementCalcIndex}>Next</button>
        </div>
      </div>
      <div className="container m-auto max-w-md border-2 border-red-400">
        <h1>Results:</h1>
        <hr></hr>
        {carbonFootprint.result ? (
          `Carbon Footprint: ${carbonFootprint.result} lbs of CO2 per year`
        ) : (
          <></>
        )}
        <hr></hr>
        {treeSequestration.co2Sequestered ? (
          `Your ${treeSequestration.species} has sequestered ${treeSequestration.co2Sequestered} lbs of CO2!`
        ) : (
          <></>
        )}
        <hr></hr>
        {treeSequestration.co2Sequestered && carbonFootprint.result ? (
          renderCarbonNeutral(
            carbonFootprint.result,
            treeSequestration.co2Sequestered
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CalculationPage;
