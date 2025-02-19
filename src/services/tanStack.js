import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

//TO GET ALL PROJECTS
const getProjects = (id) => {
  return axios.get(`https://669631420312447373c177f2.mockapi.io/api/p/${id}`);
};

export const useProjects = (id) => {
  return useQuery({
    queryKey: ['datas', id],
    queryFn: () => getProjects(id),
    staleTime: 5000,
  });
};

// TO ADD A NEW USER
const addUser = (proje) => {
  return axios.post("https://66942c42c6be000fa07e4e77.mockapi.io/f2/contact", proje);
};

export const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] });
    },
  });
};






// TO GET A SPECIFIC PROJECT
const getProject = async (id) => {
  let data;
  await axios
    .get(`https://66939610c6be000fa07c73fb.mockapi.io/api/f/projects${id}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const useProject = (id) => {
  return useQuery({
    queryKey: ['projects', id],
    queryFn: () => getProject(id),
  });
};

// TO DELETE A PROJECT
const deleteProject = (id) => {
  return axios.delete(
    `https://66939610c6be000fa07c73fb.mockapi.io/api/f/projects${id}`
  );
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};
