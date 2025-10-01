/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within
//  the sanctuary. This function should accept an arbitrary number of animal names.

function printAnimalSightings(...animals){
	console.log("Animal Sightings in the Sanctuary:");
	for (const animal of animals){
		console.log('-${animal}');
	}
}

/* Task 2: Merge Habitat Areas */

const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const protectedAreas = [...forestHabitats, ...savannahHabitats];

// TODO: You are given two arrays of habitat names. Use the spread operator to combine them
//  into a comprehensive list of protected areas within the sanctuary.

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
const updatedRhinoStatus = {
	...rhinoStatus, 
	population: 600,
	status: "Vulnerable",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread
//  operator to update this status with new information, such as an increase in population or a change in habitat.

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
const copiedLionProfile = (...lionProfile) =>
copiedLionProfile.genetics = {
	bloodType: "A+",
	geneMarkers: ["Marker1", "Marker2"]
};
copiedLionProfile.genetics.bloodType = "B-";
copiedLionProfile.genetics. geneMarkers.push("Marker3");

// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information
//  using the `genetics` property to this copy. Observe and explain how changes to nested properties
//  affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * 
 * adding the gnetics property does not affect lionProfile as it is a new prpeertry added to the shallow
 * copy that is modifying the nested properties within the object of copiedLionsProfile under genetics
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
const copiedEcosysytemHealth = {...ecosystemHealth};
copiedEcosysytemHealth.foodSupply.herbivores = "scarce";
console.log("Original ecosystemHealth:", ecosystemHealth);
console.log("Copied ecosytemHealth;", copiedEcosysytemHealth);

// TODO: You are given an objet with a nested structure detailing the ecosystem's health,
//  including water quality and food supply. Perform a shallow copy and modify a nested property.
//  Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * when performing a shallow copy on a nested objects, they aren't duplicated, rather both the original
 * and the copy refrenece the same nested object so modifying any property within (foodSupply) inside
 * (copiedEcosysytemHealth) will also affect the same (foodSupply) object inside (ecosystemHealth)
 * also affect
 */
