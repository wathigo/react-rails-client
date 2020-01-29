const getCategories = () => {
  console.log('Invoked!')
  fetch(`https://nameless-oasis-30857.herokuapp.com/categories`)
  .then((response) => response.json())
  .then((data) => {
        console.log(data)
        return data
       })
}
const allProperties = () => {
  fetch(`https://nameless-oasis-30857.herokuapp.com/categories`)
  .then((response) => response.json())
  .then((data) => {
        console.log(data)
       })
  .catch((err) => console.log(err));
};

export default getCategories;
