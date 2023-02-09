import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {
  unitsOfTemperature = ['kelvin','celsius','fahrenheit','rankine'];
  unitsOfVolumes = ['liters','tablespoons','cubic-inches','cups','cubic-feet','gallons'];
  result1 = '';
  input1 = 0;
  unitOfInput1 = 'Kelvin';
  unitOfTarget1 = 'Kelvin';
  studentResponse1 = 0;

  result2 = '';
  input2 = 0;
  unitOfInput2 = '';
  unitOfTarget2 = '';
  studentResponse2 = 0;

  constructor() { }

  output1(){
  if(this.unitsOfTemperature.includes(this.unitOfInput1) && this.unitsOfTemperature.includes(this.unitOfTarget1)){
    this.result1 = this.temperatureConversion(this.input1,this.unitOfInput1,this.unitOfTarget1,this.studentResponse1);
  } else
  if(this.unitsOfVolumes.includes(this.unitOfInput1) && this.unitsOfVolumes.includes(this.unitOfTarget1)){
    this.result1 = this.volumeConversion(this.input1,this.unitOfInput1,this.unitOfTarget1,this.studentResponse1);
  } else {
    this.result1 = 'Invalid';
  }
  }
  output2(){
    if(this.unitsOfTemperature.includes(this.unitOfInput2.toLowerCase()) && this.unitsOfTemperature.includes(this.unitOfTarget2.toLowerCase())){
      this.result2 = this.temperatureConversion(this.input2,this.unitOfInput2.toLowerCase(),this.unitOfTarget2.toLowerCase(),this.studentResponse2);
    } else
    if(this.unitsOfVolumes.includes(this.unitOfInput2.toLowerCase()) && this.unitsOfVolumes.includes(this.unitOfTarget2.toLowerCase())){
      this.result2 = this.volumeConversion(this.input2,this.unitOfInput2.toLowerCase(),this.unitOfTarget2.toLowerCase(),this.studentResponse2);
    } else {
      this.result2 = 'Invalid';
    }
  }

  temperatureConversion(input:number,unitOfInput:string,unitOfTarget:string,studentResponse:number): string {
    if(unitOfInput==='kelvin' && unitOfTarget==='celsius'){ //1.kelvin to celsius
      return Math.round((input-273.15)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='celsius' && unitOfTarget==='kelvin'){ //2.celsius to kelvin
      return Math.round((input+273.15)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='fahrenheit' && unitOfTarget==='celsius'){ //3.fahrenheit to celsius
      return Math.round((input-32)*5/9*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='celsius' && unitOfTarget==='fahrenheit'){ //4.celsius to fahrenheit
      return Math.round((input*9/5+32)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='fahrenheit' && unitOfTarget==='kelvin'){ //5.fahrenheit to kelvin
      return Math.round(((input-32)*5/9+273.15)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='kelvin' && unitOfTarget==='fahrenheit'){ //6.kelvin to fahrenheit
      return Math.round(((input-273.15)*9/5+32)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='kelvin' && unitOfTarget==='rankine'){ //7.kelvin to rankine
      return Math.round((input*9/5)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='rankine' && unitOfTarget==='kelvin'){ //8.rankine to kelvin
      return Math.round(input*9/5*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='rankine' && unitOfTarget==='fahrenheit'){ //9.rankine to fahrenheit
      return Math.round((input-459.67)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='fahrenheit' && unitOfTarget==='rankine'){ //10.fahrenheit to rankine
      return Math.round((input+459.67)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='celsius' && unitOfTarget==='rankine'){ //11.celsius to rankine
      return Math.round((input*9/5+491.67)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    if(unitOfInput==='rankine' && unitOfTarget==='celsius'){ //12.rankine to celsius
      return Math.round(((input-491.67)*5/9)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect' 
    } 
    return 'InValid';
  };

  volumeConversion(input:number,unitOfInput:string,unitOfTarget:string,studentResponse:number): string {
    if(unitOfInput==='liters' && unitOfTarget==='gallons'){ //1. liters to gallons
      return Math.round((input*0.264)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='liters'){ //2. gallons to liters
      return Math.round((input/0.264)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='liters' && unitOfTarget==='tablespoons'){ //3. liters to tablespoons
      return Math.round((input*67.628)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='tablespoons' && unitOfTarget==='liters'){ //4. tablespoons to liters
      return Math.round((input/67.628)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='tablespoons'){ //5. gallons to tablespoons
      return Math.round((input*256)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='tablespoons' && unitOfTarget==='gallons'){ //6. tablespoons to gallons
      return Math.round((input/256)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='liters' && unitOfTarget==='cups'){ //7. liters to cups
      return Math.round((input*4.227)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cups' && unitOfTarget==='liters'){ //8. cups to liters
      return Math.round((input/4.227)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='cups'){ //9. gallons to cups
      return Math.round((input*16)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cups' && unitOfTarget==='gallons'){ //10. cups to gallons
      return Math.round((input/16)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='tablespoons'){ //11. cups to tablespoons
      return Math.round((input*16)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='tablespoons' && unitOfTarget==='cups'){ //12. tablespoons to cups
      return Math.round((input/16)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='liters' && unitOfTarget==='cubic-inches'){ //13. liters to cubic-inches
      return Math.round((input*61.0237)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='liters'){ //14. cubic-inches to liters
      return Math.round((input/61.0237)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='cubic-inches'){ //15. gallons to cubic-inches
      return Math.round((input*231)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-inches' && unitOfTarget==='gallons'){ //16. cubic-inches to gallons
      return Math.round((input/231)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-inches' && unitOfTarget==='tablespoons'){ //17. cubic-inches to tablespoons
      return Math.round((input*1.108)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='tablespoons' && unitOfTarget==='cubic-inches'){ //18. tablespoons to cubic-inches
      return Math.round((input/1.108)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cups' && unitOfTarget==='cubic-inches'){ //19. cups to cubic-inches
      return Math.round((input*14.4375)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-inches' && unitOfTarget==='cups'){ //20. cubic-inches to cups
      return Math.round((input/14.4375)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='liters' && unitOfTarget==='cubic-feet'){ //21. liters to cubic-feet
      return Math.round((input/28.317)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-feet' && unitOfTarget==='liters'){ //22. cubic-feet to liters
      return Math.round((input*28.317)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='gallons' && unitOfTarget==='cubic-feet'){ //23. gallons to cubic-feet
      return Math.round((input/7.48)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-feet' && unitOfTarget==='gallons'){ //24. cubic-feet to gallons
      return Math.round((input*7.48)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cups' && unitOfTarget==='cubic-feet'){ //25. cups to cubic-feet
      return Math.round((input/119.7)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-feet' && unitOfTarget==='cups'){ //26. cubic-feet to cups
      return Math.round((input*119.7)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-feet' && unitOfTarget==='tablespoons'){ //27. cubic-feet to tablespoons
      return Math.round((input*1915)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='tablespoons' && unitOfTarget==='cubic-feet'){ //28. tablespoons to cubic-feet
      return Math.round((input/1915)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-inches' && unitOfTarget==='cubic-feet'){ //29. cubic-inches to cubic-feet
      return Math.round((input/1728)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    if(unitOfInput==='cubic-feet' && unitOfTarget==='cubic-inches'){ //30. cubic-feet to cubic-inches
      return Math.round((input*1728)*10)/10===Math.round(studentResponse*10)/10?'Correct':'InCorrect'
    }
    return 'Invalid';
  }

}