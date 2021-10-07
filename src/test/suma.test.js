import {suma} from '../js/suma';
/* const suma=require('../js/suma'); */

test ('adds 1 + 2 to equal 3',()=>{
    expect(suma(1,2)).toBe(3);
});
