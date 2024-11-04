const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }

function getPersonInfo({ firstName, lastName, age, country, job, skills}) {
    let sentence = `${firstName} ${lastName} lives in ${country}. He is ${age}, He is an ${job}, He teaches ${skills.join(', ')}`
    console.log(sentence)
}
// getPersonInfo(person)

const newUser = { ...person, firstName: "Simen", lastName: "Jonsen" }
console.log(newUser)