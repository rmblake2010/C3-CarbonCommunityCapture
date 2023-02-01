import { createContext, useState } from "react";
import CarbonFootprintCalculator from "../components/carbon-footprint-calculator/carbon-footprint-calculator.component";
import TreeSequestrationCalculator from "../components/tree-sequestration-calculator/tree-sequestration-calculator.component";
import TreeQuantityForm from "../components/tree-quantity-form/treeQuantityForm.component";


const CALC_COMPONENTS_STARTING_TEMPLATE = [
    <CarbonFootprintCalculator/>,
    <TreeQuantityForm/>,

]


export const CalculatorComponentContext = createContext({
    calculatorComponents: [],
    treeCount: 0,

})



export const CalculatorComponentProvider = ({children}) => {
    const [treeCount, setTreeCount] = useState(0)
    const [calculatorComponents, setCalculatorComponents] = useState(CALC_COMPONENTS_STARTING_TEMPLATE)
    
    const addTreeForm = (e) => {
        e.preventDefault()
        setTreeCount(treeCount + 1)
        setCalculatorComponents(calculatorComponents => [...calculatorComponents, <TreeSequestrationCalculator/>])
    }
    const value= {calculatorComponents, treeCount, setTreeCount, addTreeForm}
    return(
        <CalculatorComponentContext.Provider value={value}>{children}</CalculatorComponentContext.Provider>
    )
    
}