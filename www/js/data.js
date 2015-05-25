var data = {
 "categories" : [{
  "id" : 1,
  "text" : "Person age over 65",
  "plans": [1, 2, 3, 4, 5, 7, 9]
  },
  {
  "id" : 2,
  "text" : "Person age between 60 - 64",
  "plans": [1, 6, 7, 8, 9]
  },
  {
  "id" : 3,
  "text" : "Disabilty",
  "plans": [1, 2, 3, 4, 5, 7, 9]
  },
  {
  "id" : 4,
  "text" : "Parent of child under 18",
  "plans": [7]
  },
  {
  "id" : 5,
  "text" : "Full Time Student",
  "plans": [7]
  },
  {
  "id" : 6,
  "text" : "First Nation Status",
  "plans": [7]
  },
  {
  "id" : 7,
  "text" : "Financial Need",
  "plans": [7]
  }],

  "plans": [{
   "id" : 1,
   "text" : "Canada Pension Plan",
   "priority": 1,
   "description": "The Canada Pension Plan (CPP) retirement pension provides a monthly benefit to eligible Canadians",
   "criteria": [
   "You must have worked and made at least one valid contribution (payment) to the CPP to qualify for a CPP retirement pension",
   "The standard age to begin receiving the pension is 65",
   "You can take a permanently reduced CPP retirement pension as early as age 60"
   ]
   },{
    "id" : 2,
    "text" : "Old Age Security pension",
   "priority": 1,
   "description": "The Old Age Security (OAS) pension is a monthly payment available to most people 65 years of age and older",
   "criteria": [
   "65 years old or older",
   "Canadian citizen or a legal resident at the time we approve your Old Age Security pension application",
   "Resided in Canada for at least 10 years after turning 18"
   ]
   }, {
    "id" : 3,
    "text" : "Ontario Drug Benefit Program",
   "priority": 1,
   "description": "The Ontario Drug Benefit (ODB) Program covers most of the cost of 3,800 prescription drug products in the formulary",
   "criteria": [
   "You are eligible for ODB program benefits if you live in Ontario",
   "you have a valid Ontario health card"
   ],
   "oneOf" : [
   "I am 65 years of age or older",
   "I live in a Long-Term Care Home or a Home for Special Care",
   "I am enrolled in the Home Care program",
   "I have high drugs costs relative to my income and am registered in the Trillium Drug Program",
   "I receive social assistance through Ontario Works or the sSupport Program."
   ]
   }, {
    "id" : 4,
    "text" : "Guaranteed Income Supplement",
    "priority": 1,
    "description": "The Guaranteed Income Supplement (GIS) provides a monthly non-taxable benefit to Old Age Security (OAS) recipients who have a low income and are living in Canada.",
    "criteria": [
    "Legal resident of Canada",
    "Receiving an Old Age Security pension",
    "Annual income (or in the case of a couple, your combined income) is lower than the maximum annual income set out in the application forms"
    ]
   }, {
    "id" : 5,
    "text" : "Ontario Guaranteed Annual Income System",
    "priority": 2,
    "description": "GAINS ensures a guaranteed minimum income for Ontario seniors by providing monthly payments to qualifying pensioners. The monthly GAINS payments are on top of the federal Old Age Security (OAS) pension and the Guaranteed Income Supplement (GIS) payments you may receive.",
    "criteria": [
    "Live in Ontario",
    "65 or older",
    "Receiving the federal OAS and the federal GIS",
    "Have lived in Ontario for the past 12 months, or for a total of 20 years since turning 18",
    "Have 10 or more years of Canadian residency, and your total income from all sources is below the level guaranteed by the province."
    ]
    }, {
    "id" : 6,
    "text" : "Allowance for the Survivor",
    "priority": 2,
    "description": "The Allowance for the Survivor is a benefit available to people who have a low income, who are living in Canada, and whose spouse or common-law partner is deceased.",
    "criteria": [
    "Aged 60 to 64",
    "Canadian citizen or a legal resident",
    "Reside in Canada and have resided in Canada for at least 10 years since the age of 18",
    "Spouse or common-law partner has died and you have not remarried or entered into a common-law relationship",
    "Annual income is less than the maximum annual income in the application form"
    ]
    }, {
    "id" : 7,
    "text" : "Ontario Energy and Property Tax Credit",
    "priority": 3,
    "description": "This credit helps low - to moderate-income individuals with property taxes and the sales tax on energy. The credit is part of the Ontario Trillium Benefit.",
    "criteria": [
    "rent or property tax for your principal residence was paid by or for you for 2014",
    "you lived in a student residence",
    "you lived in a long-term care home",
    "you lived on a reserve and home energy costs were paid by or for you for your principal residence on the reserve for 2014",
    "18 years of age or older, or have or previously had a spouse or common-law partner, or are a parent who lives or previously lived with your child."
    ]
    }, {
    "id" : 8,
    "text" : "Allowance program",
    "priority": 2,
    "description": "Allowance is a monthly benefit for low-income seniors (aged 60-64) whose spouse or common-law partner is eligible for, or currently receiving, the Old Age Security (OAS) pension and the Guaranteed Income Supplement (GIS).",
    "criteria": [
    "you are aged 60 to 64",
    "your spouse or common-law partner receives an Old Age Security pension (OAS) and is eligible for the Guaranteed Income Supplement (GIS)",
    "you lived in a long-term care home",
    "you are a Canadian citizen or a legal resident",
    "you reside in Canada and have resided in Canada for at least 10 years since the age of 18;"
    ]
    }, {
    "id" : 9,
    "text" : "Ontario Senior Homeowners' Property Tax Grant",
    "priority": 2,
    "description": "This tax grant is an annual amount provided to help offset property taxes for seniors with low and moderate incomes who own their own homes.",
    "criteria": [
    "you or your spouse/common-law partner paid Ontario property tax in the previous year",
    "were a resident of Ontario"
    ]
    }, {
    "id" : 10,
    "text" : "Canada Pension Plan Disability Benefit' Property Tax Grant",
    "priority": 1,
    "description": "The Canada Pension Plan (CPP) disability benefit is a taxable monthly payment that is available to people who have contributed to the CPP and who are not able to work regularly at any job because of a disability.",
    "criteria": [
    "have a severe and prolonged disability",
    "be under the age of 65",
    "meet the CPP contribution requirements."
    ]
    }]
};