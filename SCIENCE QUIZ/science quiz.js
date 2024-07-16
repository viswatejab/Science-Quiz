const quiz = [
    {
      q: "Do you know what an atom's atomic number is?",
      options: [" Number of protons "," Number of Neutrons "," Number of protons + Number of neutrons "," Number of neutrons - Number of protons "],
      answer: 0,
    }, 
    {
      q: " What does the acid that lemons contain by its name go by? ",
      options: [" Malic acid "," Tartaric acid "," Benzoic acid "," Citric acid "],
      answer: 3,
    },
    {
        q: " Is it accurate to represent p/q as 0? ",
        options: [" Yes "," No "],
        answer: 0,
      },
      {
        q: " What other name does Thomson's model of the atom go by? ",
        options: [" Plum pudding Model "," Watermelon Model "," Raisin Pudding "," Electron Cloud Model "],
        answer: 1,
      },
      {
        q: " Which of the organelles below is also referred to as the suicide bag of the cell? ",
        options: [" Ribosome "," Vacuole "," Lysosome "," Cytosol "],
        answer: 2,
      },
      {
        q: " What is the man's speed in the event that he covers a distance of 5 meters in 10 seconds? ",
        options: [" 1 metre per second "," 1/2 metre per second "," 2 metre per second "," 2.5 metre per second "],
        answer: 1,
      },
      {
        q: " How many laws of motion are given by father of law and motion? ",
        options: [" 4 "," 3 "," 2 "," 5 "],
        answer: 1,
      },
      {
        q: " A silicon controlled rectifier is turned on in the event that the anode current is more noteworthy than ",
        options: [" Cathode current "," Anode current "," Neutral current"," Electric Current "],
        answer: 0,
      },
      {
        q: " On the off chance that the amount of two numbers is considered as 'x' and their product is considered as 'y', then, at that point, what will be the amount of their reciprocals? ",
        options: [" xy/x "," x/y "," y/x "," xy/y "],
        answer: 1,
      },
      {
        q: " Extremely durable hardness of H2O might be taken out by the addition of ",
        options: [" Calcium carbonate "," Sodium Nitrate "," Potassium Nitrate"," sodium carbonate "],
        answer: 3,
      },
      {
        q: " If beryllium is the second lightest metal, then what is lighter that beryllium. ",
        options: [" Lithium "," Boron "," Sodium "," Gallium "],
        answer: 0,
      },
      {
        q: " Ribosomes are small organelles found in cells that read the genetic code from the _______ and responsible for protein synthesis. ",
        options: [" RNA "," DNA "," mRNA "," None of the above "],
        answer: 1,
      },
      {
        q: " If speed of light traveling through a vacuum is exactly 299,792,458 meters per second then what happens when it travels from vacuum to water ",
        options: [" Decreases "," Increases "," Equalls "," Disappears "],
        answer: 0,
      },
      {
        q: " A person sitting in a moving car suddenly moves forward when the car stops at a time due to ",
        options: [" Force "," Pressure "," Acceleration "," Inertia "],
        answer: 3,
      },
      {
        q: " Which orbitals are responsible for the variable valency of transition elements? ",
        options: [" Partially filled d-orbitals "," Fully filled d-orbitals "," Partially filled f-orbitals "," Fully filled f-orbitals "],
        answer: 0,
      },
      {
        q: " The response of a plant to heat is called? ",
        options: [" Geotropism "," Thermotropism "," Phototropism "," Thigmotropism "],
        answer: 1,
      },
      {
        q: " If study of fruits is called Pomology then Botany is the study of ",
        options: [" Flowers "," Roses "," Animal life "," Plant life "],
        answer: 3,
      },
      {
        q: " If metals react with oxygen they are known as metal oxides then what metal forms when it reacts with water along with metal hydraoxide ",
        options: [" Hydrogen "," Nitrogen "," Lithium "," Calcium "],
        answer: 0,
      },
      {
        q: " Name the gas that is evolved when metals react with water that causes calcium and magnesium float over water even they are heavier than water ",
        options: [" Nitrogen ", " Hydrogen "," Oxygen "," Neon "],
        answer: 1,
      },
      {
        q: " Carbon in the form of non-metal can conduct electricity what is it ",
        options: [" All of the below "," Fullerence "," Diamond "," Graphite "],
        answer: 3,
      },
      {
        q: " Name the sub-component of metal which is stronger than metal and have more resistance to corrosion ",
        options: [" Alloys "," Ferrous "," Non Ferrous "," None of the above "],
        answer: 0,
      },
      {
        q: " Radius of an atom is known as atomic size and it decreases on moving from left to right in a period due to ",
        options: [" Nuclear charge increases "," Nuclear charge decreases "," Nuclear charge remains same "," None of the above "],
        answer: 0,
      },
      {
        q: " The vertical columns of modern periodic table is known as groups, so how many vertical columns are present in the periodic table ",
        options: [" 18 groups "," 20 groups "," 8 groups "," 10 groups "],
        answer: 0,
      },
      {
        q: " Horizontal rows in the mendeleev’s periodic table is known as periods and vertical columns are known as  ",
        options: [" Periods "," Groups "," None "],
        answer: 1,
      },
      {
        q: " Ability of the eye lens to adjust its focal length according to distance is known as ",
        options: [" Power of accommodation "," Power of crystalline "," power of Relaxation "," Power of focal length "],
        answer: 0,
      },
      {
        q: " A person in a colourful city is unable to distinguish between the different colours. Name the defect that he is suffering with ",
        options: [" Colour Blindness ", " Hypermetropia "," Short sightedness "," None "],
        answer: 0,
      },
      {
        q: " The lens that is used to correct the short sightedness and has an ability to diverge incoming rays is known as ",
        options: [" Convex lens "," Bi-convex lens "," Concave lens "," Bi-concave lens "],
        answer: 2,
      },
      {
        q: " Long sightedness is known as hypermetropia by using which lens it can be corrected ",
        options: [" Concave lens "," Convex Lens "," Bi-concave lens "," Bi-convex lens "],
        answer: 1,
      },
      {
        q: " Dispersion of white light through a glass prism gives seven constituent colours what are they known as ",
        options: [" VIBGYOR "," VIBGROY "," VIBGYRR "," None of the above "],
        answer: 0,
      },
      {
        q: " A light consisting of single colour is known as monochromatic light if it has more than two colours then it is known as  ",
        options: [" Polychromatic light "," di-chromatic light "," chromatic light "," None of the above "],
        answer: 0,
      },
      {
        q: " Compounds having same molecular formula but different structural formula are known as isomers,then this phenomenon is known as ",
        options: [" Polymorpism "," Isomerism "," Monomorphism "," Oligomorphism "],
        answer: 1,
      },
      {
        q: " Existence of an element in two or more forms which have different physical properties but similar chemical properties is known as ",
        options: [" Allotropy "," Isotropes "," Both "," None of the above "],
        answer: 0,
      },
      {
        q: " How can carbon attain noble gas configuration ",
        options: [" gain 4 electrons "," loss 4 electrons "," share 4 electrons "," All of the above "],
        answer: 3,
      },
      {
        q: " Electrons contributed by the atoms for mutual sharing in order to acquire the ",
        options: [" Stable electron configuration "," stable noble gas configuration "," unstable electron configuration "," All the above "],
        answer: 1,
      },
      {
        q: " Is any alkene or alkyne is possible with single carbon atom ",
        options: [" Yes "," No "],
        answer: 1,
      },
      {
        q: " A reaction in which a CH4 (substance) burns in the presence of O2 (air) is known as ",
        options: [" Combusition reaction "," Decomposition Reaction "," Elimination Reaction "," None of the Above "],
        answer: 0,
      },
      {
        q: " In the presence of acid or base esters react to give back alcohol and carboxylic acid , This type of reaction is known as  ",
        options: [" Hydrogenation "," Saponification "," Combustion "," Crystallization "],
        answer: 1,
      },
      {
        q: " Flow of electric charge is known as electric current and it is carried by moving __________ through a conductor. ",
        options: [" Neutrons "," Protons "," Electrons "," None of the above "],
        answer: 2,
      },
      {
        q: " Which law states the potential difference between two points is directly proportional to the electric current at a constant temperature ",
        options: [" Ohm's law "," coulomb's law "," Boyle's law "," Lenz's law "],
        answer: 0,
      },
      {
        q: " The property of conductor which withstands the flow of electric charge through it. Name the property and it is denoted by ",
        options: [" Resistance (Q) "," Resistance (R) "," Conductance (C) "," None of the above "],
        answer: 0,
      },
      {
        q: " A free suspended magnet always points towards which direction ",
        options: [" East and west "," North and South "," southeast and northwest "," Northeast and southwest "],
        answer: 1,
      },
      {
        q: " On which the direction of magnetic field through a current carrying conductor depends ",
        options: [" Direction of magnetic field "," Direction of flow of electric current "," Direction of Force "," None of the above "],
        answer: 1,
      },
      {
        q: " A set which does not contain any element is known as void set, what’s the other name for the set and how it is represented ",
        options: [" Null set ({}) "," Finite set ({}) "," Infinite set ({1,2,...}) "," Finite set ({1,2}) "],
        answer: 0,
      },
      {
        q: " If there presents two set namely X and Y, all the elements of set Y are present in X ,then Y is known as ",
        options: [" Super set of X "," Subset of X "," Subset of Y "," Super set of Y "],
        answer: 1,
      },
      {
        q: " Equations involving the functions like sin, cos, tan, cosec, … of unknown angles are said to be ",
        options: [" Trigonometric Equations ", " Linear Equations "," Binomial equations "," Polynomial Equations "],
        answer: 0,
      },
      {
        q: " Name the technique that is used to prove a variety of mathematical statements which are formulated in terms of n, where n is a positive integer ",
        options: [" Mathematical Induction "," Binomial Theorem "," Proof by contradiction "," None of the above "],
        answer: 0,
      },
      {
        q: " √-2, √-5, ... (Square root of a negative number) These type of numbers are known as ",
        options: [" Real numbers "," Negative numbers "," Imaginary Numbers "," None of the above "],
        answer: 2,
      },
      {
        q: " Name the expression consisting of two terms, connected by + or – sign ",
        options: [" Binomial Expression "," Linear Expression "," Quadratic Expression "," Polynomial Expression "],
        answer: 0,
      },
      {
        q: " If the product of two lines scope is equal to -1, then the two lines are said to be ",
        options: [" Linear "," Parallel "," Perpendicular "," Adjacent "],
        answer: 2,
      },
      {
        q: " If slopes of two lines are equal then the lines are said to be ",
        options: [" Perpendicular "," Equal "," Adjacent "," Parallel "],
        answer: 3,
      },
      {
        q: " What makes an obtuse angle with a positive x-axis when measured in the anti-clockwise direction ",
        options: [" Line with a negative slope ", " Line with a Positive slope "," Both "," None "],
        answer: 0,
      },
      {
        q: " If the three dimensional space is given, How many octants can be divided by the coordinate plane ",
        options: [" 6 octants "," 4 octants "," 1 octant "," 8 octants "],
        answer: 3,
      },
      {
        q: " Identify the relation between mean, median and mode ",
        options: [" Mode = 2 Median – 3 Mean "," Mode = 3 Median – 2 Mean "," Mode = 3 Median + 3 Mean "," None of the above "],
        answer: 1,
      },
      {
        q: " If the standard deviation of the data is 11 then what is the variance of the data ",
        options: [" 121 "," 120 "," 22 "," 11 "],
        answer: 0,
      },
      {
        q: " Sum of Observation / Number of Observations is equal to  ",
        options: [" Mode "," Median "," Mean "," None of the above "],
        answer: 2,
      },
      {
        q: " When coin is tossed 5 times what is its sample space ",
        options: [" 30 "," 32 "," 25 "," 10 "],
        answer: 1,
      },
      {
        q: " Can mutually exclusive events occur simultaneously? ",
        options: [" Yes ", " No "],
        answer: 1,
      },
      {
        q: " If the function is both one-one and onto, then the function f:X to Y is known as ",
        options: [" Conjective Function "," Bijective Function "," Trignometric Function "," Logarithemic Function "],
        answer: 1,
      },
      {
        q: " The matrix has m rows and n columns, then the order of the matrix is said to be_________ and how many elements it contains ",
        options: [" Order =  m × n , mn elements ", " Order =  m + n , mn elements "," Order =  m × n , m+n elements "," None of the above "],
        answer: 0,
      },
      {
        q: " A matrix whose diagonal elements are same and remaining elements are zeroes is known as ",
        options: [" Vector Matrix "," Diagonal Matrix "," Scalar Matrix "," Null Matrix "],
        answer: 2,
      },
      {
        q: " Given a square matrix A, if |A| = 0 (determinant of A = 0 ) , then it is said to be ",
        options: [" Null matrix ", " Diagonal Matrix "," Unit Matrix "," Singular Matrix "],
        answer: 3,
      },
      {
        q: " Which quantities have magnitude as well as direction ",
        options: [" Scalar Quantities ", " Vector Quantities "," Null quantities "," None of the above "],
        answer: 1,
      },
      {
        q: " Scalar quantities have ",
        options: [" Direction and Magnitude ", " Only magnitude "," Only Direction "," None of the above "],
        answer: 1,
      },
      {
        q: " Vectors having the same initial points are said to be  ",
        options: [" Colinear Vectors "," Parallel Vectors "," Null Vectors "," Coinitial Vectors "],
        answer: 3,
      },
      {
        q: " What is the dielectric constant of the metal? ",
        options: [" Zero "," Finite to some value "," Infinite "," Cannot be defined "],
        answer: 2,
      },
      {
        q: " The dielectric constant of metal is infinite, because of the net electric field inside the metal is ",
        options: [" Infinite "," Finite "," zero "," cannot be defined "],
        answer: 2,
      },
      {
        q: " Identify the property that can differentiate two kinds of charges ",
        options: [" Polarity of charge "," Conservation of charge "," Quantization of charge "," Additivity of charge "],
        answer: 0,
      },
      {
        q: " Electric field gives the information on direction, nature of charge and ______ ",
        options: [" Field Strength "," Polarity of charge "," Magnetic Strength "," Magnitude "],
        answer: 0,
      },
      {
        q: " Name the process in which a region is made free from any electric field is ",
        options: [" Electrostatic platting "," Electrostatic Shielding "," Electrostatic Potential "," None of the above "],
        answer: 1,
      },
      {
        q: " Work done / charge is equal to ",
        options: [" Capacity "," Resistance "," Electrostatic Potential "," Electrostatic shielding "],
        answer: 2,
      },
      {
        q: " What happens to the capacity of parallel plate capacitor when area of the plate is increased? ",
        options: ["   Remains Equal "," Increases "," Decreases "," Becomes zero "],
        answer: 1,
      },
      {
        q: " A resistance that does not obey the ohm’s law is known as ",
        options: [" Ohmic Resistance "," Resistance "," Non-Ohmic Resistance "," None of the above "],
        answer: 2,
      },
      {
        q: " Resistivity of certain metals drops to zero when cooled below certain temperature what is this known as ",
        options: [" Conductivity "," superconductivity "," Superinsulation "," Insulation "],
        answer: 1,
      },
      {
        q: " Tesla is a S.I unit of ",
        options: [" Force "," Magnetic Field "," Electric charge "," Magnetic charge "],
        answer: 1,
      },
      {
        q: " Name the device that is used to accelerate positively charged particles ",
        options: [" Synchrotron "," Cyclotron "," Betatron "," None of the above "],
        answer: 1,
      },
      {
        q: " Displacement current is introduced by ",
        options: [" Maxwell "," Michael Faraday "," Alessandro Volta "," Andre-Marie Ampere "],
        answer: 0,
      },
      {
        q: " Identify the man-made magnets from the following ",
        options: [" Bar Magnet "," Neodmium Magnets "," Lodestone "," Horse shoe Magnet "],
        answer: 3,
      },
      {
        q: " Ferromagnetic substances can only be attracted using ",
        options: [" Temporary Magnet "," Permanent Magnet "," Electromagnets "," Neodymium Magnets "],
        answer: 1,
      },
      {
        q: " In Fleming’s Right Hand Rule what does the forefinger points ",
        options: [" Direction of Magnetic Field "," Direction of Magnetic Force "," Direction of Induced current "," Direction of field strength "],
        answer: 0,
        img: '../Images/rule.jpg'
      },
      {
        q: " What does the thumb finger points in the Flemings right hand rule ",
        options: [" Direction of Magnetic Field "," Direction of Magnetic Force "," Direction of Induced current "," Direction of field strength "],
        answer: 1,
        img: '../Images/rule.jpg'
      },
      {
        q: " Which finger points the direction of induced current, according to Flemings right hand rule ",
        options: [" Fore finger "," Middle finger "," Thumb finger "," None of the above "],
        answer: 1,
        img: '../Images/rule.jpg'
      },
      {
        q: " What is the principle followed in the construction of the generator ",
        options: [" Principle of electromagnetism "," Electromagnetic conduction "," Electromagnetic Induction "," Electromagnetic wave theory "],
        answer: 2,
      },
      {
        q: " Flemings left hand rule is used to Identify the ",
        options: [" Direction of the current induced in a wire "," Direction of the Electric charge induced in a wire "," Direction of the force "," Direction of magnetic field "],
        answer: 0,
        img: '../Images/rule1.jpg'
      },
      {
        q: " When two light sources are emitting light of same wavelength and constant phase difference, then the light sources are said to be ",
        options: [" Induced "," Parallel "," Coherent "," Inverted "],
        answer: 2,
        img: '../Images/light.png'
      },
      {
        q: " Does intensity is conserved when light waves interface? ",
        options: [" Yes "," No "],
        answer: 1,
      },
      {
        q: " Device that converts light energy into electricity ",
        options: [" Photoelectric cell "," Galvanic cell "," Electrochemical cell "," Voltaic cell "],
        answer: 0,
      },
      {
        q: " Which effect is based on the law of conservation of energy ",
        options: [" Abscopal Effect "," Doppler Effect "," Compton Effect "," Photoelectric Effect "],
        answer: 3,
      },
      {
        q: " One quantum of light radiation is known as ",
        options: [" Quanta "," Meta "," Bit "," Qubit "],
        answer: 0,
      },
      {
        q: " The existence of the nucleus was proved using which experiment ",
        options: [" Rutherford’s alpha particle experiment "," Cavendish's torsion-bar experiment "," Gregor Mendel Cultivates Genetics "," Robert Millikan Gets a Charge "],
        answer: 0,
      },
      {
        q: " If tan A = 1/3 and tan B = 2/4, then the value of tan(A+B) is derived using which formula ",
        options: [" tan(A + B) = tan A /(1 – tan A tan B) "," tan(A + B) = (tan A + tan B)/(1 – tan B) "," tan(A + B) = (tan A - tan B)/(1 + tan A tan B) "," tan(A + B) = (tan A + tan B)/(1 – tan A tan B) "],
        answer: 3,
      },
      {
        q: " Identify the series of lines in the electromagnetic spectrum that lies in the visible region ",
        options: [" Lyman series "," Balmer series "," Paschen Series "," Pfund series "],
        answer: 1,
        img: '../Images/spectrum.jpg'
      },
      {
        q: " Identify the hydrogen spectrum that get dark lines on the bright background ",
        options: [" Electromagnetic Spectrum "," Visible spectrum "," Absorption spectrum "," None of the above "],
        answer: 2,
      },
      {
        q: " In which reactions there occur only conservation of momentum ",
        options: [" Chemical reactions "," Nuclear reactions "," Redox reaction "," Endothermic reaction "],
        answer: 1,
        img: '../Images/reaction.jpg'
      },
      {
        q: " Which law describes which chemical element and isotope is created during the particular type of radioactive decay ",
        options: [" Radioactive displacement law "," Wien's displacement Law "," Rayleigh jeans law "," Fajans Displacement law "],
        answer: 0,
      },
      {
        q: " Name the semiconductor that is electrically neutral  ",
        options: [" Extrisic semiconductor "," Intrinsic semiconductor "," N-type semiconductor "," P-type semiconductor "],
        answer: 3,
      },
      {
        q: " Which device converts an electrical signal to a sound signal ",
        options: [" Transducer "," Actuators "," Sensors "," None of the above "],
        answer: 0,
      },
      {
        q: " Is microphone being a transducer? ",
        options: [" Yes "," No "],
        answer: 1,
        img: '../Images/micro.jpg'
      },
      {
        q: " Device that converts electrical signals into sound signals ",
        options: [" Microphone "," Dynamo "," Loudspeakers "," All of the above "],
        answer: 2,
      },
      {
        q: " Carbon mixes with nitrogen and oxygen to make ",
        options: [" Biogas "," Producer gas "," Gobar gas "," Wood gas "],
        answer: 1,
      },
      {
        q: " Elements that belongs to d-block are also known as ",
        options: [" Alkali metals "," Actinides "," Lanthanides "," Transtion Elements "],
        answer: 3,
      },
      {
        q: " Elements lying between group 2 and 13 are ",
        options: [" F-block elements "," D-block elements "," P-block elements "," S-block elements "],
        answer: 1,
      },
      {
        q: " Which block of elements are also known as inner-transition elements ",
        options: [" F-block elements "," D-block elements "," P-block elements "," S-block elements "],
        answer: 0,
      },
      {
        q: " Elements beyond uranium are ",
        options: [" Man-made elements "," Natural elements "," Both a and b "," None of the above "],
        answer: 0,
      },
      {
        q: " The compounds that are having the same molecular formula but differ in their structural arrangements are ",
        options: [" Isotopes "," Isomers "," Polymers "," None of the above "],
        answer: 1,
      },
      {
        q: " Halo-alkanes are classified as fluoro, chloro, bromo or iodo compounds according to the type of ",
        options: [" Chlorides present "," Oxygen present "," Nitrogen present "," Halogen present "],
        answer: 3,
      },
      {
        q: " Name the massive molecules that are made up of a large number of simple units ",
        options: [" Isomers "," Isotopes "," Polymers "," None of the above "],
        answer: 2,
      },
      {
        q: " Polymers derived from the plants and animals are known as ",
        options: [" Thermoplastic Polymers "," Synthetic Polymers "," Natural Polymers "," Semi-synthetic polymers "],
        answer: 2,
      },
      {
        q: " What can make an amine from amino acid ",
        options: [" Elimination of a molecule of carbon dioxide "," Elimination of a molecule of Hydrogen atom "," Both a and b "," None of the above "],
        answer: 0,
      },
      {
        q: " Cardinality of the empty set is ",
        options: [" One "," Zero "," Infinite "," Finite "],
        answer: 1,
      },
      {
        q: " Number of elements present in the power set P(A) of the set A = {1,2,3,4,5}. ",
        options: [" 30 "," 22 "," 20 "," 32 "],
        answer: 3,
      },
      {
        q: " The two sets are said to be equal if they have ",
        options: [" same Elements "," same number of elements "," Different number of elements "," All of the above "],
        answer: 1,
      },
      {
        q: " If cos(30) is √3/2, then what is the value of sin(60) ",
        options: [" √3/2 "," 1/2 "," 0 "," Not defined "],
        answer: 0,
      },
      {
        q: " What is the value of tan(90) ",
        options: [" 0 "," 1/2 "," Not defined "," √3/2 "],
        answer: 2,
      },
      {
        q: " Identify the formula for finding the sum infinite geometric series ",
        options: [" S = ar/(1-r) "," S = a/(1-r) "," S = a/r "," S = a/(1+r) "],
        answer: 1,
      },
      {
        q: " Sn = n/2[2a + (n-1)d] is the formula for the sum of ",
        options: [" first n terms of an arithmetic sequence "," first n terms of an geometic sequence "," first 10 terms of an arithmetic sequence "," None of the above "],
        answer: 0,
      },
      {
        q: " Value of sin (π/3) is ",
        options: [" 1/2 "," 0 "," √3/2 "," 1 "],
        answer: 2,
      },
      {
        q: " What is the value of 5! ",
        options: [" 100 "," 25 "," 120 "," 50 "],
        answer: 2,
      },
      {
        q: " Value of tan (45) is ",
        options: [" 0 "," Not defined "," 1/2 "," 1 "],
        answer: 3,
      },
      {
        q: " Name the law that states that energy cannot be created or destroyed, only transferred from one form to another ",
        options: [" Coulomb's law "," Law of conservation of energy "," First law of thermodynamics "," Boyle's law "],
        answer: 1,
      },
      {
        q: " As speed is the rate at which an object covers the distance, then what’s meant by Velocity ",
        options: [" Speed in specific direction "," Object moving in the straight line "," Object moves relative to the reference frame "," None of the above "],
        answer: 0,
      },
      {
        q: " We know that mass is the amount of matter in the object and acceleration is the rate of change of velocity of object, then mass x acceleration equals to ",
        options: [" Speed "," Force "," Energy "," Density "],
        answer: 1,
      },
      {
        q: " Mass x gravity x height is equal to ",
        options: [" Gravitational Energy "," Potential Energy "," Kinetic Energy "," Chemical Energy "],
        answer: 1,
      },
      {
        q: " Which of the following correctly defines the density? ",
        options: [" Amount of mass per unit volume "," amount of mass per unit time "," amount of workdone per unit time "," None of the above "],
        answer: 0,
      },
      {
        q: " Formula for calculating the distance travelled by an object with constant velocity is ",
        options: [" Velocity + time "," Velocity x time "," Velocity / time "," speed / time "],
        answer: 1,
      },
      {
        q: " What is the full form of EPROM? ",
        options: [" Electrically Programmable Read-Only Memory "," Electrically Printable Read-Only Memory "," Erasable Programmable Read-Only Memory "," None of the above "],
        answer: 2,
      },
      {
        q: " Is Byte a smallest unit in a digital system ",
        options: [" Yes "," No "],
        answer: 1,
      },
      {
        q: " Which is the permanent memory of computer system ",
        options: [" ROM "," RAM "," Register "," CMOS "],
        answer: 0,
      },
      {
        q: " RAM stands for ",
        options: [" Read available Memory "," Read access Memory "," Random accurate Memory "," Random access Memory "],
        answer: 3,
      },
      {
        q: " A statements that are executed repeatedly until a certain condition is met is known as ",
        options: [" Expression Statements "," Looping statements "," Compound Statements "," Selection Statements "],
        answer: 1,
      },
      {
        q: " There are two types of loops in computer language what are they ",
        options: [" while and or "," or and for "," For and While "," for and which "],
        answer: 2,
      },
      {
        q: " What is meant by DBMS? ",
        options: [" Database management system "," Database memory system "," Data management system "," Data memory syatem "],
        answer: 0,
      },
      {
        q: " In DBMS what is known as a unique identifier? ",
        options: [" Foreign Key "," Primary Key "," Candidate key "," Super key "],
        answer: 1,
      },
      {
        q: " Why is foreign key used in the DBMS? ",
        options: [" refers the primary key of other table "," refers the primary key of same table "," refers the foreign key of other table "," refers the other table "],
        answer: 0,
      },
      {
        q: " What is the special method that is used to initialize the objects? ",
        options: [" Destructor "," Constructor "," Hash code "," None of the above "],
        answer: 1,
      },
      {
        q: " Which translates the entire source code to the machine code before execution? ",
        options: [" Compiler "," Interpretor "," Decompiler "," All the above "],
        answer: 0,
      },
      {
        q: " What does interpreter do with the source code? ",
        options: [" Translate source code to machine code at once "," Translate source code to machine code line by line "," Translate machine code to source code line by line "," Translate machine code to source code at once "],
        answer: 1,
      },
      {
        q: " The data structure in which each element contains a link or a reference to the next element is known as ",
        options: [" List "," Linked List "," String "," Queue "],
        answer: 1,
      },
      {
        q: " A function that calls itself to solve the problem is known as ",
        options: [" Recursion "," Factorial "," Fibonacci "," Summations "],
        answer: 0,
      },
      {
        q: " Which data structure that uses last-in-first-out method ",
        options: [" Queue "," List "," Stack "," String "],
        answer: 2,
      },
      {
        q: " Which method does the queue data structure uses ",
        options: [" Last-in-last-out "," First-in-first-out "," Last-in-first-out "," First-in-last-out "],
        answer: 1,
        img: '../Images/queue.png'
      },
      {
        q: " Which generation computers uses vacuum tubes ",
        options: [" Second Generation "," Third Generation "," First Generation "," Fourth Generation "],
        answer: 2,
        img: '../Images/firstgen.jpg'
      },
      {
        q: " Which generation computers has started to use integrated circuits ",
        options: [" Second Generation "," Third Generation "," First Generation "," Fourth Generation "],
        answer: 1,
        img: '../Images/thirdgen.jpg'
      },
      {
        q: " One byte consists of how many bits? ",
        options: [" 16 bits "," 8 bits "," 12 bits "," 2 bits "],
        answer: 1,
      },
      {
        q: " Which algorithm uses divide and conquer method ",
        options: [" Binary Search "," Linear search "," Meta Binary search "," One-sided binary search "],
        answer: 0,
      },
      {
        q: " ASCII Value of NAL is ",
        options: [" 220 "," 219 "," 209 "," 200 "],
        answer: 1,
      },
      {
        q: " Is Time () a maths function ",
        options: [" Yes "," No "],
        answer: 1,
      },
];