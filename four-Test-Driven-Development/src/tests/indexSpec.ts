import countries from "../index";

describe('Test Driven Development', () => {
    it("should get basic data on the country canada", async () => {
        const data = await countries.getCountry('canada');
        expect(data).toEqual({
          capital: 'Ottawa',
          region: 'Americas',
          numericCode: '124'
        });
      });
      
      /** Add test for getRegionCountries function here */
      it("should get the countries of the NAFTA region", async () => {
          const data = await countries.getRegionCountries('NAFTA');
          expect(data).toEqual(["Canada", "Mexico", "United States of America"]);
      })
      
      
      it("should get capitals of NAFTA countries", async () => {
        const data = await countries.getRegionCapitals('NAFTA');
        expect(data).toEqual([
          'Ottawa', 'Mexico City', 'Washington, D.C.'
        ]);
      });
})