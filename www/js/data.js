var data = {
  "benefitQuestion" : [{
  "id" : 1,
  "text" : "Are you between 60 and 64 years old?",
  "checked" : false,
  "show": true
},{
  "id" : 2,
  "text" : "Do you have a disability?",
  "checked" : false,
  "show": true
},{
  "id" : 3,
  "text" : "Are you a Parent of child under 18?",
  "checked" : false,
  "show": true
},{
  "id" : 4,
  "text" : "Are you a Full Time Student?",
  "checked" : false,
  "show": true
},{
  "id" : 5,
  "text" : "Do you have First Nation Status?",
  "checked" : false,
  "show": true
},{
  "id" : 6,
  "text" : "Do you have Financial Need?",
  "checked" : false,
  "show": true
},{
  "id" : 7,
  "text" : "Are you over 65?",
  "checked" : false,
  "show": false
}],
"plans": [{
   "text" : "Canada Pension Plan",
   "priority": 1,
   "description": "<p>The Canada Pension Plan (CPP) retirement pension provides a monthly benefit to eligible Canadians</p><p>Eligibility Criteria:</p><ul><li>You must have worked and made at least one valid contribution (payment) to the CPP to qualify for a CPP retirement pension</li><li>The standard age to begin receiving the pension is 65</li><li>You can take a permanently reduced CPP retirement pension as early as age 60</li></ul>",
   "and" : [],
   "or" : [1, 7]
},{
   "text" : "Non-Insured Health Program",
   "priority": 1,
   "description": "<p>Health Canada provides eligible First Nations people and Inuit with a range of medically necessary health-related goods and services when they are not covered through private insurance plans or provincial/territorial health and social programs.</p><p>Non-Insured Health Benefits (NIHB) include prescription drugs, over-the-counter medication, medical supplies and equipment, short-term crisis counseling, dental care, vision care, and medical transportation</p><p>Eligibility Criteria:</p><p>An eligible recipient must be identified as a resident of Canada and one of the following:</p><ul><li>A registered Indian according to the Indian Act;</li><li>An Inuk recognized by one of the Inuit Land Claim organizations; or</li><li>An infant less than one year of age, whose parent is an eligible recipient.</li></ul>",
   "and" : [],
   "or" : [5]
},{
   "text" : "Assisted Living Program",
   "priority": 1,
   "description": "<p>This program assists First Nation members who have functional limitations due to age, health problems or a disability, in maintaining their independence and living in a safe and healthy environment.</p><p>Eligibility Criteria:</p><p>The Assisted Living Program is available to all individuals residing on-reserve, or ordinarily resident on-reserve, who have been formally assessed by a health care professional as requiring social support services</p>",
   "and" : [],
   "or" : [5]
},{
   "text" : "The Trillium Drug Program",
   "priority": 1,
   "description": "<p>The TDP helps people who have high prescription drug costs relative to their household income.</p><p>You may qualify for the Trillium Drug Program if:</p><ul><li>You have a valid Ontario health card</li><li>You live in Ontario</li></ul><p>AND</p><p>You are not covered under ODB as:</p><ul><li>a senior over 65 years of age</li><li>Someone who receives financial help through Ontario Works Ontario Disability Support Program</li><li>a resident of a long-term care home or home for special care</li><li>someone who receives home care services</li></ul><p>OR</p><p>You don't have private health insurance or your private insurance does not cover 100% of your prescription drug costs.</p>",
   "and" : [],
   "or" : [6]
},{
   "text" : "Income Assistance Program",
   "priority": 1,
   "description": "<p>This program provides funding to First Nation communities to help their eligible members meet basic needs, such as food, clothing and shelter.</p><p>Ask patient to contact their local Aboriginal Affairs and Northern Development office for applications</p>",
   "and" : [],
   "or" : [5]
},{
  "text" : "Ontario Works",
   "priority": 1,
   "description": "<p>If you are in temporary financial need, Ontario Works can provide you with money and help you find a job.</p><p>Eligibility Criteria:</p><p>To be eligible to receive help from Ontario Works, you must:</p><ul><li>Live in Ontario</li><li>Need money right away to help pay for food and housing costs</li><li>Be willing to take part in activities that will help you find a job.</li></ul>",
   "and" : [],
   "or" : [6]
},{
  "text" : "Employment Insurance",
   "priority": 1,
   "description": "<p>Employment Insurance (EI) provides Regular Benefits to individuals who lose their jobs through no fault of their own (for example, due to shortage of work, seasonal or mass lay-offs) and are available for and able to work, but can't find a job</p><p>Eligibility Criteria:</p><p>You may be entitled to receive EI regular benefits if you:</p><ul><li>are employed in insurable employment;</li><li>lost your employment through no fault of your own;</li><li>have been without work and without pay for at least seven consecutive days in the last 52 weeks;</li><li>have worked for the required number of insurable hours in the last 52 weeks or since the start of your last EI claim, whichever is shorter;</li><li>are ready, willing, and capable of working each day; and</li><li>are actively looking for work (you must keep a written record of employers you contact, including when you contacted them).</li></ul><p>You may not be entitled to receive EI regular benefits if you:</p><ul><li>voluntarily left your employment without just cause;</li><li>were dismissed for misconduct; or</li><li>are unemployed because you are directly participating in a labour dispute (strike, lockout, or other type of dispute).</li></ul>",
   "and" : [],
   "or" : [6]
},{
   "text" : "Child Disability Benefit",
   "priority": 1,
   "description": "<p>This program provides a non-taxable supplement to low- and moderate-income families to help them with the costs of raising children under 18 who have a severe and prolonged mental or physical impairment.</p><p>Eligibility Criteria:</p><p>Not all children with disabilities are eligible for the disability amount</p><p>To be eligible:</p><ul><li>a child must have a severe and prolonged impairment in physical or mental function</li><li>Impairment is prolonged if it has lasted, or is expected to last, for a continuous period of at least 12 months</li><li>A qualified practitioner must certify on Form T2201, Disability Tax Credit Certificate, that the child's impairment meets certain conditions</li></ul>",
   "and" : [],
   "or" : [3]
},{
   "text" : "Assistance for Children with Severe Disabilities",
   "priority": 1,
   "description": "<p>This program helps parents with some of the extra costs of caring for a child who has a severe disability to help the child live as normal a life as possible at home and in the community.</p><p>Eligibility Criteria:</p><ul><li>To qualify for this program, financial and medical criteria must be met.</li><li>Child must be under 18 years of age and live at home with a parent or legal guardian.</li><li>The child must have a severe disability that results in a functional loss</li></ul>",
   "and" : [],
   "or" : [3]
},{
   "text" : "Employment Insurance Family Supplement",
   "priority": 1,
   "description": "<p>The Family Supplement is a feature of Employment Insurance (EI) that provides additional benefits to low-income families with children</p><p>Eligibility Criteria:</p><ul><li>Be in receipt of Employment insurance</li><li>If you or your spouse receive the Canada Child Tax Benefit (CCTB) then you are eligible to receive the EI Family Supplement on your family net income up to and including $25,921 per year.</li></ul>",
   "and" : [],
   "or" : [3]
 },{
   "text" : "Canada Child Tax Benefit",
   "priority": 1,
   "description": "<p>This benefit is a tax-free monthly payment made to eligible families with children under 18</p><p>Eligibility Criteria:</p><p>To be eligible, you must meet all the following conditions:</p><ul><li>Live with the child, and the child must be under the age of 18</li><li>Be primarily responsible for the care and upbringing of the child</li><li>Reident of Canada; and</li><li>Spouse or common-law partner must be a Canadian citizen, a permanent resident, a protected person, or a temporary resident who has lived in Canada for the previous 18 months</li></ul>",
   "and" : [],
   "or" : [3]
},{
   "text" : "Ontario Special Bursary Program",
   "priority": 1,
   "description": "<p>The Ontario Special Bursary Program (OSBP) provides aid to students from low-income families to assist with tuition and compulsory fees, book and equipment, travel and child care costs</p><p>Eligibility Criteria:</p><ul><li>Canadian citizen, permanent resident, or Protected Person as defined in the Immigration and Refugee Protection Act (Canada);</li><li>Ontario resident;</li><li>Low family income;</li><li>Not receiving a Canada-Ontario Integrated Student Loan or a Part-Time Canada Student Loan;</li><li>Taking course at least four weeks in length</li></ul>",
   "and" : [],
   "or" : [4]
},{
   "text" : "The Off-Campus Work Permit Program",
   "priority": 1,
   "description": "<p>The Off-Campus Work Permit Program allows certain foreign students to work off campus while completing their studies.</p><p>As of June 1, 2014, you may qualify to work off campus without a work permit. </p><p>Eligibility Criteria:</p><ul><li>work up to 20 hours per week during regular academic sessions and </li><li>work full-time during scheduled breaks, such as the winter and summer holidays or spring break.</li></ul><p>To qualify, you must:</p><ul><li>have a valid study permit,</li><li>be a full-time student,</li><li>be enrolled at post-secondary level and</li><li>Studying in an academic, vocational or professional training program that leads to a degree, diploma or certificate that is at least six months in duration.</li></ul>",
   "and" : [],
   "or" : [4]
},{
   "text" : "Federal Student Work Experience Program",
   "priority": 3,
   "description": "<p>FSWEP provides full-time students valuable, hands-on work experience related to their field of study and allows for a wealth of learning opportunities. Students obtain fair and equal access to job opportunities across the country. Although students are not required to have previous work experience to apply, they must meet the program's eligibility criteria.</p><p>Eligibility Criteria:</p><p>Students are only eligible for jobs offered through the Federal Student Work Experience Program (FSWEP), if they are:</p><ul><li>Full-time secondary or post-secondary students in a recognized institution;<li>Currently recognized as having full-time student status by the academic institution in which they are presently enrolled;</li><li>Returning to full-time studies for their next academic term</li><li>Registered in the FSWEP national inventory; and</li><li>The minimum age to work in the province or territory where the job exists.</li></ul>",
   "and" : [],
   "or" : [4]
},{
   "text" : "Child Care Bursary",
   "priority": 1,
   "description": "<p>Child-care costs for your first eligible child and second eligible child are included in your assessment of Canada-Ontario Integrated Student Loan funding as well as the Canada Study Grant for Students with Dependents.</p><p>Eligibility criteria:</p><p>Students who have three or more children in the following categories, with each child having child care costs:</p><ul><li>11 years of age or younger, and/or </li><li>12 years of age or older and in need of child care because they have a disability, illness, or injury.</li></ul>",
   "and" : [4,3],
   "or" : []
},{
   "text" : "University College Entrance Preparation Program",
   "priority": 1,
   "description": "<p>This program is intended to provide financial assistance to Status Indian and Inuit students enrolled in university or college entrance programs to help them achieve the academic level required to enter degree or diploma programs.</p><p>Eligibility Criteria:</p><ul><li>Students must be Registered Status Indians</li><li>Residing in Canada for 12 consecutive months prior to the date of application for funding</li><li>Students are required to obtain a statement from the post-secondary institution offering the program which confirms that the UCEP program will provide the student with the necessary courses to attain the academic level for university or college entrance.</li></ul>",
   "and" : [4,5],
   "or" : []
},{
   "text" : "Post-Secondary Student Support Program",
   "priority": 1,
   "description": "<p>This program provides financial assistance to Status Indian and Inuit students who are enrolled in eligible post-secondary programs, which includes: community college and CEGEP diploma or certificate programs; undergraduate programs; and advanced or professional degree programs.</p><p>Eligibility Criteria:</p><ul><li>Students must be Registered Status Indians</li><li>Residing in Canada for 12 consecutive months prior to the date of application for funding</li><li>Students must be enrolled in an eligible post-secondary education institution and must maintain continued satisfactory academic standing within that institution</li></ul>",
   "and" : [4,5],
   "or" : []
},{
   "text" : "Ontario Student Assistance Program",
   "priority": 1,
   "description": "<p>This program provides financial assistance to help students meet the costs of post-secondary education.</p><p>Eligibility Criteria:</p><p>OSAP is open to <b>Ontario residents</b> who are a:</p><ul><li>Canadian citizen</li><li>permanent resident or</li><li>protected person</li></ul><p>When determining if you're eligible, the government considers:</p><ul><li>your status (e.g., married or a dependent student)</li><li>the school you attend/will attend (a school needs to be approved for OSAP)</li><li>program of study</li><li>course load (full or part-time)</li><li>study period</li><li>academic progress</li><li>education expenses</li><li>you and your family’s financial contribution</li></ul>",
   "and" : [],
   "or" : [4]
},{
   "text" : "Bursary for Students with Disabilities",
   "priority": 1,
   "description": "<p>This bursary program offers funding to eligible students with disabilities who are enrolled in a recognized post-secondary institution</p><p>Eligibility Criteria:</p><p>Full-time and part-time students with either permanent or temporary disabilities who have disability-related educational costs for services or equipment that are not covered by another agency or service and are required for postsecondary participation.</p>",
   "and" : [4, 2],
   "or" : []
},{
   "text" : "Ontario Disability Support Program",
   "priority": 1,
   "description": "<p>The Ontario Disability Support Program Income Support helps people with disabilities who are in financial need pay for living expenses, like food and housing</p><p>Eligibility Criteria:</p><p>You may qualify for Income Support if you:</p><ul><li>are 18 years of age or older</li><li>live in Ontario</li><li>are in financial need, and</li><li>are found to be a 'person with a disability' as defined under the Ontario Disability Support Program Act.</li></ul><p><b>*Remind patients that there are lawyers who specialize in assisting with applications for the ODSP and can assist with rejected applications.</b></p>",
   "and" : [],
   "or" : [2]
},{
   "text" : "Assistive Devices Program",
   "priority": 3,
   "description": "<p>Financial assistance to help Ontario residents with long-term physical disabilities obtain personalized assistive devices essential for independent living.</p><p>Eligibility Criteria:</p><p>An individual who has a chronic illness or dysfunction that requires long-term therapy may be eligible for funding. The types of equipment funded includes:</p><ul><li>Communication Devices</li><li>Diabetic Supplies</li><li>Enteral Feeding Equipment/Supplies</li><li>Hearing Devices</li><li>Orthotic Devices</li><li>Ostomy Supplies</li><li>Pressure Modification Devices</li><li>Prosthetic</li><li>Home oxygen</li></ul>",
   "and" : [],
   "or" : [2]
},{
   "text" : "Disability Tax Credit",
   "priority": 2,
   "description": "<p>The DTC is a non-refundable tax credit used to reduce income tax payable for eligible individuals.</p><p>Eligibility Criteria:</p><ul><li>Your patient must have an impairment in physical or mental functions that is prolonged, which means it has lasted or is expected to last for a continuous period of at least 12 months.</li><li>Your patient's impairment in physical or mental functions must be severe and it must restrict him or her all or substantially all of the time (at least 90% of the time).</li><li>Your patient's severe and prolonged impairment in physical or mental functions must be certified by a qualified practitioner</li></ul>",
   "and" : [2,1],
   "or" : []
},{
   "text" : "Accessible Parking Permit",
   "priority": 3,
   "description": "<p>The Accessible Parking Permit (APP) is issued to individuals and entitles the vehicle in which it is displayed to be parked in a designated accessible parking space.</p><p>Eligibility Criteria:</p><p>To get an accessible parking permit, your healthcare practitioner must certify that you have one or more of the following health conditions:</p><ul><li>cannot walk without help from another person, brace, cane, crutch, a lower limb prosthetic device</li><li>need to use a wheelchair</li><li>forced expiratory volume is less than 1 litre per second</li><li>portable oxygen is a medical necessity</li><li>cardiovascular disease impairment classified as class 3 or 4 according to the Canadian cardiovascular standard or American Heart Association</li><li>vision is 20/2000 or poorer in the better eye with corrective lenses</li><li>the greatest diameter of the field of vision in both eyes is 20 degrees or less</li><li>a condition or functional impairment that severely limits your mobility</li></ul>",
   "and" : [2],
   "or" : [1,7]
},{
   "text" : "Canada Pension Plan Disability Benefit",
   "priority": 1,
   "description": "<p>The Canada Pension Plan (CPP) disability benefit is a taxable monthly payment that is available to people who have contributed to the CPP and who are not able to work regularly at any job because of a disability.</p><p>Eligibility Criteria:</p><p>To qualify for a CPP disability benefit, you must:</p><ul><li>have a severe and prolonged disability</li><li>be under the age of 65</li><li>meet the CPP contribution requirements.</li></ul>",
   "and" : [],
   "not" : [7],
   "or" : [2]
},{
   "text" : "Ontario Senior Homeowners' Property Tax Grant",
   "priority": 2,
   "description": "<p>This tax grant is an annual amount provided to help offset property taxes for seniors with low and moderate incomes who own their own homes.</p><p>Eligibility Criteria:</p><p>You may qualify for the grant if:</p><ul><li>you or your spouse/common-law partner paid Ontario property tax in the previous year</li><li>you meet the income requirements</li><li>as of December 31 of the previous year, you:<ul><li>were 64 years of age or older</li><li>were a resident of Ontario</li><li>owned and occupied your principal residence (or your spouse/common-law partner did).</li></ul></li></ul>",
   "and" : [],
   "or" : [1,7]
},{
   "text" : "Allowance program",
   "priority": 2,
   "description": "<p>Allowance is a monthly benefit for low-income seniors (aged 60-64) whose spouse or common-law partner is eligible for, or currently receiving, the Old Age Security (OAS) pension and the Guaranteed Income Supplement (GIS).</p><p>Eligibility Criteria:</p><p>You qualify for the Allowance if you meet all of the following conditions:</p><ul><li>you are aged 60 to 64 (includes the month of your 65th birthday);</li><li>your spouse or common-law partner receives an Old Age Security pension (OAS) and is eligible for the Guaranteed Income Supplement (GIS);</li><li>you are a Canadian citizen or a legal resident;</li><li>you reside in Canada and have resided in Canada for at least 10 years since the age of 18;</li><li>your annual income (or in a case of a couple, your combined income) is less than the maximum annual income.</li></ul>",
   "and" : [],
   "or" : [1]
},{
   "text" : "Ontario Energy and Property Tax Credit",
   "priority": 3,
   "description": "<p>This credit helps low- to moderate-income individuals with property taxes and the sales tax on energy. The credit is part of the Ontario Trillium Benefit.</p><p>Eligibility Criteria:</p><p>You may qualify for the 2015 credit if, on December 31, 2014, you resided in Ontario, and:</p><ul><li>rent or property tax for your principal residence was paid by or for you for 2014</li><li>you lived in a student residence</li><li>you lived in a long-term care home, or</li><li>you lived on a reserve and home energy costs were paid by or for you for your principal residence on the reserve for 2014, and</li><li>at the beginning of the payment month, you are:</li><li>a resident of Ontario, and</li><li>18 years of age or older, or have or previously had a spouse or common-law partner, or are a parent who lives or previously lived with your child.</li></ul>",
   "and" : [],
   "or" : [1,2,3,4,5,6,7]
},{
   "text" : "Allowance for the Survivor",
   "priority": 2,
   "description": "<p>The Allowance for the Survivor is a benefit available to people who have a low income, who are living in Canada, and whose spouse or common-law partner is deceased.</p><p>Eligibility Criteria:</p><ul><li>Aged 60 to 64 </li><li>Canadian citizen or a legal resident;</li><li>Reside in Canada and have resided in Canada for at least 10 years since the age of 18</li><li>Spouse or common-law partner has died and you have not remarried or entered into a common-law relationship;</li><li>Annual income is less than the maximum annual income in the application form</li></ul>",
   "and" : [],
   "or" : [1]
},{
   "text" : "Ontario Guaranteed Annual Income System",
   "priority": 2,
   "description": "<p>GAINS ensures a guaranteed minimum income for Ontario seniors by providing monthly payments to qualifying pensioners. The monthly GAINS payments are on top of the federal Old Age Security (OAS) pension and the Guaranteed Income Supplement (GIS) payments you may receive.</p><p>Eligibility Criteria:</p><p>You may qualify for GAINS payments if:</p><ul><li>Live in Ontario</li><li>65 or older</li><li>Receiving the federal OAS and the federal GIS</li><li>Have lived in Ontario for the past 12 months, or for a total of 20 years since turning 18</li><li>Have 10 or more years of Canadian residency, and your total income from all sources is below the level guaranteed by the province.</li></ul>",
   "and" : [],
   "or" : [7]
},{
   "text" : "Guaranteed Income Supplement",
   "priority": 1,
   "description": "<p>The Guaranteed Income Supplement (GIS) provides a monthly non-taxable benefit to Old Age Security (OAS) recipients who have a low income and are living in Canada.</p><p>Eligibility Criteria:</p><p>You qualify for the Guaranteed Income Supplement if you meet all of the following conditions:</p><ul><li>Legal resident of Canada</li><li>Receiving an Old Age Security pension</li><li>Annual income (or in the case of a couple, your combined income) is lower than the maximum annual income set out in the application forms</li></ul>",
   "and" : [],
   "or" : [7]
},{
   "text" : "Ontario Drug Benefit Program",
   "priority": 1,
   "description": "<p>The Ontario Drug Benefit (ODB) Program covers most of the cost of 3,800 prescription drug products in the formulary</p><p>Eligibility Criteria:</p><p>You are eligible for ODB program benefits if you live in Ontario, you have a valid <u>Ontario health card</u> and at least one of these statements applies to you :</p><ul><li>I am 65 years of age or older</li><li>I live in a Long-Term Care Home or a Home for Special Care</li><li>I am enrolled in the Home Care program</li><li>I have high drugs costs relative to my income and am registered in the Trillium Drug Program</li><li>I receive social assistance through Ontario Works or the sSupport Program.</li></ul>",
   "and" : [],
   "or" : [7]
},{
   "text" : "Old Age Security pension",
   "priority": 1,
   "description": "<p>The Old Age Security (OAS) pension is a monthly payment available to most people 65 years of age and older</p><p>Eligibility Criteria:</p><ul><li>65 years old or older</li><li>Canadian citizen or a legal resident at the time we approve your Old Age Security pension application</li><li>Resided in Canada for at least 10 years after turning 18</li></ul>",
   "and" : [],
   "or" : [7]
}],
"printout": "<p>To access the application forms:</p><ul><li>Visit your local Service Ontario Office</li><li>Speak to your family doctor</li><li>Speak to a social worker</li><li>Use tools such as Google to search with the Benefit Program title and “application form” to obtain more information and an electronic copy of the application form. </li></ul><p>For more information about benefit programs, please visit <a href='www.canadabenefits.gc.ca' target='__blank'>www.canadabenefits.gc.ca</a></p>",
"researcher_email" : "sameer@sixtooth.com"
};