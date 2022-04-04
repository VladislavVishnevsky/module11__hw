import {describe, expect, it} from "@jest/globals";
import {getMonth} from "./index";


describe('month test', ()=> {
    it('test month (1-12)',()=>{
let result = getMonth(5)
        expect(result).toBe("May")
    })
    it('test month ( < 1 && > 12)',()=>{
let result = getMonth(0)
        expect(result).toBe(undefined)
    })
    it('test month with fraction of a number',()=>{
let result = getMonth(7.5)
        expect(result).toBe(undefined)
    })
    it('test month with empty of number',()=>{
let result = getMonth("")
        expect(result).toBe(undefined)
    })
    it('test month with other symbols',()=>{
let result = getMonth(A)
        expect(result).toBe(undefined)
    })
})