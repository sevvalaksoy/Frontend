import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

//TO GET ALL PROJECTS
const getProjects = () => {
  return axios.get("https://66939610c6be000fa07c73fb.mockapi.io/api/f/projects");
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
};

// TO GET A SPECIFIC PROJECT
const getProject = async (user) => {
  let data;
  await axios
    .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/${user}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const useProject = (user) => {
  return useQuery({
    queryKey: ['contacts', user],
    queryFn: () => getProject(user),
  });
};

// TO DELETE A USER
const deleteUser = (user) => {
  return axios.delete(
    `https://65b36193770d43aba479a2f2.mockapi.io/users/${user}`
  );
};

export const deleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};

// TO ADD A NEW USER
const addUser = (user) => {
  return axios.post('https://65b36193770d43aba479a2f2.mockapi.io/users', user);
};

export const addContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};
