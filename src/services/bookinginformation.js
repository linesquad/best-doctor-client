import supabase from "./supabase";


export const getPatients = async () => {
  const { data, error } = await supabase.from("booking").select("*");
  if (error) throw new Error(error.message);
  return data
};

export const getPatientsByDate = async (formatedDate) => {
  const { data, error } = await supabase.from("booking").select("*").eq("date", formatedDate);
  if (error) throw new Error(error.message);
  return data
};

export const addPatient = async (patient) => {
  const { data, error } = await supabase.from("booking").insert([patient]);
  if (error) throw new Error(error.message);
  return { data, error };
};
