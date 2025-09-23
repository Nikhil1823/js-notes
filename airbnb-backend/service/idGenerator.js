const idGenerator = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};
//this will generate an id each tine we call this function
module.exports = { idGenerator };
