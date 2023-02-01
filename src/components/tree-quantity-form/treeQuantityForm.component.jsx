import { useContext } from "react"
import { CalculatorComponentContext } from "../../context/calculator-index.context"


const TreeQuantityForm = () => {
const { addTreeForm, treeCount,  } = useContext(CalculatorComponentContext)

    return (
       <div>
            <label>How many trees are on your property?</label>
                <button>-</button>
                <p>{treeCount}</p>
                <button onClick={addTreeForm}>+</button>
        </div>
    )
}

export default TreeQuantityForm