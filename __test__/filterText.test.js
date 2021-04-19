const FilterText = require('../FilterText')

describe("Validate Text", () => {
    test('check if text exist :', () => {
        expect(FilterText()).toBe("Unknown");
      });
    
      test('remove space :', () => {
        expect(FilterText(" abdali ")).toBe("abdali");
      });
    
      test('text slice:', () => {
        expect(FilterText("abdali_dahir ")).toBe("abdali_d");
      });
    
      test('remove underscore from begining:', () => {
        expect(FilterText("_abdali_dahir")).toBe("abdali_");
      });
    
})