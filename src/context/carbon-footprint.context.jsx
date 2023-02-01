import { createContext, useState } from "react";

const carbonFootprintTemplate = {
    electricCost: 0,
    heatingCost: 0,
    vehicleMPG: 0,
    milesTraveledPerYear: 0,
    result: null,
  };


export const CarbonFootprintContext = createContext({
    carbonFootprint: [],

})

export const CarbonFootprintProvider = ({children}) => {
    const [carbonFootprint, setCarbonFootprint] = useState(carbonFootprintTemplate)
    const value = {carbonFootprint, setCarbonFootprint}
    return (
        <CarbonFootprintContext.Provider value={value}>{children}</CarbonFootprintContext.Provider>
    )
}

