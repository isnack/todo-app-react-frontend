import axios from "axios";
const URL = "https://isntodoappbackend.herokuapp.com/api/todos";

export const AddTodo = description => {
  return axios.post(URL, { description });
};

export const RemoveTodo = idTodo => {
  return axios.delete(`${URL}/${idTodo}`);
};

export const MarkAsDoneTodo = todo => {
  return axios.put(`${URL}/${todo._id}`, { ...todo, done: true });
};

export const MarkAsPendingTodo = todo => {
  return axios.put(`${URL}/${todo._id}`, { ...todo, done: false });
};

export const ListTodos = (description = "") => {
  const search = searchDescription(description);
  return axios.get(`${URL}?sort=-createdAt${search}`);
};

export const searchDescription = description => {
  return description ? `&description__regex=/${description}/` : "";
};
