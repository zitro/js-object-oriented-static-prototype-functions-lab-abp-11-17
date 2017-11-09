const expect = chai.expect;

describe('IcebreakerResponse', function() {
  describe(".BatchCreate()", function(){
    it('accepts an array of emails and returns instances of IcebreakerResponses', function(){
      const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]
      const icebreakerResponses = IcebreakerResponse.BatchCreate(emails)

      expect(icebreakerResponses[0].email).to.eql("avi@flatironschool.com")
      expect(icebreakerResponses[1].email).to.eql("grace@hopper.com")
      expect(icebreakerResponses[2].email).to.eql("alan@xparc.com")
    })
  })
})
