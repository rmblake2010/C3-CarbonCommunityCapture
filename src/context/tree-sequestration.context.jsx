import { createContext, useState } from "react";

const treeSequestrationTemplate = [
    {
      species: "",
      diameter: 0,
      height: 0,
      weightAboveGround: 0,
      totalGreenWeight: 0,
      dryWeight: 0,
      carbonWeight: 0,
      co2Sequestered: null,
    },
  ];
  

export const TreeSequestrationContext = createContext({
    treeSequestration: [],
})

export const TreeSequestrationProvider = ({children}) => {
    const [treeSequestration, setTreeSequestration] = useState(treeSequestrationTemplate)
    const value = {treeSequestration, setTreeSequestration}
    return (
        <TreeSequestrationContext.Provider value={value}>{children}</TreeSequestrationContext.Provider>
    )
}