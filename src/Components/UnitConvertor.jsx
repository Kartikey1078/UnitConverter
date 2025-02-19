import React, { useState, useEffect } from "react";
import './UnitConvertor.css';

function UnitConverter() {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");
  const [changes, setChanges] = useState("");
  const [conversion, setConversion] = useState("");

  useEffect(() => {
    if (value && changes && option) {
      convertUnit(value, changes,option);
    }
  }, [value, changes,option]);
 
  function convertUnit(value, changes,option) {
    let conversionFactors = {}
    switch (option) {
      case 'kg':
         conversionFactors = {
          g: value * 1000,
          mg: value * 1e6,
          lb: value * 2.20462,
          oz: value * 35.274,
          ton: value / 1000,
          stone: value / 6.35029,
          mcg: value * 1e9,
          grain: value * 15432.3584,
          carat: value * 5000,
          dram: value * 564.383,
        };
        break;
        case 'g':
          conversionFactors = {
            kg: value / 1000,        
            mg: value * 1000,        
            lb: value * 0.00220462,  
            oz: value * 0.035274,     
            ton: value / 1e6,        
            stone: value * 0.00015747,
            mcg: value * 1e6,        
            grain: value * 15.4324,  
            carat: value * 5,         
            dram: value * 0.564383    
          };
          break;
          case 'mg':
            conversionFactors = {
                kg: value / 1e6,
                g: value / 1000,
                lb: value * 2.20462e-6,
                oz: value * 3.5274e-5,
                ton: value / 1e9,
                stone: value * 1.57473e-7,
                mcg: value * 1000,
                grain: value * 0.0154324,
                carat: value * 0.005,
                dram: value * 0.000564383,
            };
            break;
        case 'lb':
            conversionFactors = {
                kg: value * 0.453592,
                g: value * 453.592,
                mg: value * 453592,
                oz: value * 16,
                ton: value / 2204.62,
                stone: value * 0.0714286,
                mcg: value * 4.53592e8,
                grain: value * 7000,
                carat: value * 2267.96,
                dram: value * 256,
            };
            break;
        case 'oz':
            conversionFactors = {
                kg: value * 0.0283495,
                g: value * 28.3495,
                mg: value * 28349.5,
                lb: value * 0.0625,
                ton: value / 35274,
                stone: value * 0.00446429,
                mcg: value * 2.83495e7,
                grain: value * 437.5,
                carat: value * 141.748,
                dram: value * 16,
            };
            break;
        case 'ton':
            conversionFactors = {
                kg: value * 1000,
                g: value * 1e6,
                mg: value * 1e9,
                lb: value * 2204.62,
                oz: value * 35274,
                stone: value * 157.473,
                mcg: value * 1e12,
                grain: value * 1.54324e7,
                carat: value * 5e6,
                dram: value * 564383,
            };
            break;
        case 'stone':
            conversionFactors = {
                kg: value * 6.35029,
                g: value * 6350.29,
                mg: value * 6.35029e6,
                lb: value * 14,
                oz: value * 224,
                ton: value / 157.473,
                mcg: value * 6.35029e9,
                grain: value * 98000,
                carat: value * 31751.5,
                dram: value * 3584,
            };
            break;
        case 'mcg':
            conversionFactors = {
                kg: value / 1e9,
                g: value / 1e6,
                mg: value / 1000,
                lb: value * 2.20462e-9,
                oz: value * 3.5274e-8,
                ton: value / 1e12,
                stone: value * 1.57473e-10,
                grain: value * 1.54324e-5,
                carat: value * 5e-6,
                dram: value * 5.64383e-7,
            };
            break;
        case 'grain':
            conversionFactors = {
                kg: value * 6.47989e-5,
                g: value * 0.0647989,
                mg: value * 64.7989,
                lb: value * 0.000142857,
                oz: value * 0.00228571,
                ton: value / 1.54324e7,
                stone: value * 1.02041e-5,
                mcg: value * 64798.9,
                carat: value * 0.323995,
                dram: value * 0.0365714,
            };
            break;
        case 'carat':
            conversionFactors = {
                kg: value / 5000,
                g: value / 5,
                mg: value * 200,
                lb: value * 0.000440925,
                oz: value * 0.00705479,
                ton: value / 5e6,
                stone: value * 3.1496e-5,
                mcg: value * 200000,
                grain: value * 3.08647,
                dram: value * 0.351613,
            };
            break;
        case 'dram':
            conversionFactors = {
                kg: value * 0.00177185,
                g: value * 1.77185,
                mg: value * 1771.85,
                lb: value * 0.00390625,
                oz: value * 0.0625,
                ton: value / 564383,
                stone: value * 0.000279017,
                mcg: value * 1.77185e6,
                grain: value * 27.3438,
                carat: value * 8.8596,
            };
            break;
      
    }

    let result = conversionFactors[changes];
    setConversion(result.toFixed(4));
  }

  return (
    <div className="flex justify-center items-center bg-gradient" style={{width:'100%'}}>
      <div className="card">
        <h3 className="text-center">Unit Converter</h3>
        
        <div className="input-group">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a number"
          />
        </div>

        <div className="input-group">
          <select onChange={(e) => setOption(e.target.value)}>
            <option value="">Select Unit</option>
            <option value="kg">Kilogram (kg)</option>
            <option value="g">Gram (g)</option>
            <option value="mg">Milligram (mg)</option>
            <option value="lb">Pound (lb)</option>
            <option value="oz">Ounce (oz)</option>
            <option value="ton">Metric Ton (t)</option>
            <option value="stone">Stone (st)</option>
            <option value="mcg">Microgram (mcg)</option>
            <option value="grain">Grain (gr)</option>
            <option value="carat">Carat (ct)</option>
            <option value="dram">Dram (dr)</option>
          </select>
        </div>

        <p>=</p>

        <div className="input-group">
          <input
            type="text"
            readOnly
            value={conversion}
            className="read-only"
          />
        </div>

        <div className="input-group">
          <select onChange={(e) => setChanges(e.target.value)}>
            <option value="">Select Unit</option>
            <option value="kg">Kilogram (kg)</option>
            <option value="g">Gram (g)</option>
            <option value="mg">Milligram (mg)</option>
            <option value="lb">Pound (lb)</option>
            <option value="oz">Ounce (oz)</option>
            <option value="ton">Metric Ton (t)</option>
            <option value="stone">Stone (st)</option>
            <option value="mcg">Microgram (mcg)</option>
            <option value="grain">Grain (gr)</option>
            <option value="carat">Carat (ct)</option>
            <option value="dram">Dram (dr)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default UnitConverter;
