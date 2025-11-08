import axios from "axios";

//const basePath = "http://localhost:3001/persons";

//const basePath = "https://example-submission.onrender.com/api/persons";
const url = import.meta.env.VITE_BACK_URL ?? "";

console.log("process.env.BACK_URL", url, url + "/api/persons");

const basePath = url + "/api/persons";

const getAll = () =>
  axios.get(basePath).then((response) => {
    console.log("data", response.data);
    return response.data;
  });

const addPerson = (person: any) =>
  axios.post(basePath, person).then((response) => response.data);

const deletePerson = (personId: any) => axios.delete(`${basePath}/${personId}`);

const changePerson = (person: any, personId: any) =>
  axios
    .put(`${basePath}/${personId}`, person)
    .then((response) => response.data);

export default {
  getAll,
  addPerson,
  deletePerson,
  changePerson,
};
