import { expect, test } from "vitest";
import { selectRandomfromArray } from "../Utils";


test('select random',()=>{
    const arrayTest = [1,5,6]
     const value =  selectRandomfromArray(arrayTest)
     const isIncluded = arrayTest.includes(value)
     expect(isIncluded).toBe(true)
   

})