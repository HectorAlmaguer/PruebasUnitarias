
describe('Probando Jest',()=>{

    test('Prueba de objetos iguales',()=>{
        const datos1={
            nombre:'Hector Almaguer',
            edad:27
        };
        const datos2={
            nombre:'hector Almaguer',
            edad:27
        };

        expect(datos1).toEqual(datos2);
    })
});