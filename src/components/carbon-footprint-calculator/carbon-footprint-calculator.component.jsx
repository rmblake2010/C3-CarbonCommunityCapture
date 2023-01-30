const CarbonFootprintCalculator = ({ carbonFootprint, setCarbonFootprint, incrementCalcIndex }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarbonFootprint({ ...carbonFootprint, [name]: value });
  };

  const resetFormFields = (e) => {
    e.preventDefault();
    //console.log(carbonFootprint)
    setCarbonFootprint({
      carbonFootprint,
      electricCost: 0,
      heatingCost: 0,
      vehicleMPG: 0,
      milesTraveledPerYear: 0,
    });
  };

  const calculateCarbonFootprint = (e) => {
    e.preventDefault();
    const { electricCost, heatingCost, vehicleMPG, milesTraveledPerYear } =
      carbonFootprint;

    // Assume that the average emissions factor for electricity is 0.5 pounds CO2 per KWH
    const eletricEmissions = electricCost * 0.5;
    // Assume that the average emissions factor for natural gas is 12 pounds CO2 per CCF
    const heatingEmissions = heatingCost * 12;
    // Assume that the average emissions factor for gasoline is 19.6 pounds CO2 per gallon
    const vehicleEmissions = (milesTraveledPerYear / vehicleMPG) * 19.6;

    //Calculating total emissions
    const totalEmissions =
      eletricEmissions + heatingEmissions + vehicleEmissions
    setCarbonFootprint({ carbonFootprint, result: Math.ceil(totalEmissions) });
    incrementCalcIndex()
  };

  return (
    <div>
      <form className="flex justify-center flex-col">
        <h4>Carbon Footprint Calculator</h4>
        <hr className="my-2"></hr>
        <label>Annual Electric Usage</label>
        <input
          className="bg-gray-200 rounded-sm"
          placeholder="Kwh"
          name="electricCost"
          onChange={handleChange}
        ></input>
        <label>Annual Heating Costs</label>
        <input
          className="bg-gray-200 rounded-sm"
          placeholder="CCF"
          name="heatingCost"
          onChange={handleChange}
        ></input>
        <label>Vehicle Average MPG</label>
        <input
          className="bg-gray-200 rounded-sm"
          placeholder="Average MPG"
          name="vehicleMPG"
          onChange={handleChange}
        ></input>
        <label>Miles Travelled Per Year</label>
        <input
          className="bg-gray-200 rounded-sm"
          placeholder="Miles Traveled/Year"
          name="milesTraveledPerYear"
          onChange={handleChange}
        ></input>
        <hr />
        <div className="flex flex-col m-auto">
          <button
            className="rounded-full bg-blue-600 my-2 "
            type="submit"
            onClick={calculateCarbonFootprint}
          >
            Submit
          </button>
          <button
            className="rounded-full bg-red-600 mb-2 "
            onClick={resetFormFields}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarbonFootprintCalculator;
