import React, { useEffect } from 'react'
import WineData from './assets/WineData.json';

function WineSet() {

    // console.log(WineData.Alcohol);
    // const output = WineData.map(user => user.Alcohol);
    // console.log(output);

// -----------------------------------------------------------------------------

   
    const numOfAlchol = [...new Set(WineData.map(item => item.Alcohol))]
    console.log(numOfAlchol);



   

    var data;
    var meanArr = [];
    var medianArr = [];
    var modeArr = [];

    const mean = function(...numOfAlchol){    
        
      

        for(let i of numOfAlchol){
            let newArray = WineData.filter(function (el) {
                return el.Alcohol == i
               }
            );
            // console.log(newArray);
            const oloutput = newArray.map(elem => elem.Flavanoids);
            const output = oloutput.sort().map(Number);

            // console.log(output);

         


        let Flavanoidssum = 0;

         // Calculation the sum using forEach
         output.forEach(x => {
         Flavanoidssum += x;
         });

         let mean = Math.floor(Flavanoidssum/output.length *100)/100;
         meanArr.push(mean);
        //  console.log(meanArr);



         //--------------Median-------------

         let a = output;
         let n = output.length;
         let middle = Math.floor(output.length/2);
        //  console.log("middle",middle);
         if (n % 2 == 0){
            medianArr.push((output[middle - 1] + output[middle]) / 2)
         }
         else{
            medianArr.push(output[middle]);
         }
        
        //  console.log("Median",medianArr);


         //------------------------Mode--------------

             const map = new Map();
            let maxFreq = 0;
            let mode;
          
            for(const item of output) {
              let freq = map.has(item) ? map.get(item) : 0;
              freq++;
          
              if(freq > maxFreq) {
                maxFreq = freq;
                mode = item;
              }
              
              map.set(item, freq);
            }

            modeArr.push(mode);   
            
           
    
    
        } 

        meanArr.unshift("Flavanoids Mean");
        medianArr.unshift("Flavanoids Median");
        modeArr.unshift("Flavanoids Mode");

        console.log("Mean",meanArr);
        console.log("Median",medianArr);
        console.log("Mode",modeArr);  

        data = [...meanArr, ...medianArr, ...modeArr]
        
        console.log(data);
        
    }

    mean.apply(null, numOfAlchol);

    console.log(data);


    // function median(...numOfAlchol){
    //     let meanArr = [];
    // }




// -----------------------------------------------------------------------



    

    // let newArray = WineData.filter(function (el) {
    //     return el.Alcohol == 3 
    //    }
    // );

    // var Alc_One = newArray;

    // // document.write(JSON.stringify(Alc_One));

    // const output = Alc_One.map(elem => elem.Flavanoids);
    // var numberArray = output.map(Number);
    // const validNumbers = output.filter(Number)
//   console.log("Valid",numberArray);
//   console.log(validNumbers.length);

//   let FlavanoidsOnesum = 0;
 
// // Calculation the sum using forEach
// validNumbers.forEach(x => {
//     FlavanoidsOnesum += x;
// });
 
// // Prints: 44
// console.log("Sum is " + Math.round(FlavanoidsOnesum));

// let mean_one = FlavanoidsOnesum/output.length;
// console.log(`Mean three is : ${mean_one}`);

let AlcoholArr = numOfAlchol;
AlcoholArr = AlcoholArr.map(i => 'Class ' + i);
AlcoholArr.unshift("Measure");
console.log("Alcohol Array",AlcoholArr);

// const data = [...AlcoholArr, ...meanArr, ...medianArr, ...modeArr]

// console.log(data);

// let fixedArr = ["Measure","Flavanoids Mean", "Flavanoids Median", "Flavanoids Mode"]

  return (
    <div>
        <h2>Flavanoids Measure</h2>
       
       <table cellPadding="0" cellSpacing="0" class="sortable" id="table">
    <thead>
        
        {
                   AlcoholArr.map((val,i)=>
                   <th key={i}>
                    <tr>{val}</tr>
                   </th>
                   ) 
                }

    </thead>
    <tbody>
<tr>
    {
                   meanArr.map((val,i)=>
                 
                    <td>{val}</td>
                 
                   ) 
                }
</tr>
<tr>
    {
                   medianArr.map((val,i)=>
                   
                    <td>{val}</td>
                   
                   ) 
                }
</tr>

<tr>
    {
                   modeArr.map((val,i)=>
                 
                    <td>{val}</td>
                  
                   ) 
                }
</tr>

    
    </tbody>
</table>


    </div>

// WineData.map(()=>{

// })


  )
}

export default WineSet