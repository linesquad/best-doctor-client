import supabase from "./supabase";

export const getServices = async () => {
  let { data: services, error } = await supabase.from("services").select("*");
  return { services, error };
};
export const getServicesById = async (id) => {
  let { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();
  console.log(data);
  return { service: data, error };
};
