import supabase from "./supabase";

export const addPatient = async (patient) => {
  const { data, error } = await supabase.from("booking").insert([patient]);
  if (error) throw new Error(error.message);
  return { data, error };
};
