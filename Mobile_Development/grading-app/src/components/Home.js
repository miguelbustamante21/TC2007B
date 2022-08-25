
import "../index.css";
import { useState } from "react";
import Papa from "papaparse";

const Home = () => {
    
    // const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);
  
    //State to store the values
    const [values, setValues] = useState([]);
  
    const changeHandler = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];
  
            // Iterating data to get column name and their values
            results.data.map((d) => {
                rowsArray.push(Object.keys(d));
                valuesArray.push(Object.values(d));
                return 0;
            });
  
            // // Parsed Data Response in array format
            // setParsedData(results.data);
  
            // Filtered Column Names
            setTableRows(rowsArray[0]);
  
            // Filtered Values
            setValues(valuesArray);
            },
        });
    };

    const getEquivalence = (val) => {

        if (val >= 93) {
            return 'A';
        }
        else if(val >= 90 && val <= 92) {
            return 'A-';
        }
        else if(val >= 87 && val <= 89) {
            return 'B+';
        }
        else if(val >= 83 && val <= 86) {
            return 'B';
        }
        else if(val >= 80 && val <= 82) {
            return 'B-';
        }
        else if(val >= 77 && val <= 79) {
            return 'C+';
        }
        else if(val >= 73 && val <= 76) {
            return 'C';
        }
        else if(val >= 70 && val <= 72) {
            return 'C-';
        }
        else if(val >= 67 && val <= 69) {
            return 'D+';
        }
        else if(val >= 64 && val <= 66) {
            return 'D';
        }
        else if(val < 64) {
            return 'E';
        }
        else {
            return '';
        }
    };
  
    return (
        <div className="home">
            <div className="uploader-div">
                {/* File Uploader */}
                <input
                    type="file"
                    name="file"
                    onChange={changeHandler}
                    accept=".csv"
                    style={{ display: "block", margin: "10px auto" }}
                />
                <br />
                <br />
            </div>
            <div class="tables">
                <div class="table-1">
                    <table>
                        <thead>
                            <tr>
                            {tableRows.map((rows, index) => {
                                // Generate headers
                                return <th key={index}>{rows}</th>;
                            })}
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((value, index) => {
                                    // Generate table rows with every student object in the array 
                                    return ( 
                                        <tr key={index}>
                                            {value.map((val, i) => {
                                                return <td key={i}>{val}</td>;
                                            })}
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
                <div class="table-2">
                    <table>
                        <thead>
                            <tr>
                            {tableRows.map((rows, index) => {
                                // Generate headers
                                return <th key={index}>{rows}</th>;
                            })}
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((value, index) => {
                                // Generate table rows with every student object in the array
                                return ( 
                                    <tr key={index}>{value.map((val, i) => {
                                        console.log(value);
                                        if (i === 4) {
                                            // Will pass the grade value (val) with index of [4] of the student object (value) to obtain its equivalence
                                            return <td key={i}>{getEquivalence(val)}</td>;
                                        }
                                        return <td key={i}>{val}</td>;
                                    })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>               
                </div>
            </div>
        </div>
    );
}
 
export default Home;